import React from 'react'
import ReactDOM from 'react-dom'

import { connect } from 'react-redux'
import { addTodo } from '../../redux/actions'

class AddTodo extends React.Component {
    //...component implementation
}

export default connect(
    null,
    { addTodo }
)(AddTodo)
