import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import './App.css';
import ResultItem from './ResultItem';

interface IUser {
  name: string;
}

interface IState {
  title: string;
  user: IUser[];
}

const userList = [
  {
    name: 'Rajnikant'
  }, {
    name: 'Surya'
  }, {
    name: 'Ajith'
  }
]

class App extends React.Component<{}, IState> {
  public state: Readonly<IState> = {
    title: 'initial title',
    user: userList
  }

  public onBtnClick = () => {
    alert('Hello');
  }

  public onClickOfBtn = () => {
    this.setState({
      title: 'new title'
    })
  }

  public onQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    alert(e.target.value);
    const filteredUsers = this.state.user.
      filter((item: IUser) => {
        return item.name.includes(e.target.value)
      });

    this.setState({
      user: filteredUsers
    });
  }

  public render() {
    // const liItems = this.state.user.map((u, index) => (<li key={index}>{u.name}</li>));
    const liItems = this.state.user.map((u, index) => (<ResultItem title ={u.name} key={index}/>));
    return (
      <div className="App">
        <input type="text" onChange={this.onQuery} />
        <ul>
          {liItems}
        </ul>

      </div>
    );
  }
}

export default App;
