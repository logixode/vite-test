import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';


// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  // eg. 'jquery'
  'vue',
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: 'Vue',
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      formats: ['umd'],
      // entry: {
      //   main: path.resolve(__dirname, 'src/lib/main.js'),
      //   main2: path.resolve(__dirname, 'src/lib/main2.js')
      // },

      name: 'ss',
      entry: path.resolve(__dirname, 'src/lib/main.js'),

      fileName: (format, filename) => `${filename}.${format}.js`,
    },
    rollupOptions: {
      // input: {
      //   main: path.resolve(__dirname, 'src/lib/main.js'),
      //   main2: path.resolve(__dirname, 'src/lib/main2.js'),
      // },
      external,
      output: {
        // format: 'iife',
        inlineDynamicImports: false,
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue()
  ],
});