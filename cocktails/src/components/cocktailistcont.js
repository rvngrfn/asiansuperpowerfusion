import * as React from 'react'
import CocktailList from './cocktailist'
import { connect } from 'react-redux'

class CocktailListCont extends React.PureComponent {
  // selectCocktail(id){
  //   console.log('selected cocktail', id)
  //   this.props.dispatch({
  //     type: 'SELECT_COCK',
  //     payload: id
  //   })
  // }

  render(){
    return <CocktailList categories={this.props.categories}/> //selectCocktail = {this.selectCocktail} />
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.category
  }
}

export default connect(mapStateToProps)(CocktailListCont)
