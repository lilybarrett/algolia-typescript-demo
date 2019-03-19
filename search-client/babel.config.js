module.exports = (api) => {
    api.cache(true);

    const presets = [
        "@babel/env",
        "@babel/react",
        "@emotion/babel-preset-css-prop",
    ];

    const plugins = [
        "emotion",
    ];

    return {
        presets,
        plugins,
    };
}
