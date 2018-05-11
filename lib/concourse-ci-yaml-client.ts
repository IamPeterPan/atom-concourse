import * as path from 'path';
import { JavaProcessLanguageClient } from '@pivotal-tools/atom-languageclient-commons';
import {JVM} from '@pivotal-tools/jvm-launch-utils';

export class ConcourseCiYamlClient extends JavaProcessLanguageClient {

    constructor() {
        //noinspection JSAnnotator
        super(
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

    activate() {
        // replace the example argument 'linter-ruby' with the name of this Atom package
        require('atom-package-deps')
            .install('concourse-pipeline-yaml')
            .then(() => console.debug('All dependencies installed, good to go'));
        super.activate();
    }

    launchVmArgs(jvm: JVM) {
        return Promise.resolve([
            '-Dorg.slf4j.simpleLogger.logFile=concourse-ci-yaml.log'
        ]);

    }

}