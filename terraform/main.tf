terraform {
  backend "s3" {
    bucket  = "morrisoncole.co.uk-terraform-backend"
    key     = "state"
    region  = "us-west-2"
    profile = "morrisoncole"
  }
}

provider "aws" {
  region  = "us-west-2"
  profile = "morrisoncole"
}
