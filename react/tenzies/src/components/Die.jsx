import "./Die.css";

function Die(props) {
  const buttonClass = props.die.isHeld ? "held" : "";

  return (
    <button
      onClick={() => props.hold(props.die.id)}
      className={buttonClass}
      aria-pressed={props.die.isHeld}
      aria-label={`Die with value ${props.die.value}, ${
        props.die.isHeld ? "held" : "not held"
      }`}
    >
      {props.die.number}
    </button>
  );
}

export default Die;
