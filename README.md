# electron-react-typescript

A minimum Electron app template with create-react-app and TypeScript.

**Supports Auto Reloading and Works with Create-React-App**

+ Run electron app with create-react-app without ejecting.
+ Auto reloads the electron app when the typescript source file changes.
+ Includes a very simple bundling process.
+ Auto reloads app for changes in both main process files and react files.
+ Use native node addons without problem.

## Usage

> Here uses `yarn`, to use `npm` you'll need to search in the codebase and replace `yarn` with `npm`.

```sh
cd renderer
yarn install
yarn build

# on macOS
open "dist/mac/*.app"

# on Windows
start "" "dist\win-unpacked\Electron React TypeScript.exe"
```

## Development

- Open a terminal window, run below commands:

  ```sh
  cd main
  yarn install
  yarn start
  ```

- Open another terminal window, run below commands:

  ```sh
  cd renderer
  yarn install

  # on macOS
  yarn start

  # on Windows
  yarn start:win
  ```
