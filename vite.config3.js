import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // lib: {
    //   formats: ['es', 'iife'],
    //   entry: path.resolve(__dirname, 'src/lib/main.js'),
    //   name: `mylib`,
    //   fileName: (format, filename) => `${filename}.${format}.js`,
    // },
    manifest: true,
    minify: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/lib/main.js'),
        main2: path.resolve(__dirname, 'src/lib/main2.js'),
      },
      external: ['vue'],
      output: 
      // [
        {
          dir: path.resolve(__dirname, 'dist'),
          format: 'iife',
          name: 'main',
          entryFileNames: "[name].[format].js",          
          globals: {
            vue: 'Vue',
          },
          inlineDynamicImports: false,
        },
      //   {
      //     dir: path.resolve(__dirname, 'dist'),
      //     format: 'cjs',
      //     name: 'main2',entryFileNames: "[name].[format].js",
      //     globals: {
      //       vue: 'Vue',
      //     },
      //     inlineDynamicImports: false,
      //   }
      // ],
      // {
        inlineDynamicImports: false,
      //   // Provide global variables to use in the UMD build
      //   // Add external deps here
      //   globals: {
      //     vue: 'Vue',
      //   },
      // },
      plugins: [
        commonjs(),
      ]
    },
  },
  plugins: [vue()],
});