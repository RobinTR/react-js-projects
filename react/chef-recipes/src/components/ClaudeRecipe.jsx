import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./ClaudeRecipe.css";

export default function ClaudeRecipe({ recipe, loading }) {
  return (
    <section>
      <article className="suggested-recipe-container" aria-live="polite">
        {loading ? (
          <div className="loading">
            Chef is preparing your recipe... Please wait
          </div>
        ) : (
          recipe && (
            <>
              <h2>Chef Claude Recommends:</h2>
              <ReactMarkdown children={recipe} remarkPlugins={[remarkGfm]} />
            </>
          )
        )}
      </article>
    </section>
  );
}
