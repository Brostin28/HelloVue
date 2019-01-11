<template>
  <div>
    <md-toolbar class="md-primary">
      <h1 class="md-title">Vue Material</h1>
    </md-toolbar>

    <md-content> Your content here </md-content>

    <h1>{{ word }}</h1>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
.md-content {
  padding: 16px;
}
</style>
