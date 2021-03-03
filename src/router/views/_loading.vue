<script>
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Loading page...',
    meta: [{ name: 'description', content: 'Loading page...' }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout>
    <Transition appear>
      <BaseIcon :class="$style.loadingIcon" name="sync" spin />
    </Transition>
  </Layout>
</template>

<style lang="scss">
.loadingIcon {
  display: block;
  margin: 0 auto;
  &:global(.v-enter-active) {
    transition: opacity 1s;
  }
  &:global(.v-enter) {
    opacity: 0;
  }
}
</style>
