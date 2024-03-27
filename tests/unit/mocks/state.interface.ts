import { MessageType } from "@/enums";

export interface RootState {
  showModal: boolean;
  kindOf: MessageType;
}