const core = require('@actions/core')

try {
    const { maxDHIS2Version } = require('./d2.config.js')
    core.setOutput('max-version', maxDHIS2Version || "")
} catch (error) {
    core.setFailed(error.message)
}