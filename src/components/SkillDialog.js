import { h } from "vue"

const SkillDialog = (props, context) => {

  

  console.log(props.contents)
  return h(
    props.id,
    {
      class: 'dialog'
    },
    props.content

  )
}

export default SkillDialog