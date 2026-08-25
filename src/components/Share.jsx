import { useState } from "react"

export default function Share({ currentWord, guessedLetters, isGameWon }) {
    const [copied, setCopied] = useState(false)

    const guessResults = currentWord.split("").map(letter => guessedLetters
        .includes(letter) ? "🟩" : "🟥").join("")

    const correctGuesses = guessedLetters.filter(letter => currentWord.includes(letter)).length

    const hangmanNumber = Math.floor((new Date() - new Date("2026-08-25"))
        / (1000 * 60 * 60 * 24)) + 1

async function shareResults() {
const shareText =`🎮 Hang8 #${hangmanNumber} ${correctGuesses}/5
${guessResults}
${isGameWon ?
`Won in ${guessedLetters.length} guesses\n` : ""}Play here: https://layyzzee.github.io/Hang8/`

        try {
            await navigator.clipboard.writeText(shareText)
            setCopied(true)

            setTimeout(() => {
                setCopied(false)
            }, 2000)
        } catch (error) {
            console.error("Failed to copy:", error)
        }
    }

    return (
        <button className="share-button" onClick={shareResults}>
            {copied ? "Copied! ✓" : "Share 🔗"}
        </button>
    )
}
