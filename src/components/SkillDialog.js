import { h } from "vue"

const SkillDialog = (props, context) => {

  return h(
    props.id,
    {
      class: 'dialog'
    },
    props.content

  )
}

export default SkillDialog