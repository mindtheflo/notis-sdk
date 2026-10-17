# Notis SDK

[![CI](https://github.com/mindtheflo/notis-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/mindtheflo/notis-sdk/actions/workflows/ci.yml)

React and Vite SDK for Notis Space views.

It provides:

- `@notis/sdk` for `NotisProvider` and runtime hooks
- `@notis/sdk/config` for `defineSpaces()` (the Space source index) and `defineSpace()` (each Space)
- `@notis/sdk/vite` for `notisViteConfig()`
- `@notis/sdk/styles.css` for the Notis view surface

## Development

```bash
npm ci
npm run type-check
```

This repository is an automated public mirror of `packages/sdk` from the private Notis monorepo. Changes are generated from the monorepo; open issues here, but do not edit mirrored files directly.

Use the [Notis CLI](https://github.com/mindtheflo/notis-cli) to create, build, verify and deploy a Space (`notis spaces init`, `build`, `verify`, `deploy`). See the [Notis Spaces platform reference](https://github.com/mindtheflo/notis-skills/blob/main/docs/notis-spaces-platform.md) for the full authoring guide.

MIT licensed.
