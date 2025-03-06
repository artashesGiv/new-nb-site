<template>
  <div class="mx-auto max-w-lg p-6">
    <form-generator
      :schema="customValidationSchema"
      @submit="formData = $event"
    />
  </div>
</template>

<script setup lang="ts">
import type { JSONSchema } from '~/types/jsonschema.js'

const formData = ref(null)
const customValidationSchema: JSONSchema = {
  title: 'Авторизация',
  description: 'Форма с кастомной валидацией',
  type: 'object',
  properties: {
    age: {
      type: 'number',
      label: 'Возраст',
      description: 'Введите ваш возраст',
      placeholder: 'Введите возраст',
      minLength: 1,
      customValidation: value => value >= 18, // ✅ Проверка, что возраст >= 18
      customValidationMessage: 'Вам должно быть 18 лет или больше',
    },
    password: {
      type: 'text',
      label: 'Пароль',
      description: 'Введите ваш пароль',
      placeholder: 'Введите пароль',
      minLength: 6,
    },
    confirmPassword: {
      type: 'text',
      label: 'Подтверждение пароля',
      description: 'Повторите пароль',
      placeholder: 'Повторите пароль',
      validation: {
        dependsOn: 'password',
        ruleType: 'equals',
        message: 'Пароли не совпадают',
      },
    },
    email: {
      type: 'text',
      format: 'email',
      label: 'Email',
      description: 'Введите email',
      placeholder: 'Введите email',
      customValidation: value => value.endsWith('@gmail.com'), // ✅ Разрешены только Gmail
      customValidationMessage: 'Разрешены только адреса @gmail.com',
    },
    name: {
      type: 'text',
      label: 'Имя',
      description: 'Введите ваше имя',
      placeholder: 'Введите имя',
      customValidation: value => value.length >= 3, // ✅ Имя должно быть длиннее 3 символов
      customValidationMessage: 'Имя должно быть длиннее 3 символов',
    },
    subscribe: { type: 'checkbox', label: 'Подписаться на новости' },
    gender: { type: 'radio', label: 'Пол', options: ['Мужской', 'Женский'] },
    country: {
      type: 'select',
      label: 'Страна',
      options: ['Россия', 'США', 'Германия', 'Франция'],
    },
  },
  required: [
    'age',
    'password',
    'confirmPassword',
    'email',
    'subscribe',
    'country',
    'gender',
  ],
}
</script>
