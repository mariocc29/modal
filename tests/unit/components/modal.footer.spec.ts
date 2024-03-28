import { VueWrapper, shallowMount } from '@vue/test-utils';
import Vuex, { Commit, Store } from "vuex";
import { ComponentPublicInstance } from 'vue';

import { MessageType } from '@/enums';
import { RootState } from '../mocks/state.interface';
import ModalFooterComponent from '@/components/modal.footer.vue';


describe('ModalFooterComponent', () => {
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
        SET_KIND_OF_MODAL(state, kindOf: MessageType) {
          state.kindOf = kindOf
        }
      },
    });

    wrapper = shallowMount(ModalFooterComponent, {
      global: {
        plugins: [store]
      }
    });
  });

  it('calls toggleModal method when "Annuler" button is clicked', async () => {
    (store.commit as jest.MockedFunction<Commit>) = jest.fn();

    await wrapper.find('[kindOf="cancel"]').trigger('click');
    expect(store.commit).toHaveBeenCalledWith('TOGGLE_MODAL');
  });

  it('calls toggleModal method when "Confirmer" button is clicked', async () => {
    (store.commit as jest.MockedFunction<Commit>) = jest.fn();

    await wrapper.find('[kindOf="info"]').trigger('click');
    expect(store.commit).toHaveBeenCalledWith('TOGGLE_MODAL');
  });
})