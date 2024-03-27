import { VueWrapper, shallowMount } from '@vue/test-utils';
import Vuex, { Commit, Store } from "vuex";
import { RootState } from '../mocks/state.interface';
import { ComponentPublicInstance } from 'vue';
import OverlayComponent from '@/components/overlay.vue';


describe('OverlayComponent', () => {
  let store: Store<RootState>;
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(() => {
    store = new Vuex.Store<RootState>({
      state: {
        showModal: false
      },
      mutations: {
        TOGGLE_MODAL(state) {
          state.showModal = !state.showModal;
        }
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

  it('commits TOGGLE_MODAL when overlay is clicked and closeOnOutsideClick is true', async () => {
    (store.commit as jest.MockedFunction<Commit>) = jest.fn();

    await wrapper.setProps({ closeOnOutsideClick: true });
    wrapper.find('.overlay').trigger('click');
    expect(store.commit).toHaveBeenCalledWith('TOGGLE_MODAL');
  });

  it('does not commit TOGGLE_MODAL when overlay is clicked and closeOnOutsideClick is false', async () => {
    (store.commit as jest.MockedFunction<Commit>) = jest.fn();
    
    await wrapper.setProps({ closeOnOutsideClick: false });
    wrapper.find('.overlay').trigger('click');
    expect(store.commit).not.toHaveBeenCalled();
  });
})