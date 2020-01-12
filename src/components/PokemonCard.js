import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state ={
      toggleImage: true
    }
  }
  handleClick = e => {
    this.setState({toggleImage: !this.state.toggleImage})
  }
  render() {
    // console.log('inside PokemonCard ', this.props.pokemon)
    const {name, sprites:{front, back}} = this.props.pokemon
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img alt={name} src={this.state.toggleImage ? front : back}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.test.name +': '+ this.props.test.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
