import { useEffect, useRef } from "react"

export default function MobileInput({ guessLetter, isGameOver, alphabet }) {
    const inputRef = useRef(null)

    useEffect(() => {
        const input = inputRef.current

        if (!input) return

        function handleInput(event) {
            const key = event.target.value.slice(-1).toUpperCase()

            if (!isGameOver && alphabet.includes(key)) {
                guessLetter(key)
            }
            event.target.value = ""
        }

        function handleScreenTap(event) {
            if (isGameOver) return
            const target = event.target
            if (
                target.closest("button") ||
                target.closest("a") ||
                target.closest("input")
            ) {return}
            input.focus()
        }

        input.addEventListener("input", handleInput)

        document.addEventListener(
            "pointerdown",
            handleScreenTap
        )
        return () => {
            input.removeEventListener(
                "input",
                handleInput
            )
            document.removeEventListener(
                "pointerdown",
                handleScreenTap
            )}
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
            spellCheck="false"
            disabled={isGameOver}
            aria-label="Type a letter"
        />
    )
}
