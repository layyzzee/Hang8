export default function CurrentWord(props) {

    const wordArray = [...props.currentWord]
    const wordElements = wordArray.map((letter, index) => {
        const isGuessed = props.guessedLetters.includes(letter)
        const shouldReveal = props.isGameLost || isGuessed
        return (
            shouldReveal ?
            <span className={isGuessed ? "letter" : "letter-missed"} key={index}>{letter.toUpperCase()}</span> :
            <span className="hidden-letter" key={index}>?</span>
        )
    })

    return (
        <div className="word-container">
            {wordElements}
        </div>
    )
}