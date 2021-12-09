<template>
  <div class="home">
    <div
      class="time-picker-wrapper"
      :class="{
        'time-picker-wrapper--with-label': isInputVisible,
      }"
    >
      <label class="time-picker-label" for="time-picker" v-if="isInputVisible"
        >Select a time</label
      >
      <input
        class="time-picker"
        id="time-picker"
        type="time"
        name="time-picker"
        value="00:00"
        ref="time"
        v-model="timeValue"
        :disabled="!isInputVisible"
      />
      <button
        class="time-picker--button"
        @click="setTimeValue"
        v-if="isInputVisible"
      >
        Sync Clocks
      </button>
    </div>
    <div class="clocks">
      <div class="clock-wrapper" v-if="isInputVisible" />
      <div class="clocks--analog" @click="onSetTime">
        <b class="time-title">[Vancouver-Time] (+0 Hours)</b>
        <analog-clock :time="getAnalogTime()"  />
      </div>
      <div class="clocks--digital" @click="onSetTime">
        <digital-clock :time="getDigitalTime()" />
        <b class="time-title">[Toronto-Time] (+3 Hours)</b>
      </div>
    </div>
    
    <div class="user-guide">
      Click on the clocks to begin your own time setup !
    </div>
    
  </div>
</template>

<script lang="ts" src="./home.ts"></script>
<style scoped lang="scss" src="./home.scss"></style>
