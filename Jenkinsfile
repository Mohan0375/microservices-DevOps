
pipeline {
    agent any

    environment {
        AWS_REGION = 'ap-south-1'
        ECR_REGISTRY = '820942898763.dkr.ecr.ap-south-1.amazonaws.com'
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out GitHub repository'
                checkout scm
            }
        }

        stage('AWS ECR Login') {
            steps {
                sh '''
                    aws ecr get-login-password --region $AWS_REGION |
                    docker login --username AWS --password-stdin $ECR_REGISTRY
                '''
            }
        }

        stage('Build User Service') {
            steps {
                sh '''
                    docker build -t $ECR_REGISTRY/user-service:$IMAGE_TAG ./user-service
                    docker tag $ECR_REGISTRY/user-service:$IMAGE_TAG $ECR_REGISTRY/user-service:latest
                '''
            }
        }

        stage('Build Product Service') {
            steps {
                sh '''
                    docker build -t $ECR_REGISTRY/product-service:$IMAGE_TAG ./product-service
                    docker tag $ECR_REGISTRY/product-service:$IMAGE_TAG $ECR_REGISTRY/product-service:latest
                '''
            }
        }

        stage('Build Order Service') {
            steps {
                sh '''
                    docker build -t $ECR_REGISTRY/order-service:$IMAGE_TAG ./order-service
                    docker tag $ECR_REGISTRY/order-service:$IMAGE_TAG $ECR_REGISTRY/order-service:latest
                '''
            }
        }

        stage('Push Images to ECR') {
            steps {
                sh '''
                    docker push $ECR_REGISTRY/user-service:$IMAGE_TAG
                    docker push $ECR_REGISTRY/user-service:latest

                    docker push $ECR_REGISTRY/product-service:$IMAGE_TAG
                    docker push $ECR_REGISTRY/product-service:latest

                    docker push $ECR_REGISTRY/order-service:$IMAGE_TAG
                    docker push $ECR_REGISTRY/order-service:latest
                '''
            }
        }
        
        stage('Deploy to EC2') {
            steps {
                sh '''
                    export IMAGE_TAG=$BUILD_NUMBER
                    docker compose pull
                    docker compose up -d --no-build --remove-orphans
                '''
            }
        }
    }
    post {
        success {
            echo 'All three images successfully pushed to Amazon ECR!'
        }
        failure {
            echo 'Pipeline failed. Check the console output.'
        }
        always {
            sh 'docker logout $ECR_REGISTRY || true'
        }
    }
}
