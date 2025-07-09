import './Main.css'
import { useState } from 'react'

export default function Main() {
    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"])
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleAction(formData) {
        const ingredient = formData.get('ingredient')
        setIngredients(prev => [...prev, ingredient])
    }

    return (
        <main>
            <form className="add-ingredient-form" action={handleAction}>
                <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" />
                <button type="submit">Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}