<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg" alt="Iran Flag" width="800">
</p>

<h1 align="center">
  🇮🇷 THE IRANIAN DEVELOPER 🇮🇷
</h1>
<h2 align="center">
  💻 Coding from IRAN • ✊ Fighting for Justice • 🕊️ Supporting PALESTINE
</h2>

<hr>

<p align="center">
  👨‍💻 Full-stack Developer | 🐍 Python & Flask | 🌐 Open Source Lover
</p>

<p align="center">
  ✨ "Code like a warrior, build like a legend, inspire like a hero." ✨
</p>

---

## 📊 GitHub Stats
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=aaq1386&show_icons=true&theme=radical&hide_border=true&border_radius=10" alt="GitHub Stats">
</p>

---

## 🐍 GitHub Contribution Snake

I automatically generate a cool **Snake animation** from my GitHub contributions using GitHub Actions.  
The animation updates every 6 hours and is also available in dark/light mode.

<details><summary>View Contribution Snake</summary>
<br/>
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/aaq1386/aaq1386/output/github-contribution-grid-snake-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/aaq1386/aaq1386/output/github-contribution-grid-snake.svg">
    <img alt="Contribution Snake" src="https://raw.githubusercontent.com/aaq1386/aaq1386/output/github-contribution-grid-snake.svg">
  </picture>
</p>
</details>

---

### ⚙️ GitHub Action for Snake Animation

```yaml
name: generate snake animation

on:
  schedule:
    - cron: "0 */6 * * *"
  workflow_dispatch:

jobs:
  generate:
    permissions:
      contents: write
    runs-on: ubuntu-latest
    timeout-minutes: 5
    steps:
      - name: Generate contribution snake SVG
        uses: Platane/snk/svg-only@v3
        with:
          github_user_name: ${{ github.repository_owner }}
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark

      - name: Push SVG to output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
````

---

<p align="center">
  🌟 Keep coding, keep fighting, keep dreaming! 🌟
</p>
