import * as React from 'react';

interface IProps {
    todos: string[]
    onDeleteTodo: (todoItem: string) => void
}

const onBtnClicked = () => {

}

const ToDoList: React.SFC<IProps> = ({ todos }) => {
    const items = todos.map((item: string, index: number) => {
        return (
            <li key={index}>
                {item}
                <button onClick={onBtnClicked}>Delete</button>
            </li>
        )
    });
    return (
        <div>
            <ul>
                {items}
            </ul>
        </div>
    )
}

export default ToDoList;