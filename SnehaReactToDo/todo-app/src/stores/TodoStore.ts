import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../AppDispatcher';

interface IState {
    todos: string[]
}

interface IAction {
    type: string,
    payload: string
}

class TodoStore extends ReduceStore<IState, IAction>{
    constructor(){
        super(AppDispatcher);
    }

    public getInitialState(): IState {
        return {
            todos: []
        };
    }
    public reduce(state: IState, action: IAction) {
        switch (action.type) {
            case 'ADD_TODO':
                return {
                    ...state,
                    todos: [...state.todos, action.payload]
                };
            // case 'DELETE_TODO':
            //     return{

            //     }
            default:
                return state;
        }
    }
}

export default new TodoStore();