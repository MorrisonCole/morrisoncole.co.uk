terraform {
  backend "s3" {
    bucket = "morrisoncole.co.uk-terraform-backend"
    key    = "state"
    region = "us-west-2"
  }
}

provider "aws" {
  alias  = "us-west-2"
  region = "us-west-2"

  default_tags {
    tags = {
      Environment = "Production"
    }
  }
}

provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"

  default_tags {
    tags = {
      Environment = "Production"
    }
  }
}

provider "aws" {
  alias  = "ap-northeast-1"
  region = "ap-northeast-1"

  default_tags {
    tags = {
      Environment = "Production"
    }
  }
}
