<template>
  <div id="technologies" class="relative section-container section-content">
    <h3 class="my-text-xl">
      Стек технологий
    </h3>
    <div
      v-for="(categories, idx) in technologyList"
      :key="`categories-${idx}`"
      class="flex flex-col gap-[12px] lg:gap-[24px]"
    >
      <div
        v-for="category in categories"
        :key="category.name"
        class="flex flex-col items-start gap-[12px] lg:gap-[24px] lg:flex-row"
      >
        <div class="my-text-l basis-[40px] flex-shrink-0 lg:basis-[400px]">
          {{ category.name }}
        </div>
        <div class="flex flex-wrap gap-[12px] lg:gap-[24px]">
          <ui-badge v-for="item in category.items" :key="item" :text="item" />
        </div>
      </div>
      <div class="bg-main-black h-px" />
    </div>
    <button
      class="button-primary max-w-[550px] mx-auto mt-[24px] md:mt-[124px]"
      @click="openModal('contact')"
    >
      Связаться с нами
    </button>
    <img src="/images/bg-decoration.png" alt="bg" class="absolute z-[-1] md:block right-[10%] top-[40%]" />
  </div>
</template>

<script setup lang="ts">
import { useModalsStore } from '~/store'

const technologyList = [
  [
    {
      name: 'Back-end',
      items: [
        'Java/PHP',
        'Laravel',
        'Symfony',
        'Spring Framework',
        'Hibernate',
        'PostgreSQL',
        'Mongo',
        'Docker',
        'Jenkins',
        'Ansible',
        'RTSP',
        'WebRTC',
      ],
    },
  ],
  [
    {
      name: 'Front-end',
      items: [
        'Angular/React/Vue',
        'Typescript',
        'Jade',
        'Webpack/Angular CLI',
        'Nodejs',
        'Freemarker',
        'Single Page application',
        'Server side rendering',
        'SCSS',
        'JavaFX',
        'Windows apps',
      ],
    },
  ],
  [
    {
      name: 'Mobile - разработка',
      items: [],
    },
    {
      name: 'Cross platform: Flutter iOS: Swift',
      items: ['Alamofire', 'PromiseKit', 'CoreData'],
    },
    {
      name: 'Android: Android (Java/Kotlin)',
      items: [
        'JavaRx',
        'Robolectric',
        'Crashlitycs Beta',
        'Firebase Analytics',
        'Realm, Dagger',
        'Alexа Voice Assistant',
        'PocketSphinx',
        'Root',
        'Voice call',
      ],
    },
  ],
  [
    {
      name: 'Design',
      items: ['UX', 'UI', 'CJM', 'Figma', 'Sketch'],
    },
  ],
  [
    {
      name: 'И другие',
      items: [],
    },
  ],
]

const { openModal } = useModalsStore()
</script>

<style scoped>

</style>
