module.exports = {
    // entry: "./src/tictac/index.tsx",
    //entry: "./src/spa/index.tsx",
    entry: "./src/redux/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ],
        loaders: [{
            test: /\.js?$/, // 拡張子がjsで
            exclude: /node_modules/, // node_modulesフォルダ配下でなければ
            loader: 'babel-loader', // babel-loaderを使って変換する
            query: {
                plugins: ["transform-react-jsx","babel-plugin-transform-decorators-legacy"] // babelのtransform-react-jsxプラグインを使ってjsxを変換
            }
        }]
    },

};