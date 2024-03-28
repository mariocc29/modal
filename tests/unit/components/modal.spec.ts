import { VueWrapper, shallowMount } from '@vue/test-utils';
import Vuex, { Commit, Store } from "vuex";
import { ComponentPublicInstance } from 'vue';

import { MessageType } from '@/enums';
import { RootState } from '../mocks/state.interface';
import ModalComponent from '@/components/modal.vue';

describe('ModalComponent', () => {
  let store: Store<RootState>;
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(() => {
    store = new Vuex.Store<RootState>({
      state: {
        showModal: true,
        kindOf: MessageType.INFO
      },
      mutations: {
        TOGGLE_MODAL(state) {
          state.showModal = !state.showModal;
        }
      },
    });

    wrapper = shallowMount(ModalComponent, {
      global: {
        plugins: [store]
      }
    });
  });

  it('renders Modal with Information State (Info)', async () => {
    await wrapper.setProps({ state: MessageType.INFO });
    
    let mainTag = wrapper.find('main')

    expect(wrapper.find('.modal').classes()).toContain('modal-info');
    expect(mainTag.find('.fa-solid').classes()).toContain('fa-circle-info');
    expect(mainTag.find('.fa-solid').classes()).toContain('icon-info');
  });

  it('renders Modal with Success State', async () => {
    await wrapper.setProps({ state: MessageType.SUCCESS });
    
    let mainTag = wrapper.find('main')

    expect(wrapper.find('.modal').classes()).toContain('modal-success');
    expect(mainTag.find('.fa-solid').classes()).toContain('fa-circle-check');
    expect(mainTag.find('.fa-solid').classes()).toContain('icon-success');
  });

  it('renders Modal with Warning State', async () => {
    await wrapper.setProps({ state: MessageType.WARNING });
    
    let mainTag = wrapper.find('main')

    expect(wrapper.find('.modal').classes()).toContain('modal-warning');
    expect(mainTag.find('.fa-solid').classes()).toContain('fa-triangle-exclamation');
    expect(mainTag.find('.fa-solid').classes()).toContain('icon-warning');
  });

  it('renders Modal with Alert State', async () => {
    await wrapper.setProps({ state: MessageType.ALERT });
    
    const mainTag = wrapper.find('main')

    expect(wrapper.find('.modal').classes()).toContain('modal-alert');
    expect(mainTag.find('.fa-solid').classes()).toContain('fa-circle-exclamation');
    expect(mainTag.find('.fa-solid').classes()).toContain('icon-alert');
  });

  it('commits TOGGLE_MODAL when close button is clicked', async () => {
    (store.commit as jest.MockedFunction<Commit>) = jest.fn();
    
    wrapper.find('header').find('span').trigger('click');
    expect(store.commit).toHaveBeenCalledWith('TOGGLE_MODAL');
  });

  it('renders Modal with Provided Title', async () => {
    const expectedTitle = 'Expected Title'
    await wrapper.setProps({ title: expectedTitle });

    expect(wrapper.find('.title').text()).toContain(expectedTitle);
  });

  it('renders Modal without a Message Slot Content', () => {
    const messageSlotContent = 'ERROR: missing content slot';
    expect(wrapper.find('.message').text()).toContain(messageSlotContent);
  })

  it('renders Modal with Message Slot Content', () => {
    const messageSlotContent = 'Message goes here';
    const wrapper = shallowMount(ModalComponent, {
      global: {
        plugins: [store]
      },
      slots: {
        content: messageSlotContent
      }
    });

    expect(wrapper.find('.message').text()).toContain(messageSlotContent);
  });
  
  it('renders Modal with Footer Slot Content when slot does not exits', async () => {
    await wrapper.setProps({ state: MessageType.INFO });
    
    const defaultFooterSlot = wrapper.find('.footer')
    expect(defaultFooterSlot.findAllComponents({name: 'ButtonComponent'}).length).toBe(2)
    expect(defaultFooterSlot.find('[kindOf="cancel"]')).toBeTruthy;
    expect(defaultFooterSlot.find('[kindOf="info"]')).toBeTruthy;
  });

  it('renders Modal with Footer Slot Content when slot exits', () => {
    const footerSlotContent = 'Footer goes here';
    
    const wrapper = shallowMount(ModalComponent, {
      global: {
        plugins: [store]
      },
      slots: {
        footer: footerSlotContent
      }
    });

    expect(wrapper.find('footer').text()).toContain(footerSlotContent);
  });
})