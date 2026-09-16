import { useEffect, useRef } from "react"

export default function MobileInput({ guessLetter, isGameOver, alphabet }) {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    useEffect(() => {
        function handleInput(event) {
            const key = event.target.value.slice(-1).toUpperCase()

            if (!isGameOver && alphabet.includes(key)) {
                guessLetter(key)
            }
            event.target.value = ""
        }
        const input = inputRef.current
        input.addEventListener("input", handleInput)
        return () => {
            input.removeEventListener("input", handleInput)
        }
    }, [guessLetter, isGameOver, alphabet])

    return (
        <input
            ref={inputRef}
            className="mobile-input"
            type="text"
            inputMode="text"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="characters"
        />
    )
}
