import "./App.css";
import Header from "./components/Header";
import Chip from "./components/Chip";
import { languages } from "./utils/languages";
import { getFarewellText, getRandomWord } from "./utils/gameUtils";
import { useState } from "react";
import clsx from "clsx";
import ConfettiExplosion from "react-confetti-explosion";

function LanguageChips({ languages, wrongGuessCount }) {
  return (
    <section className="language-chips">
      {languages.map((language, i) => (
        <Chip
          key={language.name}
          isLanguageLost={i < wrongGuessCount}
          name={language.name}
          backgroundColor={language.backgroundColor}
          color={language.color}
        />
      ))}
    </section>
  );
}

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

function GameStatus({
  isGameOver,
  isGameWon,
  isGameLost,
  isLastGuessIncorrect,
  wrongGuessCount,
  languages,
  getFarewellText,
}) {
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
        <ConfettiExplosion
          force={0.8}
          duration={3000}
          particleCount={250}
          width={1600}
        />
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
