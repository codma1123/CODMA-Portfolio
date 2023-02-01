import { ComponentInternalInstance, h, VNode } from "vue"
import { VChip } from "vuetify/components"

const chipMap = {
  'Vue.js': 'rgb(65, 184, 131)',
  'TypeScript': 'rgb(0, 122, 204)'
} as const

type ChipType = keyof (typeof chipMap)

interface ChipProp {
  size: string
  type: ChipType
  content: ChipType | string
}


const Chip = (props: ChipProp, context: ComponentInternalInstance): VNode => {

  const { size = 'x-large', type, content = type } = props
  return h(
    VChip,
    { 
      color: chipMap[type], 
      size,
      label: true,
      onClick: () => context.emit('click', type),      
    },
    () => content
  )
}

Chip.emits = ['click']

export default Chip
