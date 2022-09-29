const core = require('@actions/core')

try {
    const a = process.env.GITHUB_WORKSPACE
    core.info('a', a)
    const { maxDHIS2Version } = require('./d2.config.js')
    core.setOutput('max-version', maxDHIS2Version || '')
} catch (error) {
    core.setFailed(error.message)
}
