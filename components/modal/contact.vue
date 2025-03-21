<template>
  <div class="flex flex-col gap-[24px] p-[24px] h-screen w-screen xl:gap-[48px] xl:max-w-[1000px] xl:w-auto xl:max-h-[750px] xl:h-auto">
    <div>
      <img class="absolute top-0 right-0" src="/images/modals/modal-decoration.png" alt="decor" />
      <h2 class="my-text-xl">
        Оставьте заявку
      </h2>
      <span class="my-text-m">Наши специалисты свяжутся с вами для консультации</span>
    </div>
    <Form class="flex flex-col gap-[48px] grow-1" @submit="onSubmit">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-[22px] xl:gap-[32px]">
        <div
          v-for="key in Object.keys(veeFields)"
          :key="key"
          :class="key === 'message' ? 'md:col-span-2' : ''"
          class="w-full"
        >
          <div
            class="relative py-[5px] px-[16px] md:p-[20px] border border-main-gray rounded-[16px] h-[48px] md:h-[80px] focus-within:border-main-orange"
            :class="errors[key]?.length ? 'border-red-500' : ''"
          >
            <input
              v-model="veeFields[key].field"
              :name="key"
              v-bind="veeFields[key].fieldAttrs"
              :placeholder="fields[key]"
              class="w-full h-full focus:outline-none"
            />
          </div>
          <span v-if="errors[key]?.length" class="absolute text-red-500">
            {{ errors[key] }}
          </span>
        </div>
      </div>
      <button
        class="button-primary wx-full h-[56px] md:h-[80px]"
      >
        Отправить
      </button>
    </Form>
    <span class="text-center text-dark-gray">Нажимая «Отправить» Вы соглашаетесь на обработку <a class="underline" href="https://42.rkn.gov.ru/p32026/p32474/" target="_blank">персональных данных</a></span>
  </div>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'
import * as yup from 'yup'

const config = useRuntimeConfig()
onMounted(() => {
  initFields()
})

const schema = yup.object({
  email: yup.string().required('Обязательное поле').email('Некорректный email'),
  name: yup.string().required('Обязательное поле'),
  lastName: yup.string().required('Обязательное поле'),
  tel: yup.string().matches(/^(\+7|8)\d{10}$/, 'Введите корректный номер телефона').required('Обязательное поле'),
  message: yup.string().required('Обязательное поле'),
})

const veeFields = ref({})

const { handleSubmit, defineField, errors } = useForm({
  validationSchema: schema,
})

const fields = {
  name: 'Имя',
  lastName: 'Фамилия',
  tel: 'Телефон',
  email: 'Почта',
  message: 'Сообщение',
}

function initFields() {
  for (const key in fields) {
    const [field, fieldAttrs] = defineField(key)

    veeFields.value[key] = { field, fieldAttrs }
  }
}

const onSubmit = handleSubmit(async values => {
  console.log(values)
  try {
    const response = await fetch(`${config.public.baseUrl}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (!response.ok) {
      throw new Error('Ошибка при отправке формы')
    }

    const result = await response.json()
    console.log('Успешно отправлено:', result)
  } catch (error) {
    console.error('Ошибка:', error)
  }
})
</script>

<style scoped>

</style>
