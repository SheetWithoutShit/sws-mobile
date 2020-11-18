module.exports = function(api) {
    api.cache(true)

    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    alias: {
                        "@assets": "./app/assets",
                        "@components": "./app/components",
                        "@navigation": "./app/navigation",
                        "@screens": "./app/screens",
                        "@utils": "./app/utils",
                        "@redux": "./app/redux",
                        "@api": "./app/api"
                    },
                },
            ],
        ],
    };
};
