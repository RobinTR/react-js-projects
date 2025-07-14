import clsx from "clsx";

function Keyboard({
  alphabet,
  guessedLetters,
  currentWord,
  isGameOver,
  addGuessedLetter,
}) {
  return (
    <section className="keyboard">
      {alphabet.split("").map((letter) => {
        const isGuessed = guessedLetters.includes(letter);
        const isCorrect = isGuessed && currentWord.includes(letter);
        const isWrong = isGuessed && !currentWord.includes(letter);
        const className = clsx("alphabet", {
          correct: isCorrect,
          wrong: isWrong,
        });
        return (
          <button
            className={className}
            onClick={() => addGuessedLetter(letter)}
            key={letter}
            disabled={isGameOver}
            aria-disabled={isGuessed || isGameOver}
            aria-label={`Letter ${letter}`}
          >
            {letter.toUpperCase()}
          </button>
        );
      })}
    </section>
  );
}

export default Keyboard;
