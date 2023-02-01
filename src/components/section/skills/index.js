


const useSkills = (emit) => {
  const openDialog = e => emit('openDialog', e)
  const popUp = e => emit('onPopUp', e)

  return {
    openDialog,
    popUp
  }
}

export default useSkills

