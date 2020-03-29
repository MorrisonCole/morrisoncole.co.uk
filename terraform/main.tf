terraform {
  backend "s3" {
    bucket  = "morrisoncole.co.uk-terraform-backend"
    key     = "state"
    region  = "us-west-2"
    profile = "morrisoncole"
  }

  required_providers {
    aws = "2.53.0"
  }
}

provider "aws" {
  region  = "us-west-2"
  profile = "morrisoncole"
}
