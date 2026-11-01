<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';
import { findPageHeadline } from '@nuxt/content/utils';
import { withoutTrailingSlash } from 'ufo';

definePageMeta({
  layout: 'docs',
});

const route = useRoute();
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation');
const routePath = computed(() => withoutTrailingSlash(route.path));

const { data: page } = await useAsyncData(() => routePath.value, async () => queryCollection('docs').path(routePath.value).first(), { watch: [routePath] });
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
}

const { data: surround } = await useAsyncData(() => `${routePath.value}-surround`, async () => {
  return queryCollectionItemSurroundings('docs', routePath.value, {
    fields: ['description'],
  });
}, { watch: [routePath] });

const title = computed(() => page.value?.seo.title || page.value?.title);
const description = computed(() => page.value?.seo.description || page.value?.description);

useSeoMeta({
  title: () => title.value,
  ogTitle: () => title.value,
  description: () => description.value,
  ogDescription: () => description.value,
});

const headline = computed(() => findPageHeadline(navigation?.value, page.value?.path));
</script>

<template>
  <UPage>
    <UPageHeader
      :title="page!.title"
      :description="page!.description"
      :headline="headline"
    />

    <UPageBody>
      <ContentRenderer
        :value="page!"
      />

      <USeparator v-if="surround?.length" />

      <UContentSurround :surround="surround" />
    </UPageBody>
  </UPage>
</template>
