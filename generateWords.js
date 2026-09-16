import { words } from "./src/oldWords.js"
import fs from "fs"

const cleanWords = [...new Set(words)]
    .filter(word => /^[a-z]{8}$/.test(word))

console.log(`Original words: ${words.length}`)
console.log(`Clean 8-letter words: ${cleanWords.length}`)
console.log(`Removed: ${words.length - cleanWords.length}`)
console.log(`All 8 letters: ${cleanWords.every(word => word.length === 8)}`)
console.log(`Duplicates: ${cleanWords.length !== new Set(cleanWords).size}`)

fs.writeFileSync(
    "./src/words.js",
    `export const words = ${JSON.stringify(cleanWords, null, 4)}\n`
)

console.log("Created src/words.js")
