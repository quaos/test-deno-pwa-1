# test-deno-pwa-1 

Test Deno+React Progressive Web App 1

## Requirements

* Deno version ^1.5.0
* Adds `~/.deno/bin` path to your system or user's `PATH` environment variable
```shell
# for *nix and MacOS
export PATH="${PATH};~/.deno/bin"

# for Windows
set PATH=%PATH%:%HOME%\.deno\bin
```
* Needs [denon](https://github.com/denosaurs/denon) for debugging/live reloading

## How to start

* npm
```shell
npm run build
npm start
```

* yarn
```shell
yarn run build
yarn start
```

* denon (version ^2.3.3)
```shell
denon start
```
