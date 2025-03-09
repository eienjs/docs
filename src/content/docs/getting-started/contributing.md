---
title: Contributions
description: NodeCfdi Contributions.
---

This is a general contribution guide for all of the [EienJS](https://github.com/eienjs) repos.
Please read this guide thoroughly before contributing to any of the repos 🙏

## Reporting bugs

Many issues reported on open source projects are usually questions or misconfiguration at the
reporter's end. Therefore, we highly recommend you properly troubleshoot your issues before
reporting them.

If you're reporting a bug, include as much information as possible with the code samples you have
written. The scale of good to bad issues looks as follows.

- **PERFECT ISSUE**: You isolate the underlying bug. Create a failing test in the repo and open a
  Github issue around it.
- **GOOD ISSUE**: You isolate the underlying bug and provide a minimal reproduction of it as a
  Github repo. Antfu has written a great article on
  [Why Reproductions are Required](https://antfu.me/posts/why-reproductions-are-required).
- **DECENT ISSUE**: You correctly state your issue. Share the code that produces the issue in the
  first place. Also, include the related configuration files and the package version you use.

  Last but not least is to format every code block properly by following the
  [Github markdown syntax guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

- **POOR ISSUE**: You dump the question you have with the hope that the other person will ask the
  relevant questions and help you. These kinds of issues are closed automatically without any
  explanation.

## Having a discussion

You often want to discuss a topic or maybe share some ideas. In that case, create a discussion in
the discussions forum under the **💡Ideas** category.

## Creating pull requests

It is never a good experience to have your pull request declined after investing a lot of time and
effort in writing the code. Therefore, we highly recommend you to [kick off a discussion]() before
starting any new work on your side.

Just start a discussion and explain what are you planning to contribute?

- **Are you trying to create a PR to fix a bug**: PRs for bugs are mostly accepted once the bug has
  been confirmed.
- **Are you planning to add a new feature**: Please thoroughly explain why this feature is required
  and share links to the learning material we can read to educate ourselves.

> Note: You should also be available to open additional PRs for documenting the contributed feature
> or improvement.

## Repository setup

1. Start by cloning the repo on your local machine.

   ```sh
   git clone <REPO_URL>
   ```

2. Install dependencies on your local. Please do not update any dependencies along with a feature
   request. If you find stale dependencies, create a separate PR to update them.

   We use `pnpm` for managing dependencies, therefore do not use `yarn`, `npm` or any other tool.

   ```sh
   pnpm install
   ```

3. Run tests by executing the following command.

   ```sh
   pnpm run test
   ```

## Tools in use

Following is the list of tools in use.

| Tool                   | Usage                                                                                                                                                                                                                                                                  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TypeScript             | All of the repos are authored in TypeScript. The compiled JavaScript and Type-definitions are published on npm.                                                                                                                                                        |
| TS Node                | We use [ts-node](https://typestrong.org/ts-node/) to run tests or scripts without compiling TypeScript. The main goal of ts-node is to have a faster feedback loop during development                                                                                  |
| SWC                    | [SWC](https://swc.rs/) is a Rust based TypeScript compiler. TS Node ships with first-class support for using SWC over the TypeScript official compiler. The main reason for using SWC is the speed gain.                                                               |
| NP                     | We use [np](https://github.com/sindresorhus/np) to publish our packages on npm. Np does all the heavy lifting of creating a release and publishes it on npm and Github. The np config is defined within the `package.json` file.                                       |
| ESLint                 | ESLint helps us enforce a consistent coding style across all the repos with multiple contributors.                                                                                                                                                                     |
| Prettier               | We use prettier to format the codebase for consistent visual output. If you are confused about why we are using ESLint and Prettier both, then please read [Prettier vs. Linters](https://prettier.io/docs/en/comparison.html) doc on the Prettier website.            |
| EditorConfig           | The `.editorconfig` file in the root of every project configures your Code editor to use a set of rules for indentation and whitespace management. Again, Prettier is used for post formatting your code, and Editorconfig is used to configure the editor in advance. |
| Conventional Changelog | All of the commits across all the repos uses [commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint) to enforce consistent commit messages.                                                                                             |
| Husky                  | We use [husky](https://typicode.github.io/husky/#/) to enforce commit conventions when committing the code. Husky is a git hooks system written in Node                                                                                                                |

## Commands

| Command                  | Description                                                                                               |
| ------------------------ | --------------------------------------------------------------------------------------------------------- |
| `pnpm run test`          | Run project tests using `ts-node`                                                                         |
| `pnpm run test:coverage` | Run project tests with coverage option                                                                    |
| `pnpm run compile`       | Compile the TypeScript project to JavaScript. The compiled output is written inside the `build` directory |
| `pnpm run release`       | Start the release process using `np`                                                                      |
| `pnpm run lint`          | Lint the codebase using ESlint                                                                            |
| `pnpm run lint:check`    | Check if the codebase is linted using ESlint                                                              |
| `pnpm run format`        | Format the codebase using Prettier                                                                        |
| `pnpm run format:check`  | Check if the codebase is formatted using Prettier                                                         |
| `pnpm run typecheck`     | Check if the codebase for syntax errors using `tsc`                                                       |
| `pnpm run tool:code`     | Shortcut script for run format:check, lint:check and typecheck                                            |
| `pnpm run tool:build`    | Shortcut script for run tool:code and additional run test                                                 |

## Coding style

Make sure to run the following commands before pushing the code.

```sh
pnpm run tool:build
```

## Getting recognized as a contributor

We rely on Github to list all the repo contributors in the right-side panel of the repo. Following
is an example of the same.

Also, we use the
[auto generate release notes](https://docs.github.com/en/repositories/releasing-projects-on-github/automatically-generated-release-notes#about-automatically-generated-release-notes)
feature of Github, which adds a reference to the contributor profile within the release notes.
