![Screenshot of Baseline theme for Obsidian in 3 different colors, with large text "Baseline" on the left side of the image.](img/hero.png)

### From the creator of [Cupertino](https://github.com/aaaaalexis/obsidian-cupertino/)

Baseline sets a new standard for your Obsidian vault experience — sleek, familiar, and effortlessly minimal, offering endless ways to make it yours.

[Support me and my work](https://www.buymeacoffee.com/sevenaxis) so I can keep providing regular updates and fixes. You’re also welcome to submit pull requests.

<a href="https://www.buymeacoffee.com/sevenaxis" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

And don’t forget to [support the amazing creators](#credits) whose work helped shape Baseline.

## Quick Start

### Migrate from other themes

Seamlessly migrate your existing Style Settings from supported themes.

**Get started with [Style Settings Migration Tool ↗](https://aaaaalexis.github.io/obsidian-baseline/migration)**

### Start with style presets

Discover and share Style Settings presets in Baseline Marketplace.

**Check out [Baseline Marketplace ↗](https://aaaaalexis.github.io/obsidian-baseline/marketplace)**

## Overview

- **Beautifully yours** — Customize your experience to your heart's content with [Style Settings](https://github.com/mgmeyers/obsidian-style-settings).

  ![Screenshot of Baseline theme for Obsidian in 6 different color schemes.](img/colors.png)

- **Minimal interface** — Clean, organized look and feel, with playful animations and effects.

  ![Composite image of various interface elements from Baseline theme for Obsidian.](img/elements.png)

- **Optimized for mobile** — Enhanced navigation, menus, editor, and more, with comfortable spacing for better usability.

  ![Screenshots of Baseline theme for Obsidian on mobile, on the left is a screenshot of the file navigation, on the right is a screenshot of the text editor.](img/mobile.png)

## Features

Baseline supports all helper classes (e.g. block width, cards, etc.) from [Minimal](https://github.com/kepano/obsidian-minimal).

### Banner

| Class          | Description                                                                   |
| :------------- | :---------------------------------------------------------------------------- |
| `banner`       | Add at the end of the image link, e.g. `![[image.jpeg\|banner]]`              |
| `banner-fade`  | Add faded edge to the banner (requires `banner`)                              |
| `banner-icon`  | Add an emoji or letter as note icon using callout, e.g. `> [!banner-icon] 👋` |
| `banner-title` | Moves inline title next to the icon (requires `banner-icon`)                  |
| `y0` to `y100` | Adjust the vertical position of the banner (requires `banner`, from 0 to 100) |

### [Block width](https://minimal.guide/features/block-width)

| Class                                  | Description                           |
| :------------------------------------- | :------------------------------------ |
| `wide`                                 | Entire note uses wide line width      |
| `max`                                  | Entire note uses max line width       |
| `table-100`, `bases-100`, `img-100`    | Fill 100% of the pane width           |
| `table-max`, `bases-max`, `img-max`    | Fill the max line width (default 90%) |
| `table-wide`, `bases-wide`, `img-wide` | Fill the wide line width              |

### [Cards](https://minimal.guide/Block+types/Cards)

| Class                 | Description                                      |
| :-------------------- | :----------------------------------------------- |
| `cards` (required)    | Set all Dataview tables to card layout           |
| `list-cards`          | Set all bullet lists to card layout              |
| `cards-align-bottom`  | Align the last element of a card to the bottom   |
| `cards-cover`         | Images are resized to fill the defined space     |
| `cards-16-9`          | Fit images in cards to 16:9 ratio                |
| `cards-1-1`           | Fit images in cards to 1:1 ratio (square)        |
| `cards-2-1`           | Fit images in cards to 2:1 ratio                 |
| `cards-2-3`           | Fit images in cards to 2:3 ratio                 |
| `cards-cols-1` to `8` | Force a specific number of columns (from 1 to 8) |

### Embeds

| Class              | Description              |
| :----------------- | :----------------------- |
| `embed-strict`     | Remove embed background  |
| `embed-hide-title` | Hide embedded file title |

### [Image filters](https://minimal.guide/images#Image+filters)

Add at the end of the image link, e.g. `![[image.jpeg#invert]]`

| Filter       | Description                                                                        |
| :----------- | :--------------------------------------------------------------------------------- |
| `#blend`     | Blend image into background                                                        |
| `#invert`    | Invert images in dark mode — ideal for charts and handwriting on light backgrounds |
| `#invertW`   | Invert images in light mode — ideal for charts and handwriting on dark backgrounds |
| `#circle`    | Crop image to a circle                                                             |
| `#outline`   | Add outline around image                                                           |
| `#interface` | Add drop shadow behind image                                                       |

### [Image grids](https://minimal.guide/Block+types/Image+grids)

| Class      | Description          |
| :--------- | :------------------- |
| `img-grid` | Activate image grids |

### [Tables](https://minimal.guide/tables)

| Class           | Description                                                    |
| :-------------- | :------------------------------------------------------------- |
| `table-nowrap`  | Disable line wrapping in table cells                           |
| `table-wrap`    | Force line wrapping in table cells                             |
| `table-center`  | Center small tables narrower than line width                   |
| `table-numbers` | Add row numbers to tables                                      |
| `table-tabular` | Use tabular figures in tables                                  |
| `table-small`   | Use small font size in tables                                  |
| `table-tiny`    | Use tiny font size in tables                                   |
| `table-lines`   | Add borders around all table cells                             |
| `row-lines`     | Add borders between table rows                                 |
| `col-lines`     | Add borders between table columns                              |
| `row-alt`       | Add striped background to alternating table rows               |
| `col-alt`       | Add striped background to alternating table columns            |
| `row-hover`     | Highlight rows on hover                                        |
| `bases-row-alt` | Add striped background to alternating Bases table view rows    |
| `bases-col-alt` | Add striped background to alternating Bases table view columns |

### [Alternate checkboxes](https://github.com/damiankorcz/Alternative-Checkboxes-Reference-Set)

![Preview of alternate checkboxes.](img/checkbox.png)

| Syntax  | Description |
| ------- | ----------- |
| `- [ ]` | To-do       |
| `- [/]` | Incomplete  |
| `- [x]` | Done        |
| `- [-]` | Canceled    |
| `- [>]` | Forwarded   |
| `- [<]` | Scheduling  |
| `- [?]` | Question    |
| `- [!]` | Important   |
| `- [*]` | Star        |
| `- ["]` | Quote       |
| `- [l]` | Location    |
| `- [b]` | Bookmark    |
| `- [i]` | Information |
| `- [S]` | Savings     |
| `- [I]` | Idea        |
| `- [p]` | Pros        |
| `- [c]` | Cons        |
| `- [f]` | Fire        |
| `- [k]` | Key         |
| `- [w]` | Win         |
| `- [u]` | Up          |
| `- [d]` | Down        |
| `- [+]` | Add         |
| `- [B]` | Brainstorm  |
| `- [a]` | Alarm       |
| `- [n]` | Note        |
| `- [R]` | Review      |
| `- [t]` | Time        |
| `- [P]` | Phone       |
| `- [L]` | Love        |

## Philosophy

### Less _and_ more

Baseline delivers a clean, modern, and polished foundation right out of the box, with endless customization options to let you tailor Obsidian to your heart's content. Every option is thoughtfully designed to ensure Baseline stays both simple and beautiful.

### A love letter to the community

Shaped by the community, Baseline gives back through a rich collection of innovations: polished interface, compact elements, hover sidebars, with more to come. Baseline aims to be more than just a theme, but a fresh starting point, a new baseline for the community going forward.

## Credits

Special thanks to the community for helping make Baseline a reality. Please support them as well!

### Community Themes

- **kepano - [Minimal](https://github.com/kepano/obsidian-minimal)**: Cards, Color schemes, Image filters, Table helpers, Style Settings [Buy them a coffee!](https://buymeacoffee.com/kepano)
- **AnubisNekhet - [AnuPpuccin](https://github.com/AnubisNekhet/AnuPpuccin/)**: Catppuccin color schemes [Buy them a coffee!](https://buymeacoffee.com/anubisnekhet)
- **jdanielmourao - [Sanctum](https://github.com/jdanielmourao/obsidian-sanctum)**: Sanctum color scheme, Elevated element style [Support them!](https://ko-fi.com/X8X56R5Q1)
- **kyffa - [Iridium](https://github.com/kyffa/Iridium)**: Frame layout style
- **vladstudio - [Tiniri](https://tiniri.vlad.studio/)**: Tiniri color scheme [Support them!](https://vlad.studio/signup/)

### Extras

- **Warren2060 - [ChillJinshuSong](https://github.com/Warren2060/ChillJinshuSong)**: Font for extended language support
- **bwya77**: Admin color scheme, Block properties style

## License

Baseline is licensed under the [MIT license](LICENSE). You’re free to take any component of Baseline and build on top of it.
Let’s make a better community by creating amazing themes for everyone!
