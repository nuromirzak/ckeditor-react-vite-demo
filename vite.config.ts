import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],
    optimizeDeps: {
        include: ['ckeditor5-custom-build'],
    },
    build: {
        commonjsOptions: {
            include: /node_modules|custom-ckeditor5/
        }
    }
});
