pipeline {
    agent none
    environment {
        MODULE_NAME = "<%= name%>"
        BUILD_TRIGGER_EXCLUDES = "^.jenkins/"
    }
    options {
        disableResume()
    }
    stages {
        stage('Build') {
            agent { label 'build' }
            steps {
                script {
                    // only continue build if changes are relevant to this module.
                    // WARNING: it only checks the last commit!!!
                    def filesInThisCommitAsString = sh(script:"git diff --name-only HEAD~1..HEAD | grep -v '$BUILD_TRIGGER_EXCLUDES' || echo -n ''", returnStatus: false, returnStdout: true).trim()
                    def hasChangesInPath = (filesInThisCommitAsString.length() > 0)
                    echo "${filesInThisCommitAsString}"
                    if (!currentBuild.rawBuild.getCauses()[0].toString().contains('UserIdCause') && !hasChangesInPath){
                        currentBuild.rawBuild.delete()
                        error("No changes detected in the module path for ${MODULE_NAME} (${BUILD_TRIGGER_EXCLUDES})")
                    }
                }
                echo "Aborting all running jobs for ${MODULE_NAME}"
                script {
                    abortAllPreviousBuildInProgress(currentBuild)
                }
                echo "Building ..."
                sh "cd .pipeline && ./npmw ci && ./npmw run build -- --pr=${CHANGE_ID} --git.branch.name=${CHANGE_BRANCH} --git.branch.merge=${CHANGE_BRANCH} --git.branch.remote=${CHANGE_BRANCH} --git.url=${GIT_URL} --git.change.target=${CHANGE_TARGET}"
            }
        }
    }
}
