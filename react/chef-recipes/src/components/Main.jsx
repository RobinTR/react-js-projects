import './Main.css'

export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const ingredient = formData.get("ingredient")
        ingredients.push(ingredient)
        event.target.reset()
        console.log(`Added ingredient: ${ingredient}`)
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" />
                <button type="submit">Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}