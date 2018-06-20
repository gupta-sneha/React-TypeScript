import AppDispatcher from '../AppDispatcher';

export const addTodo = (todoItem: string) => {
    AppDispatcher.dispatch({
        payload: todoItem,
        type: 'ADD_TODO'
    });
};

export const deleteTodo = (todoItemIndex: number) =>{
    AppDispatcher.dispatch({
        payload: todoItemIndex,
        type: 'DELETE_TODO'
    });
};