import React from "react";
import { Link } from "react-router-dom";
import chef from "../images/chef.jpg";


const RecipeCard = (props) => {
  const { id, title, description, images, servings,prepTime,cookTime,ingredients} = props.recipe;

  return (
    <div className="item">
        
      <div className="content">
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { recipe: props.recipe } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
        <Link
          to={{ pathname: `/recipe/${id}`, state: { recipe: props.recipe } }}>
           <img src={images.small} alt="chef" />
          <h4 >{title}</h4>
          <p>{description}</p>
          <div className="">
          <button type="button" class="btn btn-success ">{servings} mins Serving</button>
          <button type="button" class="btn btn-warning mx-2">{prepTime} mins Preparation Time</button>
          <button type="button" class="btn btn-danger mx-2">{cookTime} mins Cook Time</button>
          </div>
        </Link>
      </div>
    </div>
  );
};





export default RecipeCard;
