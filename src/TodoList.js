import React from "react";

class TodoList extends React.Component {
  state = {
    todolist: [
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
    ],
    toDo: "",
  };
  inputChange = (event) => {
    this.setState({
      toDo: event.target.value,
    });
    console.log(this.state.toDo);
  };
  btnClick = (event) => {
    let id = this.state.todolist.length + 1;
    this.setState({
      todolist: [...this.state.todolist, { id: id, title: this.state.toDo }],
      toDo: "",
    });
    event.preventDefault();
  };
  deleteItem = (event) => {
    const itemNumber = event.target.parentNode.getAttribute("name");
    console.log(itemNumber);
    const rm = this.state.todolist[itemNumber - 1];
    this.setState({
      todolist: this.state.todolist.filter((e) => e !== rm),
    });
  };
  resetClick = (event) => {
    this.setState({
      todolist: [],
      toDo: "",
    });
    event.preventDefault();
  };

  renderItems = (items, deleteItem) => {
    return items.map((item) => (
      <li key={item.id} name={item.id}>
        {item.title}
        <span> </span>
        <button type="button" onClick={deleteItem}>
          Delete
        </button>
      </li>
    ));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.toDo}
          placeholder="What needs to be done?"
          onChange={this.inputChange}
        />
        <button type="button" onClick={this.btnClick}>
          Add
        </button>
        <button type="reset" onClick={this.resetClick}>
          Clear
        </button>
        <ul>{this.renderItems(this.state.todolist, this.deleteItem)}</ul>
      </div>
    );
  }
}

export default TodoList;
