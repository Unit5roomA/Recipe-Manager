import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";


const RecipeDetail = (props) => {
  const { id, title, description,servings, prepTime,cookTime,ingredients, directions, images } = props.location.state.recipe;

  return (
    <div className="main">
      <div className="">
        <div className="mx-auto">
          <img src={images.medium} alt="user" className="rounded mx-auto d-block" />
        </div>
        <div className="content">
          <h4 className="my-4">{title}</h4>
          <p >{description}</p>

          <div className="d-flex justify-content-evenly mb-5">
          <button type="button" class="btn btn-success">{servings} mins Serving</button>
          <button type="button" class="btn btn-warning">{prepTime} mins Preparation Time</button>
          <button type="button" class="btn btn-danger">{cookTime} mins Cook Time</button>
          </div>
        </div>
      </div>

      <table className="table">
        <th>Name</th>
        <th>Measurement</th>
        <th>Amount</th>
        <tr>
        <td >
        {ingredients.map(ingredient => {
            return (
              <div>{ingredient.name}
              </div>
            )
          })} 
        </td>

        <td >
        {ingredients.map(ingredient => {
            return (
              <div>{ingredient.measurement}
              </div>
            )
          })} 
        </td>

        <td>
        {ingredients.map(ingredient => {
            return (
              <div>{ingredient.amount}
              </div>
            )
          })} 
        </td>
        </tr>
      </table>

          <h4>Directions</h4>
      <ol>
      {directions.map(direction => {
            return (
            
                <li>{direction.instructions}</li>
            
            )
          })} 
      </ol>
      
      <div className="center-div">
        <Link to="/">
          <button className="btn btn-primary">
            Back to Recipe List
          </button>
        </Link>
      </div>
    </div>
  );
};




export default RecipeDetail;


