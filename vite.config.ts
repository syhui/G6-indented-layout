import { defineConfig } from "vite";

export default defineConfig(({command,mode}): any=>{
    return {
        build: {
            lib:{
                entry:'index.ts',
                name: 'indent-layout',
            },
        },
    };
})
