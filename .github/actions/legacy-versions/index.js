const path = require('path')
const core = require('@actions/core')

try {
    const latestVersion = core.getInput('latest-version')
    const configPath = path.join(
        process.env.GITHUB_WORKSPACE,
        core.getInput('config-dir'),
        'd2.config.js'
    )
    const { minDHIS2Version } = require(configPath)

    const majorVersion = /^\d+/.exec(latestVersion)[0]

    const minorVersionRegex = /[.](\d+)/
    const minMinorVersion = Number(minorVersionRegex.exec(minDHIS2Version)[1])
    const devMinorVersion = Number(minorVersionRegex.exec(latestVersion)[1])

    const versions = []
    for (let index = minMinorVersion; index < devMinorVersion; index++) {
        versions.push(`${majorVersion}.${index}`)
    }
    core.info(`output-versions: ${JSON.stringify(versions)}`)
    core.setOutput('versions', versions)
} catch (error) {
    core.setFailed(error.message)
}
