import React from "react";
import { uuid } from 'uuidv4';
import {Link} from 'react-router-dom';



class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    const {  id,title, description, images,servings,prepTime,cookTime,postDate,editDate,ingredients,directions } = props.location.state.recipe;
    this.state = {
      
      id,title, description, images,servings,prepTime,cookTime,postDate,editDate,directions,ingredients
      
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.title === "" || this.state.description === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.updateRecipeHandler(this.state);
    this.setState({ title: "", description: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Recipe</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
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
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
            <div className="field">
            <label>Servings</label>
            <input
              type="text"
              name="servings"
              placeholder="Servings"
              value={this.state.servings}
              onChange={(e) => this.setState({ servings: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Preparation Time</label>
            <input
              type="text"
              name="preparation time"
              placeholder="Preparation time"
              value={this.state.prepTime}
              onChange={(e) => this.setState({ prepTime: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Cook Time</label>
            <input
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
              type="text"
              name="edit date"
              placeholder="Edit date"
              value={this.state.editDate}
              onChange={(e) => this.setState({ editDate: e.target.value })}
            />
          </div>

          
          </div>
          <button className="btn btn-primary">Update</button>
          <Link to="/">
          <button className="btn btn-primary right">
           Cancel
          </button>
        </Link>
        </form>
      </div>
    );
  }
}



export default EditRecipe;
