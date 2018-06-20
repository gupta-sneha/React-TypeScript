import * as React from 'react';

interface IProps {
    todos: string[]
    onDeleteTodo: (index: number) => void
}

const ToDoList: React.SFC<IProps> = ({todos, onDeleteTodo}: IProps) => {

    const onBtnClick = (index: number) => {
       onDeleteTodo(index);
    }

    const items = todos.map((item: string, index: number) => {
        return (
            <li key={index}>
                {item}
                <button className='btn btn-error margin-left' 
                    onClick={onBtnClick.bind(ToDoList, index)}>X</button>
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