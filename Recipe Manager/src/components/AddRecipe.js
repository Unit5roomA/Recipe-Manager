import React from "react";
import {Link} from "react-router-dom";

class AddRecipe extends React.Component {
  state = {
    title: "",
    description: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.description === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addRecipeHandler(this.state);
    this.setState({ title: "", description: ""});
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Recipe</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Title</label>
            <input
            className="form-control" type="text" placeholder="Default input" aria-label="default input example"
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              className="form-control" type="text" placeholder="Default input" aria-label="default input example"
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Servings</label>
            <input
              className="form-control" type="text" placeholder="Default input" aria-label="default input example"
              type="text"
              name="servings"
              placeholder="Servings"
              value={this.state.servings}
              onChange={(e) => this.setState({ servings: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Cook Time</label>
            <input
              className="form-control" type="text" placeholder="Default input" aria-label="default input example"
              type="text"
              name="cook time"
              placeholder="Cook time"
              value={this.state.cookTime}
              onChange={(e) => this.setState({ cookTime: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Post Date</label>
            <input
              className="form-control" type="text" placeholder="Default input" aria-label="default input example"
              type="text"
              name="post date"
              placeholder="Post date"
              value={this.state.postDate}
              onChange={(e) => this.setState({ postDate: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Edit Date</label>
            <input
              className="form-control" type="text" placeholder="Default input" aria-label="default input example"
              type="text"
              name="edit date"
              placeholder="Edit date"
              value={this.state.editDate}
              onChange={(e) => this.setState({ editDate: e.target.value })}
            />
          </div>
      
          <div className="mt-3">
          <button className="btn btn-primary">Add</button>
          <Link to="/">
          <button className="btn btn-primary right ">
            Cancel
          </button>
        </Link>
        </div>
      
        </form>
      </div>
    );
  }
}

export default AddRecipe;
