import AppDispatcher from '../AppDispatcher';

export const addTodo = (todoItem: string) => {
    AppDispatcher.dispatch({
        payload: todoItem,
        type: 'ADD_TODO'
    });
};

export const deleteTodo = (todoItem: string) =>{
    AppDispatcher.dispatch({
        payload: todoItem,
        type: 'DELETE_TODO'
    });
};