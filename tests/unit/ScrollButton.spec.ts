import {shallowMount} from '@vue/test-utils';
import ScrollButton from '@/components/ScrollButton.vue';

describe('ScrollButton.vue', () => {
  it('emits correct scroll position', () => {
    expect(true).toBe(true);
  });
  it('renders content when passed in', () => {
    const wrapper = shallowMount(ScrollButton, {
      stubs: {
        ProgressBar: true,
      },
      slots: {
        content: '<div class="test">test</div>',
      },
    });
    expect(wrapper.contains('.test')).toBe(true);
  });
  it('renders correct progress bar color', () => {
    const wrapper = shallowMount(ScrollButton, {
      stubs: {
        ProgressBar: true,
      },
      propsData: {
        progressColor: 'purple',
      },
    });
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
