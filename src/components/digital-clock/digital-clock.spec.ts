import DigitalClock from "./digital-clock.vue";
import { shallowMount } from "@vue/test-utils";
import { TimeType } from '../types';

describe("digital-clock.vue", () => {
    const time: TimeType = {
        hour: "12",
        minute: "15",
        second: "00"
    }

    const defaultWrapper = shallowMount(DigitalClock, {
        propsData: {
            time
        }
    });

    it("should render", async () => {
        expect(defaultWrapper.find(".digital-clock").exists()).toBeTruthy();
    });
});
