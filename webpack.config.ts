import path from 'path';
import webpack from 'webpack';

type BuildMode = 'development' | 'production';

interface EnvVariables {
    mode: BuildMode;
}

export default (env: EnvVariables) => {
    const config: webpack.Configuration = {
        mode: env.mode ?? "production",
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.js',
            libraryTarget: "umd",
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ]
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
    }

    return config;
}
