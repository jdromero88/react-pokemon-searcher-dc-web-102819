import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6} >
        {
          this.props.pokeAll.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} test={pokemon.stats.find(item => item.name === 'hp')}/>)

        }
      </Card.Group>
    )
  }
}

export default PokemonCollection
