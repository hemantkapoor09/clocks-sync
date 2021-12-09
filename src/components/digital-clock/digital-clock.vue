<template>
  <div class="digital-clock" v-if="time">
    <div class="digital-clock-wrapper">
      <div class="digital-clock--hours">{{ time.hour }}</div>
      <div class="digital-clock--divider" />
      <div class="digital-clock--minutes">{{ time.minute }}</div>
      <div class="digital-clock--divider" />
      <div class="digital-clock--seconds">{{ time.second }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./digital-clock.scss"></style>
<script lang="ts" src="./digital-clock.ts"></script>
