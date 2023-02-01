import { ComponentInternalInstance, h, VNode } from "vue"
import { VChip } from "vuetify/components"

const chipMap = {
  'Vue.js': 'rgb(65, 184, 131)',
  'TypeScript': 'rgb(0, 122, 204)',
  'Vuex': 'green-lighten-1',
  'pinia': 'rgb(236, 183, 50)',
  'default': 'gray',  
} as const

type ChipType = keyof (typeof chipMap)

interface ChipProp {
  size: string
  type: ChipType
  content: ChipType | string
}


const Chip = (props: ChipProp, context: ComponentInternalInstance): VNode => {

  const { size = 'medium', type = 'default', content = type } = props
  return h(
    VChip,
    { 
      class: 'Chip',
      color: chipMap[type],    
      size,
      label: true,
      onClick: () => context.emit('click', type),
      onMouseover: () => setTimeout(() => context.emit('popUp', content), 300),
      onMouseleave: () => console.log('leave')
    },
    () => content
  )
}

Chip.emits = ['click', 'popUp']

export default Chip
