import { shallowMount } from '@vue/test-utils';
import ButtonComponent from '@/components/button.vue';

describe('ButtonComponent', () => {
  it('renders a button with the correct class based on prop', () => {
    const kindOf = 'info';
    const wrapper = shallowMount(ButtonComponent, {
      propsData: { kindOf }
    });

    expect(wrapper.find('button').classes()).toContain(`btn-${kindOf}`);
  });

  it('renders slot content', () => {
    const slotContent = 'Click me';
    const wrapper = shallowMount(ButtonComponent, {
      slots: {
        default: slotContent
      }
    });

    expect(wrapper.text()).toContain(slotContent);
  });
});