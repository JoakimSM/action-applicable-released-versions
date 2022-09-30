const config = {
    name: 'example',
    title: 'Example',
    type: 'app',
    minDHIS2Version: '2.38',
    maxDHIS2Version: '2.40',
    coreApp: true,

    entryPoints: {
        app: './src/index',
    },
}

module.exports = config
