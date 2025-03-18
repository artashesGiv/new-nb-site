<template>
  <div id="technologies" class="section-container section-content overflow-hidden">
    <h3 class="my-text-xl">Стек технологий</h3>
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
          <div class="my-text-l basis-[40px] flex-shrink-0 lg:basis-[400px]">{{ category.name }}</div>
          <div class="flex flex-wrap gap-[12px] lg:gap-[24px]">
            <ui-badge v-for="item in category.items" :text="item" :key="item"/>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
];
</script>

<style scoped lang="scss">

</style>

