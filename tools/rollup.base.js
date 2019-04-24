import config from '../picafile';
import pkg from '../package.json';
import clean from 'rollup-plugin-clean';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

const configMap = {
    es: {
        input: 'src/main.js',
        output: {
            name: 'index.esm.js',
            file: pkg.module,
            format: 'es'
        },
        plugins: [
            clean(),
            babel({
                "runtimeHelpers": true,
                "plugins": [
                    "@babel/plugin-transform-runtime"
                  ],
                "presets": [
                    [
                        "@babel/env",
                        {
                          "targets": "> 0.25%, not dead"
                        },
                    ],
                ]
            }),
            resolve(),
            commonjs(),
        ]
    },
    umd: {
        input: 'src/main.js',
        output: {
            name: 'index.umd.js',
            file: pkg.browser,
            format: 'umd'
        },
        plugins: [
            clean(),
            babel({
                "runtimeHelpers": true,
                "plugins": [
                    "@babel/plugin-transform-runtime"
                  ],
                "presets": [
                    [
                        "@babel/env",
                        {
                          "targets": "> 0.25%, not dead"
                        },
                    ],
                ]
            }),
            resolve(), // so Rollup can find `ms`
            commonjs(), // so Rollup can convert `ms` to an ES module
        ]
    },
    cjs: {
        input: 'src/main.js',
        output: {
            name: 'index.cjs.js',
            file: pkg.main,
            format: 'cjs'
        },
        plugins: [
            clean(),
            // babel(),
            resolve(), // so Rollup can find `ms`
            commonjs(), // so Rollup can convert `ms` to an ES module
        ]
    },
};

let configArray = [];

config.format.forEach((format) => {
    if (configMap.hasOwnProperty(format)) {
        configArray.push(configMap[format]);
    }
});

export default configArray;
