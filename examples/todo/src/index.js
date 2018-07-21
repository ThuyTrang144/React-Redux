import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux'
import { Provider, connect} from 'react-redux'

const addTodoAction = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

const deleteTodoAction = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

const toggleTodoAction = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

const filterTodoAction = (typeEvent) => {
  return {
    type: 'SHOW_TODO',
    typeEvent
  }
}

const todos = [{
  id: 0,
  text: 'Hello',
  isCompleted: false
}]

const todoReducer = (state = {list: todos}, action) => {
  switch(action.type){
    case 'ADD_TODO': {
      return {
        ...state,
        list: [
          {
            id: new Date().valueOf(),
            text: action.text,
            isCompleted: false
          },
          ...state.list
        ]
      }
    }
    case 'DELETE_TODO':
    console.log(action);
      return {
        ...state,
        list: state.list.filter(todo => todo.id !== action.id)
      }
    case 'TOGGLE_TODO':
    return {
      ...state,
      list: state.list.map(todo => (todo.id === action.id) ? {...todo, isCompleted: !todo.isCompleted} : todo)
    }
    default:
      return state
  }
}

const initFilter = {
  typeEvent: ''
}

const filterReducer = (state = initFilter, action) => {
  switch(action.type) {
    case "SHOW_TODO": {
      return {...state, typeEvent: action.typeEvent};
    }
    default: return state;
  }
}

const reducers = combineReducers({
  todos: todoReducer,
  filter: filterReducer
})

const mapStateToProps = (state, ownProps) => {
  return {
      list: state.todos.list,
      name: ownProps.name,
      typeEvent: state.filter.typeEvent
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (text) => dispatch(addTodoAction(text)),
    deleteTodo: (id) => dispatch(deleteTodoAction(id)),
    toggleTodo: (id) => dispatch(toggleTodoAction(id)),
    filterTodo: (typeEvent) => dispatch(filterTodoAction(typeEvent))
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer name="abc"/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
