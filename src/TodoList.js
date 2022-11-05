import React from "react";

const todolist = [
  {
    id: 1,
    title: "Study",
  },
  {
    id: 2,
    title: "Workout",
  },
  {
    id: 3,
    title: "Buy food",
  },
  {
    id: 4,
    title: "Sleep",
  },
];

class TodoList extends React.Component {
  state = {
    toDo: "",
  };
  inputChange = (event) => {
    this.setState({
      toDo: event.target.value,
    });
    console.log(this.state.toDo);
  };
  btnClick = (event) => {
    const id = todolist.length + 1;
    todolist.push({ id: id, title: `${this.state.toDo}` });
    console.log(this.state.toDo);
    this.setState({
      toDo: " ",
    });
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.toDO}
          placeholder="What needs to be done?"
          onChange={this.inputChange}
        />
        <button type="button" onClick={this.btnClick}>
          Add
        </button>
        <ul>
          {todolist.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
