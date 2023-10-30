<template>
  <Content v-if="data.canShowContent" model="page" :content="data.content" :api-key="API_KEY"
    :custom-components="getRegisteredComponents()" />

  <Content model="figma-imports" :content="figmaImports.content" :api-key="API_KEY" />
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { fetchOneEntry, Content, isPreviewing } from '@builder.io/sdk-vue/vue3'
import { getRegisteredComponents } from '@/builder'

interface ContentResponse {
  content: object
  canShowContent: boolean
}

const API_KEY = '24de69987b7e461898ac77a64411bc4f'

const data: ContentResponse = reactive({
  content: {},
  canShowContent: false
})

const figmaImports: ContentResponse = reactive({
  content: {},
  canShowContent: false
})

fetchOneEntry({
  model: 'page',
  apiKey: API_KEY,
  userAttributes: {
    urlPath: window.location.pathname
  }
}).then((res: any) => {
  data.content = res
  data.canShowContent = Boolean(data.content || isPreviewing())
})

fetchOneEntry({
  model: 'figma-imports',
  apiKey: API_KEY,
  userAttributes: {
    urlPath: window.location.pathname
  }
}).then((res: any) => {
  figmaImports.content = res
  figmaImports.canShowContent = Boolean(figmaImports.content || isPreviewing())
})

</script>
