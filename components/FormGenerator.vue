<template>
  <form @submit.prevent="onSubmit" class="space-y-3 rounded-lg border p-4">
    <h3 class="text-2xl">{{ schema.title }}</h3>
    <p class="text-gray-600">{{ schema.description }}</p>
    <div
      v-for="(config, key) in schema.properties"
      :key="key"
      class="flex flex-col"
    >
      <label v-if="config.type !== 'checkbox'" :for="key" class="font-medium">
        {{ config.label }}
      </label>

      <!-- Текстовые поля -->
      <input
        v-if="config.type === 'text' || config.type === 'number'"
        v-model="formData[key]"
        :id="key"
        :type="config.type"
        :placeholder="config.placeholder"
        class="rounded-md border p-2"
      />

      <!-- Чекбоксы -->
      <div
        v-else-if="config.type === 'checkbox'"
        class="flex items-center gap-2"
      >
        <input v-model="formData[key]" :id="key" type="checkbox" />
        <label :for="key">{{ config.label }}</label>
      </div>

      <!-- Радиокнопки -->
      <div v-else-if="config.type === 'radio'">
        <div
          v-for="option in config.options"
          :key="option"
          class="flex items-center gap-2"
        >
          <input v-model="formData[key]" type="radio" :value="option" />
          <label>{{ option }}</label>
        </div>
      </div>

      <!-- Выпадающий список (Select) -->
      <select
        v-else-if="config.type === 'select'"
        v-model="formData[key]"
        class="rounded-md border p-2"
      >
        <option v-for="option in config.options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>

      <!-- Ошибки -->
      <p v-if="errors[key]" class="text-sm text-red-500">{{ errors[key] }}</p>
      <p v-if="config.description" class="text-xs text-gray-500">
        {{ config.description }}
      </p>
    </div>

    <div class="flex gap-4">
      <button type="submit" class="rounded-md bg-blue-500 px-4 py-2 text-white">
        Отправить
      </button>
      <button
        type="button"
        @click="onReset"
        class="rounded-md bg-gray-300 px-4 py-2"
      >
        Очистить
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, defineProps, reactive, ref } from 'vue'
import * as yup from 'yup'
import type { JSONSchema } from '~/types/jsonschema'

export type DynamicFormProps = {
  schema: JSONSchema
}

type Emits = {
  (e: 'submit', formData: Record<string, any>): void
}

const props = defineProps<DynamicFormProps>()
const emit = defineEmits<Emits>()

// объект для хранения данных формы
const defaultFormData = Object.fromEntries(
  Object.entries(props.schema.properties).map(([key, config]) => [
    key,
    config.type === 'checkbox' ? false : '',
  ]),
)
const formData = reactive({ ...defaultFormData })

// схема валидации с `yup`
const validationSchema = computed(() => {
  const schema = {}

  Object.entries(props.schema.properties).forEach(([key, config]) => {
    let rule

    if (config.type === 'checkbox') {
      rule = yup.boolean()
      if (props.schema.required.includes(key)) {
        rule = rule.test(
          'is-checked',
          config.validation?.message || 'Обязательное поле',
          value => value === true,
        )
      }
    } else {
      rule = yup.string()
      if (config.type === 'number')
        rule = yup.number().typeError('Должно быть числом')
      if (config.format === 'email')
        rule = yup.string().email('Некорректный email')
      if (config.minLength)
        rule = rule.min(
          config.minLength,
          `Минимум ${config.minLength} символов`,
        )
      if (props.schema.required.includes(key))
        rule = rule.required('Обязательное поле')
    }

    // зависимая валидация
    if (config.validation?.dependsOn) {
      const { dependsOn, ruleType, message } = config.validation

      if (ruleType === 'equals') {
        rule = rule.oneOf(
          [yup.ref(dependsOn)],
          message || 'Поля должны совпадать',
        )
      }

      if (ruleType === 'notEquals') {
        rule = rule.notOneOf(
          [yup.ref(dependsOn)],
          message || 'Значения должны быть разными',
        )
      }
    }

    // кастомная валидация
    if (typeof config.customValidation === 'function') {
      rule = rule.test(
        'custom-validation',
        config.customValidationMessage || 'Ошибка валидации',
        function (value) {
          return (
            config.customValidation(value, formData) ||
            this.createError({ message: config.customValidationMessage })
          )
        },
      )
    }

    schema[key] = rule
  })

  return yup.object().shape(schema)
})

// ошибки
const errors = ref({})

// submit
const onSubmit = async () => {
  try {
    await validationSchema.value.validate(formData, { abortEarly: false })
    console.log('✅ Данные формы:', formData)
    errors.value = {}
  } catch (err) {
    // Собираем ошибки
    errors.value = err.inner.reduce((acc, e) => {
      acc[e.path] = e.message
      return acc
    }, {})
  } finally {
    emit('submit', formData)
  }
}

// очистка
const onReset = () => {
  Object.assign(formData, defaultFormData)
  errors.value = {}
  emit('submit', {})
}
</script>
