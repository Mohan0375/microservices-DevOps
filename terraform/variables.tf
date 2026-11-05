
variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}

variable "ec2_instance_id" {
  description = "Existing EC2 instance ID"
  type        = string
  default     = "i-04109a3cafaf70b70"
}

variable "security_group_id" {
  description = "Existing EC2 security group ID"
  type        = string
  default     = "sg-05fda7f4a0d5ef20f"
}

variable "iam_role_name" {
  description = "Existing EC2 IAM role and instance profile"
  type        = string
  default     = "EC2-ECR-Access-Role"
}

