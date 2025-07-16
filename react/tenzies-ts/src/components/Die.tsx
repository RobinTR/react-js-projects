import "./Die.css";
import type { JSX } from "react";
import type { DieType } from "../types/index";

type DieProps = {
  die: DieType;
  hold: (id: string) => void;
};

function Die(props: DieProps): JSX.Element {
  const buttonClass: string = props.die.isHeld ? "held" : "";

  return (
    <button
      onClick={() => props.hold(props.die.id)}
      className={buttonClass}
      aria-pressed={props.die.isHeld}
      aria-label={`Die with value ${props.die.number}, ${
        props.die.isHeld ? "held" : "not held"
      }`}
    >
      {props.die.number}
    </button>
  );
}

export default Die;
