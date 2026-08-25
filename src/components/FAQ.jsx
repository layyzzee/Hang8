export default function FAQ(props) {
    const activeTitle = "How To Play ⬆️"
    const inactiveTitle = "How To Play ⬇️"
    return (
        <div className="faq-container">
            <button className="faq-button"
                onClick={props.toggleTutorial}>
                {props.tutorial ? activeTitle : inactiveTitle}
            </button>
            {props.tutorial && <div className="faq-content">
                <p>Guess the daily word by selecting letters from the alphabet. You have a total of eight incorrect guesses before the game is over.</p>
                <p>After guessing, the colour of that key on the keyboard display will turn green if correct, or red if incorrect.</p>
                <p>Correctly guessed letters will be revealed in their respective positions in the word, accounting for all instances of the letter.</p>
                <p>The game ends when you either guess the word correctly or run out of guesses.</p>
            </div>
            }
        </div>
    )
}