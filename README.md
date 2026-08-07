# Notis SDK

[![CI](https://github.com/mindtheflo/notis-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/mindtheflo/notis-sdk/actions/workflows/ci.yml)

React and Vite SDK for apps that run inside Notis.

It provides:

- `@notis/sdk` for `NotisProvider` and runtime hooks
- `@notis/sdk/config` for `defineNotisApp()`
- `@notis/sdk/vite` for `notisViteConfig()`
- `@notis/sdk/styles.css` for the Notis app surface

## Development

```bash
npm ci
npm run type-check
```

This repository is an automated public mirror of `packages/sdk` from the private Notis monorepo. Changes are generated from the monorepo; open issues here, but do not edit mirrored files directly.

Use the [Notis CLI](https://github.com/mindtheflo/notis-cli) to scaffold and test an app. See the public [Notis Apps registry](https://github.com/mindtheflo/notis-apps) for complete examples.

MIT licensed.
