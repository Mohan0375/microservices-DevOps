output "ec2_instance_id" {
  value = aws_instance.microservices.id
}

output "ec2_public_ip" {
  value = aws_instance.microservices.public_ip
}

output "security_group_id" {
  value = aws_security_group.microservices.id
}
output "iam_role_arn" {
  value = aws_iam_role.ec2_role.arn
}

output "user_service_ecr_url" {
  value = aws_ecr_repository.user_service.repository_url
}

output "product_service_ecr_url" {
  value = aws_ecr_repository.product_service.repository_url
}

output "order_service_ecr_url" {
  value = aws_ecr_repository.order_service.repository_url
}
