pipeline {
    agent any
    
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    def dockerImage = docker.build('my-node-app', '.')
                }
            }
        }
        stage('Run New Container') {
            steps {
                script {
                    def containerName = "node-app-${env.BUILD_ID}"
                    dockerImage = docker.image('my-node-app').run("-d --name $containerName -p 3000:3000")
                }
            }
        }
    }
    post {
        always {
            // Clean up - stop and remove the container
            script {
                dockerImage.stop()
                dockerImage.remove(force: true)
            }
        }
    }
}

