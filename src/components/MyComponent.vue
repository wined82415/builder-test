<!-- This code was generated by Builder.io -->
<template>
  <div class="bg-slate-900 bg-opacity-90 flex flex-col">
    <div
      class="flex-col overflow-hidden self-stretch relative flex min-h-[1200px] w-full pt-36 px-5 max-md:max-w-full"
    >
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/72ea49d6-685f-48d2-8f97-ed3cd376c35b?apiKey=24de69987b7e461898ac77a64411bc4f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/72ea49d6-685f-48d2-8f97-ed3cd376c35b?apiKey=24de69987b7e461898ac77a64411bc4f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/72ea49d6-685f-48d2-8f97-ed3cd376c35b?apiKey=24de69987b7e461898ac77a64411bc4f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/72ea49d6-685f-48d2-8f97-ed3cd376c35b?apiKey=24de69987b7e461898ac77a64411bc4f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/72ea49d6-685f-48d2-8f97-ed3cd376c35b?apiKey=24de69987b7e461898ac77a64411bc4f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/72ea49d6-685f-48d2-8f97-ed3cd376c35b?apiKey=24de69987b7e461898ac77a64411bc4f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/72ea49d6-685f-48d2-8f97-ed3cd376c35b?apiKey=24de69987b7e461898ac77a64411bc4f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/72ea49d6-685f-48d2-8f97-ed3cd376c35b?apiKey=24de69987b7e461898ac77a64411bc4f&"
        class="absolute z-[-1] h-full w-full object-cover object-center inset-0"
      />
      <div class="relative flex flex-col shrink-0 box-border h-auto mt-5">
        <div _text=""></div>
      </div>
      <div
        class="relative self-center flex w-full max-w-[1011px] grow flex-col max-md:max-w-full"
      >
        <div class="items-start self-stretch flex flex-col max-md:max-w-full">
          <div
            class="text-lime-400 text-5xl font-medium leading-[170.36%] tracking-tighter max-md:max-w-full"
          >
            Resource
          </div>
          <div
            class="text-white text-7xl leading-[118.305%] tracking-tighter max-w-[798px] mt-6 max-md:max-w-full"
          >
            Builder Knowledge Base
          </div>
          <div
            class="text-white text-4xl leading-[140%] mt-6 max-md:max-w-full"
          >
            Get step by step instructions and best practices for bringing your
            designs from Figma to code&nbsp;
          </div>
        </div>
        <div
          class="text-white text-4xl font-medium leading-[100%] items-start bg-violet-400 w-[345px] max-w-full mt-16 px-5 py-10 rounded-xl max-md:mt-10"
        >
          <a
            href="https://www.builder.io/c/docs/import-from-figma"
            target="_blank"
            >View Doc</a
          >
        </div>
        <div
          class="flex-col relative box-border h-auto overflow-hidden self-center w-[915px] max-w-full grow ml-5 mt-24 pt-5 max-md:mt-10"
        >
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f736816a-4597-4d58-bdb5-8fe24f41c33a?apiKey=24de69987b7e461898ac77a64411bc4f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f736816a-4597-4d58-bdb5-8fe24f41c33a?apiKey=24de69987b7e461898ac77a64411bc4f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f736816a-4597-4d58-bdb5-8fe24f41c33a?apiKey=24de69987b7e461898ac77a64411bc4f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f736816a-4597-4d58-bdb5-8fe24f41c33a?apiKey=24de69987b7e461898ac77a64411bc4f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f736816a-4597-4d58-bdb5-8fe24f41c33a?apiKey=24de69987b7e461898ac77a64411bc4f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f736816a-4597-4d58-bdb5-8fe24f41c33a?apiKey=24de69987b7e461898ac77a64411bc4f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f736816a-4597-4d58-bdb5-8fe24f41c33a?apiKey=24de69987b7e461898ac77a64411bc4f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f736816a-4597-4d58-bdb5-8fe24f41c33a?apiKey=24de69987b7e461898ac77a64411bc4f&"
            class="absolute z-[-1] h-full w-full object-cover object-center inset-0"
          />Enter some text...
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const header = ref(null);

onMounted(() => {
  fetch(
    "https://cdn.builder.io/api/v3/content/header?apiKey=24de69987b7e461898ac77a64411bc4f&includeRefs=true&fields=data&limit=10"
  )
    .then((res) => res.json())
    .then((result) => {
      header.value = result;
    });
});
</script>
