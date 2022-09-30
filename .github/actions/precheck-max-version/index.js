const path = require('path')
const core = require('@actions/core')

try {
    const configPath = path.join(
        process.env.GITHUB_WORKSPACE,
        core.getInput('config-dir'),
        'd2.config.js'
    )
    const { maxDHIS2Version } = require(configPath)
    core.info(`output-max-version: ${maxDHIS2Version}`)
    core.setOutput('max-version', maxDHIS2Version)
} catch (error) {
    core.setFailed(error.message)
}
