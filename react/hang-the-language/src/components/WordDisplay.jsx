import clsx from "clsx";

function WordDisplay({ currentWord, guessedLetters, isGameLost }) {
  return (
    <section className="word">
      {currentWord.split("").map((letter, index) => {
        const shouldRevealLetter =
          isGameLost || guessedLetters.includes(letter);
        const letterClassName = clsx(
          isGameLost && !guessedLetters.includes(letter) && "missed-letter"
        );
        return (
          <span className={letterClassName} key={index}>
            {shouldRevealLetter ? letter.toUpperCase() : ""}
          </span>
        );
      })}
    </section>
  );
}

export default WordDisplay;
