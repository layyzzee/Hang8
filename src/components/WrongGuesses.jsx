export default function WrongGuesses({ currentWord, guessedLetters }) {

    const wrongGuesses = guessedLetters.filter(
        letter => !currentWord.includes(letter)
    )

    return (
        <div className="wrong-guesses">
            <span className="wrong-guesses-title">
                Wrong Guesses:
            </span>

            <div className="wrong-letters">
                {wrongGuesses.map(letter => (
                    <span className="wrong-letter" key={letter}>
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    )
}
