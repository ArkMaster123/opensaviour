<p align="center">
  <a href="https://opensaviour-tau.vercel.app">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="OpenSaviour logo">
    </picture>
  </a>
</p>
<p align="center">The open source AI coding agent.</p>
<p align="center">
  <a href="https://opensaviour-tau.vercel.app/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/opensaviour"><img alt="npm" src="https://img.shields.io/npm/v/opensaviour?style=flat-square" /></a>
  <a href="https://github.com/ArkMaster123/opensaviour/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/ArkMaster123/opensaviour/publish.yml?style=flat-square&branch=dev" /></a>
</p>

[![OpenSaviour Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://opensaviour-tau.vercel.app)

---

### Installation

```bash
# YOLO
curl -fsSL https://opensaviour-tau.vercel.app/install | bash

# Package managers
npm i -g opensaviour@latest        # or bun/pnpm/yarn
scoop bucket add extras; scoop install extras/opensaviour  # Windows
choco install opensaviour          # Windows
brew install ark-master/tap/opensaviour # macOS and Linux (recommended, always up to date)
brew install opensaviour           # macOS and Linux (official brew formula, updated less)
paru -S opensaviour-bin            # Arch Linux
mise use -g opensaviour            # Any OS
nix run nixpkgs#opensaviour        # or github:ArkMaster123/opensaviour for latest dev branch
```

> [!TIP]
> Remove versions older than 0.1.x before installing.

### Desktop App (BETA)

OpenSaviour is also available as a desktop application. Download directly from the [releases page](https://github.com/ArkMaster123/opensaviour/releases) or [opensaviour-tau.vercel.app/download](https://opensaviour-tau.vercel.app/download).

| Platform              | Download                                |
| --------------------- | --------------------------------------- |
| macOS (Apple Silicon) | `opensaviour-desktop-darwin-aarch64.dmg` |
| macOS (Intel)         | `opensaviour-desktop-darwin-x64.dmg`     |
| Windows               | `opensaviour-desktop-windows-x64.exe`    |
| Linux                 | `.deb`, `.rpm`, or AppImage             |

```bash
# macOS (Homebrew)
brew install --cask opensaviour-desktop
```

#### Installation Directory

The install script respects the following priority order for the installation path:

1. `$OPENSAVIOUR_INSTALL_DIR` - Custom installation directory
2. `$XDG_BIN_DIR` - XDG Base Directory Specification compliant path
3. `$HOME/bin` - Standard user binary directory (if exists or can be created)
4. `$HOME/.opensaviour/bin` - Default fallback

```bash
# Examples
OPENSAVIOUR_INSTALL_DIR=/usr/local/bin curl -fsSL https://opensaviour-tau.vercel.app/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://opensaviour-tau.vercel.app/install | bash
```

### Agents

OpenSaviour includes two built-in agents you can switch between with the `Tab` key.

- **build** - Default, full access agent for development work
- **plan** - Read-only agent for analysis and code exploration
  - Denies file edits by default
  - Asks permission before running bash commands
  - Ideal for exploring unfamiliar codebases or planning changes

Also, included is a **general** subagent for complex searches and multistep tasks.
This is used internally and can be invoked using `@general` in messages.

Learn more about [agents](https://opensaviour-tau.vercel.app/docs/agents).

### Documentation

For more info on how to configure OpenSaviour [**head over to our docs**](https://opensaviour-tau.vercel.app/docs).

### Contributing

If you're interested in contributing to OpenSaviour, please read our [contributing docs](./CONTRIBUTING.md) before submitting a pull request.

### Building on OpenSaviour

If you are working on a project that's related to OpenSaviour and is using "opensaviour" as a part of its name; for example, "opensaviour-dashboard" or "opensaviour-mobile", please add a note to your README to clarify that it is not built by the OpenSaviour team and is not affiliated with us in any way.

### FAQ

#### How is this different from Claude Code?

It's very similar to Claude Code in terms of capability. Here are the key differences:

- 100% open source
- Not coupled to any provider. Although we recommend the models we provide through [OpenSaviour Zen](https://opensaviour-tau.vercel.app/zen); OpenSaviour can be used with Claude, OpenAI, Google or even local models. As models evolve the gaps between them will close and pricing will drop so being provider-agnostic is important.
- Out of the box LSP support
- A focus on TUI. OpenSaviour is built by neovim users and the creators of [terminal.shop](https://terminal.shop); we are going to push the limits of what's possible in the terminal.
- A client/server architecture. This for example can allow OpenSaviour to run on your computer, while you can drive it remotely from a mobile app. Meaning that the TUI frontend is just one of the possible clients.

---

**Join our community** [Discord](https://discord.gg/opensaviour) | [X.com](https://x.com/opensaviour)
