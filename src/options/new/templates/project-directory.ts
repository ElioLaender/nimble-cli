export const NIMBLE_JSON = 
`{
    "pre-render": {
        "enabled": true,
        "routes": [
			"/",
			"second",
			"third"
        ]
    },
    "vendors": {
        "js": [],
        "css": [
            "src/style.scss"
        ]
    }
}`;

export const README = 
`# Nimble Project
This project was generated with Nimble CLI version [[Version]].

## Development server
Run \`nb serve\` for a dev server. Navigate to \`http://localhost:8090/\`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run \`nb\`, after select \`Generate\` option.

## Build
Run \`nb build\` to build the project. The build artifacts will be stored in the \`build/\` directory. Use the \`--env\` flag for a specific environment build, for example \`--env=prod\`, the \`--env=local\` is default.
`;

export const PACKAGE_JSON =
`{
    "name": "[[ProjectName]]",
    "version": "1.0.0",
    "scripts": {
        "start": "nb serve",
        "build": "nb build",
        "serve": "nb serve --env=local",
        "serve:dev": "nb serve --env=dev",
        "serve:prod": "nb serve --env=prod",
        "build:dev": "nb build --env=dev",
        "build:prod": "nb build --env=prod"
    },
    "private": true,
    "dependencies": {
        "@nimble-ts/core": "[[NimbleVersion]]"
    },
    "devDependencies": {
        "@nimble-ts/cli": "^[[Version]]",
        "@types/node": "^12.12.7",
        "@types/webpack-env": "^1.14.1",
        "css-loader": "^2.1.1",
        "file-loader": "^3.0.1",
        "html-loader": "^0.5.5",
        "node-sass": "^4.14.1",
        "postcss-loader": "^3.0.0",
        "sass-loader": "^7.1.0",
        "style-loader": "^0.23.1",
        "ts-loader": "^5.4.5",
        "typescript": "^3.9.3"
    }
}
`;

