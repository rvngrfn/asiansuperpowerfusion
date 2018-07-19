import initialState from '../data/cocktailData'

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SELECT_COCK':
      console.log('select coctail.')
      console.log('id: ', action.payload)
      // leave state unchange for now.
      return state
    default:
      return state
  }
}

export default reducer
