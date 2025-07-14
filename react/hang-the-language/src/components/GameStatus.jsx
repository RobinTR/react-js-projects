import ConfettiExplosion from "react-confetti-explosion";

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

export default GameStatus;
