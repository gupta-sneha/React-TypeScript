import * as React from 'react';
import { Container } from 'flux/utils';
import { addTodo } from '../actions/TodoActions';
import AddToDoComponent from '../components/AddToDoComponent';
import TodoStore from '../stores/TodoStore';

class AddToDoContainer extends React.Component<{}, {}>{
    public static getStores() {
        return [
            TodoStore
        ];
    }

    public static calculateState() {
        return {};
    }

    public render() {
        return (
            <AddToDoComponent onAddTodo={addTodo} />
        )
    }
}

export default Container.create(AddToDoContainer);