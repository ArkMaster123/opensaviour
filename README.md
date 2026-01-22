<p align="center">
  <h1 align="center">OpenSaviour</h1>
</p>
<p align="center">The open source AI coding agent.</p>
<p align="center">
  <a href="https://github.com/ArkMaster123/opensaviour"><img alt="GitHub" src="https://img.shields.io/github/stars/ArkMaster123/opensaviour?style=flat-square" /></a>
</p>

<p align="center">
  <video src="https://github.com/ArkMaster123/opensaviour/raw/production/assets/demo.mp4" width="100%" autoplay loop muted playsinline></video>
</p>

https://github.com/ArkMaster123/opensaviour/raw/production/assets/demo.mp4

---

> **Acknowledgements**
>
> OpenSaviour is built on top of [OpenCode](https://github.com/anomalyco/opencode) by the amazing team at [Anomaly](https://anomaly.co). Huge thanks to them for creating such a powerful open source AI coding agent! This project would not be possible without their incredible work.

---

### Installation

```bash
curl -fsSL https://opensaviour-kohl.vercel.app/install | bash
```

### What is OpenSaviour?

OpenSaviour is a fork of OpenCode that installs to a separate directory (`~/.opensaviour`) so it doesn't conflict with existing OpenCode installations.

### Agents

OpenSaviour includes two built-in agents you can switch between with the `Tab` key.

- **build** - Default, full access agent for development work
- **plan** - Read-only agent for analysis and code exploration
  - Denies file edits by default
  - Asks permission before running bash commands
  - Ideal for exploring unfamiliar codebases or planning changes

Also, included is a **general** subagent for complex searches and multistep tasks.
This is used internally and can be invoked using `@general` in messages.

### Documentation

For more info on how to configure OpenSaviour, check out the [OpenCode docs](https://opencode.ai/docs) as the configuration is the same.

### Credits

- [OpenCode](https://github.com/anomalyco/opencode) - The original project this is forked from
- [Anomaly](https://anomaly.co) - The team behind OpenCode

---

**Original Project**: [OpenCode](https://opencode.ai) | [Discord](https://discord.gg/opencode) | [X.com](https://x.com/opencode)
