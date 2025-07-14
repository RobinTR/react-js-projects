import { useState } from "react";
import clsx from "clsx";

import Header from "./components/Header";
import LanguageChips from "./components/LanguageChips";
import GameStatus from "./components/GameStatus";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import { languages } from "./utils/languages";
import { getFarewellText, getRandomWord } from "./utils/gameUtils";

import "./App.css";

function App() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const totalGuessCount = languages.length - 1;
  const isGameLost = wrongGuessCount >= totalGuessCount;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];

  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function addGuessedLetter(letter) {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter]
    );
  }

  const gameStatusClass = clsx("game-status", {
    lost: isGameLost,
    won: isGameWon,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  function startNewGame() {
    setGuessedLetters([]);
    setCurrentWord(getRandomWord());
  }

  return (
    <>
      <Header />
      <main className="main">
        {/* 1. Game status message */}
        <section className={gameStatusClass} aria-live="polite" role="status">
          <GameStatus
            isGameOver={isGameOver}
            isGameWon={isGameWon}
            isGameLost={isGameLost}
            isLastGuessIncorrect={isLastGuessIncorrect}
            wrongGuessCount={wrongGuessCount}
            languages={languages}
            getFarewellText={getFarewellText}
          />
        </section>
        {/* 2. Life/chip indicator */}
        <LanguageChips
          languages={languages}
          wrongGuessCount={wrongGuessCount}
        />
        {/* 3. Word box */}
        <WordDisplay
          currentWord={currentWord}
          guessedLetters={guessedLetters}
          isGameLost={isGameLost}
        />
        {/* 4. Keyboard */}
        <Keyboard
          alphabet={alphabet}
          guessedLetters={guessedLetters}
          currentWord={currentWord}
          isGameOver={isGameOver}
          addGuessedLetter={addGuessedLetter}
        />
        {/* 5. New game button */}
        {isGameOver && (
          <button className="new-game" onClick={startNewGame}>
            New Game
          </button>
        )}
        {/* 6. Visually hidden status for screen readers */}
        <section className="sr-only" aria-live="polite" role="status">
          <p>
            {currentWord.includes(lastGuessedLetter)
              ? `Correct! The letter ${lastGuessedLetter} is in the word.`
              : `Sorry, The letter ${lastGuessedLetter} is not in the word.`}
            You have {totalGuessCount} attempt(s) left.
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
      </main>
    </>
  );
}

export default App;
