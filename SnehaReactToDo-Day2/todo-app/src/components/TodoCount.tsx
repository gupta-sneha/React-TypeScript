import * as React from 'react';

interface IProps {
    todoCount: number
}

const TodoCount: React.SFC<IProps> = ({todoCount}:IProps) => {
    return (
        <div className="todo-count">
            <span className="todoCount-style">There are total {todoCount} items </span>
        </div>
    )
};

export default TodoCount;