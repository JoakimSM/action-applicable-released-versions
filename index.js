const core = require('@actions/core')

try {
    const devVersion = Number(core.getInput('dev-version'))
    const { minDHIS2Version } = require('./d2.config.js')
    const minMinorVersion = Number(/[.](\d+)/.exec(minDHIS2Version)[1])

    const versions = []
    for (let index = minMinorVersion; index < devVersion; index++) {
        versions.push(index)
    }
    core.info('output-versions: ' + JSON.stringify(versions))
    core.setOutput('versions', versions)
} catch (error) {
    core.setFailed(error.message)
}
