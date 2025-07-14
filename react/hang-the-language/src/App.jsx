import "./App.css";
import Header from "./components/Header";
import Chip from "./components/Chip";
import { languages } from "./utils/languages";
import { useState } from "react";
import clsx from "clsx";

function App() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

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
        aria-label={letter + " word"}
        key={letter}
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
  });

  function renderGameStatus() {
    if (!isGameOver) {
      return null;
    }

    if (isGameWon) {
      return (
        <>
          <h2>You Win!</h2>
          <p>Well done! 🎉</p>
        </>
      );
    } else {
      return (
        <>
          <h2>Game Over!</h2>
          <p>
            You lose! Better start learning {languages[languages.length - 1].name}
          </p>
        </>
      );
    }
  }

  return (
    <>
      <Header />
      <main className="main">
        <section className={gameStatusClass}>
          {renderGameStatus()}
        </section>
        <section className="language-chips">{chipElements}</section>
        <section className="word">{wordEl}</section>
        <section className="keyboard">{alphabetEl}</section>
        {isGameOver && <button className="new-game">New Game</button>}
      </main>
    </>
  );
}

export default App;
