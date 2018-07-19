import * as React from 'react'
import CocktailList from './cocktailist'
import { connect } from 'react-redux'

class CocktailListCont extends React.PureComponent {
  //you need to use arrow function to access 'this' with onClick of the cocktail list component
  selectCocktail = id => {
    this.props.selectCocktail(id)
  }

  render() {
    // you get cocktails data, instead of categories. the name categories is a bit confusing.
    // return <CocktailList categories={this.props.cocktails} />

    return <CocktailList cocktails={this.props.cocktails} selectCocktail={this.selectCocktail} />
  }
}

const mapStateToProps = state => {
  return {
    // you name the reducer cocktails. need to use the name here.
    // in reducers/index.js...

    // combineReducers({
    //   cocktails: cocktails
    // })

    // state = state of the reducer. in this case, cocktails
    cocktails: state.cocktails
  }
}

const mapActionToProps = dispatch => ({
  selectCocktail: id =>
    dispatch({
      type: 'SELECT_COCK',
      payload: id
    })
})

export default connect(
  mapStateToProps,
  mapActionToProps
)(CocktailListCont)
