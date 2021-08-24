# @prunus/eslint-config

# Installation

## <a name="full-installation"></a> Full installation
```sh
yarn add -D @prunus/eslint-config;
npx install-peerdeps --dev @prunus/eslint-config;
```

or

```sh
yarn add -D @prunus/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import-helpers eslint-plugin-react eslint-plugin-react-hooks typescript
```

Add to your eslint config (.eslintrc, or eslintConfig field in package.json):

```json
{
    "extends": "@prunus"
}
```

---

## Installation using only __JavaScript__
```sh
yarn add -D eslint @prunus/eslint-config eslint-plugin-import-helpers
```

Add to your eslint config (.eslintrc, or eslintConfig field in package.json):

```json
{
    "extends": "@prunus/eslint-config/js"
}
```

---

## Installation using __JavaScript__ and __JSX__
```sh
yarn add -D eslint @prunus/eslint-config eslint-plugin-import-helpers eslint-plugin-react eslint-plugin-react-hooks
```

Add to your eslint config (.eslintrc, or eslintConfig field in package.json):

```json
{
    "extends": "@prunus/eslint-config/jsx"
}
```

---

## Installation usign only __TypeScript__
```sh
yarn add -D eslint @prunus/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import-helpers typescript
```

Add to your eslint config (.eslintrc, or eslintConfig field in package.json):

```json
{
  "extends": "@prunus/eslint-config/ts"
}
```

---

## Installation using __TypeScript__ and __JSX__

It's the same thing as  [full installation](#full-installation)

# Setup

Follow scripts create:

```sh
npm set-script lint "eslint ."
npm set-script lint:fix "eslint . --fix"
```

Setup with husky using yarn:
```sh
npx husky add .husky/pre-push 'yarn lint'
```

Setup with husky using npm:
```sh
npx husky add .husky/pre-push 'npm run lint'
```
