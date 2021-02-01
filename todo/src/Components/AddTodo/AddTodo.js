import React from 'react'
import ReactDOM from 'react-dom'

import { connect } from 'react-redux'
import { addTodo } from '../../redux/actions'

class AddTodo extends React.Component {
    //...component implementation

    handleAddTodo = () => {
        //dispatches actions to add todo
        this.props.addTodo(this.state.input)

        //sets state back to empty string
        this.setState({ input: ''})
    }
    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />    
            </div>
        )
    }
}

export default connect(
    null,
    { addTodo }
)(AddTodo)
