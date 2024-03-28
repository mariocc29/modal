import { VueWrapper, shallowMount } from '@vue/test-utils';
import Vuex, { Commit, Store } from "vuex";
import { ComponentPublicInstance } from 'vue';

import { MessageType } from '@/enums';
import { RootState } from '../mocks/state.interface';
import MainView from '@/views/main.vue';


describe('MainView', () => {
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

    wrapper = shallowMount(MainView, {
      global: {
        plugins: [store]
      }
    });
  });

  it('should match with the snapshot', () => {
    expect( wrapper.html() ).toMatchSnapshot()
  })

  it('commits TOGGLE_MODAL with Information State (Info)', async () => {
    (store.commit as jest.MockedFunction<Commit>) = jest.fn();

    await wrapper.find('[kindOf="info"]').trigger('click');
    
    const vm = wrapper.vm as any;
    expect(vm.kindOf).toEqual(MessageType.INFO);
    expect(vm.showCheckboxOption).toBeTruthy();

    expect(store.commit).toHaveBeenCalledWith('TOGGLE_MODAL');
    expect(store.commit).toHaveBeenCalledWith('SET_KIND_OF_MODAL', MessageType.INFO);
  });

  it('commits TOGGLE_MODAL with Success State', async () => {
    (store.commit as jest.MockedFunction<Commit>) = jest.fn();

    await wrapper.find('[kindOf="success"]').trigger('click');
    
    const vm = wrapper.vm as any;
    expect(vm.kindOf).toEqual(MessageType.SUCCESS);
    expect(vm.showCheckboxOption).toBeFalsy();

    expect(store.commit).toHaveBeenCalledWith('TOGGLE_MODAL');
    expect(store.commit).toHaveBeenCalledWith('SET_KIND_OF_MODAL', MessageType.SUCCESS);
  });

  it('commits TOGGLE_MODAL with Warning State', async () => {
    (store.commit as jest.MockedFunction<Commit>) = jest.fn();

    await wrapper.find('[kindOf="warning"]').trigger('click');
    
    const vm = wrapper.vm as any;
    expect(vm.kindOf).toEqual(MessageType.WARNING);
    expect(vm.showCheckboxOption).toBeFalsy();

    expect(store.commit).toHaveBeenCalledWith('TOGGLE_MODAL');
    expect(store.commit).toHaveBeenCalledWith('SET_KIND_OF_MODAL', MessageType.WARNING);
  });

  it('commits TOGGLE_MODAL with Alert State', async () => {
    (store.commit as jest.MockedFunction<Commit>) = jest.fn();

    await wrapper.find('[kindOf="alert"]').trigger('click');
    
    const vm = wrapper.vm as any;
    expect(vm.kindOf).toEqual(MessageType.ALERT);
    expect(vm.showCheckboxOption).toBeFalsy();

    expect(store.commit).toHaveBeenCalledWith('TOGGLE_MODAL');
    expect(store.commit).toHaveBeenCalledWith('SET_KIND_OF_MODAL', MessageType.ALERT);
  });
})