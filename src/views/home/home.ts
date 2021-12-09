import { Component, Vue } from "vue-property-decorator";
import analogClock from "@/components/analog-clock/analog-clock.vue";
import digitalClock from "@/components/digital-clock/digital-clock.vue";
import { TimeType } from '../../components/types';
import moment from "moment";
@Component({
  components: {
    analogClock,
    digitalClock
  }
})
export default class Home extends Vue {
  date = new Date();
  live = 0;
  timeValue = "00:00";
  isInputDisabled = true;

  mounted() {
    this.setup();
  }

  get timeInput() {
    return this.$refs.time as HTMLInputElement;
  }

  get isInputVisible() {
    return !this.isInputDisabled;
  }

  setup() {
    const hour = this.date.getHours().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    const minute = this.date.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    this.timeValue = `${hour}:${minute}`;
    this.makeItAlive();
  }

  makeItAlive() {
    this.live = setInterval(() => {
      this.date = new Date((moment(this.date).add(1, "second")).toDate());
    }, 1000);
  }

  onSetTime() {
    clearInterval(this.live);
    this.isInputDisabled = false;
    const focus = setTimeout(() => {
      this.timeInput.focus();
      clearTimeout(focus);
    }, 20);
  }

  setTimeValue() {
    const time = this.timeValue.split(":");
    const hour = Number(time[0]);
    const minute = Number(time[1]);
    this.date.setHours(hour);
    this.date.setMinutes(minute);
    this.date.setSeconds(0);
    this.isInputDisabled = true;
    this.makeItAlive();
  }

  getAnalogTime(): TimeType {
    return {
      hour: this.date.getHours().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }),
      minute: this.date.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }),
      second: this.date.getSeconds().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
    }
  }

  getDigitalTime(): TimeType {
    const newTime = new Date((moment(this.date).add(3, "hour")).toDate());
    return {
      hour: newTime.getHours().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }),
      minute: newTime.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }),
      second: newTime.getSeconds().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
    }
  }

}
