import "./Chip.css";

function Chip(props) {
  const styles = {
    backgroundColor: props.backgroundColor,
    color: props.color,
  };
  return (
    <span
      className={`chip ${props.isLanguageLost ? "lost" : ""}`}
      style={styles}
    >
      {props.name}
    </span>
  );
}

export default Chip;
