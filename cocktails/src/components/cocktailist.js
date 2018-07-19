import * as React from 'react'

export default function CocktailList(props) {
  return (<div>
    <h1>Cocktail Explorer</h1>
    <ul>
      { props.cocktails.map(category =>
        <li key={category.id} onClick={() => props.selectCocktail(category.id)}>
          { category.category }
        </li>
      ) }
    </ul>
  </div>)
}
