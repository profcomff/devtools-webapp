module.exports = {
    runtimeCompiler: true,
    configureWebpack: {
        output: {
            libraryTarget: 'system',
        },
        devServer: {
            hot: false,
            liveReload: false,
        },
        externals: ['single-spa', 'vue', 'vue-router'],
    },
};
