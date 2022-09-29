const core = require('@actions/core')

try {
    const a = process.env
    core.info('a' + JSON.stringify(a))
    const b = core.getInput('workspace')
    core.info('b' + b)
    const { maxDHIS2Version } = require('./d2.config.js')
    core.setOutput('max-version', maxDHIS2Version || '')
} catch (error) {
    core.setFailed(error.message)
}
