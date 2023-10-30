<template>
  <div>
    <ul>
      <li>{{ header.content.name }}</li>
      <li>{{ header.content.email }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { fetchOneEntry, Content, isPreviewing } from '@builder.io/sdk-vue/vue3'

interface ContentResponse {
  content: Header
  canShowContent: boolean
}

interface Header {
  name?: string
  email?: string
}

const API_KEY = '24de69987b7e461898ac77a64411bc4f'

const header: ContentResponse = reactive({
  content: {},
  canShowContent: false
})

fetchOneEntry({
  model: 'header',
  apiKey: API_KEY,
  userAttributes: {
    urlPath: window.location.pathname
  }
}).then((res: any) => {
  header.content = res.data as Header
})

</script>
