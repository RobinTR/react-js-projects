import "./App.css";
import Die from "./components/Die";
import React from "react";
import { nanoid } from "nanoid";
import ConfettiExplosion from "react-confetti-explosion";
import type { JSX } from "react";
import type { DieType } from "./types/index";

const DICE_COUNT = 10;
const DIE_SIDES = 6;

function generateAllNewDice(): DieType[] {
  const newDice: DieType[] = [];
  for (let i = 0; i < DICE_COUNT; i++) {
    const random: number = Math.ceil(Math.random() * DIE_SIDES);
    newDice.push({
      number: random,
      isHeld: false,
      id: nanoid(),
    });
  }
  return newDice;
}

function App() {
  //lazy initialization of state
  //this is useful when the initial state is expensive to compute
  //or when you want to avoid unnecessary re-renders
  const [dice, setDice] = React.useState<DieType[]>(() => generateAllNewDice());
  const rollDiceRef = React.useRef<HTMLButtonElement>(null);

  const gameWon: boolean = dice.every(
    (die: DieType): boolean => die.isHeld && die.number === dice[0].number
  );

  React.useEffect(() => {
    if (gameWon && rollDiceRef.current) {
      rollDiceRef.current.focus();
    }
  }, [gameWon]);

  const diceElements: JSX.Element[] = dice.map(
    (die: DieType): JSX.Element => (
      <Die key={die.id} die={die} hold={onHoldDice} />
    )
  );

  function onRollDice(): void {
    if (!gameWon) {
      setDice(
        dice.map(
          (die: DieType): DieType =>
            !die.isHeld ? { ...die, number: Math.ceil(Math.random() * DIE_SIDES) } : die
        )
      );
    } else {
      setDice(generateAllNewDice());
    }
  }

  function onHoldDice(id: string): void {
    setDice((prevDice: DieType[]): DieType[] =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  return (
    <main className="main">
      {gameWon && (
        <ConfettiExplosion
          force={0.8}
          duration={3000}
          particleCount={250}
          width={1600}
        />
      )}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button ref={rollDiceRef} onClick={onRollDice} className="roll-dice">
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
