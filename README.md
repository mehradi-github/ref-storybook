# Building Design Systems in Storybook

[Storybook](https://storybook.js.org/docs#what-is-storybook) is a frontend workshop for building UI components and pages in isolation. It helps you develop and share hard-to-reach states and edge cases without needing to run your whole app. Thousands of teams use it for UI development, testing, and documentation. It's open source and free.[[more details]](https://stevekinney.net/courses/storybook/setting-up)

- [Building Design Systems in Storybook](#building-design-systems-in-storybook)
  - [Installation](#installation)
  - [Install Tailwind CSS](#install-tailwind-css)
  - [Visual Tests](#visual-tests)
  - [References:](#references)

## Installation

```sh
npx storybook@latest init

npm install --save-dev @storybook/react-vite

npm run storybook

npx storybook add @storybook/addon-theme

```

## [Install Tailwind CSS](https://github.com/mehradi-github/ref-portfolio?tab=readme-ov-file#install-tailwind-css-with-nextjs)

## Visual Tests

[Chromatic](https://www.chromatic.com/docs/) is a cloud-based software tool created by the maintainers of Storybook that automates visual testing for UI components and web applications. Since it’s made by the maintainers of Storybook, you can imagine that It integrates seamlessly with Storybook and allows you to capture snapshots of every story and compare them across different commits to identify visual changes.

## References:

- [clsx](https://www.npmjs.com/package/clsx)
- [cva](https://cva.style/docs)
- [anthology](https://github.com/stevekinney/anthology/tree/live-coding)
- [temporalio/ui](https://github.com/temporalio/ui/blob/main/src/lib/theme/plugin.ts)
