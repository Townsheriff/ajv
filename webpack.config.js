const path = require('path');

module.exports = {
    entry: {
        ajv: './lib/ajv.ts',
        jtd: './lib/jtd.ts',
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: (pathData) => pathData.chunk.name === 'ajv' ? 'index.js' : 'jtd/index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd",
    },
};