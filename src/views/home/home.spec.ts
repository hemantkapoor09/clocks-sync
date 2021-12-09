import Home from "./home.vue";
import { mount } from "@vue/test-utils";

describe("digital-clock.vue", () => {
    const defaultWrapper = mount(Home, {
        propsData: {
        },
        attachTo: document.body
    }) as any;

    it("should render", async () => {
        expect(defaultWrapper.find(".home").exists()).toBeTruthy();
        expect(defaultWrapper.find(".clock-wrapper").exists()).toBeFalsy();
    });

    it("by default", async () => {
        const hour = defaultWrapper.vm.date.getHours().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        const minute = defaultWrapper.vm.date.getMinutes().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        const expectedInitTimeValue = `${hour}:${minute}`;

        expect(defaultWrapper.vm.isInputDisabled).toBe(true);
        expect(defaultWrapper.vm.timeValue).toBe(expectedInitTimeValue);
        expect(defaultWrapper.vm.live).toBeGreaterThan(1);
    });

    it("on `timeValue` update and on button click", async () => {
        defaultWrapper.vm.isInputDisabled = false;
        defaultWrapper.vm.timeValue = "00:00";
        await defaultWrapper.vm.$nextTick();

        const button = defaultWrapper.find(".time-picker--button").element as HTMLButtonElement;
        button.click();
        await defaultWrapper.vm.$nextTick();
        expect(defaultWrapper.vm.live).toBeGreaterThan(5);
        expect(defaultWrapper.find(".clocks--analog").exists()).toBeTruthy();
    });
});
