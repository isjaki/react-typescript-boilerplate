const presets = [
    [
        '@babel/env',
        {
            targets: {
                ie: '11',
                firefox: '28',
                chrome: '25',
                safari: '7',
            },
        },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
];

module.exports = { presets };