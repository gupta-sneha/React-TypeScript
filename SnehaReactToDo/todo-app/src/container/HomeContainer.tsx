import * as React from 'react';
import { Container } from 'flux/utils';
import { deleteTodo } from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';
import ToDoList from '../components/ToDoList';

interface IState {
    todos: string[]
}

class HomeContainer extends React.Component<{}, IState>{
    public static getStores() {
        return [
            TodoStore
        ];
    }

    public static calculateState(): IState {
        return {
            todos: TodoStore.getState().todos
        }
    }

    public render() {
        return (
            <React.Fragment>
                <p>This is home container</p>
                <ToDoList todos={this.state.todos} onDeleteTodo={deleteTodo}/>
            </React.Fragment>
        )
    }
}

export default Container.create(HomeContainer);