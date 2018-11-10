import { shallowMount } from '@vue/test-utils';
import ScrollButton from '@/components/ScrollButton.vue';

describe('ScrollButton.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(ScrollButton, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
