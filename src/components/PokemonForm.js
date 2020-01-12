import React from 'react'
import { Form } from 'semantic-ui-react'

const URL = 'http://localhost:3000/pokemon'
class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }
  handleNameChange = e => this.setState({name: e.target.value})
  handleHpChange = e => this.setState({hp: e.target.value})
  handleFrontUrlChange = e => this.setState({frontUrl: e.target.value})
  handleBackUrlChange = e => this.setState({backUrl: e.target.value})

  handleSubmit = e => {
    let addPoke = {name: this.state.name,
    stats: [{value: Number(this.state.hp), name:'hp'}], sprites:{front: this.state.frontUrl, back: this.state.backUrl}
    }
    let confObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(addPoke)
    }
    // console.log('obj is ', confObj)
    fetch(URL, confObj)
    .then(res => res.json())
    .then(newPoke => this.props.addPoke(newPoke))
    .catch(err => console.warn(err.message))
    e.target.reset()
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleNameChange}
            />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleHpChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleFrontUrlChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleBackUrlChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
