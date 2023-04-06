# Maximin

Highly opinionated maximin ESLint configuration.

## Rationale

Use a subset of JavaScript that maximizes the minimal use of redundant,
incoherent or obscure features.

### Use

Install with `npm i maximin`, put `export {default} from "maximin";` in
`eslint.config.js` in root.

### Extend

Don't. Instead open an issue and the discuss the merits of your change for the
benefit of everyone.

## Categories

Rules are grouped into categories. Although some rules may potentially fit more
than one category, they have been put into the most fitting one.

### Clarity

Rules that convey the desired intent and goal of your code in a clear manner, or
that serve to better document your code by producing better error messages.

### Consistency

Rules that enforce a consistent style. The general idea here is to stay as
minimal as possible while not sacrificing clarity.

### Maximin

Rules that maximize the minimal use of features in their intended manner.

### Modernity

Use modern alternatives to non-standard, deprecated or obscure features.

### Side effects

Rules that avoid creating side-effects that other make reasoning about code
difficult.

### Simplicity

Rules that reduce flow and code complexity.
