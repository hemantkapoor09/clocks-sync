import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { TimeType } from '../types';

@Component({})
export default class AnalogClock extends Vue {
  @Prop({ required: true })
  time!: TimeType;

  hourHand: any = undefined;
  minuteHand: any = undefined;
  secondHand: any = undefined;

  mounted() {
    this.initializeSvgElements();
  }

  @Watch("time")
  initializeSvgElements() {
    this.hourHand = document.querySelector("#hour") as HTMLElement;
    this.minuteHand = document.querySelector("#minute") as HTMLElement;
    this.secondHand = document.querySelector("#second") as HTMLElement;
    this.run_the_clock();
  }

  run_the_clock() {
    const hours = parseInt(this.time.hour);
    const minutes = parseInt(this.time.minute);
    const seconds = parseInt(this.time.second);

    const hrPosition = (hours * 360) / 12 + (minutes * 360) / 60 / 12;
    const minPosition = (minutes * 360) / 60 + (seconds * 360) / 60 / 60;
    const secPosition = (seconds * 360) / 60;

    this.hourHand.style.transform = "rotate(" + hrPosition + "deg)";
    this.minuteHand.style.transform = "rotate(" + minPosition + "deg)";
    this.secondHand.style.transform = "rotate(" + secPosition + "deg)";
  }
}
