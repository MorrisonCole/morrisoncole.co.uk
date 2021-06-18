resource "aws_s3_bucket" "main" {
  provider = aws.us-west-2

  bucket = local.uk_root_domain
  acl    = "public-read"

  website {
    error_document = "404.html"
    index_document = "index.html"
  }
}

resource "aws_s3_bucket" "www_morrisoncole_co_uk" {
  provider = aws.us-west-2

  bucket = "www.${local.uk_root_domain}"
  acl    = "private"

  website {
    redirect_all_requests_to = "https://${local.uk_root_domain}"
  }
}

resource "aws_s3_bucket" "morrisoncole_com" {
  provider = aws.ap-northeast-1

  bucket        = local.us_root_domain
  acl           = "private"
  force_destroy = false

  website {
    redirect_all_requests_to = "https://${local.uk_root_domain}"
  }
}

resource "aws_s3_bucket" "www_morrisoncole_com" {
  provider = aws.ap-northeast-1

  bucket        = "www.${local.us_root_domain}"
  acl           = "private"
  force_destroy = false

  website {
    redirect_all_requests_to = "https://${local.uk_root_domain}"
  }
}
