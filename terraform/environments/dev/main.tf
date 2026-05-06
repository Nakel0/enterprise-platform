
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}


module "vpc" {
  source = "../../modules/vpc"

  region = "us-east-1"
  name   = "devsecops-vpc-dev"
  cidr   = "10.0.0.0/16"

  azs = ["us-east-1a", "us-east-1b"]

  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]

  enable_nat_gateway = true   # 💡 cost optimization for dev

  tags = {
    Environment = "dev"
    Project     = "DevSecOps-Platform"
  }
}

module "eks" {
  source = "../../modules/eks"

  region          = "us-east-1"
  cluster_name    = "devsecops-eks-dev"

  vpc_id          = module.vpc.vpc_id
  private_subnets = module.vpc.private_subnets

  tags = {
    Environment = "dev"
    Project     = "DevSecOps-Platform"
  }
}