export const PACKAGE_LOCK_JSON =
`{
    "name": "[[ProjectName]]",
    "version": "1.0.0",
    "lockfileVersion": 1,
    "requires": true,
    "dependencies": {
        "@npmcli/move-file": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/@npmcli/move-file/-/move-file-1.0.1.tgz",
            "integrity": "sha512-Uv6h1sT+0DrblvIrolFtbvM1FgWm+/sy4B3pvLp67Zys+thcukzS5ekn7HsZFGpWP4Q3fYJCljbWQE/XivMRLw==",
            "dev": true,
            "requires": {
                "mkdirp": "^1.0.4"
            },
            "dependencies": {
                "mkdirp": {
                    "version": "1.0.4",
                    "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
                    "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
                    "dev": true
                }
            }
        },
        "@prerenderer/prerenderer": {
            "version": "0.7.2",
            "resolved": "https://registry.npmjs.org/@prerenderer/prerenderer/-/prerenderer-0.7.2.tgz",
            "integrity": "sha512-zWG3uFnrQWDJQoSzGB8bOnNhJCgIiylVYDFBP7Nw2LqngHOqwvpdBtGSjfajC8+fdR/iB2FqMqe27cfdmf/8TQ==",
            "dev": true,
            "requires": {
                "express": "^4.16.2",
                "http-proxy-middleware": "^0.18.0",
                "portfinder": "^1.0.13"
            }
        },
        "@prerenderer/renderer-puppeteer": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/@prerenderer/renderer-puppeteer/-/renderer-puppeteer-0.2.0.tgz",
            "integrity": "sha512-sC8WBcYcXbqm6premzCcUNDRROtAwBtBewUuzHyKcYDqU6InqjfpUQEXdIlhikN0gvqzlJy1+c7OJSfNYi4/tg==",
            "dev": true,
            "requires": {
                "promise-limit": "^2.5.0",
                "puppeteer": "^1.7.0"
            }
        },
        "@types/anymatch": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/@types/anymatch/-/anymatch-1.3.1.tgz",
            "integrity": "sha512-/+CRPXpBDpo2RK9C68N3b2cOvO0Cf5B9aPijHsoDQTHivnGSObdOF2BRQOYjojWTDy6nQvMjmqRXIxH55VjxxA==",
            "dev": true
        },
        "@types/color-name": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/@types/color-name/-/color-name-1.1.1.tgz",
            "integrity": "sha512-rr+OQyAjxze7GgWrSaJwydHStIhHq2lvY3BOC2Mj7KnzI7XK0Uw1TOOdI9lDoajEbSWLiYgoo4f1R51erQfhPQ==",
            "dev": true
        },
        "@types/fs-extra": {
            "version": "9.0.1",
            "resolved": "https://registry.npmjs.org/@types/fs-extra/-/fs-extra-9.0.1.tgz",
            "integrity": "sha512-B42Sxuaz09MhC3DDeW5kubRcQ5by4iuVQ0cRRWM2lggLzAa/KVom0Aft/208NgMvNQQZ86s5rVcqDdn/SH0/mg==",
            "dev": true,
            "requires": {
                "@types/node": "*"
            }
        },
        "@types/glob": {
            "version": "7.1.3",
            "resolved": "https://registry.npmjs.org/@types/glob/-/glob-7.1.3.tgz",
            "integrity": "sha512-SEYeGAIQIQX8NN6LDKprLjbrd5dARM5EXsd8GI/A5l0apYI1fGMWgPHSe4ZKL4eozlAyI+doUE9XbYS4xCkQ1w==",
            "dev": true,
            "requires": {
                "@types/minimatch": "*",
                "@types/node": "*"
            }
        },
        "@types/json-schema": {
            "version": "7.0.5",
            "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.5.tgz",
            "integrity": "sha512-7+2BITlgjgDhH0vvwZU/HZJVyk+2XUlvxXe8dFMedNX/aMkaOq++rMAFXc0tM7ij15QaWlbdQASBR9dihi+bDQ==",
            "dev": true
        },
        "@types/minimatch": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/@types/minimatch/-/minimatch-3.0.3.tgz",
            "integrity": "sha512-tHq6qdbT9U1IRSGf14CL0pUlULksvY9OZ+5eEgl1N7t+OA3tGvNpxJCzuKQlsNgCVwbAs670L1vcVQi8j9HjnA==",
            "dev": true
        },
        "@types/node": {
            "version": "12.12.38",
            "resolved": "https://registry.npmjs.org/@types/node/-/node-12.12.38.tgz",
            "integrity": "sha512-75eLjX0pFuTcUXnnWmALMzzkYorjND0ezNEycaKesbUBg9eGZp4GHPuDmkRc4mQQvIpe29zrzATNRA6hkYqwmA==",
            "dev": true
        },
        "@types/source-list-map": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/@types/source-list-map/-/source-list-map-0.1.2.tgz",
            "integrity": "sha512-K5K+yml8LTo9bWJI/rECfIPrGgxdpeNbj+d53lwN4QjW1MCwlkhUms+gtdzigTeUyBr09+u8BwOIY3MXvHdcsA==",
            "dev": true
        },
        "@types/tapable": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/@types/tapable/-/tapable-1.0.6.tgz",
            "integrity": "sha512-W+bw9ds02rAQaMvaLYxAbJ6cvguW/iJXNT6lTssS1ps6QdrMKttqEAMEG/b5CR8TZl3/L7/lH0ZV5nNR1LXikA==",
            "dev": true
        },
        "@types/uglify-js": {
            "version": "3.9.3",
            "resolved": "https://registry.npmjs.org/@types/uglify-js/-/uglify-js-3.9.3.tgz",
            "integrity": "sha512-KswB5C7Kwduwjj04Ykz+AjvPcfgv/37Za24O2EDzYNbwyzOo8+ydtvzUfZ5UMguiVu29Gx44l1A6VsPPcmYu9w==",
            "dev": true,
            "requires": {
                "source-map": "^0.6.1"
            }
        },
        "@types/webpack": {
            "version": "4.41.21",
            "resolved": "https://registry.npmjs.org/@types/webpack/-/webpack-4.41.21.tgz",
            "integrity": "sha512-2j9WVnNrr/8PLAB5csW44xzQSJwS26aOnICsP3pSGCEdsu6KYtfQ6QJsVUKHWRnm1bL7HziJsfh5fHqth87yKA==",
            "dev": true,
            "requires": {
                "@types/anymatch": "*",
                "@types/node": "*",
                "@types/tapable": "*",
                "@types/uglify-js": "*",
                "@types/webpack-sources": "*",
                "source-map": "^0.6.0"
            }
        },
        "@types/webpack-env": {
            "version": "1.15.2",
            "resolved": "https://registry.npmjs.org/@types/webpack-env/-/webpack-env-1.15.2.tgz",
            "integrity": "sha512-67ZgZpAlhIICIdfQrB5fnDvaKFcDxpKibxznfYRVAT4mQE41Dido/3Ty+E3xGBmTogc5+0Qb8tWhna+5B8z1iQ==",
            "dev": true
        },
        "@types/webpack-sources": {
            "version": "1.4.2",
            "resolved": "https://registry.npmjs.org/@types/webpack-sources/-/webpack-sources-1.4.2.tgz",
            "integrity": "sha512-77T++JyKow4BQB/m9O96n9d/UUHWLQHlcqXb9Vsf4F1+wKNrrlWNFPDLKNT92RJnCSL6CieTc+NDXtCVZswdTw==",
            "dev": true,
            "requires": {
                "@types/node": "*",
                "@types/source-list-map": "*",
                "source-map": "^0.7.3"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.7.3",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.3.tgz",
                    "integrity": "sha512-CkCj6giN3S+n9qrYiBTX5gystlENnRW5jZeNLHpe6aue+SrHcG5VYwujhW9s4dY31mEGsxBDrHR6oI69fTXsaQ==",
                    "dev": true
                }
            }
        },
        "@webassemblyjs/ast": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.9.0.tgz",
            "integrity": "sha512-C6wW5L+b7ogSDVqymbkkvuW9kruN//YisMED04xzeBBqjHa2FYnmvOlS6Xj68xWQRgWvI9cIglsjFowH/RJyEA==",
            "dev": true,
            "requires": {
                "@webassemblyjs/helper-module-context": "1.9.0",
                "@webassemblyjs/helper-wasm-bytecode": "1.9.0",
                "@webassemblyjs/wast-parser": "1.9.0"
            }
        },
        "@webassemblyjs/floating-point-hex-parser": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.9.0.tgz",
            "integrity": "sha512-TG5qcFsS8QB4g4MhrxK5TqfdNe7Ey/7YL/xN+36rRjl/BlGE/NcBvJcqsRgCP6Z92mRE+7N50pRIi8SmKUbcQA==",
            "dev": true
        },
        "@webassemblyjs/helper-api-error": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.9.0.tgz",
            "integrity": "sha512-NcMLjoFMXpsASZFxJ5h2HZRcEhDkvnNFOAKneP5RbKRzaWJN36NC4jqQHKwStIhGXu5mUWlUUk7ygdtrO8lbmw==",
            "dev": true
        },
        "@webassemblyjs/helper-buffer": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.9.0.tgz",
            "integrity": "sha512-qZol43oqhq6yBPx7YM3m9Bv7WMV9Eevj6kMi6InKOuZxhw+q9hOkvq5e/PpKSiLfyetpaBnogSbNCfBwyB00CA==",
            "dev": true
        },
        "@webassemblyjs/helper-code-frame": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-code-frame/-/helper-code-frame-1.9.0.tgz",
            "integrity": "sha512-ERCYdJBkD9Vu4vtjUYe8LZruWuNIToYq/ME22igL+2vj2dQ2OOujIZr3MEFvfEaqKoVqpsFKAGsRdBSBjrIvZA==",
            "dev": true,
            "requires": {
                "@webassemblyjs/wast-printer": "1.9.0"
            }
        },
        "@webassemblyjs/helper-fsm": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-fsm/-/helper-fsm-1.9.0.tgz",
            "integrity": "sha512-OPRowhGbshCb5PxJ8LocpdX9Kl0uB4XsAjl6jH/dWKlk/mzsANvhwbiULsaiqT5GZGT9qinTICdj6PLuM5gslw==",
            "dev": true
        },
        "@webassemblyjs/helper-module-context": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-module-context/-/helper-module-context-1.9.0.tgz",
            "integrity": "sha512-MJCW8iGC08tMk2enck1aPW+BE5Cw8/7ph/VGZxwyvGbJwjktKkDK7vy7gAmMDx88D7mhDTCNKAW5tED+gZ0W8g==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0"
            }
        },
        "@webassemblyjs/helper-wasm-bytecode": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.9.0.tgz",
            "integrity": "sha512-R7FStIzyNcd7xKxCZH5lE0Bqy+hGTwS3LJjuv1ZVxd9O7eHCedSdrId/hMOd20I+v8wDXEn+bjfKDLzTepoaUw==",
            "dev": true
        },
        "@webassemblyjs/helper-wasm-section": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.9.0.tgz",
            "integrity": "sha512-XnMB8l3ek4tvrKUUku+IVaXNHz2YsJyOOmz+MMkZvh8h1uSJpSen6vYnw3IoQ7WwEuAhL8Efjms1ZWjqh2agvw==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0",
                "@webassemblyjs/helper-buffer": "1.9.0",
                "@webassemblyjs/helper-wasm-bytecode": "1.9.0",
                "@webassemblyjs/wasm-gen": "1.9.0"
            }
        },
        "@webassemblyjs/ieee754": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.9.0.tgz",
            "integrity": "sha512-dcX8JuYU/gvymzIHc9DgxTzUUTLexWwt8uCTWP3otys596io0L5aW02Gb1RjYpx2+0Jus1h4ZFqjla7umFniTg==",
            "dev": true,
            "requires": {
                "@xtuc/ieee754": "^1.2.0"
            }
        },
        "@webassemblyjs/leb128": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.9.0.tgz",
            "integrity": "sha512-ENVzM5VwV1ojs9jam6vPys97B/S65YQtv/aanqnU7D8aSoHFX8GyhGg0CMfyKNIHBuAVjy3tlzd5QMMINa7wpw==",
            "dev": true,
            "requires": {
                "@xtuc/long": "4.2.2"
            }
        },
        "@webassemblyjs/utf8": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/utf8/-/utf8-1.9.0.tgz",
            "integrity": "sha512-GZbQlWtopBTP0u7cHrEx+73yZKrQoBMpwkGEIqlacljhXCkVM1kMQge/Mf+csMJAjEdSwhOyLAS0AoR3AG5P8w==",
            "dev": true
        },
        "@webassemblyjs/wasm-edit": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.9.0.tgz",
            "integrity": "sha512-FgHzBm80uwz5M8WKnMTn6j/sVbqilPdQXTWraSjBwFXSYGirpkSWE2R9Qvz9tNiTKQvoKILpCuTjBKzOIm0nxw==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0",
                "@webassemblyjs/helper-buffer": "1.9.0",
                "@webassemblyjs/helper-wasm-bytecode": "1.9.0",
                "@webassemblyjs/helper-wasm-section": "1.9.0",
                "@webassemblyjs/wasm-gen": "1.9.0",
                "@webassemblyjs/wasm-opt": "1.9.0",
                "@webassemblyjs/wasm-parser": "1.9.0",
                "@webassemblyjs/wast-printer": "1.9.0"
            }
        },
        "@webassemblyjs/wasm-gen": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.9.0.tgz",
            "integrity": "sha512-cPE3o44YzOOHvlsb4+E9qSqjc9Qf9Na1OO/BHFy4OI91XDE14MjFN4lTMezzaIWdPqHnsTodGGNP+iRSYfGkjA==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0",
                "@webassemblyjs/helper-wasm-bytecode": "1.9.0",
                "@webassemblyjs/ieee754": "1.9.0",
                "@webassemblyjs/leb128": "1.9.0",
                "@webassemblyjs/utf8": "1.9.0"
            }
        },
        "@webassemblyjs/wasm-opt": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.9.0.tgz",
            "integrity": "sha512-Qkjgm6Anhm+OMbIL0iokO7meajkzQD71ioelnfPEj6r4eOFuqm4YC3VBPqXjFyyNwowzbMD+hizmprP/Fwkl2A==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0",
                "@webassemblyjs/helper-buffer": "1.9.0",
                "@webassemblyjs/wasm-gen": "1.9.0",
                "@webassemblyjs/wasm-parser": "1.9.0"
            }
        },
        "@webassemblyjs/wasm-parser": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.9.0.tgz",
            "integrity": "sha512-9+wkMowR2AmdSWQzsPEjFU7njh8HTO5MqO8vjwEHuM+AMHioNqSBONRdr0NQQ3dVQrzp0s8lTcYqzUdb7YgELA==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0",
                "@webassemblyjs/helper-api-error": "1.9.0",
                "@webassemblyjs/helper-wasm-bytecode": "1.9.0",
                "@webassemblyjs/ieee754": "1.9.0",
                "@webassemblyjs/leb128": "1.9.0",
                "@webassemblyjs/utf8": "1.9.0"
            }
        },
        "@webassemblyjs/wast-parser": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-parser/-/wast-parser-1.9.0.tgz",
            "integrity": "sha512-qsqSAP3QQ3LyZjNC/0jBJ/ToSxfYJ8kYyuiGvtn/8MK89VrNEfwj7BPQzJVHi0jGTRK2dGdJ5PRqhtjzoww+bw==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0",
                "@webassemblyjs/floating-point-hex-parser": "1.9.0",
                "@webassemblyjs/helper-api-error": "1.9.0",
                "@webassemblyjs/helper-code-frame": "1.9.0",
                "@webassemblyjs/helper-fsm": "1.9.0",
                "@xtuc/long": "4.2.2"
            }
        },
        "@webassemblyjs/wast-printer": {
            "version": "1.9.0",
            "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.9.0.tgz",
            "integrity": "sha512-2J0nE95rHXHyQ24cWjMKJ1tqB/ds8z/cyeOZxJhcb+rW+SQASVjuznUSmdz5GpVJTzU8JkhYut0D3siFDD6wsA==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0",
                "@webassemblyjs/wast-parser": "1.9.0",
                "@xtuc/long": "4.2.2"
            }
        },
        "@webcomponents/webcomponentsjs": {
            "version": "2.4.4",
            "resolved": "https://registry.npmjs.org/@webcomponents/webcomponentsjs/-/webcomponentsjs-2.4.4.tgz",
            "integrity": "sha512-UWXZYbaDLLfhm+xONXTiDciyhOSwKRrZieGQHFMSMGSxY4mbjZ5uYzOKgnuX0luYFvjJw32G3r0sCwQZPJIR4Q=="
        },
        "@xtuc/ieee754": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/@xtuc/ieee754/-/ieee754-1.2.0.tgz",
            "integrity": "sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA==",
            "dev": true
        },
        "@xtuc/long": {
            "version": "4.2.2",
            "resolved": "https://registry.npmjs.org/@xtuc/long/-/long-4.2.2.tgz",
            "integrity": "sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ==",
            "dev": true
        },
        "abbrev": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
            "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
            "dev": true
        },
        "accepts": {
            "version": "1.3.7",
            "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
            "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
            "dev": true,
            "requires": {
                "mime-types": "~2.1.24",
                "negotiator": "0.6.2"
            }
        },
        "acorn": {
            "version": "6.4.1",
            "resolved": "https://registry.npmjs.org/acorn/-/acorn-6.4.1.tgz",
            "integrity": "sha512-ZVA9k326Nwrj3Cj9jlh3wGFutC2ZornPNARZwsNYqQYgN0EsV2d53w5RN/co65Ohn4sUAUtb1rSUAOD6XN9idA==",
            "dev": true
        },
        "address": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/address/-/address-1.1.2.tgz",
            "integrity": "sha512-aT6camzM4xEA54YVJYSqxz1kv4IHnQZRtThJJHhUMRExaU5spC7jX5ugSwTaTgJliIgs4VhZOk7htClvQ/LmRA==",
            "dev": true
        },
        "agent-base": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-4.3.0.tgz",
            "integrity": "sha512-salcGninV0nPrwpGNn4VTXBb1SOuXQBiqbrNXoeizJsHrsL6ERFM2Ne3JUSBWRE6aeNJI2ROP/WEEIDUiDe3cg==",
            "dev": true,
            "requires": {
                "es6-promisify": "^5.0.0"
            }
        },
        "aggregate-error": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/aggregate-error/-/aggregate-error-3.1.0.tgz",
            "integrity": "sha512-4I7Td01quW/RpocfNayFdFVk1qSuoh0E7JrbRJ16nH01HhKFQ88INq9Sd+nd72zqRySlr9BmDA8xlEJ6vJMrYA==",
            "dev": true,
            "requires": {
                "clean-stack": "^2.0.0",
                "indent-string": "^4.0.0"
            },
            "dependencies": {
                "indent-string": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
                    "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==",
                    "dev": true
                }
            }
        },
        "ajv": {
            "version": "6.12.2",
            "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.2.tgz",
            "integrity": "sha512-k+V+hzjm5q/Mr8ef/1Y9goCmlsK4I6Sm74teeyGvFk1XrOsbsKLjEdrvny42CZ+a8sXbk8KWpY/bDwS+FLL2UQ==",
            "dev": true,
            "requires": {
                "fast-deep-equal": "^3.1.1",
                "fast-json-stable-stringify": "^2.0.0",
                "json-schema-traverse": "^0.4.1",
                "uri-js": "^4.2.2"
            }
        },
        "ajv-errors": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/ajv-errors/-/ajv-errors-1.0.1.tgz",
            "integrity": "sha512-DCRfO/4nQ+89p/RK43i8Ezd41EqdGIU4ld7nGF8OQ14oc/we5rEntLCUa7+jrn3nn83BosfwZA0wb4pon2o8iQ==",
            "dev": true
        },
        "ajv-keywords": {
            "version": "3.4.1",
            "resolved": "https://registry.npmjs.org/ajv-keywords/-/ajv-keywords-3.4.1.tgz",
            "integrity": "sha512-RO1ibKvd27e6FEShVFfPALuHI3WjSVNeK5FIsmme/LYRNxjKuNj+Dt7bucLa6NdSv3JcVTyMlm9kGR84z1XpaQ==",
            "dev": true
        },
        "amdefine": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/amdefine/-/amdefine-1.0.1.tgz",
            "integrity": "sha1-SlKCrBZHKek2Gbz9OtFR+BfOkfU=",
            "dev": true
        },
        "animate.css": {
            "version": "3.7.2",
            "resolved": "https://registry.npmjs.org/animate.css/-/animate.css-3.7.2.tgz",
            "integrity": "sha512-0bE8zYo7C0KvgOYrSVfrzkbYk6IOTVPNqkiHg2cbyF4Pq/PXzilz4BRWA3hwEUBoMp5VBgrC29lQIZyhRWdBTw=="
        },
        "ansi-colors": {
            "version": "3.2.4",
            "resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-3.2.4.tgz",
            "integrity": "sha512-hHUXGagefjN2iRrID63xckIvotOXOojhQKWIPUZ4mNUZ9nLZW+7FMNoE1lOkEhNWYsx/7ysGIuJYCiMAA9FnrA==",
            "dev": true
        },
        "ansi-escapes": {
            "version": "4.3.1",
            "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.1.tgz",
            "integrity": "sha512-JWF7ocqNrp8u9oqpgV+wH5ftbt+cfvv+PTjOvKLT3AdYly/LmORARfEVT1iyjwN+4MqE5UmVKoAdIBqeoCHgLA==",
            "dev": true,
            "requires": {
                "type-fest": "^0.11.0"
            }
        },
        "ansi-html": {
            "version": "0.0.7",
            "resolved": "https://registry.npmjs.org/ansi-html/-/ansi-html-0.0.7.tgz",
            "integrity": "sha1-gTWEAhliqenm/QOflA0S9WynhZ4=",
            "dev": true
        },
        "ansi-regex": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
            "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
            "dev": true
        },
        "ansi-styles": {
            "version": "3.2.1",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
            "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
            "dev": true,
            "requires": {
                "color-convert": "^1.9.0"
            }
        },
        "anymatch": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-1.3.2.tgz",
            "integrity": "sha512-0XNayC8lTHQ2OI8aljNCN3sSx6hsr/1+rlcDAotXJR7C1oZZHCNsfpbKwMjRA3Uqb5tF1Rae2oloTr4xpq+WjA==",
            "dev": true,
            "requires": {
                "micromatch": "^2.1.5",
                "normalize-path": "^2.0.0"
            },
            "dependencies": {
                "arr-diff": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-2.0.0.tgz",
                    "integrity": "sha1-jzuCf5Vai9ZpaX5KQlasPOrjVs8=",
                    "dev": true,
                    "requires": {
                        "arr-flatten": "^1.0.1"
                    }
                },
                "array-unique": {
                    "version": "0.2.1",
                    "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.2.1.tgz",
                    "integrity": "sha1-odl8yvy8JiXMcPrc6zalDFiwGlM=",
                    "dev": true
                },
                "braces": {
                    "version": "1.8.5",
                    "resolved": "https://registry.npmjs.org/braces/-/braces-1.8.5.tgz",
                    "integrity": "sha1-uneWLhLf+WnWt2cR6RS3N4V79qc=",
                    "dev": true,
                    "requires": {
                        "expand-range": "^1.8.1",
                        "preserve": "^0.2.0",
                        "repeat-element": "^1.1.2"
                    }
                },
                "expand-brackets": {
                    "version": "0.1.5",
                    "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-0.1.5.tgz",
                    "integrity": "sha1-3wcoTjQqgHzXM6xa9yQR5YHRF3s=",
                    "dev": true,
                    "requires": {
                        "is-posix-bracket": "^0.1.0"
                    }
                },
                "extglob": {
                    "version": "0.3.2",
                    "resolved": "https://registry.npmjs.org/extglob/-/extglob-0.3.2.tgz",
                    "integrity": "sha1-Lhj/PS9JqydlzskCPwEdqo2DSaE=",
                    "dev": true,
                    "requires": {
                        "is-extglob": "^1.0.0"
                    }
                },
                "is-extglob": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz",
                    "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
                    "dev": true
                },
                "is-glob": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-2.0.1.tgz",
                    "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
                    "dev": true,
                    "requires": {
                        "is-extglob": "^1.0.0"
                    }
                },
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "dev": true,
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                },
                "micromatch": {
                    "version": "2.3.11",
                    "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-2.3.11.tgz",
                    "integrity": "sha1-hmd8l9FyCzY0MdBNDRUpO9OMFWU=",
                    "dev": true,
                    "requires": {
                        "arr-diff": "^2.0.0",
                        "array-unique": "^0.2.1",
                        "braces": "^1.8.2",
                        "expand-brackets": "^0.1.4",
                        "extglob": "^0.3.1",
                        "filename-regex": "^2.0.0",
                        "is-extglob": "^1.0.0",
                        "is-glob": "^2.0.1",
                        "kind-of": "^3.0.2",
                        "normalize-path": "^2.0.1",
                        "object.omit": "^2.0.0",
                        "parse-glob": "^3.0.4",
                        "regex-cache": "^0.4.2"
                    }
                },
                "normalize-path": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
                    "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
                    "dev": true,
                    "requires": {
                        "remove-trailing-separator": "^1.0.1"
                    }
                }
            }
        },
        "aproba": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
            "integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw==",
            "dev": true
        },
        "are-we-there-yet": {
            "version": "1.1.5",
            "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-1.1.5.tgz",
            "integrity": "sha512-5hYdAkZlcG8tOLujVDTgCT+uPX0VnpAH28gWsLfzpXYm7wP6mp5Q/gYyR7YQ0cKVJcXJnl3j2kpBan13PtQf6w==",
            "dev": true,
            "requires": {
                "delegates": "^1.0.0",
                "readable-stream": "^2.0.6"
            }
        },
        "argparse": {
            "version": "1.0.10",
            "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
            "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
            "dev": true,
            "requires": {
                "sprintf-js": "~1.0.2"
            }
        },
        "arr-diff": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/arr-diff/-/arr-diff-4.0.0.tgz",
            "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
            "dev": true
        },
        "arr-flatten": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/arr-flatten/-/arr-flatten-1.1.0.tgz",
            "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",
            "dev": true
        },
        "arr-union": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/arr-union/-/arr-union-3.1.0.tgz",
            "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",
            "dev": true
        },
        "array-find-index": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/array-find-index/-/array-find-index-1.0.2.tgz",
            "integrity": "sha1-3wEKoSh+Fku9pvlyOwqWoexBh6E=",
            "dev": true
        },
        "array-flatten": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
            "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI=",
            "dev": true
        },
        "array-union": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/array-union/-/array-union-1.0.2.tgz",
            "integrity": "sha1-mjRBDk9OPaI96jdb5b5w8kd47Dk=",
            "dev": true,
            "requires": {
                "array-uniq": "^1.0.1"
            }
        },
        "array-uniq": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/array-uniq/-/array-uniq-1.0.3.tgz",
            "integrity": "sha1-r2rId6Jcx/dOBYiUdThY39sk/bY=",
            "dev": true
        },
        "array-unique": {
            "version": "0.3.2",
            "resolved": "https://registry.npmjs.org/array-unique/-/array-unique-0.3.2.tgz",
            "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
            "dev": true
        },
        "asn1": {
            "version": "0.2.4",
            "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
            "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
            "dev": true,
            "requires": {
                "safer-buffer": "~2.1.0"
            }
        },
        "asn1.js": {
            "version": "5.4.1",
            "resolved": "https://registry.npmjs.org/asn1.js/-/asn1.js-5.4.1.tgz",
            "integrity": "sha512-+I//4cYPccV8LdmBLiX8CYvf9Sp3vQsrqu2QNXRcrbiWvcx/UdlFiqUJJzxRQxgsZmvhXhn4cSKeSmoFjVdupA==",
            "dev": true,
            "requires": {
                "bn.js": "^4.0.0",
                "inherits": "^2.0.1",
                "minimalistic-assert": "^1.0.0",
                "safer-buffer": "^2.1.0"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
                    "dev": true
                }
            }
        },
        "assert": {
            "version": "1.5.0",
            "resolved": "https://registry.npmjs.org/assert/-/assert-1.5.0.tgz",
            "integrity": "sha512-EDsgawzwoun2CZkCgtxJbv392v4nbk9XDD06zI+kQYoBM/3RBWLlEyJARDOmhAAosBjWACEkKL6S+lIZtcAubA==",
            "dev": true,
            "requires": {
                "object-assign": "^4.1.1",
                "util": "0.10.3"
            },
            "dependencies": {
                "inherits": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.1.tgz",
                    "integrity": "sha1-sX0I0ya0Qj5Wjv9xn5GwscvfafE=",
                    "dev": true
                },
                "util": {
                    "version": "0.10.3",
                    "resolved": "https://registry.npmjs.org/util/-/util-0.10.3.tgz",
                    "integrity": "sha1-evsa/lCAUkZInj23/g7TeTNqwPk=",
                    "dev": true,
                    "requires": {
                        "inherits": "2.0.1"
                    }
                }
            }
        },
        "assert-plus": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
            "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
            "dev": true
        },
        "assign-symbols": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/assign-symbols/-/assign-symbols-1.0.0.tgz",
            "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",
            "dev": true
        },
        "ast-types": {
            "version": "0.9.6",
            "resolved": "https://registry.npmjs.org/ast-types/-/ast-types-0.9.6.tgz",
            "integrity": "sha1-ECyenpAF0+fjgpvwxPok7oYu6bk=",
            "dev": true
        },
        "async": {
            "version": "2.6.3",
            "resolved": "https://registry.npmjs.org/async/-/async-2.6.3.tgz",
            "integrity": "sha512-zflvls11DCy+dQWzTW2dzuilv8Z5X/pjfmZOWba6TNIVDm+2UDaJmXSOXlasHKfNBs8oo3M0aT50fDEWfKZjXg==",
            "dev": true,
            "requires": {
                "lodash": "^4.17.14"
            }
        },
        "async-each": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/async-each/-/async-each-1.0.3.tgz",
            "integrity": "sha512-z/WhQ5FPySLdvREByI2vZiTWwCnF0moMJ1hK9YQwDTHKh6I7/uSckMetoRGb5UBZPC1z0jlw+n/XCgjeH7y1AQ==",
            "dev": true
        },
        "async-foreach": {
            "version": "0.1.3",
            "resolved": "https://registry.npmjs.org/async-foreach/-/async-foreach-0.1.3.tgz",
            "integrity": "sha1-NhIfhFwFeBct5Bmpfb6x0W7DRUI=",
            "dev": true
        },
        "async-limiter": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.1.tgz",
            "integrity": "sha512-csOlWGAcRFJaI6m+F2WKdnMKr4HhdhFVBk0H/QbJFMCr+uO2kwohwXQPxw/9OCxp05r5ghVBFSyioixx3gfkNQ==",
            "dev": true
        },
        "asynckit": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
            "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
            "dev": true
        },
        "at-least-node": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/at-least-node/-/at-least-node-1.0.0.tgz",
            "integrity": "sha512-+q/t7Ekv1EDY2l6Gda6LLiX14rU9TV20Wa3ofeQmwPFZbOMo9DXrLbOjFaaclkXKWidIaopwAObQDqwWtGUjqg==",
            "dev": true
        },
        "atob": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/atob/-/atob-2.1.2.tgz",
            "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",
            "dev": true
        },
        "aws-sign2": {
            "version": "0.7.0",
            "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
            "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
            "dev": true
        },
        "aws4": {
            "version": "1.9.1",
            "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.9.1.tgz",
            "integrity": "sha512-wMHVg2EOHaMRxbzgFJ9gtjOOCrI80OHLG14rxi28XwOW8ux6IiEbRCGGGqCtdAIg4FQCbW20k9RsT4y3gJlFug==",
            "dev": true
        },
        "babel-runtime": {
            "version": "6.26.0",
            "resolved": "https://registry.npmjs.org/babel-runtime/-/babel-runtime-6.26.0.tgz",
            "integrity": "sha1-llxwWGaOgrVde/4E/yM3vItWR/4=",
            "dev": true,
            "requires": {
                "core-js": "^2.4.0",
                "regenerator-runtime": "^0.11.0"
            }
        },
        "balanced-match": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.0.tgz",
            "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c=",
            "dev": true
        },
        "base": {
            "version": "0.11.2",
            "resolved": "https://registry.npmjs.org/base/-/base-0.11.2.tgz",
            "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
            "dev": true,
            "requires": {
                "cache-base": "^1.0.1",
                "class-utils": "^0.3.5",
                "component-emitter": "^1.2.1",
                "define-property": "^1.0.0",
                "isobject": "^3.0.1",
                "mixin-deep": "^1.2.0",
                "pascalcase": "^0.1.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
                    "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
                    "dev": true,
                    "requires": {
                        "is-descriptor": "^1.0.0"
                    }
                },
                "is-accessor-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
                    "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
                    "dev": true,
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-data-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
                    "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
                    "dev": true,
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-descriptor": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
                    "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
                    "dev": true,
                    "requires": {
                        "is-accessor-descriptor": "^1.0.0",
                        "is-data-descriptor": "^1.0.0",
                        "kind-of": "^6.0.2"
                    }
                }
            }
        },
        "base-href-webpack-plugin": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/base-href-webpack-plugin/-/base-href-webpack-plugin-2.0.0.tgz",
            "integrity": "sha512-e/EJg7MZrKvc5MzaGN+kvGOvq0xOetGvvMYcplAkz2VQZcSQmo4IpRiuhcHpH0AQsxMyNYyNtOixQvuqr+2sFA==",
            "dev": true
        },
        "base64-js": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.3.1.tgz",
            "integrity": "sha512-mLQ4i2QO1ytvGWFWmcngKO//JXAQueZvwEKtjgQFM4jIK0kU+ytMfplL8j+n5mspOfjHwoAg+9yhb7BwAHm36g==",
            "dev": true
        },
        "batch": {
            "version": "0.6.1",
            "resolved": "https://registry.npmjs.org/batch/-/batch-0.6.1.tgz",
            "integrity": "sha1-3DQxT05nkxgJP8dgJyUl+UvyXBY=",
            "dev": true
        },
        "bcrypt-pbkdf": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
            "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
            "dev": true,
            "requires": {
                "tweetnacl": "^0.14.3"
            }
        },
        "big.js": {
            "version": "5.2.2",
            "resolved": "https://registry.npmjs.org/big.js/-/big.js-5.2.2.tgz",
            "integrity": "sha512-vyL2OymJxmarO8gxMr0mhChsO9QGwhynfuu4+MHTAW6czfq9humCB7rKpUjDd9YUiDPU4mzpyupFSvOClAwbmQ==",
            "dev": true
        },
        "binary-extensions": {
            "version": "1.13.1",
            "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-1.13.1.tgz",
            "integrity": "sha512-Un7MIEDdUC5gNpcGDV97op1Ywk748MpHcFTHoYs6qnj1Z3j7I53VG3nwZhKzoBZmbdRNnb6WRdFlwl7tSDuZGw==",
            "dev": true
        },
        "bindings": {
            "version": "1.5.0",
            "resolved": "https://registry.npmjs.org/bindings/-/bindings-1.5.0.tgz",
            "integrity": "sha512-p2q/t/mhvuOj/UeLlV6566GD/guowlr0hHxClI0W9m7MWYkL1F0hLo+0Aexs9HSPCtR1SXQ0TD3MMKrXZajbiQ==",
            "dev": true,
            "optional": true,
            "requires": {
                "file-uri-to-path": "1.0.0"
            }
        },
        "block-stream": {
            "version": "0.0.9",
            "resolved": "https://registry.npmjs.org/block-stream/-/block-stream-0.0.9.tgz",
            "integrity": "sha1-E+v+d4oDIFz+A3UUgeu0szAMEmo=",
            "dev": true,
            "requires": {
                "inherits": "~2.0.0"
            }
        },
        "bluebird": {
            "version": "3.7.2",
            "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.7.2.tgz",
            "integrity": "sha512-XpNj6GDQzdfW+r2Wnn7xiSAd7TM3jzkxGXBGTtWKuSXv1xUV+azxAm8jdWZN06QTQk+2N2XB9jRDkvbmQmcRtg==",
            "dev": true
        },
        "bn.js": {
            "version": "5.1.3",
            "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-5.1.3.tgz",
            "integrity": "sha512-GkTiFpjFtUzU9CbMeJ5iazkCzGL3jrhzerzZIuqLABjbwRaFt33I9tUdSNryIptM+RxDet6OKm2WnLXzW51KsQ==",
            "dev": true
        },
        "body-parser": {
            "version": "1.19.0",
            "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
            "integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
            "dev": true,
            "requires": {
                "bytes": "3.1.0",
                "content-type": "~1.0.4",
                "debug": "2.6.9",
                "depd": "~1.1.2",
                "http-errors": "1.7.2",
                "iconv-lite": "0.4.24",
                "on-finished": "~2.3.0",
                "qs": "6.7.0",
                "raw-body": "2.4.0",
                "type-is": "~1.6.17"
            },
            "dependencies": {
                "qs": {
                    "version": "6.7.0",
                    "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
                    "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ==",
                    "dev": true
                }
            }
        },
        "bonjour": {
            "version": "3.5.0",
            "resolved": "https://registry.npmjs.org/bonjour/-/bonjour-3.5.0.tgz",
            "integrity": "sha1-jokKGD2O6aI5OzhExpGkK897yfU=",
            "dev": true,
            "requires": {
                "array-flatten": "^2.1.0",
                "deep-equal": "^1.0.1",
                "dns-equal": "^1.0.0",
                "dns-txt": "^2.0.2",
                "multicast-dns": "^6.0.1",
                "multicast-dns-service-types": "^1.1.0"
            },
            "dependencies": {
                "array-flatten": {
                    "version": "2.1.2",
                    "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-2.1.2.tgz",
                    "integrity": "sha512-hNfzcOV8W4NdualtqBFPyVO+54DSJuZGY9qT4pRroB6S9e3iiido2ISIC5h9R2sPJ8H3FHCIiEnsv1lPXO3KtQ==",
                    "dev": true
                }
            }
        },
        "boolbase": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
            "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24=",
            "dev": true
        },
        "bootstrap": {
            "version": "4.4.1",
            "resolved": "https://registry.npmjs.org/bootstrap/-/bootstrap-4.4.1.tgz",
            "integrity": "sha512-tbx5cHubwE6e2ZG7nqM3g/FZ5PQEDMWmMGNrCUBVRPHXTJaH7CBDdsLeu3eCh3B1tzAxTnAbtmrzvWEvT2NNEA=="
        },
        "brace-expansion": {
            "version": "1.1.11",
            "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
            "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
            "dev": true,
            "requires": {
                "balanced-match": "^1.0.0",
                "concat-map": "0.0.1"
            }
        },
        "braces": {
            "version": "2.3.2",
            "resolved": "https://registry.npmjs.org/braces/-/braces-2.3.2.tgz",
            "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
            "dev": true,
            "requires": {
                "arr-flatten": "^1.1.0",
                "array-unique": "^0.3.2",
                "extend-shallow": "^2.0.1",
                "fill-range": "^4.0.0",
                "isobject": "^3.0.1",
                "repeat-element": "^1.1.2",
                "snapdragon": "^0.8.1",
                "snapdragon-node": "^2.0.1",
                "split-string": "^3.0.2",
                "to-regex": "^3.0.1"
            },
            "dependencies": {
                "extend-shallow": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                    "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                    "dev": true,
                    "requires": {
                        "is-extendable": "^0.1.0"
                    }
                }
            }
        },
        "brorand": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/brorand/-/brorand-1.1.0.tgz",
            "integrity": "sha1-EsJe/kCkXjwyPrhnWgoM5XsiNx8=",
            "dev": true
        },
        "browserify-aes": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/browserify-aes/-/browserify-aes-1.2.0.tgz",
            "integrity": "sha512-+7CHXqGuspUn/Sl5aO7Ea0xWGAtETPXNSAjHo48JfLdPWcMng33Xe4znFvQweqc/uzk5zSOI3H52CYnjCfb5hA==",
            "dev": true,
            "requires": {
                "buffer-xor": "^1.0.3",
                "cipher-base": "^1.0.0",
                "create-hash": "^1.1.0",
                "evp_bytestokey": "^1.0.3",
                "inherits": "^2.0.1",
                "safe-buffer": "^5.0.1"
            }
        },
        "browserify-cipher": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/browserify-cipher/-/browserify-cipher-1.0.1.tgz",
            "integrity": "sha512-sPhkz0ARKbf4rRQt2hTpAHqn47X3llLkUGn+xEJzLjwY8LRs2p0v7ljvI5EyoRO/mexrNunNECisZs+gw2zz1w==",
            "dev": true,
            "requires": {
                "browserify-aes": "^1.0.4",
                "browserify-des": "^1.0.0",
                "evp_bytestokey": "^1.0.0"
            }
        },
        "browserify-des": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/browserify-des/-/browserify-des-1.0.2.tgz",
            "integrity": "sha512-BioO1xf3hFwz4kc6iBhI3ieDFompMhrMlnDFC4/0/vd5MokpuAc3R+LYbwTA9A5Yc9pq9UYPqffKpW2ObuwX5A==",
            "dev": true,
            "requires": {
                "cipher-base": "^1.0.1",
                "des.js": "^1.0.0",
                "inherits": "^2.0.1",
                "safe-buffer": "^5.1.2"
            }
        },
        "browserify-rsa": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/browserify-rsa/-/browserify-rsa-4.0.1.tgz",
            "integrity": "sha1-IeCr+vbyApzy+vsTNWenAdQTVSQ=",
            "dev": true,
            "requires": {
                "bn.js": "^4.1.0",
                "randombytes": "^2.0.1"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
                    "dev": true
                }
            }
        },
        "browserify-sign": {
            "version": "4.2.1",
            "resolved": "https://registry.npmjs.org/browserify-sign/-/browserify-sign-4.2.1.tgz",
            "integrity": "sha512-/vrA5fguVAKKAVTNJjgSm1tRQDHUU6DbwO9IROu/0WAzC8PKhucDSh18J0RMvVeHAn5puMd+QHC2erPRNf8lmg==",
            "dev": true,
            "requires": {
                "bn.js": "^5.1.1",
                "browserify-rsa": "^4.0.1",
                "create-hash": "^1.2.0",
                "create-hmac": "^1.1.7",
                "elliptic": "^6.5.3",
                "inherits": "^2.0.4",
                "parse-asn1": "^5.1.5",
                "readable-stream": "^3.6.0",
                "safe-buffer": "^5.2.0"
            },
            "dependencies": {
                "readable-stream": {
                    "version": "3.6.0",
                    "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
                    "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
                    "dev": true,
                    "requires": {
                        "inherits": "^2.0.3",
                        "string_decoder": "^1.1.1",
                        "util-deprecate": "^1.0.1"
                    }
                },
                "safe-buffer": {
                    "version": "5.2.1",
                    "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
                    "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
                    "dev": true
                }
            }
        },
        "browserify-zlib": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/browserify-zlib/-/browserify-zlib-0.2.0.tgz",
            "integrity": "sha512-Z942RysHXmJrhqk88FmKBVq/v5tqmSkDz7p54G/MGyjMnCFFnC79XWNbg+Vta8W6Wb2qtSZTSxIGkJrRpCFEiA==",
            "dev": true,
            "requires": {
                "pako": "~1.0.5"
            }
        },
        "buffer": {
            "version": "4.9.2",
            "resolved": "https://registry.npmjs.org/buffer/-/buffer-4.9.2.tgz",
            "integrity": "sha512-xq+q3SRMOxGivLhBNaUdC64hDTQwejJ+H0T/NB1XMtTVEwNTrfFF3gAxiyW0Bu/xWEGhjVKgUcMhCrUy2+uCWg==",
            "dev": true,
            "requires": {
                "base64-js": "^1.0.2",
                "ieee754": "^1.1.4",
                "isarray": "^1.0.0"
            }
        },
        "buffer-crc32": {
            "version": "0.2.13",
            "resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz",
            "integrity": "sha1-DTM+PwDqxQqhRUq9MO+MKl2ackI=",
            "dev": true
        },
        "buffer-from": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
            "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A==",
            "dev": true
        },
        "buffer-indexof": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/buffer-indexof/-/buffer-indexof-1.1.1.tgz",
            "integrity": "sha512-4/rOEg86jivtPTeOUUT61jJO1Ya1TrR/OkqCSZDyq84WJh3LuuiphBYJN+fm5xufIk4XAFcEwte/8WzC8If/1g==",
            "dev": true
        },
        "buffer-xor": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/buffer-xor/-/buffer-xor-1.0.3.tgz",
            "integrity": "sha1-JuYe0UIvtw3ULm42cp7VHYVf6Nk=",
            "dev": true
        },
        "builtin-status-codes": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/builtin-status-codes/-/builtin-status-codes-3.0.0.tgz",
            "integrity": "sha1-hZgoeOIbmOHGZCXgPQF0eI9Wnug=",
            "dev": true
        },
        "bytes": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
            "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg==",
            "dev": true
        },
        "cacache": {
            "version": "12.0.4",
            "resolved": "https://registry.npmjs.org/cacache/-/cacache-12.0.4.tgz",
            "integrity": "sha512-a0tMB40oefvuInr4Cwb3GerbL9xTj1D5yg0T5xrjGCGyfvbxseIXX7BAO/u/hIXdafzOI5JC3wDwHyf24buOAQ==",
            "dev": true,
            "requires": {
                "bluebird": "^3.5.5",
                "chownr": "^1.1.1",
                "figgy-pudding": "^3.5.1",
                "glob": "^7.1.4",
                "graceful-fs": "^4.1.15",
                "infer-owner": "^1.0.3",
                "lru-cache": "^5.1.1",
                "mississippi": "^3.0.0",
                "mkdirp": "^0.5.1",
                "move-concurrently": "^1.0.1",
                "promise-inflight": "^1.0.1",
                "rimraf": "^2.6.3",
                "ssri": "^6.0.1",
                "unique-filename": "^1.1.1",
                "y18n": "^4.0.0"
            },
            "dependencies": {
                "lru-cache": {
                    "version": "5.1.1",
                    "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
                    "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
                    "dev": true,
                    "requires": {
                        "yallist": "^3.0.2"
                    }
                },
                "yallist": {
                    "version": "3.1.1",
                    "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
                    "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
                    "dev": true
                }
            }
        },
        "cache-base": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/cache-base/-/cache-base-1.0.1.tgz",
            "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
            "dev": true,
            "requires": {
                "collection-visit": "^1.0.0",
                "component-emitter": "^1.2.1",
                "get-value": "^2.0.6",
                "has-value": "^1.0.0",
                "isobject": "^3.0.1",
                "set-value": "^2.0.0",
                "to-object-path": "^0.3.0",
                "union-value": "^1.0.0",
                "unset-value": "^1.0.0"
            }
        },
        "caller-callsite": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/caller-callsite/-/caller-callsite-2.0.0.tgz",
            "integrity": "sha1-hH4PzgoiN1CpoCfFSzNzGtMVQTQ=",
            "dev": true,
            "requires": {
                "callsites": "^2.0.0"
            }
        },
        "caller-path": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/caller-path/-/caller-path-2.0.0.tgz",
            "integrity": "sha1-Ro+DBE42mrIBD6xfBs7uFbsssfQ=",
            "dev": true,
            "requires": {
                "caller-callsite": "^2.0.0"
            }
        },
        "callsites": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/callsites/-/callsites-2.0.0.tgz",
            "integrity": "sha1-BuuE8A7qQT2oav/vrL/7Ngk7PFA=",
            "dev": true
        },
        "camel-case": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/camel-case/-/camel-case-3.0.0.tgz",
            "integrity": "sha1-yjw2iKTpzzpM2nd9xNy8cTJJz3M=",
            "dev": true,
            "requires": {
                "no-case": "^2.2.0",
                "upper-case": "^1.1.1"
            }
        },
        "camelcase": {
            "version": "5.3.1",
            "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
            "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
            "dev": true
        },
        "camelcase-keys": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/camelcase-keys/-/camelcase-keys-2.1.0.tgz",
            "integrity": "sha1-MIvur/3ygRkFHvodkyITyRuPkuc=",
            "dev": true,
            "requires": {
                "camelcase": "^2.0.0",
                "map-obj": "^1.0.0"
            },
            "dependencies": {
                "camelcase": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-2.1.1.tgz",
                    "integrity": "sha1-fB0W1nmhu+WcoCys7PsBHiAfWh8=",
                    "dev": true
                }
            }
        },
        "caseless": {
            "version": "0.12.0",
            "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
            "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
            "dev": true
        },
        "chalk": {
            "version": "2.4.2",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
            "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
            "dev": true,
            "requires": {
                "ansi-styles": "^3.2.1",
                "escape-string-regexp": "^1.0.5",
                "supports-color": "^5.3.0"
            },
            "dependencies": {
                "supports-color": {
                    "version": "5.5.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
                    "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^3.0.0"
                    }
                }
            }
        },
        "chardet": {
            "version": "0.7.0",
            "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
            "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",
            "dev": true
        },
        "chokidar": {
            "version": "1.7.0",
            "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-1.7.0.tgz",
            "integrity": "sha1-eY5ol3gVHIB2tLNg5e3SjNortGg=",
            "dev": true,
            "requires": {
                "anymatch": "^1.3.0",
                "async-each": "^1.0.0",
                "fsevents": "^1.0.0",
                "glob-parent": "^2.0.0",
                "inherits": "^2.0.1",
                "is-binary-path": "^1.0.0",
                "is-glob": "^2.0.0",
                "path-is-absolute": "^1.0.0",
                "readdirp": "^2.0.0"
            },
            "dependencies": {
                "glob-parent": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-2.0.0.tgz",
                    "integrity": "sha1-gTg9ctsFT8zPUzbaqQLxgvbtuyg=",
                    "dev": true,
                    "requires": {
                        "is-glob": "^2.0.0"
                    }
                },
                "is-extglob": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz",
                    "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
                    "dev": true
                },
                "is-glob": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-2.0.1.tgz",
                    "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
                    "dev": true,
                    "requires": {
                        "is-extglob": "^1.0.0"
                    }
                }
            }
        },
        "chownr": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
            "integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg==",
            "dev": true
        },
        "chrome-trace-event": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/chrome-trace-event/-/chrome-trace-event-1.0.2.tgz",
            "integrity": "sha512-9e/zx1jw7B4CO+c/RXoCsfg/x1AfUBioy4owYH0bJprEYAx5hRFLRhWBqHAG57D0ZM4H7vxbP7bPe0VwhQRYDQ==",
            "dev": true,
            "requires": {
                "tslib": "^1.9.0"
            }
        },
        "cipher-base": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/cipher-base/-/cipher-base-1.0.4.tgz",
            "integrity": "sha512-Kkht5ye6ZGmwv40uUDZztayT2ThLQGfnj/T71N/XzeZeo3nf8foyW7zGTsPYkEya3m5f3cAypH+qe7YOrM1U2Q==",
            "dev": true,
            "requires": {
                "inherits": "^2.0.1",
                "safe-buffer": "^5.0.1"
            }
        },
        "class-utils": {
            "version": "0.3.6",
            "resolved": "https://registry.npmjs.org/class-utils/-/class-utils-0.3.6.tgz",
            "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
            "dev": true,
            "requires": {
                "arr-union": "^3.1.0",
                "define-property": "^0.2.5",
                "isobject": "^3.0.0",
                "static-extend": "^0.1.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "dev": true,
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                }
            }
        },
        "clean-css": {
            "version": "4.2.3",
            "resolved": "https://registry.npmjs.org/clean-css/-/clean-css-4.2.3.tgz",
            "integrity": "sha512-VcMWDN54ZN/DS+g58HYL5/n4Zrqe8vHJpGA8KdgUXFU4fuP/aHNw8eld9SyEIyabIMJX/0RaY/fplOo5hYLSFA==",
            "dev": true,
            "requires": {
                "source-map": "~0.6.0"
            }
        },
        "clean-stack": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/clean-stack/-/clean-stack-2.2.0.tgz",
            "integrity": "sha512-4diC9HaTE+KRAMWhDhrGOECgWZxoevMc5TlkObMqNSsVU62PYzXZ/SMTjzyGAFF1YusgxGcSWTEXBhp0CPwQ1A==",
            "dev": true
        },
        "clean-webpack-plugin": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/clean-webpack-plugin/-/clean-webpack-plugin-3.0.0.tgz",
            "integrity": "sha512-MciirUH5r+cYLGCOL5JX/ZLzOZbVr1ot3Fw+KcvbhUb6PM+yycqd9ZhIlcigQ5gl+XhppNmw3bEFuaaMNyLj3A==",
            "dev": true,
            "requires": {
                "@types/webpack": "^4.4.31",
                "del": "^4.1.1"
            }
        },
        "cli-cursor": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
            "integrity": "sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==",
            "dev": true,
            "requires": {
                "restore-cursor": "^3.1.0"
            }
        },
        "cli-width": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-3.0.0.tgz",
            "integrity": "sha512-FxqpkPPwu1HjuN93Omfm4h8uIanXofW0RxVEW3k5RKx+mJJYSthzNhp32Kzxxy3YAEZ/Dc/EWN1vZRY0+kOhbw==",
            "dev": true
        },
        "cliui": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
            "integrity": "sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==",
            "dev": true,
            "requires": {
                "string-width": "^3.1.0",
                "strip-ansi": "^5.2.0",
                "wrap-ansi": "^5.1.0"
            },
            "dependencies": {
                "ansi-regex": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
                    "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
                    "dev": true
                },
                "is-fullwidth-code-point": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
                    "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
                    "dev": true
                },
                "string-width": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
                    "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
                    "dev": true,
                    "requires": {
                        "emoji-regex": "^7.0.1",
                        "is-fullwidth-code-point": "^2.0.0",
                        "strip-ansi": "^5.1.0"
                    }
                },
                "strip-ansi": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
                    "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
                    "dev": true,
                    "requires": {
                        "ansi-regex": "^4.1.0"
                    }
                }
            }
        },
        "clone-deep": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/clone-deep/-/clone-deep-4.0.1.tgz",
            "integrity": "sha512-neHB9xuzh/wk0dIHweyAXv2aPGZIVk3pLMe+/RNzINf17fe0OG96QroktYAUm7SM1PBnzTabaLboqqxDyMU+SQ==",
            "dev": true,
            "requires": {
                "is-plain-object": "^2.0.4",
                "kind-of": "^6.0.2",
                "shallow-clone": "^3.0.0"
            }
        },
        "code-point-at": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
            "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c=",
            "dev": true
        },
        "collection-visit": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/collection-visit/-/collection-visit-1.0.0.tgz",
            "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
            "dev": true,
            "requires": {
                "map-visit": "^1.0.0",
                "object-visit": "^1.0.0"
            }
        },
        "color-convert": {
            "version": "1.9.3",
            "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
            "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
            "dev": true,
            "requires": {
                "color-name": "1.1.3"
            }
        },
        "color-name": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
            "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
            "dev": true
        },
        "combined-stream": {
            "version": "1.0.8",
            "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
            "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
            "dev": true,
            "requires": {
                "delayed-stream": "~1.0.0"
            }
        },
        "commander": {
            "version": "2.17.1",
            "resolved": "https://registry.npmjs.org/commander/-/commander-2.17.1.tgz",
            "integrity": "sha512-wPMUt6FnH2yzG95SA6mzjQOEKUU3aLaDEmzs1ti+1E9h+CsrZghRlqEM/EJ4KscsQVG8uNN4uVreUeT8+drlgg==",
            "dev": true
        },
        "commondir": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/commondir/-/commondir-1.0.1.tgz",
            "integrity": "sha1-3dgA2gxmEnOTzKWVDqloo6rxJTs=",
            "dev": true
        },
        "component-emitter": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
            "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg==",
            "dev": true
        },
        "compressible": {
            "version": "2.0.18",
            "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
            "integrity": "sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==",
            "dev": true,
            "requires": {
                "mime-db": ">= 1.43.0 < 2"
            }
        },
        "compression": {
            "version": "1.7.4",
            "resolved": "https://registry.npmjs.org/compression/-/compression-1.7.4.tgz",
            "integrity": "sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==",
            "dev": true,
            "requires": {
                "accepts": "~1.3.5",
                "bytes": "3.0.0",
                "compressible": "~2.0.16",
                "debug": "2.6.9",
                "on-headers": "~1.0.2",
                "safe-buffer": "5.1.2",
                "vary": "~1.1.2"
            },
            "dependencies": {
                "bytes": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
                    "integrity": "sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg=",
                    "dev": true
                }
            }
        },
        "compression-webpack-plugin": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/compression-webpack-plugin/-/compression-webpack-plugin-5.0.1.tgz",
            "integrity": "sha512-Wcb99O4UkdDZiM+blEw6h+cUfJYCn2kgK0l3fjLOm72Stso9DVMieQpBD4PVpyI7DLL6+zNh0iJV3p4HDwTinQ==",
            "dev": true,
            "requires": {
                "cacache": "^15.0.5",
                "find-cache-dir": "^3.3.1",
                "schema-utils": "^2.7.0",
                "serialize-javascript": "^4.0.0",
                "webpack-sources": "^1.4.3"
            },
            "dependencies": {
                "cacache": {
                    "version": "15.0.5",
                    "resolved": "https://registry.npmjs.org/cacache/-/cacache-15.0.5.tgz",
                    "integrity": "sha512-lloiL22n7sOjEEXdL8NAjTgv9a1u43xICE9/203qonkZUCj5X1UEWIdf2/Y0d6QcCtMzbKQyhrcDbdvlZTs/+A==",
                    "dev": true,
                    "requires": {
                        "@npmcli/move-file": "^1.0.1",
                        "chownr": "^2.0.0",
                        "fs-minipass": "^2.0.0",
                        "glob": "^7.1.4",
                        "infer-owner": "^1.0.4",
                        "lru-cache": "^6.0.0",
                        "minipass": "^3.1.1",
                        "minipass-collect": "^1.0.2",
                        "minipass-flush": "^1.0.5",
                        "minipass-pipeline": "^1.2.2",
                        "mkdirp": "^1.0.3",
                        "p-map": "^4.0.0",
                        "promise-inflight": "^1.0.1",
                        "rimraf": "^3.0.2",
                        "ssri": "^8.0.0",
                        "tar": "^6.0.2",
                        "unique-filename": "^1.1.1"
                    }
                },
                "chownr": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",
                    "integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==",
                    "dev": true
                },
                "find-cache-dir": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-3.3.1.tgz",
                    "integrity": "sha512-t2GDMt3oGC/v+BMwzmllWDuJF/xcDtE5j/fCGbqDD7OLuJkj0cfh1YSA5VKPvwMeLFLNDBkwOKZ2X85jGLVftQ==",
                    "dev": true,
                    "requires": {
                        "commondir": "^1.0.1",
                        "make-dir": "^3.0.2",
                        "pkg-dir": "^4.1.0"
                    }
                },
                "find-up": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
                    "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
                    "dev": true,
                    "requires": {
                        "locate-path": "^5.0.0",
                        "path-exists": "^4.0.0"
                    }
                },
                "locate-path": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
                    "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
                    "dev": true,
                    "requires": {
                        "p-locate": "^4.1.0"
                    }
                },
                "lru-cache": {
                    "version": "6.0.0",
                    "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
                    "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
                    "dev": true,
                    "requires": {
                        "yallist": "^4.0.0"
                    }
                },
                "make-dir": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
                    "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
                    "dev": true,
                    "requires": {
                        "semver": "^6.0.0"
                    }
                },
                "mkdirp": {
                    "version": "1.0.4",
                    "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
                    "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
                    "dev": true
                },
                "p-locate": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
                    "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
                    "dev": true,
                    "requires": {
                        "p-limit": "^2.2.0"
                    }
                },
                "p-map": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/p-map/-/p-map-4.0.0.tgz",
                    "integrity": "sha512-/bjOqmgETBYB5BoEeGVea8dmvHb2m9GLy1E9W43yeyfP6QQCZGFNa+XRceJEuDB6zqr+gKpIAmlLebMpykw/MQ==",
                    "dev": true,
                    "requires": {
                        "aggregate-error": "^3.0.0"
                    }
                },
                "path-exists": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
                    "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
                    "dev": true
                },
                "pkg-dir": {
                    "version": "4.2.0",
                    "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
                    "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
                    "dev": true,
                    "requires": {
                        "find-up": "^4.0.0"
                    }
                },
                "rimraf": {
                    "version": "3.0.2",
                    "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
                    "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
                    "dev": true,
                    "requires": {
                        "glob": "^7.1.3"
                    }
                },
                "schema-utils": {
                    "version": "2.7.0",
                    "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-2.7.0.tgz",
                    "integrity": "sha512-0ilKFI6QQF5nxDZLFn2dMjvc4hjg/Wkg7rHd3jK6/A4a1Hl9VFdQWvgB1UMGoU94pad1P/8N7fMcEnLnSiju8A==",
                    "dev": true,
                    "requires": {
                        "@types/json-schema": "^7.0.4",
                        "ajv": "^6.12.2",
                        "ajv-keywords": "^3.4.1"
                    }
                },
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                    "dev": true
                },
                "ssri": {
                    "version": "8.0.0",
                    "resolved": "https://registry.npmjs.org/ssri/-/ssri-8.0.0.tgz",
                    "integrity": "sha512-aq/pz989nxVYwn16Tsbj1TqFpD5LLrQxHf5zaHuieFV+R0Bbr4y8qUsOA45hXT/N4/9UNXTarBjnjVmjSOVaAA==",
                    "dev": true,
                    "requires": {
                        "minipass": "^3.1.1"
                    }
                },
                "tar": {
                    "version": "6.0.5",
                    "resolved": "https://registry.npmjs.org/tar/-/tar-6.0.5.tgz",
                    "integrity": "sha512-0b4HOimQHj9nXNEAA7zWwMM91Zhhba3pspja6sQbgTpynOJf+bkjBnfybNYzbpLbnwXnbyB4LOREvlyXLkCHSg==",
                    "dev": true,
                    "requires": {
                        "chownr": "^2.0.0",
                        "fs-minipass": "^2.0.0",
                        "minipass": "^3.0.0",
                        "minizlib": "^2.1.1",
                        "mkdirp": "^1.0.3",
                        "yallist": "^4.0.0"
                    }
                },
                "yallist": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
                    "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
                    "dev": true
                }
            }
        },
        "concat-map": {
            "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
            "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s=",
            "dev": true
        },
        "concat-stream": {
            "version": "1.6.2",
            "resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
            "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
            "dev": true,
            "requires": {
                "buffer-from": "^1.0.0",
                "inherits": "^2.0.3",
                "readable-stream": "^2.2.2",
                "typedarray": "^0.0.6"
            }
        },
        "connect-history-api-fallback": {
            "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/connect-history-api-fallback/-/connect-history-api-fallback-1.6.0.tgz",
            "integrity": "sha512-e54B99q/OUoH64zYYRf3HBP5z24G38h5D3qXu23JGRoigpX5Ss4r9ZnDk3g0Z8uQC2x2lPaJ+UlWBc1ZWBWdLg==",
            "dev": true
        },
        "console-browserify": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/console-browserify/-/console-browserify-1.2.0.tgz",
            "integrity": "sha512-ZMkYO/LkF17QvCPqM0gxw8yUzigAOZOSWSHg91FH6orS7vcEj5dVZTidN2fQ14yBSdg97RqhSNwLUXInd52OTA==",
            "dev": true
        },
        "console-control-strings": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
            "integrity": "sha1-PXz0Rk22RG6mRL9LOVB/mFEAjo4=",
            "dev": true
        },
        "constants-browserify": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/constants-browserify/-/constants-browserify-1.0.0.tgz",
            "integrity": "sha1-wguW2MYXdIqvHBYCF2DNJ/y4y3U=",
            "dev": true
        },
        "content-disposition": {
            "version": "0.5.3",
            "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.3.tgz",
            "integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
            "dev": true,
            "requires": {
                "safe-buffer": "5.1.2"
            }
        },
        "content-type": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
            "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA==",
            "dev": true
        },
        "cookie": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.0.tgz",
            "integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg==",
            "dev": true
        },
        "cookie-signature": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
            "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw=",
            "dev": true
        },
        "copy-concurrently": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/copy-concurrently/-/copy-concurrently-1.0.5.tgz",
            "integrity": "sha512-f2domd9fsVDFtaFcbaRZuYXwtdmnzqbADSwhSWYxYB/Q8zsdUUFMXVRwXGDMWmbEzAn1kdRrtI1T/KTFOL4X2A==",
            "dev": true,
            "requires": {
                "aproba": "^1.1.1",
                "fs-write-stream-atomic": "^1.0.8",
                "iferr": "^0.1.5",
                "mkdirp": "^0.5.1",
                "rimraf": "^2.5.4",
                "run-queue": "^1.0.0"
            }
        },
        "copy-descriptor": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
            "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",
            "dev": true
        },
        "copy-webpack-plugin": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/copy-webpack-plugin/-/copy-webpack-plugin-5.1.2.tgz",
            "integrity": "sha512-Uh7crJAco3AjBvgAy9Z75CjK8IG+gxaErro71THQ+vv/bl4HaQcpkexAY8KVW/T6D2W2IRr+couF/knIRkZMIQ==",
            "dev": true,
            "requires": {
                "cacache": "^12.0.3",
                "find-cache-dir": "^2.1.0",
                "glob-parent": "^3.1.0",
                "globby": "^7.1.1",
                "is-glob": "^4.0.1",
                "loader-utils": "^1.2.3",
                "minimatch": "^3.0.4",
                "normalize-path": "^3.0.0",
                "p-limit": "^2.2.1",
                "schema-utils": "^1.0.0",
                "serialize-javascript": "^4.0.0",
                "webpack-log": "^2.0.0"
            },
            "dependencies": {
                "globby": {
                    "version": "7.1.1",
                    "resolved": "https://registry.npmjs.org/globby/-/globby-7.1.1.tgz",
                    "integrity": "sha1-+yzP+UAfhgCUXfral0QMypcrhoA=",
                    "dev": true,
                    "requires": {
                        "array-union": "^1.0.1",
                        "dir-glob": "^2.0.0",
                        "glob": "^7.1.2",
                        "ignore": "^3.3.5",
                        "pify": "^3.0.0",
                        "slash": "^1.0.0"
                    }
                },
                "pify": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
                    "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
                    "dev": true
                }
            }
        },
        "core-js": {
            "version": "2.6.11",
            "resolved": "https://registry.npmjs.org/core-js/-/core-js-2.6.11.tgz",
            "integrity": "sha512-5wjnpaT/3dV+XB4borEsnAYQchn00XSgTAWKDkEqv+K8KevjbzmofK6hfJ9TZIlpj2N0xQpazy7PiRQiWHqzWg==",
            "dev": true
        },
        "core-util-is": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
            "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac=",
            "dev": true
        },
        "cosmiconfig": {
            "version": "5.2.1",
            "resolved": "https://registry.npmjs.org/cosmiconfig/-/cosmiconfig-5.2.1.tgz",
            "integrity": "sha512-H65gsXo1SKjf8zmrJ67eJk8aIRKV5ff2D4uKZIBZShbhGSpEmsQOPW/SKMKYhSTrqR7ufy6RP69rPogdaPh/kA==",
            "dev": true,
            "requires": {
                "import-fresh": "^2.0.0",
                "is-directory": "^0.3.1",
                "js-yaml": "^3.13.1",
                "parse-json": "^4.0.0"
            },
            "dependencies": {
                "parse-json": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-4.0.0.tgz",
                    "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
                    "dev": true,
                    "requires": {
                        "error-ex": "^1.3.1",
                        "json-parse-better-errors": "^1.0.1"
                    }
                }
            }
        },
        "cpx": {
            "version": "1.5.0",
            "resolved": "https://registry.npmjs.org/cpx/-/cpx-1.5.0.tgz",
            "integrity": "sha1-GFvgGFEdhycN7czCkxceN2VauI8=",
            "dev": true,
            "requires": {
                "babel-runtime": "^6.9.2",
                "chokidar": "^1.6.0",
                "duplexer": "^0.1.1",
                "glob": "^7.0.5",
                "glob2base": "^0.0.12",
                "minimatch": "^3.0.2",
                "mkdirp": "^0.5.1",
                "resolve": "^1.1.7",
                "safe-buffer": "^5.0.1",
                "shell-quote": "^1.6.1",
                "subarg": "^1.0.0"
            }
        },
        "create-ecdh": {
            "version": "4.0.4",
            "resolved": "https://registry.npmjs.org/create-ecdh/-/create-ecdh-4.0.4.tgz",
            "integrity": "sha512-mf+TCx8wWc9VpuxfP2ht0iSISLZnt0JgWlrOKZiNqyUZWnjIaCIVNQArMHnCZKfEYRg6IM7A+NeJoN8gf/Ws0A==",
            "dev": true,
            "requires": {
                "bn.js": "^4.1.0",
                "elliptic": "^6.5.3"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
                    "dev": true
                }
            }
        },
        "create-hash": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/create-hash/-/create-hash-1.2.0.tgz",
            "integrity": "sha512-z00bCGNHDG8mHAkP7CtT1qVu+bFQUPjYq/4Iv3C3kWjTFV10zIjfSoeqXo9Asws8gwSHDGj/hl2u4OGIjapeCg==",
            "dev": true,
            "requires": {
                "cipher-base": "^1.0.1",
                "inherits": "^2.0.1",
                "md5.js": "^1.3.4",
                "ripemd160": "^2.0.1",
                "sha.js": "^2.4.0"
            }
        },
        "create-hmac": {
            "version": "1.1.7",
            "resolved": "https://registry.npmjs.org/create-hmac/-/create-hmac-1.1.7.tgz",
            "integrity": "sha512-MJG9liiZ+ogc4TzUwuvbER1JRdgvUFSB5+VR/g5h82fGaIRWMWddtKBHi7/sVhfjQZ6SehlyhvQYrcYkaUIpLg==",
            "dev": true,
            "requires": {
                "cipher-base": "^1.0.3",
                "create-hash": "^1.1.0",
                "inherits": "^2.0.1",
                "ripemd160": "^2.0.0",
                "safe-buffer": "^5.0.1",
                "sha.js": "^2.4.8"
            }
        },
        "cross-spawn": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-3.0.1.tgz",
            "integrity": "sha1-ElYDfsufDF9549bvE14wdwGEuYI=",
            "dev": true,
            "requires": {
                "lru-cache": "^4.0.1",
                "which": "^1.2.9"
            }
        },
        "crypto-browserify": {
            "version": "3.12.0",
            "resolved": "https://registry.npmjs.org/crypto-browserify/-/crypto-browserify-3.12.0.tgz",
            "integrity": "sha512-fz4spIh+znjO2VjL+IdhEpRJ3YN6sMzITSBijk6FK2UvTqruSQW+/cCZTSNsMiZNvUeq0CqurF+dAbyiGOY6Wg==",
            "dev": true,
            "requires": {
                "browserify-cipher": "^1.0.0",
                "browserify-sign": "^4.0.0",
                "create-ecdh": "^4.0.0",
                "create-hash": "^1.1.0",
                "create-hmac": "^1.1.0",
                "diffie-hellman": "^5.0.0",
                "inherits": "^2.0.1",
                "pbkdf2": "^3.0.3",
                "public-encrypt": "^4.0.0",
                "randombytes": "^2.0.0",
                "randomfill": "^1.0.3"
            }
        },
        "css-loader": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/css-loader/-/css-loader-2.1.1.tgz",
            "integrity": "sha512-OcKJU/lt232vl1P9EEDamhoO9iKY3tIjY5GU+XDLblAykTdgs6Ux9P1hTHve8nFKy5KPpOXOsVI/hIwi3841+w==",
            "dev": true,
            "requires": {
                "camelcase": "^5.2.0",
                "icss-utils": "^4.1.0",
                "loader-utils": "^1.2.3",
                "normalize-path": "^3.0.0",
                "postcss": "^7.0.14",
                "postcss-modules-extract-imports": "^2.0.0",
                "postcss-modules-local-by-default": "^2.0.6",
                "postcss-modules-scope": "^2.1.0",
                "postcss-modules-values": "^2.0.0",
                "postcss-value-parser": "^3.3.0",
                "schema-utils": "^1.0.0"
            }
        },
        "css-select": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/css-select/-/css-select-1.2.0.tgz",
            "integrity": "sha1-KzoRBTnFNV8c2NMUYj6HCxIeyFg=",
            "dev": true,
            "requires": {
                "boolbase": "~1.0.0",
                "css-what": "2.1",
                "domutils": "1.5.1",
                "nth-check": "~1.0.1"
            },
            "dependencies": {
                "dom-serializer": {
                    "version": "0.2.2",
                    "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.2.2.tgz",
                    "integrity": "sha512-2/xPb3ORsQ42nHYiSunXkDjPLBaEj/xTwUO4B7XCZQTRk7EBtTOPaygh10YAAh2OI1Qrp6NWfpAhzswj0ydt9g==",
                    "dev": true,
                    "requires": {
                        "domelementtype": "^2.0.1",
                        "entities": "^2.0.0"
                    },
                    "dependencies": {
                        "domelementtype": {
                            "version": "2.0.1",
                            "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.0.1.tgz",
                            "integrity": "sha512-5HOHUDsYZWV8FGWN0Njbr/Rn7f/eWSQi1v7+HsUVwXgn8nWWlL64zKDkS0n8ZmQ3mlWOMuXOnR+7Nx/5tMO5AQ==",
                            "dev": true
                        }
                    }
                },
                "domelementtype": {
                    "version": "1.3.1",
                    "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.3.1.tgz",
                    "integrity": "sha512-BSKB+TSpMpFI/HOxCNr1O8aMOTZ8hT3pM3GQ0w/mWRmkhEDSFJkkyzz4XQsBV44BChwGkrDfMyjVD0eA2aFV3w==",
                    "dev": true
                },
                "domutils": {
                    "version": "1.5.1",
                    "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.5.1.tgz",
                    "integrity": "sha1-3NhIiib1Y9YQeeSMn3t+Mjc2gs8=",
                    "dev": true,
                    "requires": {
                        "dom-serializer": "0",
                        "domelementtype": "1"
                    }
                }
            }
        },
        "css-what": {
            "version": "2.1.3",
            "resolved": "https://registry.npmjs.org/css-what/-/css-what-2.1.3.tgz",
            "integrity": "sha512-a+EPoD+uZiNfh+5fxw2nO9QwFa6nJe2Or35fGY6Ipw1R3R4AGz1d1TEZrCegvw2YTmZ0jXirGYlzxxpYSHwpEg==",
            "dev": true
        },
        "cssesc": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
            "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
            "dev": true
        },
        "currently-unhandled": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/currently-unhandled/-/currently-unhandled-0.4.1.tgz",
            "integrity": "sha1-mI3zP+qxke95mmE2nddsF635V+o=",
            "dev": true,
            "requires": {
                "array-find-index": "^1.0.1"
            }
        },
        "cyclist": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/cyclist/-/cyclist-1.0.1.tgz",
            "integrity": "sha1-WW6WmP0MgOEgOMK4LW6xs1tiJNk=",
            "dev": true
        },
        "dashdash": {
            "version": "1.14.1",
            "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
            "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
            "dev": true,
            "requires": {
                "assert-plus": "^1.0.0"
            }
        },
        "debug": {
            "version": "2.6.9",
            "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
            "dev": true,
            "requires": {
                "ms": "2.0.0"
            }
        },
        "decamelize": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
            "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
            "dev": true
        },
        "decode-uri-component": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
            "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",
            "dev": true
        },
        "deep-equal": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/deep-equal/-/deep-equal-1.1.1.tgz",
            "integrity": "sha512-yd9c5AdiqVcR+JjcwUQb9DkhJc8ngNr0MahEBGvDiJw8puWab2yZlh+nkasOnZP+EGTAP6rRp2JzJhJZzvNF8g==",
            "dev": true,
            "requires": {
                "is-arguments": "^1.0.4",
                "is-date-object": "^1.0.1",
                "is-regex": "^1.0.4",
                "object-is": "^1.0.1",
                "object-keys": "^1.1.1",
                "regexp.prototype.flags": "^1.2.0"
            }
        },
        "default-gateway": {
            "version": "4.2.0",
            "resolved": "https://registry.npmjs.org/default-gateway/-/default-gateway-4.2.0.tgz",
            "integrity": "sha512-h6sMrVB1VMWVrW13mSc6ia/DwYYw5MN6+exNu1OaJeFac5aSAvwM7lZ0NVfTABuSkQelr4h5oebg3KB1XPdjgA==",
            "dev": true,
            "requires": {
                "execa": "^1.0.0",
                "ip-regex": "^2.1.0"
            }
        },
        "define-properties": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
            "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
            "dev": true,
            "requires": {
                "object-keys": "^1.0.12"
            }
        },
        "define-property": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/define-property/-/define-property-2.0.2.tgz",
            "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
            "dev": true,
            "requires": {
                "is-descriptor": "^1.0.2",
                "isobject": "^3.0.1"
            },
            "dependencies": {
                "is-accessor-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
                    "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
                    "dev": true,
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-data-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
                    "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
                    "dev": true,
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-descriptor": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
                    "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
                    "dev": true,
                    "requires": {
                        "is-accessor-descriptor": "^1.0.0",
                        "is-data-descriptor": "^1.0.0",
                        "kind-of": "^6.0.2"
                    }
                }
            }
        },
        "del": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/del/-/del-4.1.1.tgz",
            "integrity": "sha512-QwGuEUouP2kVwQenAsOof5Fv8K9t3D8Ca8NxcXKrIpEHjTXK5J2nXLdP+ALI1cgv8wj7KuwBhTwBkOZSJKM5XQ==",
            "dev": true,
            "requires": {
                "@types/glob": "^7.1.1",
                "globby": "^6.1.0",
                "is-path-cwd": "^2.0.0",
                "is-path-in-cwd": "^2.0.0",
                "p-map": "^2.0.0",
                "pify": "^4.0.1",
                "rimraf": "^2.6.3"
            },
            "dependencies": {
                "pify": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
                    "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
                    "dev": true
                }
            }
        },
        "delayed-stream": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
            "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
            "dev": true
        },
        "delegates": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
            "integrity": "sha1-hMbhWbgZBP3KWaDvRM2HDTElD5o=",
            "dev": true
        },
        "depd": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
            "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",
            "dev": true
        },
        "des.js": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/des.js/-/des.js-1.0.1.tgz",
            "integrity": "sha512-Q0I4pfFrv2VPd34/vfLrFOoRmlYj3OV50i7fskps1jZWK1kApMWWT9G6RRUeYedLcBDIhnSDaUvJMb3AhUlaEA==",
            "dev": true,
            "requires": {
                "inherits": "^2.0.1",
                "minimalistic-assert": "^1.0.0"
            }
        },
        "destroy": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
            "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA=",
            "dev": true
        },
        "detect-node": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/detect-node/-/detect-node-2.0.4.tgz",
            "integrity": "sha512-ZIzRpLJrOj7jjP2miAtgqIfmzbxa4ZOr5jJc601zklsfEx9oTzmmj2nVpIPRpNlRTIh8lc1kyViIY7BWSGNmKw==",
            "dev": true
        },
        "detect-port-alt": {
            "version": "1.1.6",
            "resolved": "https://registry.npmjs.org/detect-port-alt/-/detect-port-alt-1.1.6.tgz",
            "integrity": "sha512-5tQykt+LqfJFBEYaDITx7S7cR7mJ/zQmLXZ2qt5w04ainYZw6tBf9dBunMjVeVOdYVRUzUOE4HkY5J7+uttb5Q==",
            "dev": true,
            "requires": {
                "address": "^1.0.1",
                "debug": "^2.6.0"
            }
        },
        "diffie-hellman": {
            "version": "5.0.3",
            "resolved": "https://registry.npmjs.org/diffie-hellman/-/diffie-hellman-5.0.3.tgz",
            "integrity": "sha512-kqag/Nl+f3GwyK25fhUMYj81BUOrZ9IuJsjIcDE5icNM9FJHAVm3VcUDxdLPoQtTuUylWm6ZIknYJwwaPxsUzg==",
            "dev": true,
            "requires": {
                "bn.js": "^4.1.0",
                "miller-rabin": "^4.0.0",
                "randombytes": "^2.0.0"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
                    "dev": true
                }
            }
        },
        "dir-glob": {
            "version": "2.2.2",
            "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-2.2.2.tgz",
            "integrity": "sha512-f9LBi5QWzIW3I6e//uxZoLBlUt9kcp66qo0sSCxL6YZKc75R1c4MFCoe/LaZiBGmgujvQdxc5Bn3QhfyvK5Hsw==",
            "dev": true,
            "requires": {
                "path-type": "^3.0.0"
            },
            "dependencies": {
                "path-type": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/path-type/-/path-type-3.0.0.tgz",
                    "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
                    "dev": true,
                    "requires": {
                        "pify": "^3.0.0"
                    }
                },
                "pify": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-3.0.0.tgz",
                    "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
                    "dev": true
                }
            }
        },
        "dns-equal": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/dns-equal/-/dns-equal-1.0.0.tgz",
            "integrity": "sha1-s55/HabrCnW6nBcySzR1PEfgZU0=",
            "dev": true
        },
        "dns-packet": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/dns-packet/-/dns-packet-1.3.1.tgz",
            "integrity": "sha512-0UxfQkMhYAUaZI+xrNZOz/as5KgDU0M/fQ9b6SpkyLbk3GEswDi6PADJVaYJradtRVsRIlF1zLyOodbcTCDzUg==",
            "dev": true,
            "requires": {
                "ip": "^1.1.0",
                "safe-buffer": "^5.0.1"
            }
        },
        "dns-txt": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/dns-txt/-/dns-txt-2.0.2.tgz",
            "integrity": "sha1-uR2Ab10nGI5Ks+fRB9iBocxGQrY=",
            "dev": true,
            "requires": {
                "buffer-indexof": "^1.0.0"
            }
        },
        "dom-converter": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/dom-converter/-/dom-converter-0.2.0.tgz",
            "integrity": "sha512-gd3ypIPfOMr9h5jIKq8E3sHOTCjeirnl0WK5ZdS1AW0Odt0b1PaWaHdJ4Qk4klv+YB9aJBS7mESXjFoDQPu6DA==",
            "dev": true,
            "requires": {
                "utila": "~0.4"
            }
        },
        "dom-serializer": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-1.0.1.tgz",
            "integrity": "sha512-1Aj1Qy3YLbdslkI75QEOfdp9TkQ3o8LRISAzxOibjBs/xWwr1WxZFOQphFkZuepHFGo+kB8e5FVJSS0faAJ4Rw==",
            "dev": true,
            "requires": {
                "domelementtype": "^2.0.1",
                "domhandler": "^3.0.0",
                "entities": "^2.0.0"
            }
        },
        "domain-browser": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/domain-browser/-/domain-browser-1.2.0.tgz",
            "integrity": "sha512-jnjyiM6eRyZl2H+W8Q/zLMA481hzi0eszAaBUzIVnmYVDBbnLxVNnfu1HgEBvCbL+71FrxMl3E6lpKH7Ge3OXA==",
            "dev": true
        },
        "domelementtype": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.0.1.tgz",
            "integrity": "sha512-5HOHUDsYZWV8FGWN0Njbr/Rn7f/eWSQi1v7+HsUVwXgn8nWWlL64zKDkS0n8ZmQ3mlWOMuXOnR+7Nx/5tMO5AQ==",
            "dev": true
        },
        "domhandler": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-3.0.0.tgz",
            "integrity": "sha512-eKLdI5v9m67kbXQbJSNn1zjh0SDzvzWVWtX+qEI3eMjZw8daH9k8rlj1FZY9memPwjiskQFbe7vHVVJIAqoEhw==",
            "dev": true,
            "requires": {
                "domelementtype": "^2.0.1"
            }
        },
        "domutils": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/domutils/-/domutils-2.2.0.tgz",
            "integrity": "sha512-0haAxVr1PR0SqYwCH7mxMpHZUwjih9oPPedqpR/KufsnxPyZ9dyVw1R5093qnJF3WXSbjBkdzRWLw/knJV/fAg==",
            "dev": true,
            "requires": {
                "dom-serializer": "^1.0.1",
                "domelementtype": "^2.0.1",
                "domhandler": "^3.0.0"
            }
        },
        "dot-case": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/dot-case/-/dot-case-3.0.3.tgz",
            "integrity": "sha512-7hwEmg6RiSQfm/GwPL4AAWXKy3YNNZA3oFv2Pdiey0mwkRCPZ9x6SZbkLcn8Ma5PYeVokzoD4Twv2n7LKp5WeA==",
            "dev": true,
            "requires": {
                "no-case": "^3.0.3",
                "tslib": "^1.10.0"
            },
            "dependencies": {
                "lower-case": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/lower-case/-/lower-case-2.0.1.tgz",
                    "integrity": "sha512-LiWgfDLLb1dwbFQZsSglpRj+1ctGnayXz3Uv0/WO8n558JycT5fg6zkNcnW0G68Nn0aEldTFeEfmjCfmqry/rQ==",
                    "dev": true,
                    "requires": {
                        "tslib": "^1.10.0"
                    }
                },
                "no-case": {
                    "version": "3.0.3",
                    "resolved": "https://registry.npmjs.org/no-case/-/no-case-3.0.3.tgz",
                    "integrity": "sha512-ehY/mVQCf9BL0gKfsJBvFJen+1V//U+0HQMPrWct40ixE4jnv0bfvxDbWtAHL9EcaPEOJHVVYKoQn1TlZUB8Tw==",
                    "dev": true,
                    "requires": {
                        "lower-case": "^2.0.1",
                        "tslib": "^1.10.0"
                    }
                }
            }
        },
        "duplexer": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/duplexer/-/duplexer-0.1.2.tgz",
            "integrity": "sha512-jtD6YG370ZCIi/9GTaJKQxWTZD045+4R4hTk/x1UyoqadyJ9x9CgSi1RlVDQF8U2sxLLSnFkCaMihqljHIWgMg==",
            "dev": true
        },
        "duplexify": {
            "version": "3.7.1",
            "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.7.1.tgz",
            "integrity": "sha512-07z8uv2wMyS51kKhD1KsdXJg5WQ6t93RneqRxUHnskXVtlYYkLqM0gqStQZ3pj073g687jPCHrqNfCzawLYh5g==",
            "dev": true,
            "requires": {
                "end-of-stream": "^1.0.0",
                "inherits": "^2.0.1",
                "readable-stream": "^2.0.0",
                "stream-shift": "^1.0.0"
            }
        },
        "ecc-jsbn": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
            "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
            "dev": true,
            "requires": {
                "jsbn": "~0.1.0",
                "safer-buffer": "^2.1.0"
            }
        },
        "ee-first": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
            "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0=",
            "dev": true
        },
        "elliptic": {
            "version": "6.5.3",
            "resolved": "https://registry.npmjs.org/elliptic/-/elliptic-6.5.3.tgz",
            "integrity": "sha512-IMqzv5wNQf+E6aHeIqATs0tOLeOTwj1QKbRcS3jBbYkl5oLAserA8yJTT7/VyHUYG91PRmPyeQDObKLPpeS4dw==",
            "dev": true,
            "requires": {
                "bn.js": "^4.4.0",
                "brorand": "^1.0.1",
                "hash.js": "^1.0.0",
                "hmac-drbg": "^1.0.0",
                "inherits": "^2.0.1",
                "minimalistic-assert": "^1.0.0",
                "minimalistic-crypto-utils": "^1.0.0"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
                    "dev": true
                }
            }
        },
        "email-addresses": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/email-addresses/-/email-addresses-3.1.0.tgz",
            "integrity": "sha512-k0/r7GrWVL32kZlGwfPNgB2Y/mMXVTq/decgLczm/j34whdaspNrZO8CnXPf1laaHxI6ptUlsnAxN+UAPw+fzg==",
            "dev": true
        },
        "emoji-regex": {
            "version": "7.0.3",
            "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
            "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
            "dev": true
        },
        "emojis-list": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-3.0.0.tgz",
            "integrity": "sha512-/kyM18EfinwXZbno9FyUGeFh87KC8HRQBQGildHZbEuRyWFOmv1U10o9BBp8XVZDVNNuQKyIGIu5ZYAAXJ0V2Q==",
            "dev": true
        },
        "encodeurl": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
            "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k=",
            "dev": true
        },
        "end-of-stream": {
            "version": "1.4.4",
            "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
            "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
            "dev": true,
            "requires": {
                "once": "^1.4.0"
            }
        },
        "enhanced-resolve": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-4.1.1.tgz",
            "integrity": "sha512-98p2zE+rL7/g/DzMHMTF4zZlCgeVdJ7yr6xzEpJRYwFYrGi9ANdn5DnJURg6RpBkyk60XYDnWIv51VfIhfNGuA==",
            "dev": true,
            "requires": {
                "graceful-fs": "^4.1.2",
                "memory-fs": "^0.5.0",
                "tapable": "^1.0.0"
            }
        },
        "entities": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/entities/-/entities-2.0.3.tgz",
            "integrity": "sha512-MyoZ0jgnLvB2X3Lg5HqpFmn1kybDiIfEQmKzTb5apr51Rb+T3KdmMiqa70T+bhGnyv7bQ6WMj2QMHpGMmlrUYQ==",
            "dev": true
        },
        "errno": {
            "version": "0.1.7",
            "resolved": "https://registry.npmjs.org/errno/-/errno-0.1.7.tgz",
            "integrity": "sha512-MfrRBDWzIWifgq6tJj60gkAwtLNb6sQPlcFrSOflcP1aFmmruKQ2wRnze/8V6kgyz7H3FF8Npzv78mZ7XLLflg==",
            "dev": true,
            "requires": {
                "prr": "~1.0.1"
            }
        },
        "error-ex": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
            "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
            "dev": true,
            "requires": {
                "is-arrayish": "^0.2.1"
            }
        },
        "es-abstract": {
            "version": "1.17.6",
            "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.17.6.tgz",
            "integrity": "sha512-Fr89bON3WFyUi5EvAeI48QTWX0AyekGgLA8H+c+7fbfCkJwRWRMLd8CQedNEyJuoYYhmtEqY92pgte1FAhBlhw==",
            "dev": true,
            "requires": {
                "es-to-primitive": "^1.2.1",
                "function-bind": "^1.1.1",
                "has": "^1.0.3",
                "has-symbols": "^1.0.1",
                "is-callable": "^1.2.0",
                "is-regex": "^1.1.0",
                "object-inspect": "^1.7.0",
                "object-keys": "^1.1.1",
                "object.assign": "^4.1.0",
                "string.prototype.trimend": "^1.0.1",
                "string.prototype.trimstart": "^1.0.1"
            }
        },
        "es-to-primitive": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
            "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
            "dev": true,
            "requires": {
                "is-callable": "^1.1.4",
                "is-date-object": "^1.0.1",
                "is-symbol": "^1.0.2"
            }
        },
        "es6-promise": {
            "version": "4.2.8",
            "resolved": "https://registry.npmjs.org/es6-promise/-/es6-promise-4.2.8.tgz",
            "integrity": "sha512-HJDGx5daxeIvxdBxvG2cb9g4tEvwIk3i8+nhX0yGrYmZUzbkdg8QbDevheDB8gd0//uPj4c1EQua8Q+MViT0/w==",
            "dev": true
        },
        "es6-promisify": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/es6-promisify/-/es6-promisify-5.0.0.tgz",
            "integrity": "sha1-UQnWLz5W6pZ8S2NQWu8IKRyKUgM=",
            "dev": true,
            "requires": {
                "es6-promise": "^4.0.3"
            }
        },
        "es6-templates": {
            "version": "0.2.3",
            "resolved": "https://registry.npmjs.org/es6-templates/-/es6-templates-0.2.3.tgz",
            "integrity": "sha1-XLmsn7He1usSOTQrgdeSu7QHjuQ=",
            "dev": true,
            "requires": {
                "recast": "~0.11.12",
                "through": "~2.3.6"
            }
        },
        "escape-html": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
            "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg=",
            "dev": true
        },
        "escape-string-regexp": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
            "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
            "dev": true
        },
        "eslint-scope": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-4.0.3.tgz",
            "integrity": "sha512-p7VutNr1O/QrxysMo3E45FjYDTeXBy0iTltPFNSqKAIfjDSXC+4dj+qfyuD8bfAXrW/y6lW3O76VaYNPKfpKrg==",
            "dev": true,
            "requires": {
                "esrecurse": "^4.1.0",
                "estraverse": "^4.1.1"
            }
        },
        "esprima": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/esprima/-/esprima-3.1.3.tgz",
            "integrity": "sha1-/cpRzuYTOJXjyI1TXOSdv/YqRjM=",
            "dev": true
        },
        "esrecurse": {
            "version": "4.2.1",
            "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.2.1.tgz",
            "integrity": "sha512-64RBB++fIOAXPw3P9cy89qfMlvZEXZkqqJkjqqXIvzP5ezRZjW+lPWjw35UX/3EhUPFYbg5ER4JYgDw4007/DQ==",
            "dev": true,
            "requires": {
                "estraverse": "^4.1.0"
            }
        },
        "estraverse": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
            "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
            "dev": true
        },
        "etag": {
            "version": "1.8.1",
            "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
            "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc=",
            "dev": true
        },
        "eventemitter3": {
            "version": "4.0.7",
            "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.7.tgz",
            "integrity": "sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==",
            "dev": true
        },
        "events": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/events/-/events-3.2.0.tgz",
            "integrity": "sha512-/46HWwbfCX2xTawVfkKLGxMifJYQBWMwY1mjywRtb4c9x8l5NP3KoJtnIOiL1hfdRkIuYhETxQlo62IF8tcnlg==",
            "dev": true
        },
        "eventsource": {
            "version": "1.0.7",
            "resolved": "https://registry.npmjs.org/eventsource/-/eventsource-1.0.7.tgz",
            "integrity": "sha512-4Ln17+vVT0k8aWq+t/bF5arcS3EpT9gYtW66EPacdj/mAFevznsnyoHLPy2BA8gbIQeIHoPsvwmfBftfcG//BQ==",
            "dev": true,
            "requires": {
                "original": "^1.0.0"
            }
        },
        "evp_bytestokey": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/evp_bytestokey/-/evp_bytestokey-1.0.3.tgz",
            "integrity": "sha512-/f2Go4TognH/KvCISP7OUsHn85hT9nUkxxA9BEWxFn+Oj9o8ZNLm/40hdlgSLyuOimsrTKLUMEorQexp/aPQeA==",
            "dev": true,
            "requires": {
                "md5.js": "^1.3.4",
                "safe-buffer": "^5.1.1"
            }
        },
        "execa": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/execa/-/execa-1.0.0.tgz",
            "integrity": "sha512-adbxcyWV46qiHyvSp50TKt05tB4tK3HcmF7/nxfAdhnox83seTDbwnaqKO4sXRy7roHAIFqJP/Rw/AuEbX61LA==",
            "dev": true,
            "requires": {
                "cross-spawn": "^6.0.0",
                "get-stream": "^4.0.0",
                "is-stream": "^1.1.0",
                "npm-run-path": "^2.0.0",
                "p-finally": "^1.0.0",
                "signal-exit": "^3.0.0",
                "strip-eof": "^1.0.0"
            },
            "dependencies": {
                "cross-spawn": {
                    "version": "6.0.5",
                    "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-6.0.5.tgz",
                    "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
                    "dev": true,
                    "requires": {
                        "nice-try": "^1.0.4",
                        "path-key": "^2.0.1",
                        "semver": "^5.5.0",
                        "shebang-command": "^1.2.0",
                        "which": "^1.2.9"
                    }
                },
                "path-key": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
                    "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
                    "dev": true
                },
                "shebang-command": {
                    "version": "1.2.0",
                    "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-1.2.0.tgz",
                    "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
                    "dev": true,
                    "requires": {
                        "shebang-regex": "^1.0.0"
                    }
                },
                "shebang-regex": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-1.0.0.tgz",
                    "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=",
                    "dev": true
                }
            }
        },
        "expand-brackets": {
            "version": "2.1.4",
            "resolved": "https://registry.npmjs.org/expand-brackets/-/expand-brackets-2.1.4.tgz",
            "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
            "dev": true,
            "requires": {
                "debug": "^2.3.3",
                "define-property": "^0.2.5",
                "extend-shallow": "^2.0.1",
                "posix-character-classes": "^0.1.0",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "dev": true,
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                },
                "extend-shallow": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                    "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                    "dev": true,
                    "requires": {
                        "is-extendable": "^0.1.0"
                    }
                }
            }
        },
        "expand-range": {
            "version": "1.8.2",
            "resolved": "https://registry.npmjs.org/expand-range/-/expand-range-1.8.2.tgz",
            "integrity": "sha1-opnv/TNf4nIeuujiV+x5ZE/IUzc=",
            "dev": true,
            "requires": {
                "fill-range": "^2.1.0"
            },
            "dependencies": {
                "fill-range": {
                    "version": "2.2.4",
                    "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-2.2.4.tgz",
                    "integrity": "sha512-cnrcCbj01+j2gTG921VZPnHbjmdAf8oQV/iGeV2kZxGSyfYjjTyY79ErsK1WJWMpw6DaApEX72binqJE+/d+5Q==",
                    "dev": true,
                    "requires": {
                        "is-number": "^2.1.0",
                        "isobject": "^2.0.0",
                        "randomatic": "^3.0.0",
                        "repeat-element": "^1.1.2",
                        "repeat-string": "^1.5.2"
                    }
                },
                "is-number": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/is-number/-/is-number-2.1.0.tgz",
                    "integrity": "sha1-Afy7s5NGOlSPL0ZszhbezknbkI8=",
                    "dev": true,
                    "requires": {
                        "kind-of": "^3.0.2"
                    }
                },
                "isobject": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
                    "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
                    "dev": true,
                    "requires": {
                        "isarray": "1.0.0"
                    }
                },
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "dev": true,
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "express": {
            "version": "4.17.1",
            "resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
            "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
            "dev": true,
            "requires": {
                "accepts": "~1.3.7",
                "array-flatten": "1.1.1",
                "body-parser": "1.19.0",
                "content-disposition": "0.5.3",
                "content-type": "~1.0.4",
                "cookie": "0.4.0",
                "cookie-signature": "1.0.6",
                "debug": "2.6.9",
                "depd": "~1.1.2",
                "encodeurl": "~1.0.2",
                "escape-html": "~1.0.3",
                "etag": "~1.8.1",
                "finalhandler": "~1.1.2",
                "fresh": "0.5.2",
                "merge-descriptors": "1.0.1",
                "methods": "~1.1.2",
                "on-finished": "~2.3.0",
                "parseurl": "~1.3.3",
                "path-to-regexp": "0.1.7",
                "proxy-addr": "~2.0.5",
                "qs": "6.7.0",
                "range-parser": "~1.2.1",
                "safe-buffer": "5.1.2",
                "send": "0.17.1",
                "serve-static": "1.14.1",
                "setprototypeof": "1.1.1",
                "statuses": "~1.5.0",
                "type-is": "~1.6.18",
                "utils-merge": "1.0.1",
                "vary": "~1.1.2"
            },
            "dependencies": {
                "qs": {
                    "version": "6.7.0",
                    "resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
                    "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ==",
                    "dev": true
                }
            }
        },
        "extend": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
            "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
            "dev": true
        },
        "extend-shallow": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-3.0.2.tgz",
            "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
            "dev": true,
            "requires": {
                "assign-symbols": "^1.0.0",
                "is-extendable": "^1.0.1"
            },
            "dependencies": {
                "is-extendable": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
                    "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
                    "dev": true,
                    "requires": {
                        "is-plain-object": "^2.0.4"
                    }
                }
            }
        },
        "external-editor": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz",
            "integrity": "sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==",
            "dev": true,
            "requires": {
                "chardet": "^0.7.0",
                "iconv-lite": "^0.4.24",
                "tmp": "^0.0.33"
            }
        },
        "extglob": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/extglob/-/extglob-2.0.4.tgz",
            "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
            "dev": true,
            "requires": {
                "array-unique": "^0.3.2",
                "define-property": "^1.0.0",
                "expand-brackets": "^2.1.4",
                "extend-shallow": "^2.0.1",
                "fragment-cache": "^0.2.1",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
                    "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
                    "dev": true,
                    "requires": {
                        "is-descriptor": "^1.0.0"
                    }
                },
                "extend-shallow": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                    "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                    "dev": true,
                    "requires": {
                        "is-extendable": "^0.1.0"
                    }
                },
                "is-accessor-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
                    "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
                    "dev": true,
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-data-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
                    "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
                    "dev": true,
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-descriptor": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
                    "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
                    "dev": true,
                    "requires": {
                        "is-accessor-descriptor": "^1.0.0",
                        "is-data-descriptor": "^1.0.0",
                        "kind-of": "^6.0.2"
                    }
                }
            }
        },
        "extract-zip": {
            "version": "1.7.0",
            "resolved": "https://registry.npmjs.org/extract-zip/-/extract-zip-1.7.0.tgz",
            "integrity": "sha512-xoh5G1W/PB0/27lXgMQyIhP5DSY/LhoCsOyZgb+6iMmRtCwVBo55uKaMoEYrDCKQhWvqEip5ZPKAc6eFNyf/MA==",
            "dev": true,
            "requires": {
                "concat-stream": "^1.6.2",
                "debug": "^2.6.9",
                "mkdirp": "^0.5.4",
                "yauzl": "^2.10.0"
            }
        },
        "extsprintf": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
            "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
            "dev": true
        },
        "fast-deep-equal": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.1.tgz",
            "integrity": "sha512-8UEa58QDLauDNfpbrX55Q9jrGHThw2ZMdOky5Gl1CDtVeJDPVrG4Jxx1N8jw2gkWaff5UUuX1KJd+9zGe2B+ZA==",
            "dev": true
        },
        "fast-json-stable-stringify": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
            "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
            "dev": true
        },
        "fastparse": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/fastparse/-/fastparse-1.1.2.tgz",
            "integrity": "sha512-483XLLxTVIwWK3QTrMGRqUfUpoOs/0hbQrl2oz4J0pAcm3A3bu84wxTFqGqkJzewCLdME38xJLJAxBABfQT8sQ==",
            "dev": true
        },
        "faye-websocket": {
            "version": "0.10.0",
            "resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.10.0.tgz",
            "integrity": "sha1-TkkvjQTftviQA1B/btvy1QHnxvQ=",
            "dev": true,
            "requires": {
                "websocket-driver": ">=0.5.1"
            }
        },
        "fd-slicer": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/fd-slicer/-/fd-slicer-1.1.0.tgz",
            "integrity": "sha1-JcfInLH5B3+IkbvmHY85Dq4lbx4=",
            "dev": true,
            "requires": {
                "pend": "~1.2.0"
            }
        },
        "figgy-pudding": {
            "version": "3.5.2",
            "resolved": "https://registry.npmjs.org/figgy-pudding/-/figgy-pudding-3.5.2.tgz",
            "integrity": "sha512-0btnI/H8f2pavGMN8w40mlSKOfTK2SVJmBfBeVIj3kNw0swwgzyRq0d5TJVOwodFmtvpPeWPN/MCcfuWF0Ezbw==",
            "dev": true
        },
        "figlet": {
            "version": "1.5.0",
            "resolved": "https://registry.npmjs.org/figlet/-/figlet-1.5.0.tgz",
            "integrity": "sha512-ZQJM4aifMpz6H19AW1VqvZ7l4pOE9p7i/3LyxgO2kp+PO/VcDYNqIHEMtkccqIhTXMKci4kjueJr/iCQEaT/Ww==",
            "dev": true
        },
        "figures": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/figures/-/figures-3.2.0.tgz",
            "integrity": "sha512-yaduQFRKLXYOGgEn6AZau90j3ggSOyiqXU0F9JZfeXYhNa+Jk4X+s45A2zg5jns87GAFa34BBm2kXw4XpNcbdg==",
            "dev": true,
            "requires": {
                "escape-string-regexp": "^1.0.5"
            }
        },
        "file-loader": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/file-loader/-/file-loader-3.0.1.tgz",
            "integrity": "sha512-4sNIOXgtH/9WZq4NvlfU3Opn5ynUsqBwSLyM+I7UOwdGigTBYfVVQEwe/msZNX/j4pCJTIM14Fsw66Svo1oVrw==",
            "dev": true,
            "requires": {
                "loader-utils": "^1.0.2",
                "schema-utils": "^1.0.0"
            }
        },
        "file-uri-to-path": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/file-uri-to-path/-/file-uri-to-path-1.0.0.tgz",
            "integrity": "sha512-0Zt+s3L7Vf1biwWZ29aARiVYLx7iMGnEUl9x33fbB/j3jR81u/O2LbqK+Bm1CDSNDKVtJ/YjwY7TUd5SkeLQLw==",
            "dev": true,
            "optional": true
        },
        "filename-regex": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/filename-regex/-/filename-regex-2.0.1.tgz",
            "integrity": "sha1-wcS5vuPglyXdsQa3XB4wH+LxiyY=",
            "dev": true
        },
        "filename-reserved-regex": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/filename-reserved-regex/-/filename-reserved-regex-1.0.0.tgz",
            "integrity": "sha1-5hz4BfDeHJhFZ9A4bcXfUO5a9+Q=",
            "dev": true
        },
        "filenamify": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/filenamify/-/filenamify-1.2.1.tgz",
            "integrity": "sha1-qfL/0RxQO+0wABUCknI3jx8TZaU=",
            "dev": true,
            "requires": {
                "filename-reserved-regex": "^1.0.0",
                "strip-outer": "^1.0.0",
                "trim-repeated": "^1.0.0"
            }
        },
        "filenamify-url": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/filenamify-url/-/filenamify-url-1.0.0.tgz",
            "integrity": "sha1-syvYExnvWGO3MHi+1Q9GpPeXX1A=",
            "dev": true,
            "requires": {
                "filenamify": "^1.0.0",
                "humanize-url": "^1.0.0"
            }
        },
        "filesize": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/filesize/-/filesize-6.1.0.tgz",
            "integrity": "sha512-LpCHtPQ3sFx67z+uh2HnSyWSLLu5Jxo21795uRDuar/EOuYWXib5EmPaGIBuSnRqH2IODiKA2k5re/K9OnN/Yg==",
            "dev": true
        },
        "fill-range": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-4.0.0.tgz",
            "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
            "dev": true,
            "requires": {
                "extend-shallow": "^2.0.1",
                "is-number": "^3.0.0",
                "repeat-string": "^1.6.1",
                "to-regex-range": "^2.1.0"
            },
            "dependencies": {
                "extend-shallow": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                    "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                    "dev": true,
                    "requires": {
                        "is-extendable": "^0.1.0"
                    }
                }
            }
        },
        "finalhandler": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
            "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
            "dev": true,
            "requires": {
                "debug": "2.6.9",
                "encodeurl": "~1.0.2",
                "escape-html": "~1.0.3",
                "on-finished": "~2.3.0",
                "parseurl": "~1.3.3",
                "statuses": "~1.5.0",
                "unpipe": "~1.0.0"
            }
        },
        "find-cache-dir": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-2.1.0.tgz",
            "integrity": "sha512-Tq6PixE0w/VMFfCgbONnkiQIVol/JJL7nRMi20fqzA4NRs9AfeqMGeRdPi3wIhYkxjeBaWh2rxwapn5Tu3IqOQ==",
            "dev": true,
            "requires": {
                "commondir": "^1.0.1",
                "make-dir": "^2.0.0",
                "pkg-dir": "^3.0.0"
            }
        },
        "find-index": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/find-index/-/find-index-0.1.1.tgz",
            "integrity": "sha1-Z101iyyjiS15Whq0cjL4tuLg3eQ=",
            "dev": true
        },
        "find-up": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/find-up/-/find-up-1.1.2.tgz",
            "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",
            "dev": true,
            "requires": {
                "path-exists": "^2.0.0",
                "pinkie-promise": "^2.0.0"
            }
        },
        "flush-write-stream": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/flush-write-stream/-/flush-write-stream-1.1.1.tgz",
            "integrity": "sha512-3Z4XhFZ3992uIq0XOqb9AreonueSYphE6oYbpt5+3u06JWklbsPkNv3ZKkP9Bz/r+1MWCaMoSQ28P85+1Yc77w==",
            "dev": true,
            "requires": {
                "inherits": "^2.0.3",
                "readable-stream": "^2.3.6"
            }
        },
        "follow-redirects": {
            "version": "1.13.0",
            "resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.13.0.tgz",
            "integrity": "sha512-aq6gF1BEKje4a9i9+5jimNFIpq4Q1WiwBToeRK5NvZBd/TRsmW8BsJfOEGkr76TbOyPVD3OVDN910EcUNtRYEA==",
            "dev": true
        },
        "for-in": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/for-in/-/for-in-1.0.2.tgz",
            "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",
            "dev": true
        },
        "for-own": {
            "version": "0.1.5",
            "resolved": "https://registry.npmjs.org/for-own/-/for-own-0.1.5.tgz",
            "integrity": "sha1-UmXGgaTylNq78XyVCbZ2OqhFEM4=",
            "dev": true,
            "requires": {
                "for-in": "^1.0.1"
            }
        },
        "forever-agent": {
            "version": "0.6.1",
            "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
            "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
            "dev": true
        },
        "form-data": {
            "version": "2.3.3",
            "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
            "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
            "dev": true,
            "requires": {
                "asynckit": "^0.4.0",
                "combined-stream": "^1.0.6",
                "mime-types": "^2.1.12"
            }
        },
        "forwarded": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.1.2.tgz",
            "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ=",
            "dev": true
        },
        "fragment-cache": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/fragment-cache/-/fragment-cache-0.2.1.tgz",
            "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
            "dev": true,
            "requires": {
                "map-cache": "^0.2.2"
            }
        },
        "fresh": {
            "version": "0.5.2",
            "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
            "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac=",
            "dev": true
        },
        "from2": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/from2/-/from2-2.3.0.tgz",
            "integrity": "sha1-i/tVAr3kpNNs/e6gB/zKIdfjgq8=",
            "dev": true,
            "requires": {
                "inherits": "^2.0.1",
                "readable-stream": "^2.0.0"
            }
        },
        "fs-extra": {
            "version": "8.1.0",
            "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
            "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
            "dev": true,
            "requires": {
                "graceful-fs": "^4.2.0",
                "jsonfile": "^4.0.0",
                "universalify": "^0.1.0"
            }
        },
        "fs-minipass": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",
            "integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",
            "dev": true,
            "requires": {
                "minipass": "^3.0.0"
            }
        },
        "fs-write-stream-atomic": {
            "version": "1.0.10",
            "resolved": "https://registry.npmjs.org/fs-write-stream-atomic/-/fs-write-stream-atomic-1.0.10.tgz",
            "integrity": "sha1-tH31NJPvkR33VzHnCp3tAYnbQMk=",
            "dev": true,
            "requires": {
                "graceful-fs": "^4.1.2",
                "iferr": "^0.1.5",
                "imurmurhash": "^0.1.4",
                "readable-stream": "1 || 2"
            }
        },
        "fs.realpath": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
            "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
            "dev": true
        },
        "fsevents": {
            "version": "1.2.13",
            "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-1.2.13.tgz",
            "integrity": "sha512-oWb1Z6mkHIskLzEJ/XWX0srkpkTQ7vaopMQkyaEIoq0fmtFVxOthb8cCxeT+p3ynTdkk/RZwbgG4brR5BeWECw==",
            "dev": true,
            "optional": true,
            "requires": {
                "bindings": "^1.5.0",
                "nan": "^2.12.1"
            }
        },
        "fstream": {
            "version": "1.0.12",
            "resolved": "https://registry.npmjs.org/fstream/-/fstream-1.0.12.tgz",
            "integrity": "sha512-WvJ193OHa0GHPEL+AycEJgxvBEwyfRkN1vhjca23OaPVMCaLCXTd5qAu82AjTcgP1UJmytkOKb63Ypde7raDIg==",
            "dev": true,
            "requires": {
                "graceful-fs": "^4.1.2",
                "inherits": "~2.0.0",
                "mkdirp": ">=0.5 0",
                "rimraf": "2"
            }
        },
        "function-bind": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
            "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
            "dev": true
        },
        "gauge": {
            "version": "2.7.4",
            "resolved": "https://registry.npmjs.org/gauge/-/gauge-2.7.4.tgz",
            "integrity": "sha1-LANAXHU4w51+s3sxcCLjJfsBi/c=",
            "dev": true,
            "requires": {
                "aproba": "^1.0.3",
                "console-control-strings": "^1.0.0",
                "has-unicode": "^2.0.0",
                "object-assign": "^4.1.0",
                "signal-exit": "^3.0.0",
                "string-width": "^1.0.1",
                "strip-ansi": "^3.0.1",
                "wide-align": "^1.1.0"
            }
        },
        "gaze": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/gaze/-/gaze-1.1.3.tgz",
            "integrity": "sha512-BRdNm8hbWzFzWHERTrejLqwHDfS4GibPoq5wjTPIoJHoBtKGPg3xAFfxmM+9ztbXelxcf2hwQcaz1PtmFeue8g==",
            "dev": true,
            "requires": {
                "globule": "^1.0.0"
            }
        },
        "get-caller-file": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
            "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
            "dev": true
        },
        "get-stdin": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-4.0.1.tgz",
            "integrity": "sha1-uWjGsKBDhDJJAui/Gl3zJXmkUP4=",
            "dev": true
        },
        "get-stream": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
            "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
            "dev": true,
            "requires": {
                "pump": "^3.0.0"
            }
        },
        "get-value": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/get-value/-/get-value-2.0.6.tgz",
            "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",
            "dev": true
        },
        "getpass": {
            "version": "0.1.7",
            "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
            "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
            "dev": true,
            "requires": {
                "assert-plus": "^1.0.0"
            }
        },
        "gh-pages": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/gh-pages/-/gh-pages-3.1.0.tgz",
            "integrity": "sha512-3b1rly9kuf3/dXsT8+ZxP0UhNLOo1CItj+3e31yUVcaph/yDsJ9RzD7JOw5o5zpBTJVQLlJAASNkUfepi9fe2w==",
            "dev": true,
            "requires": {
                "async": "^2.6.1",
                "commander": "^2.18.0",
                "email-addresses": "^3.0.1",
                "filenamify-url": "^1.0.0",
                "find-cache-dir": "^3.3.1",
                "fs-extra": "^8.1.0",
                "globby": "^6.1.0"
            },
            "dependencies": {
                "commander": {
                    "version": "2.20.3",
                    "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
                    "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
                    "dev": true
                },
                "find-cache-dir": {
                    "version": "3.3.1",
                    "resolved": "https://registry.npmjs.org/find-cache-dir/-/find-cache-dir-3.3.1.tgz",
                    "integrity": "sha512-t2GDMt3oGC/v+BMwzmllWDuJF/xcDtE5j/fCGbqDD7OLuJkj0cfh1YSA5VKPvwMeLFLNDBkwOKZ2X85jGLVftQ==",
                    "dev": true,
                    "requires": {
                        "commondir": "^1.0.1",
                        "make-dir": "^3.0.2",
                        "pkg-dir": "^4.1.0"
                    }
                },
                "find-up": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
                    "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
                    "dev": true,
                    "requires": {
                        "locate-path": "^5.0.0",
                        "path-exists": "^4.0.0"
                    }
                },
                "locate-path": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
                    "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
                    "dev": true,
                    "requires": {
                        "p-locate": "^4.1.0"
                    }
                },
                "make-dir": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
                    "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
                    "dev": true,
                    "requires": {
                        "semver": "^6.0.0"
                    }
                },
                "p-locate": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
                    "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
                    "dev": true,
                    "requires": {
                        "p-limit": "^2.2.0"
                    }
                },
                "path-exists": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
                    "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
                    "dev": true
                },
                "pkg-dir": {
                    "version": "4.2.0",
                    "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
                    "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
                    "dev": true,
                    "requires": {
                        "find-up": "^4.0.0"
                    }
                },
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                    "dev": true
                }
            }
        },
        "glob": {
            "version": "7.1.6",
            "resolved": "https://registry.npmjs.org/glob/-/glob-7.1.6.tgz",
            "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
            "dev": true,
            "requires": {
                "fs.realpath": "^1.0.0",
                "inflight": "^1.0.4",
                "inherits": "2",
                "minimatch": "^3.0.4",
                "once": "^1.3.0",
                "path-is-absolute": "^1.0.0"
            }
        },
        "glob-base": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/glob-base/-/glob-base-0.3.0.tgz",
            "integrity": "sha1-27Fk9iIbHAscz4Kuoyi0l98Oo8Q=",
            "dev": true,
            "requires": {
                "glob-parent": "^2.0.0",
                "is-glob": "^2.0.0"
            },
            "dependencies": {
                "glob-parent": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-2.0.0.tgz",
                    "integrity": "sha1-gTg9ctsFT8zPUzbaqQLxgvbtuyg=",
                    "dev": true,
                    "requires": {
                        "is-glob": "^2.0.0"
                    }
                },
                "is-extglob": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz",
                    "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
                    "dev": true
                },
                "is-glob": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-2.0.1.tgz",
                    "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
                    "dev": true,
                    "requires": {
                        "is-extglob": "^1.0.0"
                    }
                }
            }
        },
        "glob-parent": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
            "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
            "dev": true,
            "requires": {
                "is-glob": "^3.1.0",
                "path-dirname": "^1.0.0"
            },
            "dependencies": {
                "is-glob": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
                    "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
                    "dev": true,
                    "requires": {
                        "is-extglob": "^2.1.0"
                    }
                }
            }
        },
        "glob2base": {
            "version": "0.0.12",
            "resolved": "https://registry.npmjs.org/glob2base/-/glob2base-0.0.12.tgz",
            "integrity": "sha1-nUGbPijxLoOjYhZKJ3BVkiycDVY=",
            "dev": true,
            "requires": {
                "find-index": "^0.1.1"
            }
        },
        "globby": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/globby/-/globby-6.1.0.tgz",
            "integrity": "sha1-9abXDoOV4hyFj7BInWTfAkJNUGw=",
            "dev": true,
            "requires": {
                "array-union": "^1.0.1",
                "glob": "^7.0.3",
                "object-assign": "^4.0.1",
                "pify": "^2.0.0",
                "pinkie-promise": "^2.0.0"
            }
        },
        "globule": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/globule/-/globule-1.3.1.tgz",
            "integrity": "sha512-OVyWOHgw29yosRHCHo7NncwR1hW5ew0W/UrvtwvjefVJeQ26q4/8r8FmPsSF1hJ93IgWkyv16pCTz6WblMzm/g==",
            "dev": true,
            "requires": {
                "glob": "~7.1.1",
                "lodash": "~4.17.12",
                "minimatch": "~3.0.2"
            }
        },
        "graceful-fs": {
            "version": "4.2.4",
            "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.4.tgz",
            "integrity": "sha512-WjKPNJF79dtJAVniUlGGWHYGz2jWxT6VhN/4m1NdkbZ2nOsEF+cI1Edgql5zCRhs/VsQYRvrXctxktVXZUkixw==",
            "dev": true
        },
        "gzip-size": {
            "version": "5.1.1",
            "resolved": "https://registry.npmjs.org/gzip-size/-/gzip-size-5.1.1.tgz",
            "integrity": "sha512-FNHi6mmoHvs1mxZAds4PpdCS6QG8B4C1krxJsMutgxl5t3+GlRTzzI3NEkifXx2pVsOvJdOGSmIgDhQ55FwdPA==",
            "dev": true,
            "requires": {
                "duplexer": "^0.1.1",
                "pify": "^4.0.1"
            },
            "dependencies": {
                "pify": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
                    "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
                    "dev": true
                }
            }
        },
        "handle-thing": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/handle-thing/-/handle-thing-2.0.1.tgz",
            "integrity": "sha512-9Qn4yBxelxoh2Ow62nP+Ka/kMnOXRi8BXnRaUwezLNhqelnN49xKz4F/dPP8OYLxLxq6JDtZb2i9XznUQbNPTg==",
            "dev": true
        },
        "har-schema": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
            "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
            "dev": true
        },
        "har-validator": {
            "version": "5.1.3",
            "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.3.tgz",
            "integrity": "sha512-sNvOCzEQNr/qrvJgc3UG/kD4QtlHycrzwS+6mfTrrSq97BvaYcPZZI1ZSqGSPR73Cxn4LKTD4PttRwfU7jWq5g==",
            "dev": true,
            "requires": {
                "ajv": "^6.5.5",
                "har-schema": "^2.0.0"
            }
        },
        "has": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
            "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
            "dev": true,
            "requires": {
                "function-bind": "^1.1.1"
            }
        },
        "has-ansi": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/has-ansi/-/has-ansi-2.0.0.tgz",
            "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",
            "dev": true,
            "requires": {
                "ansi-regex": "^2.0.0"
            }
        },
        "has-flag": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
            "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
            "dev": true
        },
        "has-symbols": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.1.tgz",
            "integrity": "sha512-PLcsoqu++dmEIZB+6totNFKq/7Do+Z0u4oT0zKOJNl3lYK6vGwwu2hjHs+68OEZbTjiUE9bgOABXbP/GvrS0Kg==",
            "dev": true
        },
        "has-unicode": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
            "integrity": "sha1-4Ob+aijPUROIVeCG0Wkedx3iqLk=",
            "dev": true
        },
        "has-value": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/has-value/-/has-value-1.0.0.tgz",
            "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
            "dev": true,
            "requires": {
                "get-value": "^2.0.6",
                "has-values": "^1.0.0",
                "isobject": "^3.0.0"
            }
        },
        "has-values": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/has-values/-/has-values-1.0.0.tgz",
            "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
            "dev": true,
            "requires": {
                "is-number": "^3.0.0",
                "kind-of": "^4.0.0"
            },
            "dependencies": {
                "kind-of": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-4.0.0.tgz",
                    "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
                    "dev": true,
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "hash-base": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/hash-base/-/hash-base-3.1.0.tgz",
            "integrity": "sha512-1nmYp/rhMDiE7AYkDw+lLwlAzz0AntGIe51F3RfFfEqyQ3feY2eI/NcwC6umIQVOASPMsWJLJScWKSSvzL9IVA==",
            "dev": true,
            "requires": {
                "inherits": "^2.0.4",
                "readable-stream": "^3.6.0",
                "safe-buffer": "^5.2.0"
            },
            "dependencies": {
                "readable-stream": {
                    "version": "3.6.0",
                    "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
                    "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
                    "dev": true,
                    "requires": {
                        "inherits": "^2.0.3",
                        "string_decoder": "^1.1.1",
                        "util-deprecate": "^1.0.1"
                    }
                },
                "safe-buffer": {
                    "version": "5.2.1",
                    "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
                    "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
                    "dev": true
                }
            }
        },
        "hash.js": {
            "version": "1.1.7",
            "resolved": "https://registry.npmjs.org/hash.js/-/hash.js-1.1.7.tgz",
            "integrity": "sha512-taOaskGt4z4SOANNseOviYDvjEJinIkRgmp7LbKP2YTTmVxWBl87s/uzK9r+44BclBSp2X7K1hqeNfz9JbBeXA==",
            "dev": true,
            "requires": {
                "inherits": "^2.0.3",
                "minimalistic-assert": "^1.0.1"
            }
        },
        "he": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
            "integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==",
            "dev": true
        },
        "highlight.js": {
            "version": "10.0.2",
            "resolved": "https://registry.npmjs.org/highlight.js/-/highlight.js-10.0.2.tgz",
            "integrity": "sha512-2gMT2MHU6/2OjAlnaOE2LFdr9dwviDN3Q2lSw7Ois3/5uTtahbgYTkr4EPoY828ps+2eQWiixPTF8+phU6Ofkg=="
        },
        "hmac-drbg": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/hmac-drbg/-/hmac-drbg-1.0.1.tgz",
            "integrity": "sha1-0nRXAQJabHdabFRXk+1QL8DGSaE=",
            "dev": true,
            "requires": {
                "hash.js": "^1.0.3",
                "minimalistic-assert": "^1.0.0",
                "minimalistic-crypto-utils": "^1.0.1"
            }
        },
        "hosted-git-info": {
            "version": "2.8.8",
            "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.8.tgz",
            "integrity": "sha512-f/wzC2QaWBs7t9IYqB4T3sR1xviIViXJRJTWBlx2Gf3g0Xi5vI7Yy4koXQ1c9OYDGHN9sBy1DQ2AB8fqZBWhUg==",
            "dev": true
        },
        "hpack.js": {
            "version": "2.1.6",
            "resolved": "https://registry.npmjs.org/hpack.js/-/hpack.js-2.1.6.tgz",
            "integrity": "sha1-h3dMCUnlE/QuhFdbPEVoH63ioLI=",
            "dev": true,
            "requires": {
                "inherits": "^2.0.1",
                "obuf": "^1.0.0",
                "readable-stream": "^2.0.1",
                "wbuf": "^1.1.0"
            }
        },
        "html-entities": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/html-entities/-/html-entities-1.3.1.tgz",
            "integrity": "sha512-rhE/4Z3hIhzHAUKbW8jVcCyuT5oJCXXqhN/6mXXVCpzTmvJnoH2HL/bt3EZ6p55jbFJBeAe1ZNpL5BugLujxNA==",
            "dev": true
        },
        "html-loader": {
            "version": "0.5.5",
            "resolved": "https://registry.npmjs.org/html-loader/-/html-loader-0.5.5.tgz",
            "integrity": "sha512-7hIW7YinOYUpo//kSYcPB6dCKoceKLmOwjEMmhIobHuWGDVl0Nwe4l68mdG/Ru0wcUxQjVMEoZpkalZ/SE7zog==",
            "dev": true,
            "requires": {
                "es6-templates": "^0.2.3",
                "fastparse": "^1.1.1",
                "html-minifier": "^3.5.8",
                "loader-utils": "^1.1.0",
                "object-assign": "^4.1.1"
            }
        },
        "html-minifier": {
            "version": "3.5.21",
            "resolved": "https://registry.npmjs.org/html-minifier/-/html-minifier-3.5.21.tgz",
            "integrity": "sha512-LKUKwuJDhxNa3uf/LPR/KVjm/l3rBqtYeCOAekvG8F1vItxMUpueGd94i/asDDr8/1u7InxzFA5EeGjhhG5mMA==",
            "dev": true,
            "requires": {
                "camel-case": "3.0.x",
                "clean-css": "4.2.x",
                "commander": "2.17.x",
                "he": "1.2.x",
                "param-case": "2.1.x",
                "relateurl": "0.2.x",
                "uglify-js": "3.4.x"
            }
        },
        "html-minifier-terser": {
            "version": "5.1.1",
            "resolved": "https://registry.npmjs.org/html-minifier-terser/-/html-minifier-terser-5.1.1.tgz",
            "integrity": "sha512-ZPr5MNObqnV/T9akshPKbVgyOqLmy+Bxo7juKCfTfnjNniTAMdy4hz21YQqoofMBJD2kdREaqPPdThoR78Tgxg==",
            "dev": true,
            "requires": {
                "camel-case": "^4.1.1",
                "clean-css": "^4.2.3",
                "commander": "^4.1.1",
                "he": "^1.2.0",
                "param-case": "^3.0.3",
                "relateurl": "^0.2.7",
                "terser": "^4.6.3"
            },
            "dependencies": {
                "camel-case": {
                    "version": "4.1.1",
                    "resolved": "https://registry.npmjs.org/camel-case/-/camel-case-4.1.1.tgz",
                    "integrity": "sha512-7fa2WcG4fYFkclIvEmxBbTvmibwF2/agfEBc6q3lOpVu0A13ltLsA+Hr/8Hp6kp5f+G7hKi6t8lys6XxP+1K6Q==",
                    "dev": true,
                    "requires": {
                        "pascal-case": "^3.1.1",
                        "tslib": "^1.10.0"
                    }
                },
                "commander": {
                    "version": "4.1.1",
                    "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
                    "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
                    "dev": true
                },
                "param-case": {
                    "version": "3.0.3",
                    "resolved": "https://registry.npmjs.org/param-case/-/param-case-3.0.3.tgz",
                    "integrity": "sha512-VWBVyimc1+QrzappRs7waeN2YmoZFCGXWASRYX1/rGHtXqEcrGEIDm+jqIwFa2fRXNgQEwrxaYuIrX0WcAguTA==",
                    "dev": true,
                    "requires": {
                        "dot-case": "^3.0.3",
                        "tslib": "^1.10.0"
                    }
                }
            }
        },
        "html-webpack-plugin": {
            "version": "3.2.0",
            "resolved": "https://registry.npmjs.org/html-webpack-plugin/-/html-webpack-plugin-3.2.0.tgz",
            "integrity": "sha1-sBq71yOsqqeze2r0SS69oD2d03s=",
            "dev": true,
            "requires": {
                "html-minifier": "^3.2.3",
                "loader-utils": "^0.2.16",
                "lodash": "^4.17.3",
                "pretty-error": "^2.0.2",
                "tapable": "^1.0.0",
                "toposort": "^1.0.0",
                "util.promisify": "1.0.0"
            },
            "dependencies": {
                "big.js": {
                    "version": "3.2.0",
                    "resolved": "https://registry.npmjs.org/big.js/-/big.js-3.2.0.tgz",
                    "integrity": "sha512-+hN/Zh2D08Mx65pZ/4g5bsmNiZUuChDiQfTUQ7qJr4/kuopCr88xZsAXv6mBoZEsUI4OuGHlX59qE94K2mMW8Q==",
                    "dev": true
                },
                "emojis-list": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/emojis-list/-/emojis-list-2.1.0.tgz",
                    "integrity": "sha1-TapNnbAPmBmIDHn6RXrlsJof04k=",
                    "dev": true
                },
                "json5": {
                    "version": "0.5.1",
                    "resolved": "https://registry.npmjs.org/json5/-/json5-0.5.1.tgz",
                    "integrity": "sha1-Hq3nrMASA0rYTiOWdn6tn6VJWCE=",
                    "dev": true
                },
                "loader-utils": {
                    "version": "0.2.17",
                    "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-0.2.17.tgz",
                    "integrity": "sha1-+G5jdNQyBabmxg6RlvF8Apm/s0g=",
                    "dev": true,
                    "requires": {
                        "big.js": "^3.1.3",
                        "emojis-list": "^2.0.0",
                        "json5": "^0.5.0",
                        "object-assign": "^4.0.1"
                    }
                }
            }
        },
        "htmlparser2": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-4.1.0.tgz",
            "integrity": "sha512-4zDq1a1zhE4gQso/c5LP1OtrhYTncXNSpvJYtWJBtXAETPlMfi3IFNjGuQbYLuVY4ZR0QMqRVvo4Pdy9KLyP8Q==",
            "dev": true,
            "requires": {
                "domelementtype": "^2.0.1",
                "domhandler": "^3.0.0",
                "domutils": "^2.0.0",
                "entities": "^2.0.0"
            }
        },
        "http-deceiver": {
            "version": "1.2.7",
            "resolved": "https://registry.npmjs.org/http-deceiver/-/http-deceiver-1.2.7.tgz",
            "integrity": "sha1-+nFolEq5pRnTN8sL7HKE3D5yPYc=",
            "dev": true
        },
        "http-errors": {
            "version": "1.7.2",
            "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
            "integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
            "dev": true,
            "requires": {
                "depd": "~1.1.2",
                "inherits": "2.0.3",
                "setprototypeof": "1.1.1",
                "statuses": ">= 1.5.0 < 2",
                "toidentifier": "1.0.0"
            },
            "dependencies": {
                "inherits": {
                    "version": "2.0.3",
                    "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
                    "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
                    "dev": true
                }
            }
        },
        "http-proxy": {
            "version": "1.18.1",
            "resolved": "https://registry.npmjs.org/http-proxy/-/http-proxy-1.18.1.tgz",
            "integrity": "sha512-7mz/721AbnJwIVbnaSv1Cz3Am0ZLT/UBwkC92VlxhXv/k/BBQfM2fXElQNC27BVGr0uwUpplYPQM9LnaBMR5NQ==",
            "dev": true,
            "requires": {
                "eventemitter3": "^4.0.0",
                "follow-redirects": "^1.0.0",
                "requires-port": "^1.0.0"
            }
        },
        "http-proxy-middleware": {
            "version": "0.18.0",
            "resolved": "https://registry.npmjs.org/http-proxy-middleware/-/http-proxy-middleware-0.18.0.tgz",
            "integrity": "sha512-Fs25KVMPAIIcgjMZkVHJoKg9VcXcC1C8yb9JUgeDvVXY0S/zgVIhMb+qVswDIgtJe2DfckMSY2d6TuTEutlk6Q==",
            "dev": true,
            "requires": {
                "http-proxy": "^1.16.2",
                "is-glob": "^4.0.0",
                "lodash": "^4.17.5",
                "micromatch": "^3.1.9"
            }
        },
        "http-signature": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
            "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
            "dev": true,
            "requires": {
                "assert-plus": "^1.0.0",
                "jsprim": "^1.2.2",
                "sshpk": "^1.7.0"
            }
        },
        "https-browserify": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/https-browserify/-/https-browserify-1.0.0.tgz",
            "integrity": "sha1-7AbBDgo0wPL68Zn3/X/Hj//QPHM=",
            "dev": true
        },
        "https-proxy-agent": {
            "version": "2.2.4",
            "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-2.2.4.tgz",
            "integrity": "sha512-OmvfoQ53WLjtA9HeYP9RNrWMJzzAz1JGaSFr1nijg0PVR1JaD/xbJq1mdEIIlxGpXp9eSe/O2LgU9DJmTPd0Eg==",
            "dev": true,
            "requires": {
                "agent-base": "^4.3.0",
                "debug": "^3.1.0"
            },
            "dependencies": {
                "debug": {
                    "version": "3.2.6",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.6.tgz",
                    "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
                    "dev": true,
                    "requires": {
                        "ms": "^2.1.1"
                    }
                },
                "ms": {
                    "version": "2.1.2",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
                    "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
                    "dev": true
                }
            }
        },
        "humanize-url": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/humanize-url/-/humanize-url-1.0.1.tgz",
            "integrity": "sha1-9KuZ4NKIF0yk4eUEB8VfuuRk7/8=",
            "dev": true,
            "requires": {
                "normalize-url": "^1.0.0",
                "strip-url-auth": "^1.0.0"
            }
        },
        "iconv-lite": {
            "version": "0.4.24",
            "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
            "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
            "dev": true,
            "requires": {
                "safer-buffer": ">= 2.1.2 < 3"
            }
        },
        "icss-replace-symbols": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/icss-replace-symbols/-/icss-replace-symbols-1.1.0.tgz",
            "integrity": "sha1-Bupvg2ead0njhs/h/oEq5dsiPe0=",
            "dev": true
        },
        "icss-utils": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/icss-utils/-/icss-utils-4.1.1.tgz",
            "integrity": "sha512-4aFq7wvWyMHKgxsH8QQtGpvbASCf+eM3wPRLI6R+MgAnTCZ6STYsRvttLvRWK0Nfif5piF394St3HeJDaljGPA==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.14"
            }
        },
        "ieee754": {
            "version": "1.1.13",
            "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.1.13.tgz",
            "integrity": "sha512-4vf7I2LYV/HaWerSo3XmlMkp5eZ83i+/CDluXi/IGTs/O1sejBNhTtnxzmRZfvOUqj7lZjqHkeTvpgSFDlWZTg==",
            "dev": true
        },
        "iferr": {
            "version": "0.1.5",
            "resolved": "https://registry.npmjs.org/iferr/-/iferr-0.1.5.tgz",
            "integrity": "sha1-xg7taebY/bazEEofy8ocGS3FtQE=",
            "dev": true
        },
        "ignore": {
            "version": "3.3.10",
            "resolved": "https://registry.npmjs.org/ignore/-/ignore-3.3.10.tgz",
            "integrity": "sha512-Pgs951kaMm5GXP7MOvxERINe3gsaVjUWFm+UZPSq9xYriQAksyhg0csnS0KXSNRD5NmNdapXEpjxG49+AKh/ug==",
            "dev": true
        },
        "import-cwd": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/import-cwd/-/import-cwd-2.1.0.tgz",
            "integrity": "sha1-qmzzbnInYShcs3HsZRn1PiQ1sKk=",
            "dev": true,
            "requires": {
                "import-from": "^2.1.0"
            }
        },
        "import-fresh": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-2.0.0.tgz",
            "integrity": "sha1-2BNVwVYS04bGH53dOSLUMEgipUY=",
            "dev": true,
            "requires": {
                "caller-path": "^2.0.0",
                "resolve-from": "^3.0.0"
            }
        },
        "import-from": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/import-from/-/import-from-2.1.0.tgz",
            "integrity": "sha1-M1238qev/VOqpHHUuAId7ja387E=",
            "dev": true,
            "requires": {
                "resolve-from": "^3.0.0"
            }
        },
        "import-local": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/import-local/-/import-local-2.0.0.tgz",
            "integrity": "sha512-b6s04m3O+s3CGSbqDIyP4R6aAwAeYlVq9+WUWep6iHa8ETRf9yei1U48C5MmfJmV9AiLYYBKPMq/W+/WRpQmCQ==",
            "dev": true,
            "requires": {
                "pkg-dir": "^3.0.0",
                "resolve-cwd": "^2.0.0"
            }
        },
        "imurmurhash": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
            "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o=",
            "dev": true
        },
        "in-publish": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/in-publish/-/in-publish-2.0.1.tgz",
            "integrity": "sha512-oDM0kUSNFC31ShNxHKUyfZKy8ZeXZBWMjMdZHKLOk13uvT27VTL/QzRGfRUcevJhpkZAvlhPYuXkF7eNWrtyxQ==",
            "dev": true
        },
        "indent-string": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-2.1.0.tgz",
            "integrity": "sha1-ji1INIdCEhtKghi3oTfppSBJ3IA=",
            "dev": true,
            "requires": {
                "repeating": "^2.0.0"
            }
        },
        "indexes-of": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/indexes-of/-/indexes-of-1.0.1.tgz",
            "integrity": "sha1-8w9xbI4r00bHtn0985FVZqfAVgc=",
            "dev": true
        },
        "infer-owner": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/infer-owner/-/infer-owner-1.0.4.tgz",
            "integrity": "sha512-IClj+Xz94+d7irH5qRyfJonOdfTzuDaifE6ZPWfx0N0+/ATZCbuTPq2prFl526urkQd90WyUKIh1DfBQ2hMz9A==",
            "dev": true
        },
        "inflight": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
            "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
            "dev": true,
            "requires": {
                "once": "^1.3.0",
                "wrappy": "1"
            }
        },
        "inherits": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
            "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
            "dev": true
        },
        "inquirer": {
            "version": "7.3.3",
            "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-7.3.3.tgz",
            "integrity": "sha512-JG3eIAj5V9CwcGvuOmoo6LB9kbAYT8HXffUl6memuszlwDC/qvFAJw49XJ5NROSFNPxp3iQg1GqkFhaY/CR0IA==",
            "dev": true,
            "requires": {
                "ansi-escapes": "^4.2.1",
                "chalk": "^4.1.0",
                "cli-cursor": "^3.1.0",
                "cli-width": "^3.0.0",
                "external-editor": "^3.0.3",
                "figures": "^3.0.0",
                "lodash": "^4.17.19",
                "mute-stream": "0.0.8",
                "run-async": "^2.4.0",
                "rxjs": "^6.6.0",
                "string-width": "^4.1.0",
                "strip-ansi": "^6.0.0",
                "through": "^2.3.6"
            },
            "dependencies": {
                "ansi-regex": {
                    "version": "5.0.0",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
                    "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
                    "dev": true
                },
                "ansi-styles": {
                    "version": "4.2.1",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.2.1.tgz",
                    "integrity": "sha512-9VGjrMsG1vePxcSweQsN20KY/c4zN0h9fLjqAbwbPfahM3t+NL+M9HC8xeXG2I8pX5NoamTGNuomEUFI7fcUjA==",
                    "dev": true,
                    "requires": {
                        "@types/color-name": "^1.1.1",
                        "color-convert": "^2.0.1"
                    }
                },
                "chalk": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.0.tgz",
                    "integrity": "sha512-qwx12AxXe2Q5xQ43Ac//I6v5aXTipYrSESdOgzrN+9XjgEpyjpKuvSGaN4qE93f7TQTlerQQ8S+EQ0EyDoVL1A==",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^4.1.0",
                        "supports-color": "^7.1.0"
                    }
                },
                "color-convert": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                    "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
                    "dev": true,
                    "requires": {
                        "color-name": "~1.1.4"
                    }
                },
                "color-name": {
                    "version": "1.1.4",
                    "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
                    "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
                    "dev": true
                },
                "emoji-regex": {
                    "version": "8.0.0",
                    "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
                    "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
                    "dev": true
                },
                "has-flag": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
                    "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
                    "dev": true
                },
                "is-fullwidth-code-point": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
                    "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
                    "dev": true
                },
                "string-width": {
                    "version": "4.2.0",
                    "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.0.tgz",
                    "integrity": "sha512-zUz5JD+tgqtuDjMhwIg5uFVV3dtqZ9yQJlZVfq4I01/K5Paj5UHj7VyrQOJvzawSVlKpObApbfD0Ed6yJc+1eg==",
                    "dev": true,
                    "requires": {
                        "emoji-regex": "^8.0.0",
                        "is-fullwidth-code-point": "^3.0.0",
                        "strip-ansi": "^6.0.0"
                    }
                },
                "strip-ansi": {
                    "version": "6.0.0",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
                    "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
                    "dev": true,
                    "requires": {
                        "ansi-regex": "^5.0.0"
                    }
                },
                "supports-color": {
                    "version": "7.1.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.1.0.tgz",
                    "integrity": "sha512-oRSIpR8pxT1Wr2FquTNnGet79b3BWljqOuoW/h4oBhxJ/HUbX5nX6JSruTkvXDCFMwDPvsaTTbvMLKZWSy0R5g==",
                    "dev": true,
                    "requires": {
                        "has-flag": "^4.0.0"
                    }
                }
            }
        },
        "internal-ip": {
            "version": "4.3.0",
            "resolved": "https://registry.npmjs.org/internal-ip/-/internal-ip-4.3.0.tgz",
            "integrity": "sha512-S1zBo1D6zcsyuC6PMmY5+55YMILQ9av8lotMx447Bq6SAgo/sDK6y6uUKmuYhW7eacnIhFfsPmCNYdDzsnnDCg==",
            "dev": true,
            "requires": {
                "default-gateway": "^4.2.0",
                "ipaddr.js": "^1.9.0"
            }
        },
        "inversify": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/inversify/-/inversify-5.0.1.tgz",
            "integrity": "sha512-Ieh06s48WnEYGcqHepdsJUIJUXpwH5o5vodAX+DK2JA/gjy4EbEcQZxw+uFfzysmKjiLXGYwNG3qDZsKVMcINQ==",
            "dev": true
        },
        "ip": {
            "version": "1.1.5",
            "resolved": "https://registry.npmjs.org/ip/-/ip-1.1.5.tgz",
            "integrity": "sha1-vd7XARQpCCjAoDnnLvJfWq7ENUo=",
            "dev": true
        },
        "ip-regex": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/ip-regex/-/ip-regex-2.1.0.tgz",
            "integrity": "sha1-+ni/XS5pE8kRzp+BnuUUa7bYROk=",
            "dev": true
        },
        "ipaddr.js": {
            "version": "1.9.1",
            "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
            "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
            "dev": true
        },
        "is-absolute-url": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/is-absolute-url/-/is-absolute-url-3.0.3.tgz",
            "integrity": "sha512-opmNIX7uFnS96NtPmhWQgQx6/NYFgsUXYMllcfzwWKUMwfo8kku1TvE6hkNcH+Q1ts5cMVrsY7j0bxXQDciu9Q==",
            "dev": true
        },
        "is-accessor-descriptor": {
            "version": "0.1.6",
            "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
            "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
            "dev": true,
            "requires": {
                "kind-of": "^3.0.2"
            },
            "dependencies": {
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "dev": true,
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "is-arguments": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/is-arguments/-/is-arguments-1.0.4.tgz",
            "integrity": "sha512-xPh0Rmt8NE65sNzvyUmWgI1tz3mKq74lGA0mL8LYZcoIzKOzDh6HmrYm3d18k60nHerC8A9Km8kYu87zfSFnLA==",
            "dev": true
        },
        "is-arrayish": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
            "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
            "dev": true
        },
        "is-binary-path": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-1.0.1.tgz",
            "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",
            "dev": true,
            "requires": {
                "binary-extensions": "^1.0.0"
            }
        },
        "is-buffer": {
            "version": "1.1.6",
            "resolved": "https://registry.npmjs.org/is-buffer/-/is-buffer-1.1.6.tgz",
            "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==",
            "dev": true
        },
        "is-callable": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.0.tgz",
            "integrity": "sha512-pyVD9AaGLxtg6srb2Ng6ynWJqkHU9bEM087AKck0w8QwDarTfNcpIYoU8x8Hv2Icm8u6kFJM18Dag8lyqGkviw==",
            "dev": true
        },
        "is-data-descriptor": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
            "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
            "dev": true,
            "requires": {
                "kind-of": "^3.0.2"
            },
            "dependencies": {
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "dev": true,
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "is-date-object": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.2.tgz",
            "integrity": "sha512-USlDT524woQ08aoZFzh3/Z6ch9Y/EWXEHQ/AaRN0SkKq4t2Jw2R2339tSXmwuVoY7LLlBCbOIlx2myP/L5zk0g==",
            "dev": true
        },
        "is-descriptor": {
            "version": "0.1.6",
            "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-0.1.6.tgz",
            "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
            "dev": true,
            "requires": {
                "is-accessor-descriptor": "^0.1.6",
                "is-data-descriptor": "^0.1.4",
                "kind-of": "^5.0.0"
            },
            "dependencies": {
                "kind-of": {
                    "version": "5.1.0",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-5.1.0.tgz",
                    "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
                    "dev": true
                }
            }
        },
        "is-directory": {
            "version": "0.3.1",
            "resolved": "https://registry.npmjs.org/is-directory/-/is-directory-0.3.1.tgz",
            "integrity": "sha1-YTObbyR1/Hcv2cnYP1yFddwVSuE=",
            "dev": true
        },
        "is-dotfile": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/is-dotfile/-/is-dotfile-1.0.3.tgz",
            "integrity": "sha1-pqLzL/0t+wT1yiXs0Pa4PPeYoeE=",
            "dev": true
        },
        "is-equal-shallow": {
            "version": "0.1.3",
            "resolved": "https://registry.npmjs.org/is-equal-shallow/-/is-equal-shallow-0.1.3.tgz",
            "integrity": "sha1-IjgJj8Ih3gvPpdnqxMRdY4qhxTQ=",
            "dev": true,
            "requires": {
                "is-primitive": "^2.0.0"
            }
        },
        "is-extendable": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-0.1.1.tgz",
            "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
            "dev": true
        },
        "is-extglob": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
            "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
            "dev": true
        },
        "is-finite": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/is-finite/-/is-finite-1.1.0.tgz",
            "integrity": "sha512-cdyMtqX/BOqqNBBiKlIVkytNHm49MtMlYyn1zxzvJKWmFMlGzm+ry5BBfYyeY9YmNKbRSo/o7OX9w9ale0wg3w==",
            "dev": true
        },
        "is-fullwidth-code-point": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
            "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
            "dev": true,
            "requires": {
                "number-is-nan": "^1.0.0"
            }
        },
        "is-glob": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
            "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
            "dev": true,
            "requires": {
                "is-extglob": "^2.1.1"
            }
        },
        "is-number": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/is-number/-/is-number-3.0.0.tgz",
            "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
            "dev": true,
            "requires": {
                "kind-of": "^3.0.2"
            },
            "dependencies": {
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "dev": true,
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "is-path-cwd": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/is-path-cwd/-/is-path-cwd-2.2.0.tgz",
            "integrity": "sha512-w942bTcih8fdJPJmQHFzkS76NEP8Kzzvmw92cXsazb8intwLqPibPPdXf4ANdKV3rYMuuQYGIWtvz9JilB3NFQ==",
            "dev": true
        },
        "is-path-in-cwd": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-path-in-cwd/-/is-path-in-cwd-2.1.0.tgz",
            "integrity": "sha512-rNocXHgipO+rvnP6dk3zI20RpOtrAM/kzbB258Uw5BWr3TpXi861yzjo16Dn4hUox07iw5AyeMLHWsujkjzvRQ==",
            "dev": true,
            "requires": {
                "is-path-inside": "^2.1.0"
            }
        },
        "is-path-inside": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-2.1.0.tgz",
            "integrity": "sha512-wiyhTzfDWsvwAW53OBWF5zuvaOGlZ6PwYxAbPVDhpm+gM09xKQGjBq/8uYN12aDvMxnAnq3dxTyoSoRNmg5YFg==",
            "dev": true,
            "requires": {
                "path-is-inside": "^1.0.2"
            }
        },
        "is-plain-obj": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-1.1.0.tgz",
            "integrity": "sha1-caUMhCnfync8kqOQpKA7OfzVHT4=",
            "dev": true
        },
        "is-plain-object": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/is-plain-object/-/is-plain-object-2.0.4.tgz",
            "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
            "dev": true,
            "requires": {
                "isobject": "^3.0.1"
            }
        },
        "is-posix-bracket": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/is-posix-bracket/-/is-posix-bracket-0.1.1.tgz",
            "integrity": "sha1-MzTceXdDaOkvAW5vvAqI9c1ua8Q=",
            "dev": true
        },
        "is-primitive": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/is-primitive/-/is-primitive-2.0.0.tgz",
            "integrity": "sha1-IHurkWOEmcB7Kt8kCkGochADRXU=",
            "dev": true
        },
        "is-regex": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.1.tgz",
            "integrity": "sha512-1+QkEcxiLlB7VEyFtyBg94e08OAsvq7FUBgApTq/w2ymCLyKJgDPsybBENVtA7XCQEgEXxKPonG+mvYRxh/LIg==",
            "dev": true,
            "requires": {
                "has-symbols": "^1.0.1"
            }
        },
        "is-root": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/is-root/-/is-root-2.1.0.tgz",
            "integrity": "sha512-AGOriNp96vNBd3HtU+RzFEc75FfR5ymiYv8E553I71SCeXBiMsVDUtdio1OEFvrPyLIQ9tVR5RxXIFe5PUFjMg==",
            "dev": true
        },
        "is-stream": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
            "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ=",
            "dev": true
        },
        "is-symbol": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.3.tgz",
            "integrity": "sha512-OwijhaRSgqvhm/0ZdAcXNZt9lYdKFpcRDT5ULUuYXPoT794UNOdU+gpT6Rzo7b4V2HUl/op6GqY894AZwv9faQ==",
            "dev": true,
            "requires": {
                "has-symbols": "^1.0.1"
            }
        },
        "is-typedarray": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
            "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
            "dev": true
        },
        "is-utf8": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/is-utf8/-/is-utf8-0.2.1.tgz",
            "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI=",
            "dev": true
        },
        "is-windows": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
            "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",
            "dev": true
        },
        "is-wsl": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/is-wsl/-/is-wsl-1.1.0.tgz",
            "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0=",
            "dev": true
        },
        "isarray": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
            "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
            "dev": true
        },
        "isexe": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
            "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
            "dev": true
        },
        "isobject": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/isobject/-/isobject-3.0.1.tgz",
            "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
            "dev": true
        },
        "isstream": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
            "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
            "dev": true
        },
        "js-base64": {
            "version": "2.5.2",
            "resolved": "https://registry.npmjs.org/js-base64/-/js-base64-2.5.2.tgz",
            "integrity": "sha512-Vg8czh0Q7sFBSUMWWArX/miJeBWYBPpdU/3M/DKSaekLMqrqVPaedp+5mZhie/r0lgrcaYBfwXatEew6gwgiQQ==",
            "dev": true
        },
        "js-yaml": {
            "version": "3.13.1",
            "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.13.1.tgz",
            "integrity": "sha512-YfbcO7jXDdyj0DGxYVSlSeQNHbD7XPWvrVWeVUujrQEoZzWJIRrCPoyk6kL6IAjAG2IolMK4T0hNUe0HOUs5Jw==",
            "dev": true,
            "requires": {
                "argparse": "^1.0.7",
                "esprima": "^4.0.0"
            },
            "dependencies": {
                "esprima": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
                    "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
                    "dev": true
                }
            }
        },
        "jsbn": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
            "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
            "dev": true
        },
        "json-parse-better-errors": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
            "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
            "dev": true
        },
        "json-schema": {
            "version": "0.2.3",
            "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
            "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
            "dev": true
        },
        "json-schema-traverse": {
            "version": "0.4.1",
            "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
            "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
            "dev": true
        },
        "json-stringify-safe": {
            "version": "5.0.1",
            "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
            "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
            "dev": true
        },
        "json3": {
            "version": "3.3.3",
            "resolved": "https://registry.npmjs.org/json3/-/json3-3.3.3.tgz",
            "integrity": "sha512-c7/8mbUsKigAbLkD5B010BK4D9LZm7A1pNItkEwiUZRpIN66exu/e7YQWysGun+TRKaJp8MhemM+VkfWv42aCA==",
            "dev": true
        },
        "json5": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.1.tgz",
            "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
            "dev": true,
            "requires": {
                "minimist": "^1.2.0"
            }
        },
        "jsonfile": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
            "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
            "dev": true,
            "requires": {
                "graceful-fs": "^4.1.6"
            }
        },
        "jsprim": {
            "version": "1.4.1",
            "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
            "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
            "dev": true,
            "requires": {
                "assert-plus": "1.0.0",
                "extsprintf": "1.3.0",
                "json-schema": "0.2.3",
                "verror": "1.10.0"
            }
        },
        "killable": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/killable/-/killable-1.0.1.tgz",
            "integrity": "sha512-LzqtLKlUwirEUyl/nicirVmNiPvYs7l5n8wOPP7fyJVpUPkvCnW/vuiXGpylGUlnPDnB7311rARzAt3Mhswpjg==",
            "dev": true
        },
        "kind-of": {
            "version": "6.0.3",
            "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-6.0.3.tgz",
            "integrity": "sha512-dcS1ul+9tmeD95T+x28/ehLgd9mENa3LsvDTtzm3vyBEO7RPptvAD+t44WVXaUjTBRcrpFeFlC8WCruUR456hw==",
            "dev": true
        },
        "kleur": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/kleur/-/kleur-4.1.1.tgz",
            "integrity": "sha512-BsNhM6T/yTWFG580CRnYhT3LfUuPK7Hwrm+W2H0G8lK/nogalP5Nsrh/cHjxVVkzl0sFm7z8b8rNcZCfKxeoxA==",
            "dev": true
        },
        "klona": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/klona/-/klona-1.1.2.tgz",
            "integrity": "sha512-xf88rTeHiXk+XE2Vhi6yj8Wm3gMZrygGdKjJqN8HkV+PwF/t50/LdAKHoHpPcxFAlmQszTZ1CugrK25S7qDRLA==",
            "dev": true
        },
        "load-json-file": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-1.1.0.tgz",
            "integrity": "sha1-lWkFcI1YtLq0wiYbBPWfMcmTdMA=",
            "dev": true,
            "requires": {
                "graceful-fs": "^4.1.2",
                "parse-json": "^2.2.0",
                "pify": "^2.0.0",
                "pinkie-promise": "^2.0.0",
                "strip-bom": "^2.0.0"
            }
        },
        "loader-runner": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/loader-runner/-/loader-runner-2.4.0.tgz",
            "integrity": "sha512-Jsmr89RcXGIwivFY21FcRrisYZfvLMTWx5kOLc+JTxtpBOG6xML0vzbc6SEQG2FO9/4Fc3wW4LVcB5DmGflaRw==",
            "dev": true
        },
        "loader-utils": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/loader-utils/-/loader-utils-1.4.0.tgz",
            "integrity": "sha512-qH0WSMBtn/oHuwjy/NucEgbx5dbxxnxup9s4PVXJUDHZBQY+s0NWA9rJf53RBnQZxfch7euUui7hpoAPvALZdA==",
            "dev": true,
            "requires": {
                "big.js": "^5.2.2",
                "emojis-list": "^3.0.0",
                "json5": "^1.0.1"
            }
        },
        "locate-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
            "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
            "dev": true,
            "requires": {
                "p-locate": "^3.0.0",
                "path-exists": "^3.0.0"
            },
            "dependencies": {
                "path-exists": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
                    "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
                    "dev": true
                }
            }
        },
        "lodash": {
            "version": "4.17.19",
            "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.19.tgz",
            "integrity": "sha512-JNvd8XER9GQX0v2qJgsaN/mzFCNA5BRe/j8JN9d+tWyGLSodKQHKFicdwNYzWwI3wjRnaKPsGj1XkBjx/F96DQ==",
            "dev": true
        },
        "loglevel": {
            "version": "1.7.0",
            "resolved": "https://registry.npmjs.org/loglevel/-/loglevel-1.7.0.tgz",
            "integrity": "sha512-i2sY04nal5jDcagM3FMfG++T69GEEM8CYuOfeOIvmXzOIcwE9a/CJPR0MFM97pYMj/u10lzz7/zd7+qwhrBTqQ==",
            "dev": true
        },
        "loud-rejection": {
            "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/loud-rejection/-/loud-rejection-1.6.0.tgz",
            "integrity": "sha1-W0b4AUft7leIcPCG0Eghz5mOVR8=",
            "dev": true,
            "requires": {
                "currently-unhandled": "^0.4.1",
                "signal-exit": "^3.0.0"
            }
        },
        "lower-case": {
            "version": "1.1.4",
            "resolved": "https://registry.npmjs.org/lower-case/-/lower-case-1.1.4.tgz",
            "integrity": "sha1-miyr0bno4K6ZOkv31YdcOcQujqw=",
            "dev": true
        },
        "lru-cache": {
            "version": "4.1.5",
            "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-4.1.5.tgz",
            "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
            "dev": true,
            "requires": {
                "pseudomap": "^1.0.2",
                "yallist": "^2.1.2"
            }
        },
        "make-dir": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
            "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
            "dev": true,
            "requires": {
                "pify": "^4.0.1",
                "semver": "^5.6.0"
            },
            "dependencies": {
                "pify": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
                    "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
                    "dev": true
                }
            }
        },
        "map-cache": {
            "version": "0.2.2",
            "resolved": "https://registry.npmjs.org/map-cache/-/map-cache-0.2.2.tgz",
            "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",
            "dev": true
        },
        "map-obj": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/map-obj/-/map-obj-1.0.1.tgz",
            "integrity": "sha1-2TPOuSBdgr3PSIb2dCvcK03qFG0=",
            "dev": true
        },
        "map-visit": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/map-visit/-/map-visit-1.0.0.tgz",
            "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
            "dev": true,
            "requires": {
                "object-visit": "^1.0.0"
            }
        },
        "math-random": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/math-random/-/math-random-1.0.4.tgz",
            "integrity": "sha512-rUxjysqif/BZQH2yhd5Aaq7vXMSx9NdEsQcyA07uEzIvxgI7zIr33gGsh+RU0/XjmQpCW7RsVof1vlkvQVCK5A==",
            "dev": true
        },
        "md5.js": {
            "version": "1.3.5",
            "resolved": "https://registry.npmjs.org/md5.js/-/md5.js-1.3.5.tgz",
            "integrity": "sha512-xitP+WxNPcTTOgnTJcrhM0xvdPepipPSf3I8EIpGKeFLjt3PlJLIDG3u8EX53ZIubkb+5U2+3rELYpEhHhzdkg==",
            "dev": true,
            "requires": {
                "hash-base": "^3.0.0",
                "inherits": "^2.0.1",
                "safe-buffer": "^5.1.2"
            }
        },
        "media-typer": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
            "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g=",
            "dev": true
        },
        "memory-fs": {
            "version": "0.5.0",
            "resolved": "https://registry.npmjs.org/memory-fs/-/memory-fs-0.5.0.tgz",
            "integrity": "sha512-jA0rdU5KoQMC0e6ppoNRtpp6vjFq6+NY7r8hywnC7V+1Xj/MtHwGIbB1QaK/dunyjWteJzmkpd7ooeWg10T7GA==",
            "dev": true,
            "requires": {
                "errno": "^0.1.3",
                "readable-stream": "^2.0.1"
            }
        },
        "meow": {
            "version": "3.7.0",
            "resolved": "https://registry.npmjs.org/meow/-/meow-3.7.0.tgz",
            "integrity": "sha1-cstmi0JSKCkKu/qFaJJYcwioAfs=",
            "dev": true,
            "requires": {
                "camelcase-keys": "^2.0.0",
                "decamelize": "^1.1.2",
                "loud-rejection": "^1.0.0",
                "map-obj": "^1.0.1",
                "minimist": "^1.1.3",
                "normalize-package-data": "^2.3.4",
                "object-assign": "^4.0.1",
                "read-pkg-up": "^1.0.1",
                "redent": "^1.0.0",
                "trim-newlines": "^1.0.0"
            }
        },
        "merge-descriptors": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
            "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E=",
            "dev": true
        },
        "methods": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
            "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4=",
            "dev": true
        },
        "micromatch": {
            "version": "3.1.10",
            "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-3.1.10.tgz",
            "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
            "dev": true,
            "requires": {
                "arr-diff": "^4.0.0",
                "array-unique": "^0.3.2",
                "braces": "^2.3.1",
                "define-property": "^2.0.2",
                "extend-shallow": "^3.0.2",
                "extglob": "^2.0.4",
                "fragment-cache": "^0.2.1",
                "kind-of": "^6.0.2",
                "nanomatch": "^1.2.9",
                "object.pick": "^1.3.0",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.2"
            }
        },
        "miller-rabin": {
            "version": "4.0.1",
            "resolved": "https://registry.npmjs.org/miller-rabin/-/miller-rabin-4.0.1.tgz",
            "integrity": "sha512-115fLhvZVqWwHPbClyntxEVfVDfl9DLLTuJvq3g2O/Oxi8AiNouAHvDSzHS0viUJc+V5vm3eq91Xwqn9dp4jRA==",
            "dev": true,
            "requires": {
                "bn.js": "^4.0.0",
                "brorand": "^1.0.1"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
                    "dev": true
                }
            }
        },
        "mime": {
            "version": "1.6.0",
            "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
            "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
            "dev": true
        },
        "mime-db": {
            "version": "1.44.0",
            "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.44.0.tgz",
            "integrity": "sha512-/NOTfLrsPBVeH7YtFPgsVWveuL+4SjjYxaQ1xtM1KMFj7HdxlBlxeyNLzhyJVx7r4rZGJAZ/6lkKCitSc/Nmpg==",
            "dev": true
        },
        "mime-types": {
            "version": "2.1.27",
            "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.27.tgz",
            "integrity": "sha512-JIhqnCasI9yD+SsmkquHBxTSEuZdQX5BuQnS2Vc7puQQQ+8yiP5AY5uWhpdv4YL4VM5c6iliiYWPgJ/nJQLp7w==",
            "dev": true,
            "requires": {
                "mime-db": "1.44.0"
            }
        },
        "mimic-fn": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
            "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
            "dev": true
        },
        "mini-css-extract-plugin": {
            "version": "0.9.0",
            "resolved": "https://registry.npmjs.org/mini-css-extract-plugin/-/mini-css-extract-plugin-0.9.0.tgz",
            "integrity": "sha512-lp3GeY7ygcgAmVIcRPBVhIkf8Us7FZjA+ILpal44qLdSu11wmjKQ3d9k15lfD7pO4esu9eUIAW7qiYIBppv40A==",
            "dev": true,
            "requires": {
                "loader-utils": "^1.1.0",
                "normalize-url": "1.9.1",
                "schema-utils": "^1.0.0",
                "webpack-sources": "^1.1.0"
            }
        },
        "minimalistic-assert": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
            "integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A==",
            "dev": true
        },
        "minimalistic-crypto-utils": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/minimalistic-crypto-utils/-/minimalistic-crypto-utils-1.0.1.tgz",
            "integrity": "sha1-9sAMHAsIIkblxNmd+4x8CDsrWCo=",
            "dev": true
        },
        "minimatch": {
            "version": "3.0.4",
            "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
            "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
            "dev": true,
            "requires": {
                "brace-expansion": "^1.1.7"
            }
        },
        "minimist": {
            "version": "1.2.5",
            "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
            "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw==",
            "dev": true
        },
        "minipass": {
            "version": "3.1.3",
            "resolved": "https://registry.npmjs.org/minipass/-/minipass-3.1.3.tgz",
            "integrity": "sha512-Mgd2GdMVzY+x3IJ+oHnVM+KG3lA5c8tnabyJKmHSaG2kAGpudxuOf8ToDkhumF7UzME7DecbQE9uOZhNm7PuJg==",
            "dev": true,
            "requires": {
                "yallist": "^4.0.0"
            },
            "dependencies": {
                "yallist": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
                    "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
                    "dev": true
                }
            }
        },
        "minipass-collect": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/minipass-collect/-/minipass-collect-1.0.2.tgz",
            "integrity": "sha512-6T6lH0H8OG9kITm/Jm6tdooIbogG9e0tLgpY6mphXSm/A9u8Nq1ryBG+Qspiub9LjWlBPsPS3tWQ/Botq4FdxA==",
            "dev": true,
            "requires": {
                "minipass": "^3.0.0"
            }
        },
        "minipass-flush": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/minipass-flush/-/minipass-flush-1.0.5.tgz",
            "integrity": "sha512-JmQSYYpPUqX5Jyn1mXaRwOda1uQ8HP5KAT/oDSLCzt1BYRhQU0/hDtsB1ufZfEEzMZ9aAVmsBw8+FWsIXlClWw==",
            "dev": true,
            "requires": {
                "minipass": "^3.0.0"
            }
        },
        "minipass-pipeline": {
            "version": "1.2.4",
            "resolved": "https://registry.npmjs.org/minipass-pipeline/-/minipass-pipeline-1.2.4.tgz",
            "integrity": "sha512-xuIq7cIOt09RPRJ19gdi4b+RiNvDFYe5JH+ggNvBqGqpQXcru3PcRmOZuHBKWK1Txf9+cQ+HMVN4d6z46LZP7A==",
            "dev": true,
            "requires": {
                "minipass": "^3.0.0"
            }
        },
        "minizlib": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",
            "integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",
            "dev": true,
            "requires": {
                "minipass": "^3.0.0",
                "yallist": "^4.0.0"
            },
            "dependencies": {
                "yallist": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
                    "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==",
                    "dev": true
                }
            }
        },
        "mississippi": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/mississippi/-/mississippi-3.0.0.tgz",
            "integrity": "sha512-x471SsVjUtBRtcvd4BzKE9kFC+/2TeWgKCgw0bZcw1b9l2X3QX5vCWgF+KaZaYm87Ss//rHnWryupDrgLvmSkA==",
            "dev": true,
            "requires": {
                "concat-stream": "^1.5.0",
                "duplexify": "^3.4.2",
                "end-of-stream": "^1.1.0",
                "flush-write-stream": "^1.0.0",
                "from2": "^2.1.0",
                "parallel-transform": "^1.1.0",
                "pump": "^3.0.0",
                "pumpify": "^1.3.3",
                "stream-each": "^1.1.0",
                "through2": "^2.0.0"
            }
        },
        "mixin-deep": {
            "version": "1.3.2",
            "resolved": "https://registry.npmjs.org/mixin-deep/-/mixin-deep-1.3.2.tgz",
            "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
            "dev": true,
            "requires": {
                "for-in": "^1.0.2",
                "is-extendable": "^1.0.1"
            },
            "dependencies": {
                "is-extendable": {
                    "version": "1.0.1",
                    "resolved": "https://registry.npmjs.org/is-extendable/-/is-extendable-1.0.1.tgz",
                    "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
                    "dev": true,
                    "requires": {
                        "is-plain-object": "^2.0.4"
                    }
                }
            }
        },
        "mkdirp": {
            "version": "0.5.5",
            "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
            "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
            "dev": true,
            "requires": {
                "minimist": "^1.2.5"
            }
        },
        "move-concurrently": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/move-concurrently/-/move-concurrently-1.0.1.tgz",
            "integrity": "sha1-viwAX9oy4LKa8fBdfEszIUxwH5I=",
            "dev": true,
            "requires": {
                "aproba": "^1.1.1",
                "copy-concurrently": "^1.0.0",
                "fs-write-stream-atomic": "^1.0.8",
                "mkdirp": "^0.5.1",
                "rimraf": "^2.5.4",
                "run-queue": "^1.0.3"
            }
        },
        "ms": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
            "dev": true
        },
        "multicast-dns": {
            "version": "6.2.3",
            "resolved": "https://registry.npmjs.org/multicast-dns/-/multicast-dns-6.2.3.tgz",
            "integrity": "sha512-ji6J5enbMyGRHIAkAOu3WdV8nggqviKCEKtXcOqfphZZtQrmHKycfynJ2V7eVPUA4NhJ6V7Wf4TmGbTwKE9B6g==",
            "dev": true,
            "requires": {
                "dns-packet": "^1.3.1",
                "thunky": "^1.0.2"
            }
        },
        "multicast-dns-service-types": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/multicast-dns-service-types/-/multicast-dns-service-types-1.1.0.tgz",
            "integrity": "sha1-iZ8R2WhuXgXLkbNdXw5jt3PPyQE=",
            "dev": true
        },
        "mute-stream": {
            "version": "0.0.8",
            "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.8.tgz",
            "integrity": "sha512-nnbWWOkoWyUsTjKrhgD0dcz22mdkSnpYqbEjIm2nhwhuxlSkpywJmBo8h0ZqJdkp73mb90SssHkN4rsRaBAfAA==",
            "dev": true
        },
        "nan": {
            "version": "2.14.1",
            "resolved": "https://registry.npmjs.org/nan/-/nan-2.14.1.tgz",
            "integrity": "sha512-isWHgVjnFjh2x2yuJ/tj3JbwoHu3UC2dX5G/88Cm24yB6YopVgxvBObDY7n5xW6ExmFhJpSEQqFPvq9zaXc8Jw==",
            "dev": true
        },
        "nanomatch": {
            "version": "1.2.13",
            "resolved": "https://registry.npmjs.org/nanomatch/-/nanomatch-1.2.13.tgz",
            "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
            "dev": true,
            "requires": {
                "arr-diff": "^4.0.0",
                "array-unique": "^0.3.2",
                "define-property": "^2.0.2",
                "extend-shallow": "^3.0.2",
                "fragment-cache": "^0.2.1",
                "is-windows": "^1.0.2",
                "kind-of": "^6.0.2",
                "object.pick": "^1.3.0",
                "regex-not": "^1.0.0",
                "snapdragon": "^0.8.1",
                "to-regex": "^3.0.1"
            }
        },
        "negotiator": {
            "version": "0.6.2",
            "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
            "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw==",
            "dev": true
        },
        "neo-async": {
            "version": "2.6.1",
            "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.1.tgz",
            "integrity": "sha512-iyam8fBuCUpWeKPGpaNMetEocMt364qkCsfL9JuhjXX6dRnguRVOfk2GZaDpPjcOKiiXCPINZC1GczQ7iTq3Zw==",
            "dev": true
        },
        "nice-try": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/nice-try/-/nice-try-1.0.5.tgz",
            "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ==",
            "dev": true
        },
        "no-case": {
            "version": "2.3.2",
            "resolved": "https://registry.npmjs.org/no-case/-/no-case-2.3.2.tgz",
            "integrity": "sha512-rmTZ9kz+f3rCvK2TD1Ue/oZlns7OGoIWP4fc3llxxRXlOkHKoWPPWJOfFYpITabSow43QJbRIoHQXtt10VldyQ==",
            "dev": true,
            "requires": {
                "lower-case": "^1.1.1"
            }
        },
        "node-forge": {
            "version": "0.9.0",
            "resolved": "https://registry.npmjs.org/node-forge/-/node-forge-0.9.0.tgz",
            "integrity": "sha512-7ASaDa3pD+lJ3WvXFsxekJQelBKRpne+GOVbLbtHYdd7pFspyeuJHnWfLplGf3SwKGbfs/aYl5V/JCIaHVUKKQ==",
            "dev": true
        },
        "node-gyp": {
            "version": "3.8.0",
            "resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-3.8.0.tgz",
            "integrity": "sha512-3g8lYefrRRzvGeSowdJKAKyks8oUpLEd/DyPV4eMhVlhJ0aNaZqIrNUIPuEWWTAoPqyFkfGrM67MC69baqn6vA==",
            "dev": true,
            "requires": {
                "fstream": "^1.0.0",
                "glob": "^7.0.3",
                "graceful-fs": "^4.1.2",
                "mkdirp": "^0.5.0",
                "nopt": "2 || 3",
                "npmlog": "0 || 1 || 2 || 3 || 4",
                "osenv": "0",
                "request": "^2.87.0",
                "rimraf": "2",
                "semver": "~5.3.0",
                "tar": "^2.0.0",
                "which": "1"
            },
            "dependencies": {
                "semver": {
                    "version": "5.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-5.3.0.tgz",
                    "integrity": "sha1-myzl094C0XxgEq0yaqa00M9U+U8=",
                    "dev": true
                }
            }
        },
        "node-libs-browser": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/node-libs-browser/-/node-libs-browser-2.2.1.tgz",
            "integrity": "sha512-h/zcD8H9kaDZ9ALUWwlBUDo6TKF8a7qBSCSEGfjTVIYeqsioSKaAX+BN7NgiMGp6iSIXZ3PxgCu8KS3b71YK5Q==",
            "dev": true,
            "requires": {
                "assert": "^1.1.1",
                "browserify-zlib": "^0.2.0",
                "buffer": "^4.3.0",
                "console-browserify": "^1.1.0",
                "constants-browserify": "^1.0.0",
                "crypto-browserify": "^3.11.0",
                "domain-browser": "^1.1.1",
                "events": "^3.0.0",
                "https-browserify": "^1.0.0",
                "os-browserify": "^0.3.0",
                "path-browserify": "0.0.1",
                "process": "^0.11.10",
                "punycode": "^1.2.4",
                "querystring-es3": "^0.2.0",
                "readable-stream": "^2.3.3",
                "stream-browserify": "^2.0.1",
                "stream-http": "^2.7.2",
                "string_decoder": "^1.0.0",
                "timers-browserify": "^2.0.4",
                "tty-browserify": "0.0.0",
                "url": "^0.11.0",
                "util": "^0.11.0",
                "vm-browserify": "^1.0.1"
            },
            "dependencies": {
                "punycode": {
                    "version": "1.4.1",
                    "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.4.1.tgz",
                    "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4=",
                    "dev": true
                }
            }
        },
        "node-sass": {
            "version": "4.14.1",
            "resolved": "https://registry.npmjs.org/node-sass/-/node-sass-4.14.1.tgz",
            "integrity": "sha512-sjCuOlvGyCJS40R8BscF5vhVlQjNN069NtQ1gSxyK1u9iqvn6tf7O1R4GNowVZfiZUCRt5MmMs1xd+4V/7Yr0g==",
            "dev": true,
            "requires": {
                "async-foreach": "^0.1.3",
                "chalk": "^1.1.1",
                "cross-spawn": "^3.0.0",
                "gaze": "^1.0.0",
                "get-stdin": "^4.0.1",
                "glob": "^7.0.3",
                "in-publish": "^2.0.0",
                "lodash": "^4.17.15",
                "meow": "^3.7.0",
                "mkdirp": "^0.5.1",
                "nan": "^2.13.2",
                "node-gyp": "^3.8.0",
                "npmlog": "^4.0.0",
                "request": "^2.88.0",
                "sass-graph": "2.2.5",
                "stdout-stream": "^1.4.0",
                "true-case-path": "^1.0.2"
            },
            "dependencies": {
                "ansi-styles": {
                    "version": "2.2.1",
                    "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-2.2.1.tgz",
                    "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
                    "dev": true
                },
                "chalk": {
                    "version": "1.1.3",
                    "resolved": "https://registry.npmjs.org/chalk/-/chalk-1.1.3.tgz",
                    "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
                    "dev": true,
                    "requires": {
                        "ansi-styles": "^2.2.1",
                        "escape-string-regexp": "^1.0.2",
                        "has-ansi": "^2.0.0",
                        "strip-ansi": "^3.0.0",
                        "supports-color": "^2.0.0"
                    }
                },
                "supports-color": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-2.0.0.tgz",
                    "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
                    "dev": true
                }
            }
        },
        "nopt": {
            "version": "3.0.6",
            "resolved": "https://registry.npmjs.org/nopt/-/nopt-3.0.6.tgz",
            "integrity": "sha1-xkZdvwirzU2zWTF/eaxopkayj/k=",
            "dev": true,
            "requires": {
                "abbrev": "1"
            }
        },
        "normalize-package-data": {
            "version": "2.5.0",
            "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
            "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
            "dev": true,
            "requires": {
                "hosted-git-info": "^2.1.4",
                "resolve": "^1.10.0",
                "semver": "2 || 3 || 4 || 5",
                "validate-npm-package-license": "^3.0.1"
            }
        },
        "normalize-path": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
            "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
            "dev": true
        },
        "normalize-url": {
            "version": "1.9.1",
            "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-1.9.1.tgz",
            "integrity": "sha1-LMDWazHqIwNkWENuNiDYWVTGbDw=",
            "dev": true,
            "requires": {
                "object-assign": "^4.0.1",
                "prepend-http": "^1.0.0",
                "query-string": "^4.1.0",
                "sort-keys": "^1.0.0"
            }
        },
        "npm-run-path": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-2.0.2.tgz",
            "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
            "dev": true,
            "requires": {
                "path-key": "^2.0.0"
            },
            "dependencies": {
                "path-key": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/path-key/-/path-key-2.0.1.tgz",
                    "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
                    "dev": true
                }
            }
        },
        "npmlog": {
            "version": "4.1.2",
            "resolved": "https://registry.npmjs.org/npmlog/-/npmlog-4.1.2.tgz",
            "integrity": "sha512-2uUqazuKlTaSI/dC8AzicUck7+IrEaOnN/e0jd3Xtt1KcGpwx30v50mL7oPyr/h9bL3E4aZccVwpwP+5W9Vjkg==",
            "dev": true,
            "requires": {
                "are-we-there-yet": "~1.1.2",
                "console-control-strings": "~1.1.0",
                "gauge": "~2.7.3",
                "set-blocking": "~2.0.0"
            }
        },
        "nth-check": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/nth-check/-/nth-check-1.0.2.tgz",
            "integrity": "sha512-WeBOdju8SnzPN5vTUJYxYUxLeXpCaVP5i5e0LF8fg7WORF2Wd7wFX/pk0tYZk7s8T+J7VLy0Da6J1+wCT0AtHg==",
            "dev": true,
            "requires": {
                "boolbase": "~1.0.0"
            }
        },
        "number-is-nan": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
            "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0=",
            "dev": true
        },
        "oauth-sign": {
            "version": "0.9.0",
            "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
            "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
            "dev": true
        },
        "object-assign": {
            "version": "4.1.1",
            "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
            "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
            "dev": true
        },
        "object-copy": {
            "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/object-copy/-/object-copy-0.1.0.tgz",
            "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
            "dev": true,
            "requires": {
                "copy-descriptor": "^0.1.0",
                "define-property": "^0.2.5",
                "kind-of": "^3.0.3"
            },
            "dependencies": {
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "dev": true,
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                },
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "dev": true,
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "object-inspect": {
            "version": "1.8.0",
            "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.8.0.tgz",
            "integrity": "sha512-jLdtEOB112fORuypAyl/50VRVIBIdVQOSUUGQHzJ4xBSbit81zRarz7GThkEFZy1RceYrWYcPcBFPQwHyAc1gA==",
            "dev": true
        },
        "object-is": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/object-is/-/object-is-1.1.2.tgz",
            "integrity": "sha512-5lHCz+0uufF6wZ7CRFWJN3hp8Jqblpgve06U5CMQ3f//6iDjPr2PEo9MWCjEssDsa+UZEL4PkFpr+BMop6aKzQ==",
            "dev": true,
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.17.5"
            }
        },
        "object-keys": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
            "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
            "dev": true
        },
        "object-visit": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/object-visit/-/object-visit-1.0.1.tgz",
            "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
            "dev": true,
            "requires": {
                "isobject": "^3.0.0"
            }
        },
        "object.assign": {
            "version": "4.1.0",
            "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.0.tgz",
            "integrity": "sha512-exHJeq6kBKj58mqGyTQ9DFvrZC/eR6OwxzoM9YRoGBqrXYonaFyGiFMuc9VZrXf7DarreEwMpurG3dd+CNyW5w==",
            "dev": true,
            "requires": {
                "define-properties": "^1.1.2",
                "function-bind": "^1.1.1",
                "has-symbols": "^1.0.0",
                "object-keys": "^1.0.11"
            }
        },
        "object.getownpropertydescriptors": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.0.tgz",
            "integrity": "sha512-Z53Oah9A3TdLoblT7VKJaTDdXdT+lQO+cNpKVnya5JDe9uLvzu1YyY1yFDFrcxrlRgWrEFH0jJtD/IbuwjcEVg==",
            "dev": true,
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.17.0-next.1"
            }
        },
        "object.omit": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/object.omit/-/object.omit-2.0.1.tgz",
            "integrity": "sha1-Gpx0SCnznbuFjHbKNXmuKlTr0fo=",
            "dev": true,
            "requires": {
                "for-own": "^0.1.4",
                "is-extendable": "^0.1.1"
            }
        },
        "object.pick": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/object.pick/-/object.pick-1.3.0.tgz",
            "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
            "dev": true,
            "requires": {
                "isobject": "^3.0.1"
            }
        },
        "obuf": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/obuf/-/obuf-1.1.2.tgz",
            "integrity": "sha512-PX1wu0AmAdPqOL1mWhqmlOd8kOIZQwGZw6rh7uby9fTc5lhaOWFLX3I6R1hrF9k3zUY40e6igsLGkDXK92LJNg==",
            "dev": true
        },
        "on-finished": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
            "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
            "dev": true,
            "requires": {
                "ee-first": "1.1.1"
            }
        },
        "on-headers": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/on-headers/-/on-headers-1.0.2.tgz",
            "integrity": "sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA==",
            "dev": true
        },
        "once": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
            "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
            "dev": true,
            "requires": {
                "wrappy": "1"
            }
        },
        "onetime": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
            "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
            "dev": true,
            "requires": {
                "mimic-fn": "^2.1.0"
            }
        },
        "opn": {
            "version": "5.5.0",
            "resolved": "https://registry.npmjs.org/opn/-/opn-5.5.0.tgz",
            "integrity": "sha512-PqHpggC9bLV0VeWcdKhkpxY+3JTzetLSqTCWL/z/tFIbI6G8JCjondXklT1JinczLz2Xib62sSp0T/gKT4KksA==",
            "dev": true,
            "requires": {
                "is-wsl": "^1.1.0"
            }
        },
        "original": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/original/-/original-1.0.2.tgz",
            "integrity": "sha512-hyBVl6iqqUOJ8FqRe+l/gS8H+kKYjrEndd5Pm1MfBtsEKA038HkkdbAl/72EAXGyonD/PFsvmVG+EvcIpliMBg==",
            "dev": true,
            "requires": {
                "url-parse": "^1.4.3"
            }
        },
        "os-browserify": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/os-browserify/-/os-browserify-0.3.0.tgz",
            "integrity": "sha1-hUNzx/XCMVkU/Jv8a9gjj92h7Cc=",
            "dev": true
        },
        "os-homedir": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
            "integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M=",
            "dev": true
        },
        "os-tmpdir": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
            "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ=",
            "dev": true
        },
        "osenv": {
            "version": "0.1.5",
            "resolved": "https://registry.npmjs.org/osenv/-/osenv-0.1.5.tgz",
            "integrity": "sha512-0CWcCECdMVc2Rw3U5w9ZjqX6ga6ubk1xDVKxtBQPK7wis/0F2r9T6k4ydGYhecl7YUBxBVxhL5oisPsNxAPe2g==",
            "dev": true,
            "requires": {
                "os-homedir": "^1.0.0",
                "os-tmpdir": "^1.0.0"
            }
        },
        "p-finally": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
            "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4=",
            "dev": true
        },
        "p-limit": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
            "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
            "dev": true,
            "requires": {
                "p-try": "^2.0.0"
            }
        },
        "p-locate": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
            "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
            "dev": true,
            "requires": {
                "p-limit": "^2.0.0"
            }
        },
        "p-map": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/p-map/-/p-map-2.1.0.tgz",
            "integrity": "sha512-y3b8Kpd8OAN444hxfBbFfj1FY/RjtTd8tzYwhUqNYXx0fXx2iX4maP4Qr6qhIKbQXI02wTLAda4fYUbDagTUFw==",
            "dev": true
        },
        "p-retry": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/p-retry/-/p-retry-3.0.1.tgz",
            "integrity": "sha512-XE6G4+YTTkT2a0UWb2kjZe8xNwf8bIbnqpc/IS/idOBVhyves0mK5OJgeocjx7q5pvX/6m23xuzVPYT1uGM73w==",
            "dev": true,
            "requires": {
                "retry": "^0.12.0"
            }
        },
        "p-try": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
            "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
            "dev": true
        },
        "pako": {
            "version": "1.0.11",
            "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
            "integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw==",
            "dev": true
        },
        "parallel-transform": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/parallel-transform/-/parallel-transform-1.2.0.tgz",
            "integrity": "sha512-P2vSmIu38uIlvdcU7fDkyrxj33gTUy/ABO5ZUbGowxNCopBq/OoD42bP4UmMrJoPyk4Uqf0mu3mtWBhHCZD8yg==",
            "dev": true,
            "requires": {
                "cyclist": "^1.0.1",
                "inherits": "^2.0.3",
                "readable-stream": "^2.1.5"
            }
        },
        "param-case": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/param-case/-/param-case-2.1.1.tgz",
            "integrity": "sha1-35T9jPZTHs915r75oIWPvHK+Ikc=",
            "dev": true,
            "requires": {
                "no-case": "^2.2.0"
            }
        },
        "parse-asn1": {
            "version": "5.1.6",
            "resolved": "https://registry.npmjs.org/parse-asn1/-/parse-asn1-5.1.6.tgz",
            "integrity": "sha512-RnZRo1EPU6JBnra2vGHj0yhp6ebyjBZpmUCLHWiFhxlzvBCCpAuZ7elsBp1PVAbQN0/04VD/19rfzlBSwLstMw==",
            "dev": true,
            "requires": {
                "asn1.js": "^5.2.0",
                "browserify-aes": "^1.0.0",
                "evp_bytestokey": "^1.0.0",
                "pbkdf2": "^3.0.3",
                "safe-buffer": "^5.1.1"
            }
        },
        "parse-glob": {
            "version": "3.0.4",
            "resolved": "https://registry.npmjs.org/parse-glob/-/parse-glob-3.0.4.tgz",
            "integrity": "sha1-ssN2z7EfNVE7rdFz7wu246OIORw=",
            "dev": true,
            "requires": {
                "glob-base": "^0.3.0",
                "is-dotfile": "^1.0.0",
                "is-extglob": "^1.0.0",
                "is-glob": "^2.0.0"
            },
            "dependencies": {
                "is-extglob": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-1.0.0.tgz",
                    "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
                    "dev": true
                },
                "is-glob": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-2.0.1.tgz",
                    "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
                    "dev": true,
                    "requires": {
                        "is-extglob": "^1.0.0"
                    }
                }
            }
        },
        "parse-json": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
            "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
            "dev": true,
            "requires": {
                "error-ex": "^1.2.0"
            }
        },
        "parseurl": {
            "version": "1.3.3",
            "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
            "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
            "dev": true
        },
        "pascal-case": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/pascal-case/-/pascal-case-3.1.1.tgz",
            "integrity": "sha512-XIeHKqIrsquVTQL2crjq3NfJUxmdLasn3TYOU0VBM+UX2a6ztAWBlJQBePLGY7VHW8+2dRadeIPK5+KImwTxQA==",
            "dev": true,
            "requires": {
                "no-case": "^3.0.3",
                "tslib": "^1.10.0"
            },
            "dependencies": {
                "lower-case": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/lower-case/-/lower-case-2.0.1.tgz",
                    "integrity": "sha512-LiWgfDLLb1dwbFQZsSglpRj+1ctGnayXz3Uv0/WO8n558JycT5fg6zkNcnW0G68Nn0aEldTFeEfmjCfmqry/rQ==",
                    "dev": true,
                    "requires": {
                        "tslib": "^1.10.0"
                    }
                },
                "no-case": {
                    "version": "3.0.3",
                    "resolved": "https://registry.npmjs.org/no-case/-/no-case-3.0.3.tgz",
                    "integrity": "sha512-ehY/mVQCf9BL0gKfsJBvFJen+1V//U+0HQMPrWct40ixE4jnv0bfvxDbWtAHL9EcaPEOJHVVYKoQn1TlZUB8Tw==",
                    "dev": true,
                    "requires": {
                        "lower-case": "^2.0.1",
                        "tslib": "^1.10.0"
                    }
                }
            }
        },
        "pascalcase": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/pascalcase/-/pascalcase-0.1.1.tgz",
            "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",
            "dev": true
        },
        "path-browserify": {
            "version": "0.0.1",
            "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-0.0.1.tgz",
            "integrity": "sha512-BapA40NHICOS+USX9SN4tyhq+A2RrN/Ws5F0Z5aMHDp98Fl86lX8Oti8B7uN93L4Ifv4fHOEA+pQw87gmMO/lQ==",
            "dev": true
        },
        "path-dirname": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz",
            "integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA=",
            "dev": true
        },
        "path-exists": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-2.1.0.tgz",
            "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",
            "dev": true,
            "requires": {
                "pinkie-promise": "^2.0.0"
            }
        },
        "path-is-absolute": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
            "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
            "dev": true
        },
        "path-is-inside": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/path-is-inside/-/path-is-inside-1.0.2.tgz",
            "integrity": "sha1-NlQX3t5EQw0cEa9hAn+s8HS9/FM=",
            "dev": true
        },
        "path-key": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
            "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
            "dev": true
        },
        "path-parse": {
            "version": "1.0.6",
            "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.6.tgz",
            "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw==",
            "dev": true
        },
        "path-to-regexp": {
            "version": "0.1.7",
            "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
            "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w=",
            "dev": true
        },
        "path-type": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/path-type/-/path-type-1.1.0.tgz",
            "integrity": "sha1-WcRPfuSR2nBNpBXaWkBwuk+P5EE=",
            "dev": true,
            "requires": {
                "graceful-fs": "^4.1.2",
                "pify": "^2.0.0",
                "pinkie-promise": "^2.0.0"
            }
        },
        "pbkdf2": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/pbkdf2/-/pbkdf2-3.1.1.tgz",
            "integrity": "sha512-4Ejy1OPxi9f2tt1rRV7Go7zmfDQ+ZectEQz3VGUQhgq62HtIRPDyG/JtnwIxs6x3uNMwo2V7q1fMvKjb+Tnpqg==",
            "dev": true,
            "requires": {
                "create-hash": "^1.1.2",
                "create-hmac": "^1.1.4",
                "ripemd160": "^2.0.1",
                "safe-buffer": "^5.0.1",
                "sha.js": "^2.4.8"
            }
        },
        "pend": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/pend/-/pend-1.2.0.tgz",
            "integrity": "sha1-elfrVQpng/kRUzH89GY9XI4AelA=",
            "dev": true
        },
        "performance-now": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
            "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
            "dev": true
        },
        "picomatch": {
            "version": "2.2.2",
            "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.2.2.tgz",
            "integrity": "sha512-q0M/9eZHzmr0AulXyPwNfZjtwZ/RBZlbN3K3CErVrk50T2ASYI7Bye0EvekFY3IP1Nt2DHu0re+V2ZHIpMkuWg==",
            "dev": true
        },
        "pify": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
            "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
            "dev": true
        },
        "pinkie": {
            "version": "2.0.4",
            "resolved": "https://registry.npmjs.org/pinkie/-/pinkie-2.0.4.tgz",
            "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",
            "dev": true
        },
        "pinkie-promise": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
            "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
            "dev": true,
            "requires": {
                "pinkie": "^2.0.0"
            }
        },
        "pkg-dir": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-3.0.0.tgz",
            "integrity": "sha512-/E57AYkoeQ25qkxMj5PBOVgF8Kiu/h7cYS30Z5+R7WaiCCBfLq58ZI/dSeaEKb9WVJV5n/03QwrN3IeWIFllvw==",
            "dev": true,
            "requires": {
                "find-up": "^3.0.0"
            },
            "dependencies": {
                "find-up": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
                    "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
                    "dev": true,
                    "requires": {
                        "locate-path": "^3.0.0"
                    }
                }
            }
        },
        "portfinder": {
            "version": "1.0.28",
            "resolved": "https://registry.npmjs.org/portfinder/-/portfinder-1.0.28.tgz",
            "integrity": "sha512-Se+2isanIcEqf2XMHjyUKskczxbPH7dQnlMjXX6+dybayyHvAf/TCgyMRlzf/B6QDhAEFOGes0pzRo3by4AbMA==",
            "dev": true,
            "requires": {
                "async": "^2.6.2",
                "debug": "^3.1.1",
                "mkdirp": "^0.5.5"
            },
            "dependencies": {
                "debug": {
                    "version": "3.2.6",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.6.tgz",
                    "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
                    "dev": true,
                    "requires": {
                        "ms": "^2.1.1"
                    }
                },
                "ms": {
                    "version": "2.1.2",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
                    "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
                    "dev": true
                }
            }
        },
        "posix-character-classes": {
            "version": "0.1.1",
            "resolved": "https://registry.npmjs.org/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
            "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",
            "dev": true
        },
        "postcss": {
            "version": "7.0.29",
            "resolved": "https://registry.npmjs.org/postcss/-/postcss-7.0.29.tgz",
            "integrity": "sha512-ba0ApvR3LxGvRMMiUa9n0WR4HjzcYm7tS+ht4/2Nd0NLtHpPIH77fuB9Xh1/yJVz9O/E/95Y/dn8ygWsyffXtw==",
            "dev": true,
            "requires": {
                "chalk": "^2.4.2",
                "source-map": "^0.6.1",
                "supports-color": "^6.1.0"
            }
        },
        "postcss-load-config": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-2.1.0.tgz",
            "integrity": "sha512-4pV3JJVPLd5+RueiVVB+gFOAa7GWc25XQcMp86Zexzke69mKf6Nx9LRcQywdz7yZI9n1udOxmLuAwTBypypF8Q==",
            "dev": true,
            "requires": {
                "cosmiconfig": "^5.0.0",
                "import-cwd": "^2.0.0"
            }
        },
        "postcss-loader": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/postcss-loader/-/postcss-loader-3.0.0.tgz",
            "integrity": "sha512-cLWoDEY5OwHcAjDnkyRQzAXfs2jrKjXpO/HQFcc5b5u/r7aa471wdmChmwfnv7x2u840iat/wi0lQ5nbRgSkUA==",
            "dev": true,
            "requires": {
                "loader-utils": "^1.1.0",
                "postcss": "^7.0.0",
                "postcss-load-config": "^2.0.0",
                "schema-utils": "^1.0.0"
            }
        },
        "postcss-modules-extract-imports": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/postcss-modules-extract-imports/-/postcss-modules-extract-imports-2.0.0.tgz",
            "integrity": "sha512-LaYLDNS4SG8Q5WAWqIJgdHPJrDDr/Lv775rMBFUbgjTz6j34lUznACHcdRWroPvXANP2Vj7yNK57vp9eFqzLWQ==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.5"
            }
        },
        "postcss-modules-local-by-default": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/postcss-modules-local-by-default/-/postcss-modules-local-by-default-2.0.6.tgz",
            "integrity": "sha512-oLUV5YNkeIBa0yQl7EYnxMgy4N6noxmiwZStaEJUSe2xPMcdNc8WmBQuQCx18H5psYbVxz8zoHk0RAAYZXP9gA==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.6",
                "postcss-selector-parser": "^6.0.0",
                "postcss-value-parser": "^3.3.1"
            }
        },
        "postcss-modules-scope": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/postcss-modules-scope/-/postcss-modules-scope-2.2.0.tgz",
            "integrity": "sha512-YyEgsTMRpNd+HmyC7H/mh3y+MeFWevy7V1evVhJWewmMbjDHIbZbOXICC2y+m1xI1UVfIT1HMW/O04Hxyu9oXQ==",
            "dev": true,
            "requires": {
                "postcss": "^7.0.6",
                "postcss-selector-parser": "^6.0.0"
            }
        },
        "postcss-modules-values": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/postcss-modules-values/-/postcss-modules-values-2.0.0.tgz",
            "integrity": "sha512-Ki7JZa7ff1N3EIMlPnGTZfUMe69FFwiQPnVSXC9mnn3jozCRBYIxiZd44yJOV2AmabOo4qFf8s0dC/+lweG7+w==",
            "dev": true,
            "requires": {
                "icss-replace-symbols": "^1.1.0",
                "postcss": "^7.0.6"
            }
        },
        "postcss-selector-parser": {
            "version": "6.0.2",
            "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.0.2.tgz",
            "integrity": "sha512-36P2QR59jDTOAiIkqEprfJDsoNrvwFei3eCqKd1Y0tUsBimsq39BLp7RD+JWny3WgB1zGhJX8XVePwm9k4wdBg==",
            "dev": true,
            "requires": {
                "cssesc": "^3.0.0",
                "indexes-of": "^1.0.1",
                "uniq": "^1.0.1"
            }
        },
        "postcss-value-parser": {
            "version": "3.3.1",
            "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
            "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
            "dev": true
        },
        "prepend-http": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-1.0.4.tgz",
            "integrity": "sha1-1PRWKwzjaW5BrFLQ4ALlemNdxtw=",
            "dev": true
        },
        "prerender-spa-plugin": {
            "version": "3.4.0",
            "resolved": "https://registry.npmjs.org/prerender-spa-plugin/-/prerender-spa-plugin-3.4.0.tgz",
            "integrity": "sha512-4Gtu7XIz5p0VBi1527c/ogu0NNcM5kJPG9q3F26SioeeURVbIJ11B6fuK8pxTmlPqffKPR/2TRRf4o020r4Fqw==",
            "dev": true,
            "requires": {
                "@prerenderer/prerenderer": "^0.7.2",
                "@prerenderer/renderer-puppeteer": "^0.2.0",
                "html-minifier": "^3.5.16"
            }
        },
        "preserve": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/preserve/-/preserve-0.2.0.tgz",
            "integrity": "sha1-gV7R9uvGWSb4ZbMQwHE7yzMVzks=",
            "dev": true
        },
        "pretty-error": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/pretty-error/-/pretty-error-2.1.1.tgz",
            "integrity": "sha1-X0+HyPkeWuPzuoerTPXgOxoX8aM=",
            "dev": true,
            "requires": {
                "renderkid": "^2.0.1",
                "utila": "~0.4"
            }
        },
        "private": {
            "version": "0.1.8",
            "resolved": "https://registry.npmjs.org/private/-/private-0.1.8.tgz",
            "integrity": "sha512-VvivMrbvd2nKkiG38qjULzlc+4Vx4wm/whI9pQD35YrARNnhxeiRktSOhSukRLFNlzg6Br/cJPet5J/u19r/mg==",
            "dev": true
        },
        "process": {
            "version": "0.11.10",
            "resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",
            "integrity": "sha1-czIwDoQBYb2j5podHZGn1LwW8YI=",
            "dev": true
        },
        "process-nextick-args": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
            "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
            "dev": true
        },
        "progress": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/progress/-/progress-2.0.3.tgz",
            "integrity": "sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA==",
            "dev": true
        },
        "promise-inflight": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/promise-inflight/-/promise-inflight-1.0.1.tgz",
            "integrity": "sha1-mEcocL8igTL8vdhoEputEsPAKeM=",
            "dev": true
        },
        "promise-limit": {
            "version": "2.7.0",
            "resolved": "https://registry.npmjs.org/promise-limit/-/promise-limit-2.7.0.tgz",
            "integrity": "sha512-7nJ6v5lnJsXwGprnGXga4wx6d1POjvi5Qmf1ivTRxTjH4Z/9Czja/UCMLVmB9N93GeWOU93XaFaEt6jbuoagNw==",
            "dev": true
        },
        "proxy-addr": {
            "version": "2.0.6",
            "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.6.tgz",
            "integrity": "sha512-dh/frvCBVmSsDYzw6n926jv974gddhkFPfiN8hPOi30Wax25QZyZEGveluCgliBnqmuM+UJmBErbAUFIoDbjOw==",
            "dev": true,
            "requires": {
                "forwarded": "~0.1.2",
                "ipaddr.js": "1.9.1"
            }
        },
        "proxy-from-env": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz",
            "integrity": "sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg==",
            "dev": true
        },
        "prr": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/prr/-/prr-1.0.1.tgz",
            "integrity": "sha1-0/wRS6BplaRexok/SEzrHXj19HY=",
            "dev": true
        },
        "pseudomap": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/pseudomap/-/pseudomap-1.0.2.tgz",
            "integrity": "sha1-8FKijacOYYkX7wqKw0wa5aaChrM=",
            "dev": true
        },
        "psl": {
            "version": "1.8.0",
            "resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
            "integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ==",
            "dev": true
        },
        "public-encrypt": {
            "version": "4.0.3",
            "resolved": "https://registry.npmjs.org/public-encrypt/-/public-encrypt-4.0.3.tgz",
            "integrity": "sha512-zVpa8oKZSz5bTMTFClc1fQOnyyEzpl5ozpi1B5YcvBrdohMjH2rfsBtyXcuNuwjsDIXmBYlF2N5FlJYhR29t8Q==",
            "dev": true,
            "requires": {
                "bn.js": "^4.1.0",
                "browserify-rsa": "^4.0.0",
                "create-hash": "^1.1.0",
                "parse-asn1": "^5.0.0",
                "randombytes": "^2.0.1",
                "safe-buffer": "^5.1.2"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.9",
                    "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.9.tgz",
                    "integrity": "sha512-E6QoYqCKZfgatHTdHzs1RRKP7ip4vvm+EyRUeE2RF0NblwVvb0p6jSVeNTOFxPn26QXN2o6SMfNxKp6kU8zQaw==",
                    "dev": true
                }
            }
        },
        "pump": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
            "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
            "dev": true,
            "requires": {
                "end-of-stream": "^1.1.0",
                "once": "^1.3.1"
            }
        },
        "pumpify": {
            "version": "1.5.1",
            "resolved": "https://registry.npmjs.org/pumpify/-/pumpify-1.5.1.tgz",
            "integrity": "sha512-oClZI37HvuUJJxSKKrC17bZ9Cu0ZYhEAGPsPUy9KlMUmv9dKX2o77RUmq7f3XjIxbwyGwYzbzQ1L2Ks8sIradQ==",
            "dev": true,
            "requires": {
                "duplexify": "^3.6.0",
                "inherits": "^2.0.3",
                "pump": "^2.0.0"
            },
            "dependencies": {
                "pump": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/pump/-/pump-2.0.1.tgz",
                    "integrity": "sha512-ruPMNRkN3MHP1cWJc9OWr+T/xDP0jhXYCLfJcBuX54hhfIBnaQmAUMfDcG4DM5UMWByBbJY69QSphm3jtDKIkA==",
                    "dev": true,
                    "requires": {
                        "end-of-stream": "^1.1.0",
                        "once": "^1.3.1"
                    }
                }
            }
        },
        "punycode": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
            "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
            "dev": true
        },
        "puppeteer": {
            "version": "1.20.0",
            "resolved": "https://registry.npmjs.org/puppeteer/-/puppeteer-1.20.0.tgz",
            "integrity": "sha512-bt48RDBy2eIwZPrkgbcwHtb51mj2nKvHOPMaSH2IsWiv7lOG9k9zhaRzpDZafrk05ajMc3cu+lSQYYOfH2DkVQ==",
            "dev": true,
            "requires": {
                "debug": "^4.1.0",
                "extract-zip": "^1.6.6",
                "https-proxy-agent": "^2.2.1",
                "mime": "^2.0.3",
                "progress": "^2.0.1",
                "proxy-from-env": "^1.0.0",
                "rimraf": "^2.6.1",
                "ws": "^6.1.0"
            },
            "dependencies": {
                "debug": {
                    "version": "4.1.1",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
                    "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
                    "dev": true,
                    "requires": {
                        "ms": "^2.1.1"
                    }
                },
                "mime": {
                    "version": "2.4.6",
                    "resolved": "https://registry.npmjs.org/mime/-/mime-2.4.6.tgz",
                    "integrity": "sha512-RZKhC3EmpBchfTGBVb8fb+RL2cWyw/32lshnsETttkBAyAUXSGHxbEJWWRXc751DrIxG1q04b8QwMbAwkRPpUA==",
                    "dev": true
                },
                "ms": {
                    "version": "2.1.2",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
                    "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
                    "dev": true
                }
            }
        },
        "qs": {
            "version": "6.5.2",
            "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
            "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
            "dev": true
        },
        "query-string": {
            "version": "4.3.4",
            "resolved": "https://registry.npmjs.org/query-string/-/query-string-4.3.4.tgz",
            "integrity": "sha1-u7aTucqRXCMlFbIosaArYJBD2+s=",
            "dev": true,
            "requires": {
                "object-assign": "^4.1.0",
                "strict-uri-encode": "^1.0.0"
            }
        },
        "querystring": {
            "version": "0.2.0",
            "resolved": "https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz",
            "integrity": "sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA=",
            "dev": true
        },
        "querystring-es3": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/querystring-es3/-/querystring-es3-0.2.1.tgz",
            "integrity": "sha1-nsYfeQSYdXB9aUFFlv2Qek1xHnM=",
            "dev": true
        },
        "querystringify": {
            "version": "2.2.0",
            "resolved": "https://registry.npmjs.org/querystringify/-/querystringify-2.2.0.tgz",
            "integrity": "sha512-FIqgj2EUvTa7R50u0rGsyTftzjYmv/a3hO345bZNrqabNqjtgiDMgmo4mkUjd+nzU5oF3dClKqFIPUKybUyqoQ==",
            "dev": true
        },
        "randomatic": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/randomatic/-/randomatic-3.1.1.tgz",
            "integrity": "sha512-TuDE5KxZ0J461RVjrJZCJc+J+zCkTb1MbH9AQUq68sMhOMcy9jLcb3BrZKgp9q9Ncltdg4QVqWrH02W2EFFVYw==",
            "dev": true,
            "requires": {
                "is-number": "^4.0.0",
                "kind-of": "^6.0.0",
                "math-random": "^1.0.1"
            },
            "dependencies": {
                "is-number": {
                    "version": "4.0.0",
                    "resolved": "https://registry.npmjs.org/is-number/-/is-number-4.0.0.tgz",
                    "integrity": "sha512-rSklcAIlf1OmFdyAqbnWTLVelsQ58uvZ66S/ZyawjWqIviTWCjg2PzVGw8WUA+nNuPTqb4wgA+NszrJ+08LlgQ==",
                    "dev": true
                }
            }
        },
        "randombytes": {
            "version": "2.1.0",
            "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
            "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
            "dev": true,
            "requires": {
                "safe-buffer": "^5.1.0"
            }
        },
        "randomfill": {
            "version": "1.0.4",
            "resolved": "https://registry.npmjs.org/randomfill/-/randomfill-1.0.4.tgz",
            "integrity": "sha512-87lcbR8+MhcWcUiQ+9e+Rwx8MyR2P7qnt15ynUlbm3TU/fjbgz4GsvfSUDTemtCCtVCqb4ZcEFlyPNTh9bBTLw==",
            "dev": true,
            "requires": {
                "randombytes": "^2.0.5",
                "safe-buffer": "^5.1.0"
            }
        },
        "range-parser": {
            "version": "1.2.1",
            "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
            "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
            "dev": true
        },
        "raw-body": {
            "version": "2.4.0",
            "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
            "integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
            "dev": true,
            "requires": {
                "bytes": "3.1.0",
                "http-errors": "1.7.2",
                "iconv-lite": "0.4.24",
                "unpipe": "1.0.0"
            }
        },
        "read-pkg": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-1.1.0.tgz",
            "integrity": "sha1-9f+qXs0pyzHAR0vKfXVra7KePyg=",
            "dev": true,
            "requires": {
                "load-json-file": "^1.0.0",
                "normalize-package-data": "^2.3.2",
                "path-type": "^1.0.0"
            }
        },
        "read-pkg-up": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-1.0.1.tgz",
            "integrity": "sha1-nWPBMnbAZZGNV/ACpX9AobZD+wI=",
            "dev": true,
            "requires": {
                "find-up": "^1.0.0",
                "read-pkg": "^1.0.0"
            }
        },
        "readable-stream": {
            "version": "2.3.7",
            "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
            "integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
            "dev": true,
            "requires": {
                "core-util-is": "~1.0.0",
                "inherits": "~2.0.3",
                "isarray": "~1.0.0",
                "process-nextick-args": "~2.0.0",
                "safe-buffer": "~5.1.1",
                "string_decoder": "~1.1.1",
                "util-deprecate": "~1.0.1"
            }
        },
        "readdirp": {
            "version": "2.2.1",
            "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-2.2.1.tgz",
            "integrity": "sha512-1JU/8q+VgFZyxwrJ+SVIOsh+KywWGpds3NTqikiKpDMZWScmAYyKIgqkO+ARvNWJfXeXR1zxz7aHF4u4CyH6vQ==",
            "dev": true,
            "requires": {
                "graceful-fs": "^4.1.11",
                "micromatch": "^3.1.10",
                "readable-stream": "^2.0.2"
            }
        },
        "recast": {
            "version": "0.11.23",
            "resolved": "https://registry.npmjs.org/recast/-/recast-0.11.23.tgz",
            "integrity": "sha1-RR/TAEqx5N+bTktmN2sqIZEkYtM=",
            "dev": true,
            "requires": {
                "ast-types": "0.9.6",
                "esprima": "~3.1.0",
                "private": "~0.1.5",
                "source-map": "~0.5.0"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.5.7",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
                    "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
                    "dev": true
                }
            }
        },
        "recursive-readdir": {
            "version": "2.2.2",
            "resolved": "https://registry.npmjs.org/recursive-readdir/-/recursive-readdir-2.2.2.tgz",
            "integrity": "sha512-nRCcW9Sj7NuZwa2XvH9co8NPeXUBhZP7CRKJtU+cS6PW9FpCIFoI5ib0NT1ZrbNuPoRy0ylyCaUL8Gih4LSyFg==",
            "dev": true,
            "requires": {
                "minimatch": "3.0.4"
            }
        },
        "redent": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/redent/-/redent-1.0.0.tgz",
            "integrity": "sha1-z5Fqsf1fHxbfsggi3W7H9zDCr94=",
            "dev": true,
            "requires": {
                "indent-string": "^2.1.0",
                "strip-indent": "^1.0.1"
            }
        },
        "reflect-metadata": {
            "version": "0.1.13",
            "resolved": "https://registry.npmjs.org/reflect-metadata/-/reflect-metadata-0.1.13.tgz",
            "integrity": "sha512-Ts1Y/anZELhSsjMcU605fU9RE4Oi3p5ORujwbIKXfWa+0Zxs510Qrmrce5/Jowq3cHSZSJqBjypxmHarc+vEWg=="
        },
        "regenerator-runtime": {
            "version": "0.11.1",
            "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.11.1.tgz",
            "integrity": "sha512-MguG95oij0fC3QV3URf4V2SDYGJhJnJGqvIIgdECeODCT98wSWDAJ94SSuVpYQUoTcGUIL6L4yNB7j1DFFHSBg==",
            "dev": true
        },
        "regex-cache": {
            "version": "0.4.4",
            "resolved": "https://registry.npmjs.org/regex-cache/-/regex-cache-0.4.4.tgz",
            "integrity": "sha512-nVIZwtCjkC9YgvWkpM55B5rBhBYRZhAaJbgcFYXXsHnbZ9UZI9nnVWYZpBlCqv9ho2eZryPnWrZGsOdPwVWXWQ==",
            "dev": true,
            "requires": {
                "is-equal-shallow": "^0.1.3"
            }
        },
        "regex-not": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/regex-not/-/regex-not-1.0.2.tgz",
            "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
            "dev": true,
            "requires": {
                "extend-shallow": "^3.0.2",
                "safe-regex": "^1.1.0"
            }
        },
        "regexp.prototype.flags": {
            "version": "1.3.0",
            "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.3.0.tgz",
            "integrity": "sha512-2+Q0C5g951OlYlJz6yu5/M33IcsESLlLfsyIaLJaG4FA2r4yP8MvVMJUUP/fVBkSpbbbZlS5gynbEWLipiiXiQ==",
            "dev": true,
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.17.0-next.1"
            }
        },
        "relateurl": {
            "version": "0.2.7",
            "resolved": "https://registry.npmjs.org/relateurl/-/relateurl-0.2.7.tgz",
            "integrity": "sha1-VNvzd+UUQKypCkzSdGANP/LYiKk=",
            "dev": true
        },
        "remove-trailing-separator": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
            "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8=",
            "dev": true
        },
        "renderkid": {
            "version": "2.0.3",
            "resolved": "https://registry.npmjs.org/renderkid/-/renderkid-2.0.3.tgz",
            "integrity": "sha512-z8CLQp7EZBPCwCnncgf9C4XAi3WR0dv+uWu/PjIyhhAb5d6IJ/QZqlHFprHeKT+59//V6BNUsLbvN8+2LarxGA==",
            "dev": true,
            "requires": {
                "css-select": "^1.1.0",
                "dom-converter": "^0.2",
                "htmlparser2": "^3.3.0",
                "strip-ansi": "^3.0.0",
                "utila": "^0.4.0"
            },
            "dependencies": {
                "dom-serializer": {
                    "version": "0.2.2",
                    "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.2.2.tgz",
                    "integrity": "sha512-2/xPb3ORsQ42nHYiSunXkDjPLBaEj/xTwUO4B7XCZQTRk7EBtTOPaygh10YAAh2OI1Qrp6NWfpAhzswj0ydt9g==",
                    "dev": true,
                    "requires": {
                        "domelementtype": "^2.0.1",
                        "entities": "^2.0.0"
                    },
                    "dependencies": {
                        "domelementtype": {
                            "version": "2.0.1",
                            "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.0.1.tgz",
                            "integrity": "sha512-5HOHUDsYZWV8FGWN0Njbr/Rn7f/eWSQi1v7+HsUVwXgn8nWWlL64zKDkS0n8ZmQ3mlWOMuXOnR+7Nx/5tMO5AQ==",
                            "dev": true
                        },
                        "entities": {
                            "version": "2.0.3",
                            "resolved": "https://registry.npmjs.org/entities/-/entities-2.0.3.tgz",
                            "integrity": "sha512-MyoZ0jgnLvB2X3Lg5HqpFmn1kybDiIfEQmKzTb5apr51Rb+T3KdmMiqa70T+bhGnyv7bQ6WMj2QMHpGMmlrUYQ==",
                            "dev": true
                        }
                    }
                },
                "domelementtype": {
                    "version": "1.3.1",
                    "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.3.1.tgz",
                    "integrity": "sha512-BSKB+TSpMpFI/HOxCNr1O8aMOTZ8hT3pM3GQ0w/mWRmkhEDSFJkkyzz4XQsBV44BChwGkrDfMyjVD0eA2aFV3w==",
                    "dev": true
                },
                "domhandler": {
                    "version": "2.4.2",
                    "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-2.4.2.tgz",
                    "integrity": "sha512-JiK04h0Ht5u/80fdLMCEmV4zkNh2BcoMFBmZ/91WtYZ8qVXSKjiw7fXMgFPnHcSZgOo3XdinHvmnDUeMf5R4wA==",
                    "dev": true,
                    "requires": {
                        "domelementtype": "1"
                    }
                },
                "domutils": {
                    "version": "1.7.0",
                    "resolved": "https://registry.npmjs.org/domutils/-/domutils-1.7.0.tgz",
                    "integrity": "sha512-Lgd2XcJ/NjEw+7tFvfKxOzCYKZsdct5lczQ2ZaQY8Djz7pfAD3Gbp8ySJWtreII/vDlMVmxwa6pHmdxIYgttDg==",
                    "dev": true,
                    "requires": {
                        "dom-serializer": "0",
                        "domelementtype": "1"
                    }
                },
                "entities": {
                    "version": "1.1.2",
                    "resolved": "https://registry.npmjs.org/entities/-/entities-1.1.2.tgz",
                    "integrity": "sha512-f2LZMYl1Fzu7YSBKg+RoROelpOaNrcGmE9AZubeDfrCEia483oW4MI4VyFd5VNHIgQ/7qm1I0wUHK1eJnn2y2w==",
                    "dev": true
                },
                "htmlparser2": {
                    "version": "3.10.1",
                    "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-3.10.1.tgz",
                    "integrity": "sha512-IgieNijUMbkDovyoKObU1DUhm1iwNYE/fuifEoEHfd1oZKZDaONBSkal7Y01shxsM49R4XaMdGez3WnF9UfiCQ==",
                    "dev": true,
                    "requires": {
                        "domelementtype": "^1.3.1",
                        "domhandler": "^2.3.0",
                        "domutils": "^1.5.1",
                        "entities": "^1.1.1",
                        "inherits": "^2.0.1",
                        "readable-stream": "^3.1.1"
                    }
                },
                "readable-stream": {
                    "version": "3.6.0",
                    "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
                    "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
                    "dev": true,
                    "requires": {
                        "inherits": "^2.0.3",
                        "string_decoder": "^1.1.1",
                        "util-deprecate": "^1.0.1"
                    }
                }
            }
        },
        "repeat-element": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/repeat-element/-/repeat-element-1.1.3.tgz",
            "integrity": "sha512-ahGq0ZnV5m5XtZLMb+vP76kcAM5nkLqk0lpqAuojSKGgQtn4eRi4ZZGm2olo2zKFH+sMsWaqOCW1dqAnOru72g==",
            "dev": true
        },
        "repeat-string": {
            "version": "1.6.1",
            "resolved": "https://registry.npmjs.org/repeat-string/-/repeat-string-1.6.1.tgz",
            "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",
            "dev": true
        },
        "repeating": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/repeating/-/repeating-2.0.1.tgz",
            "integrity": "sha1-UhTFOpJtNVJwdSf7q0FdvAjQbdo=",
            "dev": true,
            "requires": {
                "is-finite": "^1.0.0"
            }
        },
        "request": {
            "version": "2.88.2",
            "resolved": "https://registry.npmjs.org/request/-/request-2.88.2.tgz",
            "integrity": "sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==",
            "dev": true,
            "requires": {
                "aws-sign2": "~0.7.0",
                "aws4": "^1.8.0",
                "caseless": "~0.12.0",
                "combined-stream": "~1.0.6",
                "extend": "~3.0.2",
                "forever-agent": "~0.6.1",
                "form-data": "~2.3.2",
                "har-validator": "~5.1.3",
                "http-signature": "~1.2.0",
                "is-typedarray": "~1.0.0",
                "isstream": "~0.1.2",
                "json-stringify-safe": "~5.0.1",
                "mime-types": "~2.1.19",
                "oauth-sign": "~0.9.0",
                "performance-now": "^2.1.0",
                "qs": "~6.5.2",
                "safe-buffer": "^5.1.2",
                "tough-cookie": "~2.5.0",
                "tunnel-agent": "^0.6.0",
                "uuid": "^3.3.2"
            }
        },
        "require-directory": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
            "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",
            "dev": true
        },
        "require-main-filename": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
            "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==",
            "dev": true
        },
        "requires-port": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/requires-port/-/requires-port-1.0.0.tgz",
            "integrity": "sha1-kl0mAdOaxIXgkc8NpcbmlNw9yv8=",
            "dev": true
        },
        "resolve": {
            "version": "1.17.0",
            "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.17.0.tgz",
            "integrity": "sha512-ic+7JYiV8Vi2yzQGFWOkiZD5Z9z7O2Zhm9XMaTxdJExKasieFCr+yXZ/WmXsckHiKl12ar0y6XiXDx3m4RHn1w==",
            "dev": true,
            "requires": {
                "path-parse": "^1.0.6"
            }
        },
        "resolve-cwd": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-2.0.0.tgz",
            "integrity": "sha1-AKn3OHVW4nA46uIyyqNypqWbZlo=",
            "dev": true,
            "requires": {
                "resolve-from": "^3.0.0"
            }
        },
        "resolve-from": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-3.0.0.tgz",
            "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g=",
            "dev": true
        },
        "resolve-url": {
            "version": "0.2.1",
            "resolved": "https://registry.npmjs.org/resolve-url/-/resolve-url-0.2.1.tgz",
            "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",
            "dev": true
        },
        "restore-cursor": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-3.1.0.tgz",
            "integrity": "sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==",
            "dev": true,
            "requires": {
                "onetime": "^5.1.0",
                "signal-exit": "^3.0.2"
            }
        },
        "ret": {
            "version": "0.1.15",
            "resolved": "https://registry.npmjs.org/ret/-/ret-0.1.15.tgz",
            "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",
            "dev": true
        },
        "retry": {
            "version": "0.12.0",
            "resolved": "https://registry.npmjs.org/retry/-/retry-0.12.0.tgz",
            "integrity": "sha1-G0KmJmoh8HQh0bC1S33BZ7AcATs=",
            "dev": true
        },
        "rimraf": {
            "version": "2.7.1",
            "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
            "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
            "dev": true,
            "requires": {
                "glob": "^7.1.3"
            }
        },
        "ripemd160": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/ripemd160/-/ripemd160-2.0.2.tgz",
            "integrity": "sha512-ii4iagi25WusVoiC4B4lq7pbXfAp3D9v5CwfkY33vffw2+pkDjY1D8GaN7spsxvCSx8dkPqOZCEZyfxcmJG2IA==",
            "dev": true,
            "requires": {
                "hash-base": "^3.0.0",
                "inherits": "^2.0.1"
            }
        },
        "run-async": {
            "version": "2.4.1",
            "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.4.1.tgz",
            "integrity": "sha512-tvVnVv01b8c1RrA6Ep7JkStj85Guv/YrMcwqYQnwjsAS2cTmmPGBBjAjpCW7RrSodNSoE2/qg9O4bceNvUuDgQ==",
            "dev": true
        },
        "run-queue": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/run-queue/-/run-queue-1.0.3.tgz",
            "integrity": "sha1-6Eg5bwV9Ij8kOGkkYY4laUFh7Ec=",
            "dev": true,
            "requires": {
                "aproba": "^1.1.1"
            }
        },
        "rxjs": {
            "version": "6.6.2",
            "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.2.tgz",
            "integrity": "sha512-BHdBMVoWC2sL26w//BCu3YzKT4s2jip/WhwsGEDmeKYBhKDZeYezVUnHatYB7L85v5xs0BAQmg6BEYJEKxBabg==",
            "dev": true,
            "requires": {
                "tslib": "^1.9.0"
            }
        },
        "safe-buffer": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
            "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
            "dev": true
        },
        "safe-regex": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/safe-regex/-/safe-regex-1.1.0.tgz",
            "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
            "dev": true,
            "requires": {
                "ret": "~0.1.10"
            }
        },
        "safer-buffer": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
            "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
            "dev": true
        },
        "sass-graph": {
            "version": "2.2.5",
            "resolved": "https://registry.npmjs.org/sass-graph/-/sass-graph-2.2.5.tgz",
            "integrity": "sha512-VFWDAHOe6mRuT4mZRd4eKE+d8Uedrk6Xnh7Sh9b4NGufQLQjOrvf/MQoOdx+0s92L89FeyUUNfU597j/3uNpag==",
            "dev": true,
            "requires": {
                "glob": "^7.0.0",
                "lodash": "^4.0.0",
                "scss-tokenizer": "^0.2.3",
                "yargs": "^13.3.2"
            }
        },
        "sass-loader": {
            "version": "7.3.1",
            "resolved": "https://registry.npmjs.org/sass-loader/-/sass-loader-7.3.1.tgz",
            "integrity": "sha512-tuU7+zm0pTCynKYHpdqaPpe+MMTQ76I9TPZ7i4/5dZsigE350shQWe5EZNl5dBidM49TPET75tNqRbcsUZWeNA==",
            "dev": true,
            "requires": {
                "clone-deep": "^4.0.1",
                "loader-utils": "^1.0.1",
                "neo-async": "^2.5.0",
                "pify": "^4.0.1",
                "semver": "^6.3.0"
            },
            "dependencies": {
                "pify": {
                    "version": "4.0.1",
                    "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
                    "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
                    "dev": true
                },
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                    "dev": true
                }
            }
        },
        "schema-utils": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/schema-utils/-/schema-utils-1.0.0.tgz",
            "integrity": "sha512-i27Mic4KovM/lnGsy8whRCHhc7VicJajAjTrYg11K9zfZXnYIt4k5F+kZkwjnrhKzLic/HLU4j11mjsz2G/75g==",
            "dev": true,
            "requires": {
                "ajv": "^6.1.0",
                "ajv-errors": "^1.0.0",
                "ajv-keywords": "^3.1.0"
            }
        },
        "scss-tokenizer": {
            "version": "0.2.3",
            "resolved": "https://registry.npmjs.org/scss-tokenizer/-/scss-tokenizer-0.2.3.tgz",
            "integrity": "sha1-jrBtualyMzOCTT9VMGQRSYR85dE=",
            "dev": true,
            "requires": {
                "js-base64": "^2.1.8",
                "source-map": "^0.4.2"
            },
            "dependencies": {
                "source-map": {
                    "version": "0.4.4",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.4.4.tgz",
                    "integrity": "sha1-66T12pwNyZneaAMti092FzZSA2s=",
                    "dev": true,
                    "requires": {
                        "amdefine": ">=0.0.4"
                    }
                }
            }
        },
        "select-hose": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/select-hose/-/select-hose-2.0.0.tgz",
            "integrity": "sha1-Yl2GWPhlr0Psliv8N2o3NZpJlMo=",
            "dev": true
        },
        "selfsigned": {
            "version": "1.10.7",
            "resolved": "https://registry.npmjs.org/selfsigned/-/selfsigned-1.10.7.tgz",
            "integrity": "sha512-8M3wBCzeWIJnQfl43IKwOmC4H/RAp50S8DF60znzjW5GVqTcSe2vWclt7hmYVPkKPlHWOu5EaWOMZ2Y6W8ZXTA==",
            "dev": true,
            "requires": {
                "node-forge": "0.9.0"
            }
        },
        "semver": {
            "version": "5.7.1",
            "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
            "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
            "dev": true
        },
        "send": {
            "version": "0.17.1",
            "resolved": "https://registry.npmjs.org/send/-/send-0.17.1.tgz",
            "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
            "dev": true,
            "requires": {
                "debug": "2.6.9",
                "depd": "~1.1.2",
                "destroy": "~1.0.4",
                "encodeurl": "~1.0.2",
                "escape-html": "~1.0.3",
                "etag": "~1.8.1",
                "fresh": "0.5.2",
                "http-errors": "~1.7.2",
                "mime": "1.6.0",
                "ms": "2.1.1",
                "on-finished": "~2.3.0",
                "range-parser": "~1.2.1",
                "statuses": "~1.5.0"
            },
            "dependencies": {
                "ms": {
                    "version": "2.1.1",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.1.tgz",
                    "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg==",
                    "dev": true
                }
            }
        },
        "serialize-javascript": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/serialize-javascript/-/serialize-javascript-4.0.0.tgz",
            "integrity": "sha512-GaNA54380uFefWghODBWEGisLZFj00nS5ACs6yHa9nLqlLpVLO8ChDGeKRjZnV4Nh4n0Qi7nhYZD/9fCPzEqkw==",
            "dev": true,
            "requires": {
                "randombytes": "^2.1.0"
            }
        },
        "serve-index": {
            "version": "1.9.1",
            "resolved": "https://registry.npmjs.org/serve-index/-/serve-index-1.9.1.tgz",
            "integrity": "sha1-03aNabHn2C5c4FD/9bRTvqEqkjk=",
            "dev": true,
            "requires": {
                "accepts": "~1.3.4",
                "batch": "0.6.1",
                "debug": "2.6.9",
                "escape-html": "~1.0.3",
                "http-errors": "~1.6.2",
                "mime-types": "~2.1.17",
                "parseurl": "~1.3.2"
            },
            "dependencies": {
                "http-errors": {
                    "version": "1.6.3",
                    "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.6.3.tgz",
                    "integrity": "sha1-i1VoC7S+KDoLW/TqLjhYC+HZMg0=",
                    "dev": true,
                    "requires": {
                        "depd": "~1.1.2",
                        "inherits": "2.0.3",
                        "setprototypeof": "1.1.0",
                        "statuses": ">= 1.4.0 < 2"
                    }
                },
                "inherits": {
                    "version": "2.0.3",
                    "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
                    "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
                    "dev": true
                },
                "setprototypeof": {
                    "version": "1.1.0",
                    "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.0.tgz",
                    "integrity": "sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ==",
                    "dev": true
                }
            }
        },
        "serve-static": {
            "version": "1.14.1",
            "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.1.tgz",
            "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
            "dev": true,
            "requires": {
                "encodeurl": "~1.0.2",
                "escape-html": "~1.0.3",
                "parseurl": "~1.3.3",
                "send": "0.17.1"
            }
        },
        "set-blocking": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
            "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc=",
            "dev": true
        },
        "set-value": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/set-value/-/set-value-2.0.1.tgz",
            "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
            "dev": true,
            "requires": {
                "extend-shallow": "^2.0.1",
                "is-extendable": "^0.1.1",
                "is-plain-object": "^2.0.3",
                "split-string": "^3.0.1"
            },
            "dependencies": {
                "extend-shallow": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                    "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                    "dev": true,
                    "requires": {
                        "is-extendable": "^0.1.0"
                    }
                }
            }
        },
        "setimmediate": {
            "version": "1.0.5",
            "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
            "integrity": "sha1-KQy7Iy4waULX1+qbg3Mqt4VvgoU=",
            "dev": true
        },
        "setprototypeof": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
            "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw==",
            "dev": true
        },
        "sha.js": {
            "version": "2.4.11",
            "resolved": "https://registry.npmjs.org/sha.js/-/sha.js-2.4.11.tgz",
            "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",
            "dev": true,
            "requires": {
                "inherits": "^2.0.1",
                "safe-buffer": "^5.0.1"
            }
        },
        "shallow-clone": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/shallow-clone/-/shallow-clone-3.0.1.tgz",
            "integrity": "sha512-/6KqX+GVUdqPuPPd2LxDDxzX6CAbjJehAAOKlNpqqUpAqPM6HeL8f+o3a+JsyGjn2lv0WY8UsTgUJjU9Ok55NA==",
            "dev": true,
            "requires": {
                "kind-of": "^6.0.2"
            }
        },
        "shebang-command": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
            "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
            "dev": true,
            "requires": {
                "shebang-regex": "^3.0.0"
            }
        },
        "shebang-regex": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
            "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
            "dev": true
        },
        "shell-quote": {
            "version": "1.7.2",
            "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.7.2.tgz",
            "integrity": "sha512-mRz/m/JVscCrkMyPqHc/bczi3OQHkLTqXHEFu0zDhK/qfv3UcOA4SVmRCLmos4bhjr9ekVQubj/R7waKapmiQg==",
            "dev": true
        },
        "signal-exit": {
            "version": "3.0.3",
            "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
            "integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA==",
            "dev": true
        },
        "slash": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/slash/-/slash-1.0.0.tgz",
            "integrity": "sha1-xB8vbDn8FtHNF61LXYlhFK5HDVU=",
            "dev": true
        },
        "snapdragon": {
            "version": "0.8.2",
            "resolved": "https://registry.npmjs.org/snapdragon/-/snapdragon-0.8.2.tgz",
            "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
            "dev": true,
            "requires": {
                "base": "^0.11.1",
                "debug": "^2.2.0",
                "define-property": "^0.2.5",
                "extend-shallow": "^2.0.1",
                "map-cache": "^0.2.2",
                "source-map": "^0.5.6",
                "source-map-resolve": "^0.5.0",
                "use": "^3.1.0"
            },
            "dependencies": {
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "dev": true,
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                },
                "extend-shallow": {
                    "version": "2.0.1",
                    "resolved": "https://registry.npmjs.org/extend-shallow/-/extend-shallow-2.0.1.tgz",
                    "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
                    "dev": true,
                    "requires": {
                        "is-extendable": "^0.1.0"
                    }
                },
                "source-map": {
                    "version": "0.5.7",
                    "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
                    "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
                    "dev": true
                }
            }
        },
        "snapdragon-node": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
            "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
            "dev": true,
            "requires": {
                "define-property": "^1.0.0",
                "isobject": "^3.0.0",
                "snapdragon-util": "^3.0.1"
            },
            "dependencies": {
                "define-property": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-1.0.0.tgz",
                    "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
                    "dev": true,
                    "requires": {
                        "is-descriptor": "^1.0.0"
                    }
                },
                "is-accessor-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
                    "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
                    "dev": true,
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-data-descriptor": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
                    "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
                    "dev": true,
                    "requires": {
                        "kind-of": "^6.0.0"
                    }
                },
                "is-descriptor": {
                    "version": "1.0.2",
                    "resolved": "https://registry.npmjs.org/is-descriptor/-/is-descriptor-1.0.2.tgz",
                    "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
                    "dev": true,
                    "requires": {
                        "is-accessor-descriptor": "^1.0.0",
                        "is-data-descriptor": "^1.0.0",
                        "kind-of": "^6.0.2"
                    }
                }
            }
        },
        "snapdragon-util": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
            "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
            "dev": true,
            "requires": {
                "kind-of": "^3.2.0"
            },
            "dependencies": {
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "dev": true,
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "sockjs": {
            "version": "0.3.20",
            "resolved": "https://registry.npmjs.org/sockjs/-/sockjs-0.3.20.tgz",
            "integrity": "sha512-SpmVOVpdq0DJc0qArhF3E5xsxvaiqGNb73XfgBpK1y3UD5gs8DSo8aCTsuT5pX8rssdc2NDIzANwP9eCAiSdTA==",
            "dev": true,
            "requires": {
                "faye-websocket": "^0.10.0",
                "uuid": "^3.4.0",
                "websocket-driver": "0.6.5"
            }
        },
        "sockjs-client": {
            "version": "1.4.0",
            "resolved": "https://registry.npmjs.org/sockjs-client/-/sockjs-client-1.4.0.tgz",
            "integrity": "sha512-5zaLyO8/nri5cua0VtOrFXBPK1jbL4+1cebT/mmKA1E1ZXOvJrII75bPu0l0k843G/+iAbhEqzyKr0w/eCCj7g==",
            "dev": true,
            "requires": {
                "debug": "^3.2.5",
                "eventsource": "^1.0.7",
                "faye-websocket": "~0.11.1",
                "inherits": "^2.0.3",
                "json3": "^3.3.2",
                "url-parse": "^1.4.3"
            },
            "dependencies": {
                "debug": {
                    "version": "3.2.6",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.6.tgz",
                    "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
                    "dev": true,
                    "requires": {
                        "ms": "^2.1.1"
                    }
                },
                "faye-websocket": {
                    "version": "0.11.3",
                    "resolved": "https://registry.npmjs.org/faye-websocket/-/faye-websocket-0.11.3.tgz",
                    "integrity": "sha512-D2y4bovYpzziGgbHYtGCMjlJM36vAl/y+xUyn1C+FVx8szd1E+86KwVw6XvYSzOP8iMpm1X0I4xJD+QtUb36OA==",
                    "dev": true,
                    "requires": {
                        "websocket-driver": ">=0.5.1"
                    }
                },
                "ms": {
                    "version": "2.1.2",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
                    "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
                    "dev": true
                }
            }
        },
        "sort-keys": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/sort-keys/-/sort-keys-1.1.2.tgz",
            "integrity": "sha1-RBttTTRnmPG05J6JIK37oOVD+a0=",
            "dev": true,
            "requires": {
                "is-plain-obj": "^1.0.0"
            }
        },
        "source-list-map": {
            "version": "2.0.1",
            "resolved": "https://registry.npmjs.org/source-list-map/-/source-list-map-2.0.1.tgz",
            "integrity": "sha512-qnQ7gVMxGNxsiL4lEuJwe/To8UnK7fAnmbGEEH8RpLouuKbeEm0lhbQVFIrNSuB+G7tVrAlVsZgETT5nljf+Iw==",
            "dev": true
        },
        "source-map": {
            "version": "0.6.1",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
            "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
            "dev": true
        },
        "source-map-resolve": {
            "version": "0.5.3",
            "resolved": "https://registry.npmjs.org/source-map-resolve/-/source-map-resolve-0.5.3.tgz",
            "integrity": "sha512-Htz+RnsXWk5+P2slx5Jh3Q66vhQj1Cllm0zvnaY98+NFx+Dv2CF/f5O/t8x+KaNdrdIAsruNzoh/KpialbqAnw==",
            "dev": true,
            "requires": {
                "atob": "^2.1.2",
                "decode-uri-component": "^0.2.0",
                "resolve-url": "^0.2.1",
                "source-map-url": "^0.4.0",
                "urix": "^0.1.0"
            }
        },
        "source-map-support": {
            "version": "0.5.19",
            "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.19.tgz",
            "integrity": "sha512-Wonm7zOCIJzBGQdB+thsPar0kYuCIzYvxZwlBa87yi/Mdjv7Tip2cyVbLj5o0cFPN4EVkuTwb3GDDyUx2DGnGw==",
            "dev": true,
            "requires": {
                "buffer-from": "^1.0.0",
                "source-map": "^0.6.0"
            }
        },
        "source-map-url": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/source-map-url/-/source-map-url-0.4.0.tgz",
            "integrity": "sha1-PpNdfd1zYxuXZZlW1VEo6HtQhKM=",
            "dev": true
        },
        "spdx-correct": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.1.0.tgz",
            "integrity": "sha512-lr2EZCctC2BNR7j7WzJ2FpDznxky1sjfxvvYEyzxNyb6lZXHODmEoJeFu4JupYlkfha1KZpJyoqiJ7pgA1qq8Q==",
            "dev": true,
            "requires": {
                "spdx-expression-parse": "^3.0.0",
                "spdx-license-ids": "^3.0.0"
            }
        },
        "spdx-exceptions": {
            "version": "2.3.0",
            "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.3.0.tgz",
            "integrity": "sha512-/tTrYOC7PPI1nUAgx34hUpqXuyJG+DTHJTnIULG4rDygi4xu/tfgmq1e1cIRwRzwZgo4NLySi+ricLkZkw4i5A==",
            "dev": true
        },
        "spdx-expression-parse": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.0.tgz",
            "integrity": "sha512-Yg6D3XpRD4kkOmTpdgbUiEJFKghJH03fiC1OPll5h/0sO6neh2jqRDVHOQ4o/LMea0tgCkbMgea5ip/e+MkWyg==",
            "dev": true,
            "requires": {
                "spdx-exceptions": "^2.1.0",
                "spdx-license-ids": "^3.0.0"
            }
        },
        "spdx-license-ids": {
            "version": "3.0.5",
            "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.5.tgz",
            "integrity": "sha512-J+FWzZoynJEXGphVIS+XEh3kFSjZX/1i9gFBaWQcB+/tmpe2qUsSBABpcxqxnAxFdiUFEgAX1bjYGQvIZmoz9Q==",
            "dev": true
        },
        "spdy": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/spdy/-/spdy-4.0.2.tgz",
            "integrity": "sha512-r46gZQZQV+Kl9oItvl1JZZqJKGr+oEkB08A6BzkiR7593/7IbtuncXHd2YoYeTsG4157ZssMu9KYvUHLcjcDoA==",
            "dev": true,
            "requires": {
                "debug": "^4.1.0",
                "handle-thing": "^2.0.0",
                "http-deceiver": "^1.2.7",
                "select-hose": "^2.0.0",
                "spdy-transport": "^3.0.0"
            },
            "dependencies": {
                "debug": {
                    "version": "4.1.1",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
                    "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
                    "dev": true,
                    "requires": {
                        "ms": "^2.1.1"
                    }
                },
                "ms": {
                    "version": "2.1.2",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
                    "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
                    "dev": true
                }
            }
        },
        "spdy-transport": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/spdy-transport/-/spdy-transport-3.0.0.tgz",
            "integrity": "sha512-hsLVFE5SjA6TCisWeJXFKniGGOpBgMLmerfO2aCyCU5s7nJ/rpAepqmFifv/GCbSbueEeAJJnmSQ2rKC/g8Fcw==",
            "dev": true,
            "requires": {
                "debug": "^4.1.0",
                "detect-node": "^2.0.4",
                "hpack.js": "^2.1.6",
                "obuf": "^1.1.2",
                "readable-stream": "^3.0.6",
                "wbuf": "^1.7.3"
            },
            "dependencies": {
                "debug": {
                    "version": "4.1.1",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
                    "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
                    "dev": true,
                    "requires": {
                        "ms": "^2.1.1"
                    }
                },
                "ms": {
                    "version": "2.1.2",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
                    "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
                    "dev": true
                },
                "readable-stream": {
                    "version": "3.6.0",
                    "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
                    "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
                    "dev": true,
                    "requires": {
                        "inherits": "^2.0.3",
                        "string_decoder": "^1.1.1",
                        "util-deprecate": "^1.0.1"
                    }
                }
            }
        },
        "split-string": {
            "version": "3.1.0",
            "resolved": "https://registry.npmjs.org/split-string/-/split-string-3.1.0.tgz",
            "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
            "dev": true,
            "requires": {
                "extend-shallow": "^3.0.0"
            }
        },
        "sprintf-js": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
            "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=",
            "dev": true
        },
        "sshpk": {
            "version": "1.16.1",
            "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
            "integrity": "sha512-HXXqVUq7+pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg==",
            "dev": true,
            "requires": {
                "asn1": "~0.2.3",
                "assert-plus": "^1.0.0",
                "bcrypt-pbkdf": "^1.0.0",
                "dashdash": "^1.12.0",
                "ecc-jsbn": "~0.1.1",
                "getpass": "^0.1.1",
                "jsbn": "~0.1.0",
                "safer-buffer": "^2.0.2",
                "tweetnacl": "~0.14.0"
            }
        },
        "ssri": {
            "version": "6.0.1",
            "resolved": "https://registry.npmjs.org/ssri/-/ssri-6.0.1.tgz",
            "integrity": "sha512-3Wge10hNcT1Kur4PDFwEieXSCMCJs/7WvSACcrMYrNp+b8kDL1/0wJch5Ni2WrtwEa2IO8OsVfeKIciKCDx/QA==",
            "dev": true,
            "requires": {
                "figgy-pudding": "^3.5.1"
            }
        },
        "static-extend": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/static-extend/-/static-extend-0.1.2.tgz",
            "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
            "dev": true,
            "requires": {
                "define-property": "^0.2.5",
                "object-copy": "^0.1.0"
            },
            "dependencies": {
                "define-property": {
                    "version": "0.2.5",
                    "resolved": "https://registry.npmjs.org/define-property/-/define-property-0.2.5.tgz",
                    "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
                    "dev": true,
                    "requires": {
                        "is-descriptor": "^0.1.0"
                    }
                }
            }
        },
        "statuses": {
            "version": "1.5.0",
            "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
            "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow=",
            "dev": true
        },
        "stdout-stream": {
            "version": "1.4.1",
            "resolved": "https://registry.npmjs.org/stdout-stream/-/stdout-stream-1.4.1.tgz",
            "integrity": "sha512-j4emi03KXqJWcIeF8eIXkjMFN1Cmb8gUlDYGeBALLPo5qdyTfA9bOtl8m33lRoC+vFMkP3gl0WsDr6+gzxbbTA==",
            "dev": true,
            "requires": {
                "readable-stream": "^2.0.1"
            }
        },
        "stream-browserify": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/stream-browserify/-/stream-browserify-2.0.2.tgz",
            "integrity": "sha512-nX6hmklHs/gr2FuxYDltq8fJA1GDlxKQCz8O/IM4atRqBH8OORmBNgfvW5gG10GT/qQ9u0CzIvr2X5Pkt6ntqg==",
            "dev": true,
            "requires": {
                "inherits": "~2.0.1",
                "readable-stream": "^2.0.2"
            }
        },
        "stream-each": {
            "version": "1.2.3",
            "resolved": "https://registry.npmjs.org/stream-each/-/stream-each-1.2.3.tgz",
            "integrity": "sha512-vlMC2f8I2u/bZGqkdfLQW/13Zihpej/7PmSiMQsbYddxuTsJp8vRe2x2FvVExZg7FaOds43ROAuFJwPR4MTZLw==",
            "dev": true,
            "requires": {
                "end-of-stream": "^1.1.0",
                "stream-shift": "^1.0.0"
            }
        },
        "stream-http": {
            "version": "2.8.3",
            "resolved": "https://registry.npmjs.org/stream-http/-/stream-http-2.8.3.tgz",
            "integrity": "sha512-+TSkfINHDo4J+ZobQLWiMouQYB+UVYFttRA94FpEzzJ7ZdqcL4uUUQ7WkdkI4DSozGmgBUE/a47L+38PenXhUw==",
            "dev": true,
            "requires": {
                "builtin-status-codes": "^3.0.0",
                "inherits": "^2.0.1",
                "readable-stream": "^2.3.6",
                "to-arraybuffer": "^1.0.0",
                "xtend": "^4.0.0"
            }
        },
        "stream-shift": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/stream-shift/-/stream-shift-1.0.1.tgz",
            "integrity": "sha512-AiisoFqQ0vbGcZgQPY1cdP2I76glaVA/RauYR4G4thNFgkTqr90yXTo4LYX60Jl+sIlPNHHdGSwo01AvbKUSVQ==",
            "dev": true
        },
        "strict-uri-encode": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/strict-uri-encode/-/strict-uri-encode-1.1.0.tgz",
            "integrity": "sha1-J5siXfHVgrH1TmWt3UNS4Y+qBxM=",
            "dev": true
        },
        "string-width": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
            "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
            "dev": true,
            "requires": {
                "code-point-at": "^1.0.0",
                "is-fullwidth-code-point": "^1.0.0",
                "strip-ansi": "^3.0.0"
            }
        },
        "string.prototype.trimend": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.1.tgz",
            "integrity": "sha512-LRPxFUaTtpqYsTeNKaFOw3R4bxIzWOnbQ837QfBylo8jIxtcbK/A/sMV7Q+OAV/vWo+7s25pOE10KYSjaSO06g==",
            "dev": true,
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.17.5"
            }
        },
        "string.prototype.trimstart": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.1.tgz",
            "integrity": "sha512-XxZn+QpvrBI1FOcg6dIpxUPgWCPuNXvMD72aaRaUQv1eD4e/Qy8i/hFTe0BUmD60p/QA6bh1avmuPTfNjqVWRw==",
            "dev": true,
            "requires": {
                "define-properties": "^1.1.3",
                "es-abstract": "^1.17.5"
            }
        },
        "string_decoder": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
            "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
            "dev": true,
            "requires": {
                "safe-buffer": "~5.1.0"
            }
        },
        "strip-ansi": {
            "version": "3.0.1",
            "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
            "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
            "dev": true,
            "requires": {
                "ansi-regex": "^2.0.0"
            }
        },
        "strip-bom": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-2.0.0.tgz",
            "integrity": "sha1-YhmoVhZSBJHzV4i9vxRHqZx+aw4=",
            "dev": true,
            "requires": {
                "is-utf8": "^0.2.0"
            }
        },
        "strip-eof": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",
            "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8=",
            "dev": true
        },
        "strip-indent": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-1.0.1.tgz",
            "integrity": "sha1-DHlipq3vp7vUrDZkYKY4VSrhoKI=",
            "dev": true,
            "requires": {
                "get-stdin": "^4.0.1"
            }
        },
        "strip-outer": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/strip-outer/-/strip-outer-1.0.1.tgz",
            "integrity": "sha512-k55yxKHwaXnpYGsOzg4Vl8+tDrWylxDEpknGjhTiZB8dFRU5rTo9CAzeycivxV3s+zlTKwrs6WxMxR95n26kwg==",
            "dev": true,
            "requires": {
                "escape-string-regexp": "^1.0.2"
            }
        },
        "strip-url-auth": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/strip-url-auth/-/strip-url-auth-1.0.1.tgz",
            "integrity": "sha1-IrD6OkE4WzO+PzMVUbu4N/oM164=",
            "dev": true
        },
        "style-loader": {
            "version": "0.23.1",
            "resolved": "https://registry.npmjs.org/style-loader/-/style-loader-0.23.1.tgz",
            "integrity": "sha512-XK+uv9kWwhZMZ1y7mysB+zoihsEj4wneFWAS5qoiLwzW0WzSqMrrsIy+a3zkQJq0ipFtBpX5W3MqyRIBF/WFGg==",
            "dev": true,
            "requires": {
                "loader-utils": "^1.1.0",
                "schema-utils": "^1.0.0"
            }
        },
        "subarg": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/subarg/-/subarg-1.0.0.tgz",
            "integrity": "sha1-9izxdYHplrSPyWVpn1TAauJouNI=",
            "dev": true,
            "requires": {
                "minimist": "^1.1.0"
            }
        },
        "supports-color": {
            "version": "6.1.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-6.1.0.tgz",
            "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
            "dev": true,
            "requires": {
                "has-flag": "^3.0.0"
            }
        },
        "tapable": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/tapable/-/tapable-1.1.3.tgz",
            "integrity": "sha512-4WK/bYZmj8xLr+HUCODHGF1ZFzsYffasLUgEiMBY4fgtltdO6B4WJtlSbPaDTLpYTcGVwM2qLnFTICEcNxs3kA==",
            "dev": true
        },
        "tar": {
            "version": "2.2.2",
            "resolved": "https://registry.npmjs.org/tar/-/tar-2.2.2.tgz",
            "integrity": "sha512-FCEhQ/4rE1zYv9rYXJw/msRqsnmlje5jHP6huWeBZ704jUTy02c5AZyWujpMR1ax6mVw9NyJMfuK2CMDWVIfgA==",
            "dev": true,
            "requires": {
                "block-stream": "*",
                "fstream": "^1.0.12",
                "inherits": "2"
            }
        },
        "terser": {
            "version": "4.8.0",
            "resolved": "https://registry.npmjs.org/terser/-/terser-4.8.0.tgz",
            "integrity": "sha512-EAPipTNeWsb/3wLPeup1tVPaXfIaU68xMnVdPafIL1TV05OhASArYyIfFvnvJCNrR2NIOvDVNNTFRa+Re2MWyw==",
            "dev": true,
            "requires": {
                "commander": "^2.20.0",
                "source-map": "~0.6.1",
                "source-map-support": "~0.5.12"
            },
            "dependencies": {
                "commander": {
                    "version": "2.20.3",
                    "resolved": "https://registry.npmjs.org/commander/-/commander-2.20.3.tgz",
                    "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
                    "dev": true
                }
            }
        },
        "terser-webpack-plugin": {
            "version": "1.4.5",
            "resolved": "https://registry.npmjs.org/terser-webpack-plugin/-/terser-webpack-plugin-1.4.5.tgz",
            "integrity": "sha512-04Rfe496lN8EYruwi6oPQkG0vo8C+HT49X687FZnpPF0qMAIHONI6HEXYPKDOE8e5HjXTyKfqRd/agHtH0kOtw==",
            "dev": true,
            "requires": {
                "cacache": "^12.0.2",
                "find-cache-dir": "^2.1.0",
                "is-wsl": "^1.1.0",
                "schema-utils": "^1.0.0",
                "serialize-javascript": "^4.0.0",
                "source-map": "^0.6.1",
                "terser": "^4.1.2",
                "webpack-sources": "^1.4.0",
                "worker-farm": "^1.7.0"
            }
        },
        "through": {
            "version": "2.3.8",
            "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
            "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU=",
            "dev": true
        },
        "through2": {
            "version": "2.0.5",
            "resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",
            "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",
            "dev": true,
            "requires": {
                "readable-stream": "~2.3.6",
                "xtend": "~4.0.1"
            }
        },
        "thunky": {
            "version": "1.1.0",
            "resolved": "https://registry.npmjs.org/thunky/-/thunky-1.1.0.tgz",
            "integrity": "sha512-eHY7nBftgThBqOyHGVN+l8gF0BucP09fMo0oO/Lb0w1OF80dJv+lDVpXG60WMQvkcxAkNybKsrEIE3ZtKGmPrA==",
            "dev": true
        },
        "timers-browserify": {
            "version": "2.0.11",
            "resolved": "https://registry.npmjs.org/timers-browserify/-/timers-browserify-2.0.11.tgz",
            "integrity": "sha512-60aV6sgJ5YEbzUdn9c8kYGIqOubPoUdqQCul3SBAsRCZ40s6Y5cMcrW4dt3/k/EsbLVJNl9n6Vz3fTc+k2GeKQ==",
            "dev": true,
            "requires": {
                "setimmediate": "^1.0.4"
            }
        },
        "tmp": {
            "version": "0.0.33",
            "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
            "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
            "dev": true,
            "requires": {
                "os-tmpdir": "~1.0.2"
            }
        },
        "to-arraybuffer": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/to-arraybuffer/-/to-arraybuffer-1.0.1.tgz",
            "integrity": "sha1-fSKbH8xjfkZsoIEYCDanqr/4P0M=",
            "dev": true
        },
        "to-object-path": {
            "version": "0.3.0",
            "resolved": "https://registry.npmjs.org/to-object-path/-/to-object-path-0.3.0.tgz",
            "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
            "dev": true,
            "requires": {
                "kind-of": "^3.0.2"
            },
            "dependencies": {
                "kind-of": {
                    "version": "3.2.2",
                    "resolved": "https://registry.npmjs.org/kind-of/-/kind-of-3.2.2.tgz",
                    "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
                    "dev": true,
                    "requires": {
                        "is-buffer": "^1.1.5"
                    }
                }
            }
        },
        "to-regex": {
            "version": "3.0.2",
            "resolved": "https://registry.npmjs.org/to-regex/-/to-regex-3.0.2.tgz",
            "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
            "dev": true,
            "requires": {
                "define-property": "^2.0.2",
                "extend-shallow": "^3.0.2",
                "regex-not": "^1.0.2",
                "safe-regex": "^1.1.0"
            }
        },
        "to-regex-range": {
            "version": "2.1.1",
            "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-2.1.1.tgz",
            "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
            "dev": true,
            "requires": {
                "is-number": "^3.0.0",
                "repeat-string": "^1.6.1"
            }
        },
        "toidentifier": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
            "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw==",
            "dev": true
        },
        "toposort": {
            "version": "1.0.7",
            "resolved": "https://registry.npmjs.org/toposort/-/toposort-1.0.7.tgz",
            "integrity": "sha1-LmhELZ9k7HILjMieZEOsbKqVACk=",
            "dev": true
        },
        "tough-cookie": {
            "version": "2.5.0",
            "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
            "integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
            "dev": true,
            "requires": {
                "psl": "^1.1.28",
                "punycode": "^2.1.1"
            }
        },
        "trim-newlines": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/trim-newlines/-/trim-newlines-1.0.0.tgz",
            "integrity": "sha1-WIeWa7WCpFA6QetST301ARgVphM=",
            "dev": true
        },
        "trim-repeated": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/trim-repeated/-/trim-repeated-1.0.0.tgz",
            "integrity": "sha1-42RqLqTokTEr9+rObPsFOAvAHCE=",
            "dev": true,
            "requires": {
                "escape-string-regexp": "^1.0.2"
            }
        },
        "true-case-path": {
            "version": "1.0.3",
            "resolved": "https://registry.npmjs.org/true-case-path/-/true-case-path-1.0.3.tgz",
            "integrity": "sha512-m6s2OdQe5wgpFMC+pAJ+q9djG82O2jcHPOI6RNg1yy9rCYR+WD6Nbpl32fDpfC56nirdRy+opFa/Vk7HYhqaew==",
            "dev": true,
            "requires": {
                "glob": "^7.1.2"
            }
        },
        "ts-loader": {
            "version": "5.4.5",
            "resolved": "https://registry.npmjs.org/ts-loader/-/ts-loader-5.4.5.tgz",
            "integrity": "sha512-XYsjfnRQCBum9AMRZpk2rTYSVpdZBpZK+kDh0TeT3kxmQNBDVIeUjdPjY5RZry4eIAb8XHc4gYSUiUWPYvzSRw==",
            "dev": true,
            "requires": {
                "chalk": "^2.3.0",
                "enhanced-resolve": "^4.0.0",
                "loader-utils": "^1.0.2",
                "micromatch": "^3.1.4",
                "semver": "^5.0.1"
            }
        },
        "tslib": {
            "version": "1.13.0",
            "resolved": "https://registry.npmjs.org/tslib/-/tslib-1.13.0.tgz",
            "integrity": "sha512-i/6DQjL8Xf3be4K/E6Wgpekn5Qasl1usyw++dAA35Ue5orEn65VIxOA+YvNNl9HV3qv70T7CNwjODHZrLwvd1Q==",
            "dev": true
        },
        "tty-browserify": {
            "version": "0.0.0",
            "resolved": "https://registry.npmjs.org/tty-browserify/-/tty-browserify-0.0.0.tgz",
            "integrity": "sha1-oVe6QC2iTpv5V/mqadUk7tQpAaY=",
            "dev": true
        },
        "tunnel-agent": {
            "version": "0.6.0",
            "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
            "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
            "dev": true,
            "requires": {
                "safe-buffer": "^5.0.1"
            }
        },
        "tweetnacl": {
            "version": "0.14.5",
            "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
            "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
            "dev": true
        },
        "type-fest": {
            "version": "0.11.0",
            "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.11.0.tgz",
            "integrity": "sha512-OdjXJxnCN1AvyLSzeKIgXTXxV+99ZuXl3Hpo9XpJAv9MBcHrrJOQ5kV7ypXOuQie+AmWG25hLbiKdwYTifzcfQ==",
            "dev": true
        },
        "type-is": {
            "version": "1.6.18",
            "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
            "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
            "dev": true,
            "requires": {
                "media-typer": "0.3.0",
                "mime-types": "~2.1.24"
            }
        },
        "typedarray": {
            "version": "0.0.6",
            "resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
            "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c=",
            "dev": true
        },
        "typescript": {
            "version": "3.9.3",
            "resolved": "https://registry.npmjs.org/typescript/-/typescript-3.9.3.tgz",
            "integrity": "sha512-D/wqnB2xzNFIcoBG9FG8cXRDjiqSTbG2wd8DMZeQyJlP1vfTkIxH4GKveWaEBYySKIg+USu+E+EDIR47SqnaMQ==",
            "dev": true
        },
        "uglify-js": {
            "version": "3.4.10",
            "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.4.10.tgz",
            "integrity": "sha512-Y2VsbPVs0FIshJztycsO2SfPk7/KAF/T72qzv9u5EpQ4kB2hQoHlhNQTsNyy6ul7lQtqJN/AoWeS23OzEiEFxw==",
            "dev": true,
            "requires": {
                "commander": "~2.19.0",
                "source-map": "~0.6.1"
            },
            "dependencies": {
                "commander": {
                    "version": "2.19.0",
                    "resolved": "https://registry.npmjs.org/commander/-/commander-2.19.0.tgz",
                    "integrity": "sha512-6tvAOO+D6OENvRAh524Dh9jcfKTYDQAqvqezbCW82xj5X0pSrcpxtvRKHLG0yBY6SD7PSDrJaj+0AiOcKVd1Xg==",
                    "dev": true
                }
            }
        },
        "union-value": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/union-value/-/union-value-1.0.1.tgz",
            "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
            "dev": true,
            "requires": {
                "arr-union": "^3.1.0",
                "get-value": "^2.0.6",
                "is-extendable": "^0.1.1",
                "set-value": "^2.0.1"
            }
        },
        "uniq": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/uniq/-/uniq-1.0.1.tgz",
            "integrity": "sha1-sxxa6CVIRKOoKBVBzisEuGWnNP8=",
            "dev": true
        },
        "unique-filename": {
            "version": "1.1.1",
            "resolved": "https://registry.npmjs.org/unique-filename/-/unique-filename-1.1.1.tgz",
            "integrity": "sha512-Vmp0jIp2ln35UTXuryvjzkjGdRyf9b2lTXuSYUiPmzRcl3FDtYqAwOnTJkAngD9SWhnoJzDbTKwaOrZ+STtxNQ==",
            "dev": true,
            "requires": {
                "unique-slug": "^2.0.0"
            }
        },
        "unique-slug": {
            "version": "2.0.2",
            "resolved": "https://registry.npmjs.org/unique-slug/-/unique-slug-2.0.2.tgz",
            "integrity": "sha512-zoWr9ObaxALD3DOPfjPSqxt4fnZiWblxHIgeWqW8x7UqDzEtHEQLzji2cuJYQFCU6KmoJikOYAZlrTHHebjx2w==",
            "dev": true,
            "requires": {
                "imurmurhash": "^0.1.4"
            }
        },
        "universalify": {
            "version": "0.1.2",
            "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
            "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",
            "dev": true
        },
        "unpipe": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
            "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw=",
            "dev": true
        },
        "unset-value": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/unset-value/-/unset-value-1.0.0.tgz",
            "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
            "dev": true,
            "requires": {
                "has-value": "^0.3.1",
                "isobject": "^3.0.0"
            },
            "dependencies": {
                "has-value": {
                    "version": "0.3.1",
                    "resolved": "https://registry.npmjs.org/has-value/-/has-value-0.3.1.tgz",
                    "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
                    "dev": true,
                    "requires": {
                        "get-value": "^2.0.3",
                        "has-values": "^0.1.4",
                        "isobject": "^2.0.0"
                    },
                    "dependencies": {
                        "isobject": {
                            "version": "2.1.0",
                            "resolved": "https://registry.npmjs.org/isobject/-/isobject-2.1.0.tgz",
                            "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
                            "dev": true,
                            "requires": {
                                "isarray": "1.0.0"
                            }
                        }
                    }
                },
                "has-values": {
                    "version": "0.1.4",
                    "resolved": "https://registry.npmjs.org/has-values/-/has-values-0.1.4.tgz",
                    "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",
                    "dev": true
                }
            }
        },
        "upath": {
            "version": "1.2.0",
            "resolved": "https://registry.npmjs.org/upath/-/upath-1.2.0.tgz",
            "integrity": "sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg==",
            "dev": true
        },
        "upper-case": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/upper-case/-/upper-case-1.1.3.tgz",
            "integrity": "sha1-9rRQHC7EzdJrp4vnIilh3ndiFZg=",
            "dev": true
        },
        "uri-js": {
            "version": "4.2.2",
            "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.2.2.tgz",
            "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
            "dev": true,
            "requires": {
                "punycode": "^2.1.0"
            }
        },
        "urix": {
            "version": "0.1.0",
            "resolved": "https://registry.npmjs.org/urix/-/urix-0.1.0.tgz",
            "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",
            "dev": true
        },
        "url": {
            "version": "0.11.0",
            "resolved": "https://registry.npmjs.org/url/-/url-0.11.0.tgz",
            "integrity": "sha1-ODjpfPxgUh63PFJajlW/3Z4uKPE=",
            "dev": true,
            "requires": {
                "punycode": "1.3.2",
                "querystring": "0.2.0"
            },
            "dependencies": {
                "punycode": {
                    "version": "1.3.2",
                    "resolved": "https://registry.npmjs.org/punycode/-/punycode-1.3.2.tgz",
                    "integrity": "sha1-llOgNvt8HuQjQvIyXM7v6jkmxI0=",
                    "dev": true
                }
            }
        },
        "url-parse": {
            "version": "1.4.7",
            "resolved": "https://registry.npmjs.org/url-parse/-/url-parse-1.4.7.tgz",
            "integrity": "sha512-d3uaVyzDB9tQoSXFvuSUNFibTd9zxd2bkVrDRvF5TmvWWQwqE4lgYJ5m+x1DbecWkw+LK4RNl2CU1hHuOKPVlg==",
            "dev": true,
            "requires": {
                "querystringify": "^2.1.1",
                "requires-port": "^1.0.0"
            }
        },
        "use": {
            "version": "3.1.1",
            "resolved": "https://registry.npmjs.org/use/-/use-3.1.1.tgz",
            "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ==",
            "dev": true
        },
        "util": {
            "version": "0.11.1",
            "resolved": "https://registry.npmjs.org/util/-/util-0.11.1.tgz",
            "integrity": "sha512-HShAsny+zS2TZfaXxD9tYj4HQGlBezXZMZuM/S5PKLLoZkShZiGk9o5CzukI1LVHZvjdvZ2Sj1aW/Ndn2NB/HQ==",
            "dev": true,
            "requires": {
                "inherits": "2.0.3"
            },
            "dependencies": {
                "inherits": {
                    "version": "2.0.3",
                    "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
                    "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
                    "dev": true
                }
            }
        },
        "util-deprecate": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
            "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
            "dev": true
        },
        "util.promisify": {
            "version": "1.0.0",
            "resolved": "https://registry.npmjs.org/util.promisify/-/util.promisify-1.0.0.tgz",
            "integrity": "sha512-i+6qA2MPhvoKLuxnJNpXAGhg7HphQOSUq2LKMZD0m15EiskXUkMvKdF4Uui0WYeCUGea+o2cw/ZuwehtfsrNkA==",
            "dev": true,
            "requires": {
                "define-properties": "^1.1.2",
                "object.getownpropertydescriptors": "^2.0.3"
            }
        },
        "utila": {
            "version": "0.4.0",
            "resolved": "https://registry.npmjs.org/utila/-/utila-0.4.0.tgz",
            "integrity": "sha1-ihagXURWV6Oupe7MWxKk+lN5dyw=",
            "dev": true
        },
        "utils-merge": {
            "version": "1.0.1",
            "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
            "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM=",
            "dev": true
        },
        "uuid": {
            "version": "3.4.0",
            "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
            "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==",
            "dev": true
        },
        "validate-npm-package-license": {
            "version": "3.0.4",
            "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
            "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
            "dev": true,
            "requires": {
                "spdx-correct": "^3.0.0",
                "spdx-expression-parse": "^3.0.0"
            }
        },
        "vary": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
            "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw=",
            "dev": true
        },
        "verror": {
            "version": "1.10.0",
            "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
            "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
            "dev": true,
            "requires": {
                "assert-plus": "^1.0.0",
                "core-util-is": "1.0.2",
                "extsprintf": "^1.2.0"
            }
        },
        "vm-browserify": {
            "version": "1.1.2",
            "resolved": "https://registry.npmjs.org/vm-browserify/-/vm-browserify-1.1.2.tgz",
            "integrity": "sha512-2ham8XPWTONajOR0ohOKOHXkm3+gaBmGut3SRuu75xLd/RRaY6vqgh8NBYYk7+RW3u5AtzPQZG8F10LHkl0lAQ==",
            "dev": true
        },
        "watchpack": {
            "version": "1.7.4",
            "resolved": "https://registry.npmjs.org/watchpack/-/watchpack-1.7.4.tgz",
            "integrity": "sha512-aWAgTW4MoSJzZPAicljkO1hsi1oKj/RRq/OJQh2PKI2UKL04c2Bs+MBOB+BBABHTXJpf9mCwHN7ANCvYsvY2sg==",
            "dev": true,
            "requires": {
                "chokidar": "^3.4.1",
                "graceful-fs": "^4.1.2",
                "neo-async": "^2.5.0",
                "watchpack-chokidar2": "^2.0.0"
            },
            "dependencies": {
                "anymatch": {
                    "version": "3.1.1",
                    "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.1.tgz",
                    "integrity": "sha512-mM8522psRCqzV+6LhomX5wgp25YVibjh8Wj23I5RPkPppSVSjyKD2A2mBJmWGa+KN7f2D6LNh9jkBCeyLktzjg==",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "normalize-path": "^3.0.0",
                        "picomatch": "^2.0.4"
                    }
                },
                "binary-extensions": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.1.0.tgz",
                    "integrity": "sha512-1Yj8h9Q+QDF5FzhMs/c9+6UntbD5MkRfRwac8DoEm9ZfUBZ7tZ55YcGVAzEe4bXsdQHEk+s9S5wsOKVdZrw0tQ==",
                    "dev": true,
                    "optional": true
                },
                "braces": {
                    "version": "3.0.2",
                    "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
                    "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "fill-range": "^7.0.1"
                    }
                },
                "chokidar": {
                    "version": "3.4.2",
                    "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.4.2.tgz",
                    "integrity": "sha512-IZHaDeBeI+sZJRX7lGcXsdzgvZqKv6sECqsbErJA4mHWfpRrD8B97kSFN4cQz6nGBGiuFia1MKR4d6c1o8Cv7A==",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "anymatch": "~3.1.1",
                        "braces": "~3.0.2",
                        "fsevents": "~2.1.2",
                        "glob-parent": "~5.1.0",
                        "is-binary-path": "~2.1.0",
                        "is-glob": "~4.0.1",
                        "normalize-path": "~3.0.0",
                        "readdirp": "~3.4.0"
                    }
                },
                "fill-range": {
                    "version": "7.0.1",
                    "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
                    "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "to-regex-range": "^5.0.1"
                    }
                },
                "fsevents": {
                    "version": "2.1.3",
                    "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.1.3.tgz",
                    "integrity": "sha512-Auw9a4AxqWpa9GUfj370BMPzzyncfBABW8Mab7BGWBYDj4Isgq+cDKtx0i6u9jcX9pQDnswsaaOTgTmA5pEjuQ==",
                    "dev": true,
                    "optional": true
                },
                "glob-parent": {
                    "version": "5.1.1",
                    "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.1.tgz",
                    "integrity": "sha512-FnI+VGOpnlGHWZxthPGR+QhR78fuiK0sNLkHQv+bL9fQi57lNNdquIbna/WrfROrolq8GK5Ek6BiMwqL/voRYQ==",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "is-glob": "^4.0.1"
                    }
                },
                "is-binary-path": {
                    "version": "2.1.0",
                    "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
                    "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "binary-extensions": "^2.0.0"
                    }
                },
                "is-number": {
                    "version": "7.0.0",
                    "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
                    "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
                    "dev": true,
                    "optional": true
                },
                "readdirp": {
                    "version": "3.4.0",
                    "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.4.0.tgz",
                    "integrity": "sha512-0xe001vZBnJEK+uKcj8qOhyAKPzIT+gStxWr3LCB0DwcXR5NZJ3IaC+yGnHCYzB/S7ov3m3EEbZI2zeNvX+hGQ==",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "picomatch": "^2.2.1"
                    }
                },
                "to-regex-range": {
                    "version": "5.0.1",
                    "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
                    "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "is-number": "^7.0.0"
                    }
                }
            }
        },
        "watchpack-chokidar2": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/watchpack-chokidar2/-/watchpack-chokidar2-2.0.0.tgz",
            "integrity": "sha512-9TyfOyN/zLUbA288wZ8IsMZ+6cbzvsNyEzSBp6e/zkifi6xxbl8SmQ/CxQq32k8NNqrdVEVUVSEf56L4rQ/ZxA==",
            "dev": true,
            "optional": true,
            "requires": {
                "chokidar": "^2.1.8"
            },
            "dependencies": {
                "anymatch": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
                    "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "micromatch": "^3.1.4",
                        "normalize-path": "^2.1.1"
                    },
                    "dependencies": {
                        "normalize-path": {
                            "version": "2.1.1",
                            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
                            "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
                            "dev": true,
                            "optional": true,
                            "requires": {
                                "remove-trailing-separator": "^1.0.1"
                            }
                        }
                    }
                },
                "chokidar": {
                    "version": "2.1.8",
                    "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-2.1.8.tgz",
                    "integrity": "sha512-ZmZUazfOzf0Nve7duiCKD23PFSCs4JPoYyccjUFF3aQkQadqBhfzhjkwBH2mNOG9cTBwhamM37EIsIkZw3nRgg==",
                    "dev": true,
                    "optional": true,
                    "requires": {
                        "anymatch": "^2.0.0",
                        "async-each": "^1.0.1",
                        "braces": "^2.3.2",
                        "fsevents": "^1.2.7",
                        "glob-parent": "^3.1.0",
                        "inherits": "^2.0.3",
                        "is-binary-path": "^1.0.0",
                        "is-glob": "^4.0.0",
                        "normalize-path": "^3.0.0",
                        "path-is-absolute": "^1.0.0",
                        "readdirp": "^2.2.1",
                        "upath": "^1.1.1"
                    }
                }
            }
        },
        "wbuf": {
            "version": "1.7.3",
            "resolved": "https://registry.npmjs.org/wbuf/-/wbuf-1.7.3.tgz",
            "integrity": "sha512-O84QOnr0icsbFGLS0O3bI5FswxzRr8/gHwWkDlQFskhSPryQXvrTMxjxGP4+iWYoauLoBvfDpkrOauZ+0iZpDA==",
            "dev": true,
            "requires": {
                "minimalistic-assert": "^1.0.0"
            }
        },
        "webpack": {
            "version": "4.44.1",
            "resolved": "https://registry.npmjs.org/webpack/-/webpack-4.44.1.tgz",
            "integrity": "sha512-4UOGAohv/VGUNQJstzEywwNxqX417FnjZgZJpJQegddzPmTvph37eBIRbRTfdySXzVtJXLJfbMN3mMYhM6GdmQ==",
            "dev": true,
            "requires": {
                "@webassemblyjs/ast": "1.9.0",
                "@webassemblyjs/helper-module-context": "1.9.0",
                "@webassemblyjs/wasm-edit": "1.9.0",
                "@webassemblyjs/wasm-parser": "1.9.0",
                "acorn": "^6.4.1",
                "ajv": "^6.10.2",
                "ajv-keywords": "^3.4.1",
                "chrome-trace-event": "^1.0.2",
                "enhanced-resolve": "^4.3.0",
                "eslint-scope": "^4.0.3",
                "json-parse-better-errors": "^1.0.2",
                "loader-runner": "^2.4.0",
                "loader-utils": "^1.2.3",
                "memory-fs": "^0.4.1",
                "micromatch": "^3.1.10",
                "mkdirp": "^0.5.3",
                "neo-async": "^2.6.1",
                "node-libs-browser": "^2.2.1",
                "schema-utils": "^1.0.0",
                "tapable": "^1.1.3",
                "terser-webpack-plugin": "^1.4.3",
                "watchpack": "^1.7.4",
                "webpack-sources": "^1.4.1"
            },
            "dependencies": {
                "enhanced-resolve": {
                    "version": "4.3.0",
                    "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-4.3.0.tgz",
                    "integrity": "sha512-3e87LvavsdxyoCfGusJnrZ5G8SLPOFeHSNpZI/ATL9a5leXo2k0w6MKnbqhdBad9qTobSfB20Ld7UmgoNbAZkQ==",
                    "dev": true,
                    "requires": {
                        "graceful-fs": "^4.1.2",
                        "memory-fs": "^0.5.0",
                        "tapable": "^1.0.0"
                    },
                    "dependencies": {
                        "memory-fs": {
                            "version": "0.5.0",
                            "resolved": "https://registry.npmjs.org/memory-fs/-/memory-fs-0.5.0.tgz",
                            "integrity": "sha512-jA0rdU5KoQMC0e6ppoNRtpp6vjFq6+NY7r8hywnC7V+1Xj/MtHwGIbB1QaK/dunyjWteJzmkpd7ooeWg10T7GA==",
                            "dev": true,
                            "requires": {
                                "errno": "^0.1.3",
                                "readable-stream": "^2.0.1"
                            }
                        }
                    }
                },
                "memory-fs": {
                    "version": "0.4.1",
                    "resolved": "https://registry.npmjs.org/memory-fs/-/memory-fs-0.4.1.tgz",
                    "integrity": "sha1-OpoguEYlI+RHz7x+i7gO1me/xVI=",
                    "dev": true,
                    "requires": {
                        "errno": "^0.1.3",
                        "readable-stream": "^2.0.1"
                    }
                }
            }
        },
        "webpack-dev-middleware": {
            "version": "3.7.2",
            "resolved": "https://registry.npmjs.org/webpack-dev-middleware/-/webpack-dev-middleware-3.7.2.tgz",
            "integrity": "sha512-1xC42LxbYoqLNAhV6YzTYacicgMZQTqRd27Sim9wn5hJrX3I5nxYy1SxSd4+gjUFsz1dQFj+yEe6zEVmSkeJjw==",
            "dev": true,
            "requires": {
                "memory-fs": "^0.4.1",
                "mime": "^2.4.4",
                "mkdirp": "^0.5.1",
                "range-parser": "^1.2.1",
                "webpack-log": "^2.0.0"
            },
            "dependencies": {
                "memory-fs": {
                    "version": "0.4.1",
                    "resolved": "https://registry.npmjs.org/memory-fs/-/memory-fs-0.4.1.tgz",
                    "integrity": "sha1-OpoguEYlI+RHz7x+i7gO1me/xVI=",
                    "dev": true,
                    "requires": {
                        "errno": "^0.1.3",
                        "readable-stream": "^2.0.1"
                    }
                },
                "mime": {
                    "version": "2.4.6",
                    "resolved": "https://registry.npmjs.org/mime/-/mime-2.4.6.tgz",
                    "integrity": "sha512-RZKhC3EmpBchfTGBVb8fb+RL2cWyw/32lshnsETttkBAyAUXSGHxbEJWWRXc751DrIxG1q04b8QwMbAwkRPpUA==",
                    "dev": true
                }
            }
        },
        "webpack-dev-server": {
            "version": "3.11.0",
            "resolved": "https://registry.npmjs.org/webpack-dev-server/-/webpack-dev-server-3.11.0.tgz",
            "integrity": "sha512-PUxZ+oSTxogFQgkTtFndEtJIPNmml7ExwufBZ9L2/Xyyd5PnOL5UreWe5ZT7IU25DSdykL9p1MLQzmLh2ljSeg==",
            "dev": true,
            "requires": {
                "ansi-html": "0.0.7",
                "bonjour": "^3.5.0",
                "chokidar": "^2.1.8",
                "compression": "^1.7.4",
                "connect-history-api-fallback": "^1.6.0",
                "debug": "^4.1.1",
                "del": "^4.1.1",
                "express": "^4.17.1",
                "html-entities": "^1.3.1",
                "http-proxy-middleware": "0.19.1",
                "import-local": "^2.0.0",
                "internal-ip": "^4.3.0",
                "ip": "^1.1.5",
                "is-absolute-url": "^3.0.3",
                "killable": "^1.0.1",
                "loglevel": "^1.6.8",
                "opn": "^5.5.0",
                "p-retry": "^3.0.1",
                "portfinder": "^1.0.26",
                "schema-utils": "^1.0.0",
                "selfsigned": "^1.10.7",
                "semver": "^6.3.0",
                "serve-index": "^1.9.1",
                "sockjs": "0.3.20",
                "sockjs-client": "1.4.0",
                "spdy": "^4.0.2",
                "strip-ansi": "^3.0.1",
                "supports-color": "^6.1.0",
                "url": "^0.11.0",
                "webpack-dev-middleware": "^3.7.2",
                "webpack-log": "^2.0.0",
                "ws": "^6.2.1",
                "yargs": "^13.3.2"
            },
            "dependencies": {
                "anymatch": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-2.0.0.tgz",
                    "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
                    "dev": true,
                    "requires": {
                        "micromatch": "^3.1.4",
                        "normalize-path": "^2.1.1"
                    },
                    "dependencies": {
                        "normalize-path": {
                            "version": "2.1.1",
                            "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-2.1.1.tgz",
                            "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
                            "dev": true,
                            "requires": {
                                "remove-trailing-separator": "^1.0.1"
                            }
                        }
                    }
                },
                "chokidar": {
                    "version": "2.1.8",
                    "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-2.1.8.tgz",
                    "integrity": "sha512-ZmZUazfOzf0Nve7duiCKD23PFSCs4JPoYyccjUFF3aQkQadqBhfzhjkwBH2mNOG9cTBwhamM37EIsIkZw3nRgg==",
                    "dev": true,
                    "requires": {
                        "anymatch": "^2.0.0",
                        "async-each": "^1.0.1",
                        "braces": "^2.3.2",
                        "fsevents": "^1.2.7",
                        "glob-parent": "^3.1.0",
                        "inherits": "^2.0.3",
                        "is-binary-path": "^1.0.0",
                        "is-glob": "^4.0.0",
                        "normalize-path": "^3.0.0",
                        "path-is-absolute": "^1.0.0",
                        "readdirp": "^2.2.1",
                        "upath": "^1.1.1"
                    }
                },
                "debug": {
                    "version": "4.1.1",
                    "resolved": "https://registry.npmjs.org/debug/-/debug-4.1.1.tgz",
                    "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
                    "dev": true,
                    "requires": {
                        "ms": "^2.1.1"
                    }
                },
                "http-proxy-middleware": {
                    "version": "0.19.1",
                    "resolved": "https://registry.npmjs.org/http-proxy-middleware/-/http-proxy-middleware-0.19.1.tgz",
                    "integrity": "sha512-yHYTgWMQO8VvwNS22eLLloAkvungsKdKTLO8AJlftYIKNfJr3GK3zK0ZCfzDDGUBttdGc8xFy1mCitvNKQtC3Q==",
                    "dev": true,
                    "requires": {
                        "http-proxy": "^1.17.0",
                        "is-glob": "^4.0.0",
                        "lodash": "^4.17.11",
                        "micromatch": "^3.1.10"
                    }
                },
                "ms": {
                    "version": "2.1.2",
                    "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
                    "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
                    "dev": true
                },
                "semver": {
                    "version": "6.3.0",
                    "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
                    "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
                    "dev": true
                }
            }
        },
        "webpack-log": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/webpack-log/-/webpack-log-2.0.0.tgz",
            "integrity": "sha512-cX8G2vR/85UYG59FgkoMamwHUIkSSlV3bBMRsbxVXVUk2j6NleCKjQ/WE9eYg9WY4w25O9w8wKP4rzNZFmUcUg==",
            "dev": true,
            "requires": {
                "ansi-colors": "^3.0.0",
                "uuid": "^3.3.2"
            }
        },
        "webpack-sources": {
            "version": "1.4.3",
            "resolved": "https://registry.npmjs.org/webpack-sources/-/webpack-sources-1.4.3.tgz",
            "integrity": "sha512-lgTS3Xhv1lCOKo7SA5TjKXMjpSM4sBjNV5+q2bqesbSPs5FjGmU6jjtBSkX9b4qW87vDIsCIlUPOEhbZrMdjeQ==",
            "dev": true,
            "requires": {
                "source-list-map": "^2.0.0",
                "source-map": "~0.6.1"
            }
        },
        "websocket-driver": {
            "version": "0.6.5",
            "resolved": "https://registry.npmjs.org/websocket-driver/-/websocket-driver-0.6.5.tgz",
            "integrity": "sha1-XLJVbOuF9Dc8bYI4qmkchFThOjY=",
            "dev": true,
            "requires": {
                "websocket-extensions": ">=0.1.1"
            }
        },
        "websocket-extensions": {
            "version": "0.1.4",
            "resolved": "https://registry.npmjs.org/websocket-extensions/-/websocket-extensions-0.1.4.tgz",
            "integrity": "sha512-OqedPIGOfsDlo31UNwYbCFMSaO9m9G/0faIHj5/dZFDMFqPTcx6UwqyOy3COEaEOg/9VsGIpdqn62W5KhoKSpg==",
            "dev": true
        },
        "which": {
            "version": "1.3.1",
            "resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
            "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
            "dev": true,
            "requires": {
                "isexe": "^2.0.0"
            }
        },
        "which-module": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
            "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho=",
            "dev": true
        },
        "wide-align": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.3.tgz",
            "integrity": "sha512-QGkOQc8XL6Bt5PwnsExKBPuMKBxnGxWWW3fU55Xt4feHozMUhdUMaBCk290qpm/wG5u/RSKzwdAC4i51YigihA==",
            "dev": true,
            "requires": {
                "string-width": "^1.0.2 || 2"
            }
        },
        "worker-farm": {
            "version": "1.7.0",
            "resolved": "https://registry.npmjs.org/worker-farm/-/worker-farm-1.7.0.tgz",
            "integrity": "sha512-rvw3QTZc8lAxyVrqcSGVm5yP/IJ2UcB3U0graE3LCFoZ0Yn2x4EoVSqJKdB/T5M+FLcRPjz4TDacRf3OCfNUzw==",
            "dev": true,
            "requires": {
                "errno": "~0.1.7"
            }
        },
        "wrap-ansi": {
            "version": "5.1.0",
            "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
            "integrity": "sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==",
            "dev": true,
            "requires": {
                "ansi-styles": "^3.2.0",
                "string-width": "^3.0.0",
                "strip-ansi": "^5.0.0"
            },
            "dependencies": {
                "ansi-regex": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
                    "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
                    "dev": true
                },
                "is-fullwidth-code-point": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
                    "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
                    "dev": true
                },
                "string-width": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
                    "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
                    "dev": true,
                    "requires": {
                        "emoji-regex": "^7.0.1",
                        "is-fullwidth-code-point": "^2.0.0",
                        "strip-ansi": "^5.1.0"
                    }
                },
                "strip-ansi": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
                    "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
                    "dev": true,
                    "requires": {
                        "ansi-regex": "^4.1.0"
                    }
                }
            }
        },
        "wrappy": {
            "version": "1.0.2",
            "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
            "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
            "dev": true
        },
        "ws": {
            "version": "6.2.1",
            "resolved": "https://registry.npmjs.org/ws/-/ws-6.2.1.tgz",
            "integrity": "sha512-GIyAXC2cB7LjvpgMt9EKS2ldqr0MTrORaleiOno6TweZ6r3TKtoFQWay/2PceJ3RuBasOHzXNn5Lrw1X0bEjqA==",
            "dev": true,
            "requires": {
                "async-limiter": "~1.0.0"
            }
        },
        "xtend": {
            "version": "4.0.2",
            "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
            "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
            "dev": true
        },
        "y18n": {
            "version": "4.0.0",
            "resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.0.tgz",
            "integrity": "sha512-r9S/ZyXu/Xu9q1tYlpsLIsa3EeLXXk0VwlxqTcFRfg9EhMW+17kbt9G0NrgCmhGb5vT2hyhJZLfDGx+7+5Uj/w==",
            "dev": true
        },
        "yallist": {
            "version": "2.1.2",
            "resolved": "https://registry.npmjs.org/yallist/-/yallist-2.1.2.tgz",
            "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI=",
            "dev": true
        },
        "yargs": {
            "version": "13.3.2",
            "resolved": "https://registry.npmjs.org/yargs/-/yargs-13.3.2.tgz",
            "integrity": "sha512-AX3Zw5iPruN5ie6xGRIDgqkT+ZhnRlZMLMHAs8tg7nRruy2Nb+i5o9bwghAogtM08q1dpr2LVoS8KSTMYpWXUw==",
            "dev": true,
            "requires": {
                "cliui": "^5.0.0",
                "find-up": "^3.0.0",
                "get-caller-file": "^2.0.1",
                "require-directory": "^2.1.1",
                "require-main-filename": "^2.0.0",
                "set-blocking": "^2.0.0",
                "string-width": "^3.0.0",
                "which-module": "^2.0.0",
                "y18n": "^4.0.0",
                "yargs-parser": "^13.1.2"
            },
            "dependencies": {
                "ansi-regex": {
                    "version": "4.1.0",
                    "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
                    "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
                    "dev": true
                },
                "find-up": {
                    "version": "3.0.0",
                    "resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
                    "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
                    "dev": true,
                    "requires": {
                        "locate-path": "^3.0.0"
                    }
                },
                "is-fullwidth-code-point": {
                    "version": "2.0.0",
                    "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
                    "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
                    "dev": true
                },
                "string-width": {
                    "version": "3.1.0",
                    "resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
                    "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
                    "dev": true,
                    "requires": {
                        "emoji-regex": "^7.0.1",
                        "is-fullwidth-code-point": "^2.0.0",
                        "strip-ansi": "^5.1.0"
                    }
                },
                "strip-ansi": {
                    "version": "5.2.0",
                    "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
                    "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
                    "dev": true,
                    "requires": {
                        "ansi-regex": "^4.1.0"
                    }
                }
            }
        },
        "yargs-parser": {
            "version": "13.1.2",
            "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-13.1.2.tgz",
            "integrity": "sha512-3lbsNRf/j+A4QuSZfDRA7HRSfWrzO0YjqTJd5kjAq37Zep1CEgaYmrH9Q3GwPiB9cHyd1Y1UwggGhJGoxipbzg==",
            "dev": true,
            "requires": {
                "camelcase": "^5.0.0",
                "decamelize": "^1.2.0"
            }
        },
        "yauzl": {
            "version": "2.10.0",
            "resolved": "https://registry.npmjs.org/yauzl/-/yauzl-2.10.0.tgz",
            "integrity": "sha1-x+sXyT4RLLEIb6bY5R+wZnt5pfk=",
            "dev": true,
            "requires": {
                "buffer-crc32": "~0.2.3",
                "fd-slicer": "~1.1.0"
            }
        }
    }
}
`;

export const TSCONFIG =
`{
    "compileOnSave": false,
    "compilerOptions": {
        "allowJs": true,
        "module": "esnext",
        "target": "es2015",
        "sourceMap": true,
        "baseUrl": "./",
        "outDir": "./dist/",
        "downlevelIteration": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "declaration": false,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "moduleResolution": "node",
        "typeRoots": [
            "node_modules/@types"
        ],
        "lib": [
            "es2017",
            "dom"
        ],
        "paths": {
            "src/*": ["./src/*"]
        }
    },
    "include": [
        "./src/**/*"
    ]
}`;

export const GITIGNORE =
`dist
build

.DS_Store

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage

# nyc test coverage
.nyc_output

# Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules
/node_modules/
jspm_packages

# TypeScript v1 declaration files
typings/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# next.js build output
.next
`;
