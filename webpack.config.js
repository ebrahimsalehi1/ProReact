module.exports={
    watch: true,
    // entry: [
    //     './source/App.js'
    // ],
    // output: {
    //     path: __dirname,
    //     filename: "bundle.js"
    // },
    module: {
        rules: [{
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,    
            use: {
                loader: "babel-loader"
            }         
        }]
    }
}