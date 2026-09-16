import { words } from "./words"

export function getDailyWord() {
    const startDate = Date.UTC(2026, 0, 1)
    const today = new Date()
    const todayUTC = Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate()
    )
    const difference = todayUTC - startDate
    const daysPassed = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    )
    const index = daysPassed % words.length
    return words[index]
}
