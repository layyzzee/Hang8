export default function FAQ(props) {
    const activeTitle = "How To Play ▲"
    const inactiveTitle = "How To Play ▼"
    return (
        <div className="faq-container">
            <button className="faq-button"
                onClick={props.toggleTutorial}>
                {props.tutorial ? activeTitle : inactiveTitle}
            </button>
            {props.tutorial && <div className="faq-content">
                <ul>
                    <li className="faq-item">Guess the daily word by selecting letters from the alphabet.</li>
                    <li className="faq-item">You lose after eight incorrect guesses.</li>
                    <li className="faq-item">Desktop users can use their keyboard or the on-screen keyboard.</li>
                    <li className="faq-item">Mobile users can tap the screen to display a native keyboard.</li>
                    <li className="faq-item">Correctly guessed letters will be revealed in their respective positions in the word, accounting for all instances of the letter.</li>
                    <li className="faq-last-item">The game ends when you either guess the word correctly or run out of guesses.</li>
                </ul>
                <p className="faq-note-desktop"><i>Note: </i>Desktop users can use their keyboard or the on-screen keyboard.</p>
                <p className="faq-note-mobile"><i>Note: </i>Mobile users can tap anywhere on the game screen to open the native keyboard.</p>
            </div>
            }
        </div>
    )
}