import "./App.css";
import Header from "./components/Header";
import Chip from "./components/Chip";
import { languages } from "./utils/languages";
import { getFarewellText, getRandomWord } from "./utils/gameUtils";
import { useState } from "react";
import clsx from "clsx";

function App() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const numGuessesLeft = languages.length - 1;
  const isGameLost = wrongGuessCount >= numGuessesLeft;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const wordEl = currentWord
    .split("")
    .map((letter, index) => (
      <span key={index}>
        {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    ));

  const alphabetEl = alphabet.split("").map((letter) => {
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
        aria-disabled={guessedLetters.includes(letter) || isGameOver}
        aria-label={`Letter ${letter}`}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  const chipElements = languages.map((language, i) => (
    <Chip
      key={language.name}
      isLanguageLost={i < wrongGuessCount}
      name={language.name}
      backgroundColor={language.backgroundColor}
      color={language.color}
    />
  ));

  function addGuessedLetter(letter) {
    setGuessedLetters((prev) =>
      guessedLetters.includes(letter) ? prev : [...prev, letter]
    );
  }

  const gameStatusClass = clsx("game-status", {
    lost: isGameLost,
    won: isGameWon,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="farewell-message">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      );
    }

    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      );
    }

    if (isGameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    }

    return null;
  }

  return (
    <>
      <Header />
      <main className="main">
        <section className={gameStatusClass} aria-live="polite" role="status">
          {renderGameStatus()}
        </section>
        <section className="language-chips">{chipElements}</section>
        <section className="word">{wordEl}</section>
        {/* This section is visually-hidden and it is for screen readers to announce the game status */}
        <section className="sr-only" aria-live="polite" role="status">
          <p>
            {currentWord.includes(lastGuessedLetter)
              ? `Correct! The letter ${lastGuessedLetter} is in the word.`
              : `Sorry, The letter ${lastGuessedLetter} is not in the word.`}
            You have {numGuessesLeft} attempt(s) left.
          </p>
          <p>
            Current word:{" "}
            {currentWord
              .split("")
              .map((letter) =>
                guessedLetters.includes(letter) ? letter + "." : "blank."
              )
              .join(" ")}
          </p>
        </section>
        <section className="keyboard">{alphabetEl}</section>
        {isGameOver && <button className="new-game">New Game</button>}
      </main>
    </>
  );
}

export default App;
