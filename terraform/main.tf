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

locals {
  domain_name          = "morrisoncole"
  alpha_domain_name    = "alpha.morrisoncole"
  alpha_uk_root_domain = "${local.alpha_domain_name}.co.uk"
  alpha_jp_root_domain = "${local.alpha_domain_name}.jp"
  uk_root_domain       = "${local.domain_name}.co.uk"
  us_root_domain       = "${local.domain_name}.com"
  jp_root_domain       = "${local.domain_name}.jp"
}
