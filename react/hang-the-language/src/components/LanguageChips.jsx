import Chip from "./Chip";

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

export default LanguageChips;
