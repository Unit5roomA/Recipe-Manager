import React from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const RecipeList = (props) => {
  console.log(props);

  const deleteRecipeHandler = (id) => {
    props.getRecipeId(id);
  };

  const renderRecipeList = props.recipes.map((recipe) => {
    return (
      <RecipeCard
      recipe={recipe}
        clickHandler={deleteRecipeHandler}
        key={recipe.id}
      />
    );
  });
  return (
    <div className="main container">
      <h2>
      Recipe List
        <Link to="/add">
          {/* <button className="right btn btn-primary page-item disabled  ">Add Recipe</button> */}
          {/* page-item disabled */}
        </Link>
      </h2>
      <ul className="list-group list-group-flush">
      <li class="ui celled list">{renderRecipeList} </li>
    </ul>



    </div>
  );
};

export default RecipeList;
