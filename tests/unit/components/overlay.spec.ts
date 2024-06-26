import { VueWrapper, shallowMount } from '@vue/test-utils';
import Vuex, { Commit, Store } from "vuex";
import { ComponentPublicInstance } from 'vue';

import { MessageType } from '@/enums';
import { RootState } from '../mocks/state.interface';
import OverlayComponent from '@/components/overlay.vue';


describe('OverlayComponent', () => {
  let store: Store<RootState>;
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(() => {
    store = new Vuex.Store<RootState>({
      state: {
        showModal: false,
        kindOf: MessageType.INFO
      },
      mutations: {
        TOGGLE_MODAL(state) {
          state.showModal = !state.showModal;
        },
      },
    });

    wrapper = shallowMount(OverlayComponent, {
      global: {
        plugins: [store]
      }
    });
  });

  it('renders overlay with fade-out class when showModal is false', () => {
    expect(wrapper.find('.overlay').classes()).toContain('fade-out');
  });

  it('renders overlay with fade-in class when showModal is true', async () => {
    await store.commit('TOGGLE_MODAL');
    expect(wrapper.find('.overlay').classes()).toContain('fade-in');
  });

  it('emits onClose event when overlay is clicked and closeOnOutsideClick is true', async () => {
    (store.commit as jest.MockedFunction<Commit>) = jest.fn();

    await wrapper.setProps({ closeOnOutsideClick: true });
    wrapper.find('.overlay').trigger('click');
    expect(wrapper.emitted('onClose')).toBeTruthy();
  });

  it('does not emits onClose event when overlay is clicked and closeOnOutsideClick is false', async () => {
    (store.commit as jest.MockedFunction<Commit>) = jest.fn();
    
    await wrapper.setProps({ closeOnOutsideClick: false });
    wrapper.find('.overlay').trigger('click');
    expect(wrapper.emitted('onClose')).toBeFalsy();
  });
})