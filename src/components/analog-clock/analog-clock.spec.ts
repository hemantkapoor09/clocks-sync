import AnalogClock from "./analog-clock.vue";
import { shallowMount } from "@vue/test-utils";
import { TimeType } from '../types';

describe("analog-clock.vue", () => {
    const time: TimeType = {
        hour: "12",
        minute: "15",
        second: "00"
    }

    const defaultWrapper = shallowMount(AnalogClock, {
        propsData: {
            time
        },
        attachTo: document.body
    });

    it("should render", async () => {
        expect(defaultWrapper.find(".analog-clock").exists()).toBeTruthy();
    });
});
