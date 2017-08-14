const path = require('path');
const { JarLanguageClient } = require('pivotal-atom-languageclient-commons');
const PROPERTIES = require('../properties.json');

class ConcourseCiYamlClient extends JarLanguageClient {

    constructor() {
        //noinspection JSAnnotator
        super(
            PROPERTIES.jarUrl,
            path.join(__dirname, '..', 'server'),
            'concourse-language-server.jar'
        );
    }

    getGrammarScopes() {
        return ['source.concourse-pipeline-yaml','source.concourse-task-yaml'];
    }

    getLanguageName() {
        return 'Concourse-Pipeline-YAML';
    }

    getServerName() {
        return 'Concourse-Pipeline-YAML';
    }

    launchVmArgs(version) {
        return [
            '-Dorg.slf4j.simpleLogger.logFile=concourse-ci-yaml.log',
            '-Dorg.slf4j.simpleLogger.defaultLogLevel=debug',
        ];

    }

}

module.exports = new ConcourseCiYamlClient();
