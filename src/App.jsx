import { useState, useEffect } from "react"
import { getDailyWord, getFarewellText } from "./utils"
import { languages } from "./languages"
import Confetti from "react-confetti"
import clsx from "clsx"
import ToggleDark from "./components/ToggleDark"
import Header from "./components/Header"
import Status from "./components/Status"
import Languages from "./components/Languages"
import CurrentWord from "./components/CurrentWord"
import Keyboard from "./components/Keyboard"
import Share from "./components/Share"
import Farewell from "./components/Farewell"
import GuessCounter from "./components/GuessCounter"
import ScreenReader from "./components/ScreenReader"

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState(() => getDailyWord().toUpperCase())
  const [guessedLetters, setGuessedLetters] = useState([])
  const [theme, setTheme] = useState("dark")

  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
  const numGuessesLeft = languages.length - 1
  const wrongGuessCount = guessedLetters.filter(letter =>
    !currentWord.includes(letter)).length
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= numGuessesLeft
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]

  function guessLetter(letter) {
    setGuessedLetters(prev => prev.includes(letter) ? prev : [...prev, letter])
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  useEffect(() => {
    function handleKeyDown(event) {
      const key = event.key.toUpperCase();
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      if (isGameOver) return;
      if (alphabet.includes(key)) {
        guessLetter(key);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isGameOver, guessedLetters, currentWord]);


  return (
    <main>
      {isGameWon &&
        <Confetti
          recycle={false}
          numberOfPieces={1000}
        />}
      <ToggleDark
        theme={theme}
        setTheme={setTheme} />
      <Header />
      {isGameOver ? <Status
        isGameWon={isGameWon} /> : <Farewell
        wrongGuessCount={wrongGuessCount}
        guessedLetters={guessedLetters}
        currentWord={currentWord} />}
      <GuessCounter
        numGuessesLeft={numGuessesLeft}
        wrongGuessCount={wrongGuessCount} />
      <Languages
        wrongGuessCount={wrongGuessCount}
      />
      <CurrentWord
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />
      <ScreenReader
        lastGuessedLetter={lastGuessedLetter}
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        numGuessesLeft={numGuessesLeft}
        wrongGuessCount={wrongGuessCount}
      />
      <Keyboard
        alphabet={alphabet}
        guessedLetters={guessedLetters}
        guessLetter={guessLetter}
        currentWord={currentWord}
        isGameOver={isGameOver} />
      {isGameOver && <Share
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameWon={isGameWon} />}
    </main>
  )
}
