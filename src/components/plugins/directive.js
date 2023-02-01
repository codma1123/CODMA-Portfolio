const underlineDirective = (el, binding) => {
  el.style.textDecorationLine = 'underline'
  el.style.textDecorationStyle = 'wavy'
  el.style.textDecorationColor = binding.value || 'yellow'
}

const fontSizeDirective = (el, binding) => {
  el.style.fontSize = binding.value + 'px'
}

export {
  underlineDirective,
  fontSizeDirective,
}