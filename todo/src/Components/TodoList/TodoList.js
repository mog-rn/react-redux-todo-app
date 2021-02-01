import React from 'react'
import { connect } from 'react-redux'
import { getTodos } from '../../redux/selectors'

const TodoList = //...UI component implementation 

const mapStateToProps = state => {
    const { byIds, allIds } = state.todos || {};
    const todos = 
        allIds && allIds.length
            ? allIds.map(id => (byIds ? { ...byIds[id], id} : null))
            : null;
            return { todos }
}

export default connect(mapStateToProps)(TodoList);