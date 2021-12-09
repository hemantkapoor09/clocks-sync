import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { TimeType } from '../types';

@Component({
  components: {}
})
export default class DigitalClock extends Vue {
  @Prop({ required: true })
  time!: TimeType;

}
