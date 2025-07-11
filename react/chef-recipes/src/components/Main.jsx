import "./Main.css";
import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  function handleAction(formData) {
    const ingredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, ingredient]);
  }

  /*
  function getRecipe() {
    getRecipeFromMistral(ingredients).then((recipeFromApi) => {
      setRecipe(recipeFromApi);
    });
  }
  */

  async function getRecipe() {
    setLoading(true);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    setLoading(false);
  }

  return (
    <main>
      <form action={handleAction} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientList
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {(loading || recipe) && <ClaudeRecipe loading={loading} recipe={recipe} />}
    </main>
  );
}
