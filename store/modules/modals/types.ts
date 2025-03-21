export type ModalPropsMap = {
  contact: null
}

export type ModalTypes = keyof ModalPropsMap
export type ModalProps = ModalPropsMap[ModalTypes]
