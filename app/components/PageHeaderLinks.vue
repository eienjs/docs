<script setup lang="ts">
import { useClipboard } from '@vueuse/core';
import { withoutTrailingSlash } from 'ufo';

const route = useRoute();
const toast = useToast();
const { copy, copied } = useClipboard();
const site = useSiteConfig();

const routePath = computed(() => withoutTrailingSlash(route.path));
const mdPath = computed(() => `${site.url}/raw${routePath.value}.md`);

const items = computed(() => [
  {
    label: 'Copy Markdown link',
    icon: 'i-tabler-link',
    onSelect() {
      void copy(mdPath.value);
      toast.add({
        title: 'Copied to clipboard',
        icon: 'i-tabler-check',
      });
    },
  },
  {
    label: 'View as Markdown',
    icon: 'i-tabler-markdown',
    target: '_blank',
    to: `/raw${routePath.value}.md`,
  },
  {
    label: 'Open in ChatGPT',
    icon: 'i-tabler-brand-openai',
    target: '_blank',
    to: `https://chatgpt.com/?hints=search&q=${encodeURIComponent(`Read ${mdPath.value} so I can ask questions about it.`)}`,
  },
]);

async function copyPage() {
  void copy(await $fetch<string>(`/raw${routePath.value}.md`));
}
</script>

<template>
  <UFieldGroup>
    <UButton
      label="Copy page"
      :icon="copied ? 'i-tabler-check' : 'i-tabler-copy'"
      color="neutral"
      variant="outline"
      :ui="{
        leadingIcon: [copied && 'text-primary', 'size-3.5'],
      }"
      @click="copyPage"
    />
    <UDropdownMenu
      :items="items"
      :content="{
        align: 'end',
        side: 'bottom',
        sideOffset: 8,
      }"
      :ui="{
        content: 'w-48',
      }"
    >
      <UButton
        icon="i-tabler-chevron-down"
        size="sm"
        color="neutral"
        variant="outline"
        aria-label="Open copy actions menu"
      />
    </UDropdownMenu>
  </UFieldGroup>
</template>
