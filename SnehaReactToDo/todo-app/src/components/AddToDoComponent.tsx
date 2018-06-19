import * as React from 'react';

interface IProps {
    onAddTodo: (todoItem: string) => void
}

const AddToDoComponent: React.SFC<IProps> = ({ onAddTodo }) => {

    let inputE1: HTMLInputElement;

    const setInputE1 = (e1: HTMLInputElement) => {
        inputE1 = e1;
    }

    const onBtnClicked = () => {
        onAddTodo(inputE1.value);
    }

    return (
        <React.Fragment>
            <div className="form-group">
                <input type="text" ref={setInputE1} className="form-control" />
            </div>
            <button onClick={onBtnClicked} className="btn btn-success">Add Todo</button>
        </React.Fragment>
    )
}

export default AddToDoComponent;