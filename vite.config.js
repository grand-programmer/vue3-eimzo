import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            'vue3-eimzo': path.resolve('vue3-eimzo', __dirname, './node_modules/vue3-eimzo/dist/vue3-eimzo.umd.js')
        }
    },
    build: {
        lib: {
            // eslint-disable-next-line no-undef
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'vue3-eimzo',
            fileName: (format) => `vue3-eimzo.${format}.js`,
        },
        rollupOptions: {
            // Make sure to externalize dependencies that shouldn't be bundled into your library
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build for externalized dependencies
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
