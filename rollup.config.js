import json from './package.json'
// fayzer: 50, kai: 37, ME: 29

// Externalize peer dependencies (so there won't be conflicting dependencies between package and user)
import externals from 'rollup-plugin-peer-deps-external'

// For using third party modules in node_modules
import nodejs from '@rollup/plugin-node-resolve'
// Convert CommonJS modules to ES6
import commonjs from '@rollup/plugin-commonjs'

// Minify generated ES Modules
import { terser } from 'rollup-plugin-terser'
// Delete build folder before making new one
import del from 'rollup-plugin-delete'

import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'

// Imports files as data-URIs or ES Modules
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: json.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: json.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    externals(),
    nodejs(),
    commonjs(),
    terser(),
    del({ targets: 'build/*' }),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss(),
    url(),
    svgr(),
  ],
  external: ['react', 'react-dom'],
}
