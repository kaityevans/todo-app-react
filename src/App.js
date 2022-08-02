import React, { Component } from "react";
import { nanoid } from 'nanoid'
// import logo from "./logo.svg";
// import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isClicked: false,
      todos: [{ id: "1", todo: "Feed fish" },{ id: "2", todo: "Go to place" },{ id: "3", todo: "Something else" },],
      text: ""
    }
  }

  // handleClick = () => {
  //   this.setState({isClicked: !this.state.isClicked})
  // }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = () => {
    this.setState({
      todos: [...this.state.todos, { id: nanoid(), todo: this.state.text }],
      text: ""
    })
  }

  handleClick = (e, id) => {
    // console.log(e.target.innerText, id);
    const filteredTodos = this.state.todos.filter((todo) => todo.id !== id);
    // console.log(filteredTodos)

    this.setState({
      todos: filteredTodos,
    });
  };

  componentDidUpdate() {}

  render() {
    return(
    <div className="app">
    <h2>Todo List</h2>
    <input type="text" onChange={this.handleChange} value={this.state.text}/>
    {/* <button onClick={this.handleClick}>{this.isClicked ? "Toggle" : "Untoggle"}</button> */}
    <button onClick={this.handleSubmit}>Submit</button>
    <ul>
      {
        this.state.todos.map(({ todo, id}) => {
          return <li key={id} onClick={(e) => this.handleClick(e, id)}>{todo}</li>
        })
      }
    </ul>
  </div>)
  }
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       isClicked: false,
//     };
//   }
//   render() {
//     return (
//       <div className="app">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>Kaitland</p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
