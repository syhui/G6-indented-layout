import { defineConfig } from "vite";

export default defineConfig(({command,mode}): any=>{
    return {
        build: {
            rollupOptions:{
                input: 'index.ts',
                output : {
                    dir: 'dist',
                    entryFileNames: '[name].js'
                },
            },
        },
    };
})
