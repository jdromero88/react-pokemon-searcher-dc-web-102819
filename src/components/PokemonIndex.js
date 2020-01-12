import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container, Divider } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokeAll: [],
      searchQ: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => this.setState({pokeAll: pokemons}))
    .catch(err => console.log(err.message))
  }

  handleChange = e => {
    this.setState({searchQ: e.target.value})
    this.filterPokemon()
  }

  addPoke = (brandNewPoke) => {
    this.setState({pokeAll: [...this.state.pokeAll, brandNewPoke]})
  }

  filterPokemon(){
    return this.state.pokeAll.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchQ.toLowerCase()))
  }
  render() {
    return (
      <Container >
        <h1>Pokemon Searcher</h1>
        <Divider />
        <PokemonForm addPoke={this.addPoke}/>
        <Divider />
        <Search handleChange = {this.handleChange} />
        <Divider />
        <PokemonCollection pokeAll = {this.filterPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
