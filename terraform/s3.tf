resource "aws_s3_bucket" "main" {
  provider = aws.us-west-2

  bucket = "morrisoncole.co.uk"
  acl    = "public-read"

  website {
    error_document = "404.html"
    index_document = "index.html"
  }
}

resource "aws_s3_bucket" "www_morrisoncole_co_uk" {
  provider = aws.us-west-2

  bucket = "www.morrisoncole.co.uk"
  acl    = "private"

  website {
    redirect_all_requests_to = "https://morrisoncole.co.uk"
  }
}

resource "aws_s3_bucket" "morrisoncole_com" {
  provider = aws.ap-northeast-1

  bucket        = "morrisoncole.com"
  acl           = "private"
  force_destroy = false

  website {
    redirect_all_requests_to = "https://morrisoncole.co.uk"
  }
}

resource "aws_s3_bucket" "www_morrisoncole_com" {
  provider = aws.ap-northeast-1

  bucket        = "www.morrisoncole.com"
  acl           = "private"
  force_destroy = false

  website {
    redirect_all_requests_to = "https://morrisoncole.co.uk"
  }
}
