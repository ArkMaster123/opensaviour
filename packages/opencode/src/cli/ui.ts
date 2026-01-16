import z from "zod"
import { EOL } from "os"
import { NamedError } from "@opencode-ai/util/error"

export namespace UI {
  const LOGO = [
    [`█▀▀█ █▀▀█ █▀▀█ █▀▀▄ `, `█▀▀▀ █▀▀█ ▀█░█▀ ▀█▀ █▀▀█ █░░█ █▀▀█`],
    [`█░░█ █░░█ █▀▀▀ █░░█ `, `▀▀▀█ █▀▀█ ░█▄█░ ░█░ █░░█ █░░█ █▀▀▄`],
    [`▀▀▀▀ █▀▀▀ ▀▀▀▀ ▀  ▀ `, `▀▀▀▀ ▀░░▀ ░░▀░░ ▀▀▀ ▀▀▀▀ ░▀▀▀ ▀░░▀`],
  ]

  const SPARKLES = ["✦", "✧", "⋆", "˚", "✵", "⊹", "✶", "✷", "✸", "✹", "★", "☆", "✪", "✫", "✬"]
  const COLORS = [
    "\x1b[93m", // yellow
    "\x1b[96m", // cyan
    "\x1b[95m", // magenta
    "\x1b[97m", // white
    "\x1b[94m", // blue
  ]

  export const CancelledError = NamedError.create("UICancelledError", z.void())

  export const Style = {
    TEXT_HIGHLIGHT: "\x1b[96m",
    TEXT_HIGHLIGHT_BOLD: "\x1b[96m\x1b[1m",
    TEXT_DIM: "\x1b[90m",
    TEXT_DIM_BOLD: "\x1b[90m\x1b[1m",
    TEXT_NORMAL: "\x1b[0m",
    TEXT_NORMAL_BOLD: "\x1b[1m",
    TEXT_WARNING: "\x1b[93m",
    TEXT_WARNING_BOLD: "\x1b[93m\x1b[1m",
    TEXT_DANGER: "\x1b[91m",
    TEXT_DANGER_BOLD: "\x1b[91m\x1b[1m",
    TEXT_SUCCESS: "\x1b[92m",
    TEXT_SUCCESS_BOLD: "\x1b[92m\x1b[1m",
    TEXT_INFO: "\x1b[94m",
    TEXT_INFO_BOLD: "\x1b[94m\x1b[1m",
  }

  export function println(...message: string[]) {
    print(...message)
    Bun.stderr.write(EOL)
  }

  export function print(...message: string[]) {
    blank = false
    Bun.stderr.write(message.join(" "))
  }

  let blank = false
  export function empty() {
    if (blank) return
    println("" + Style.TEXT_NORMAL)
    blank = true
  }

  function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  function randomSparkle(): string {
    const sparkle = SPARKLES[Math.floor(Math.random() * SPARKLES.length)]
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]
    return color + sparkle + "\x1b[0m"
  }

  function generateSparkleField(width: number, density: number): string {
    let field = ""
    for (let i = 0; i < width; i++) {
      if (Math.random() < density) {
        field += randomSparkle()
      } else {
        field += " "
      }
    }
    return field
  }

  export async function animatedLogo(): Promise<void> {
    const isTTY = process.stderr.isTTY
    if (!isTTY) {
      Bun.stderr.write(logo() + EOL)
      return
    }

    const hide = "\x1b[?25l"
    const show = "\x1b[?25h"
    const clear = "\x1b[2K\r"
    const up = "\x1b[A"

    Bun.stderr.write(hide)

    try {
      // Phase 1: Sparkle intro
      for (let i = 0; i < 8; i++) {
        const sparkles = generateSparkleField(55, 0.15 + i * 0.05)
        Bun.stderr.write(clear + "  " + sparkles)
        await sleep(60)
      }
      Bun.stderr.write(clear)

      // Phase 2: Build logo line by line with sparkle trail
      const gray = Bun.color("gray", "ansi") || "\x1b[90m"
      const reset = "\x1b[0m"

      for (let rowIdx = 0; rowIdx < LOGO.length; rowIdx++) {
        const row = LOGO[rowIdx]
        const fullLine = row[0] + row[1]

        // Typewriter effect with sparkles
        for (let charIdx = 0; charIdx <= fullLine.length; charIdx++) {
          const visible = fullLine.slice(0, charIdx)
          const coloredVisible =
            gray + visible.slice(0, row[0].length) + reset + visible.slice(row[0].length)

          // Add trailing sparkle
          const sparkle = charIdx < fullLine.length ? randomSparkle() : ""

          Bun.stderr.write(clear + "  " + coloredVisible + sparkle)
          await sleep(4)
        }
        Bun.stderr.write(EOL)
      }

      // Phase 3: Sparkle burst celebration
      const totalHeight = LOGO.length
      for (let burst = 0; burst < 5; burst++) {
        // Move cursor up to top of logo
        for (let i = 0; i < totalHeight; i++) {
          Bun.stderr.write(up)
        }

        // Redraw with random sparkles overlaid
        for (let rowIdx = 0; rowIdx < LOGO.length; rowIdx++) {
          const row = LOGO[rowIdx]
          let line = "  " + gray + row[0] + reset + row[1]

          // Add sparkles at random positions around the logo
          const prefix = Math.random() < 0.4 ? randomSparkle() + " " : "  "
          const suffix = Math.random() < 0.4 ? " " + randomSparkle() : ""

          Bun.stderr.write(clear + prefix.slice(0, 2) + gray + row[0] + reset + row[1] + suffix + EOL)
        }
        await sleep(100)
      }

      // Final clean render
      for (let i = 0; i < totalHeight; i++) {
        Bun.stderr.write(up)
      }
      for (const row of LOGO) {
        Bun.stderr.write(clear + "  " + gray + row[0] + reset + row[1] + EOL)
      }

      // Eyes wink animation
      await sleep(300)
      const eyeFrames = ["◕ ◕", "◕ ‿", "‿ ◕", "◕ ◕", "◕ ◡ ◕", "✧ ◡ ✧"]
      for (const frame of eyeFrames) {
        Bun.stderr.write(clear + "             " + Style.TEXT_HIGHLIGHT + frame + reset + EOL)
        await sleep(150)
      }
      Bun.stderr.write(up + clear)

    } finally {
      Bun.stderr.write(show)
    }
  }

  export function logo(pad?: string) {
    const result = []
    for (const row of LOGO) {
      if (pad) result.push(pad)
      result.push(Bun.color("gray", "ansi"))
      result.push(row[0])
      result.push("\x1b[0m")
      result.push(row[1])
      result.push(EOL)
    }
    return result.join("").trimEnd()
  }

  export async function input(prompt: string): Promise<string> {
    const readline = require("readline")
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    return new Promise((resolve) => {
      rl.question(prompt, (answer: string) => {
        rl.close()
        resolve(answer.trim())
      })
    })
  }

  export function error(message: string) {
    println(Style.TEXT_DANGER_BOLD + "Error: " + Style.TEXT_NORMAL + message)
  }

  export function markdown(text: string): string {
    return text
  }
}
