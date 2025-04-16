import{defineConfig} from 'vite';

export default defineConfig({
    build:{
        outDir:'dist',
        rollupOptions:{
            inout:'./index.html',
        },
    },
    server:{
        fs:{
            strict:true,
        },
    },

});