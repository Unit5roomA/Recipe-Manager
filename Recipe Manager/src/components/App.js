import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/recipes";
import "./App.css";
import Header from "./Header";
import AddRecipe from "./AddRecipe";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";
import EditRecipe from "./EditRecipe";

function App() {
  const LOCAL_STORAGE_KEY = "recipes";
  const [recipes, setRecipes] = useState([]);

  //RetrieveRecipes
  const retrieveRecipes = async () => {
    const response = await api.get("/recipes");
    return response.data;
  };

  const addRecipeHandler = async (recipe) => {
    console.log(recipe);
    const request = {
      id: uuid(),
      ...recipe,
    };

    const response = await api.post("/recipes", request);
    console.log(response);
    setRecipes([...recipes, response.data]);


  };

  const updateRecipeHandler = async (recipe) => {
    const response = await api.put(`/recipes/${recipe.id}`, recipe);
    const { id, title, description, servings, prepTime,cookTime,ingredients, directions, images} = response.data;
    setRecipes(
      recipes.map((recipe) => {
        return recipe.id === id ? { ...response.data } : recipe;
      })
    );
  };

  const removeRecipeHandler = async (id) => {
    await api.delete(`/recipes/${id}`);
    const newRecipeList = recipes.filter((recipe) => {
      return recipe.id !== id;
    });

    setRecipes(newRecipeList);
  };

  useEffect(() => {
   
    const getAllRecipes = async () => {
      const allRecipes = await retrieveRecipes();
      if (allRecipes) setRecipes(allRecipes);
    };

    getAllRecipes();
  }, []);

  useEffect(() => {

  }, [recipes]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <RecipeList
                {...props}
                recipes={recipes}
                getRecipeId={removeRecipeHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddRecipe {...props} addRecipeHandler={addRecipeHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditRecipe
                {...props}
                updateRecipeHandler={updateRecipeHandler}
              />
            )}
          />

          <Route path="/recipe/:id" component={RecipeDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
