<script setup lang="ts">
const props = defineProps<{ category: string }>();

const { data } = await useAsyncData('packages-data', async () => queryCollection('packages').first());

const packages = computed(() => (data.value?.packages ?? []).filter((pkg) => pkg.category === props.category));
</script>

<template>
  <Reveal>
    <div class="flex flex-wrap justify-center gap-8">
      <UPageCard
        v-for="pkg in packages"
        :key="pkg.name"
        :title="pkg.title"
        :description="pkg.description"
        :icon="pkg.icon"
        :to="pkg.docs ? `/packages/${pkg.name}` : pkg.repo"
        :target="pkg.docs ? undefined : '_blank'"
        spotlight
        class="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
      >
        <template
          v-if="pkg.version"
          #footer
        >
          <UBadge
            :label="`v${pkg.version}`"
            variant="subtle"
            color="neutral"
          />
        </template>
      </UPageCard>
    </div>
  </Reveal>
</template>
