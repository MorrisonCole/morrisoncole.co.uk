resource "aws_s3_bucket" "morrisoncole_co_uk" {
  provider = aws.ap-northeast-1
  bucket   = local.uk_root_domain
}

resource "aws_s3_bucket_acl" "morrisoncole_co_uk" {
  bucket = aws_s3_bucket.morrisoncole_co_uk.id
  acl    = "public-read"
}

resource "aws_s3_bucket_website_configuration" "morrisoncole_co_uk" {
  bucket = aws_s3_bucket.morrisoncole_co_uk.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

resource "aws_s3_bucket" "www_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1
  bucket   = "www.${local.uk_root_domain}"
}

resource "aws_s3_bucket_acl" "www_morrisoncole_co_uk" {
  bucket = aws_s3_bucket.www_morrisoncole_co_uk.id
  acl    = "private"
}

resource "aws_s3_bucket_website_configuration" "www_morrisoncole_co_uk" {
  bucket = aws_s3_bucket.www_morrisoncole_co_uk.id

  redirect_all_requests_to {
    host_name = local.uk_root_domain
    protocol  = "https"
  }
}

resource "aws_s3_bucket" "morrisoncole_com" {
  provider = aws.ap-northeast-1
  bucket   = local.us_root_domain
}

resource "aws_s3_bucket_acl" "morrisoncole_com" {
  bucket = aws_s3_bucket.morrisoncole_com.id
  acl    = "private"
}

resource "aws_s3_bucket_website_configuration" "morrisoncole_com" {
  bucket = aws_s3_bucket.morrisoncole_com.id

  redirect_all_requests_to {
    host_name = local.uk_root_domain
    protocol  = "https"
  }
}

resource "aws_s3_bucket" "www_morrisoncole_com" {
  provider = aws.ap-northeast-1
  bucket   = "www.${local.us_root_domain}"
}

resource "aws_s3_bucket_acl" "www_morrisoncole_com" {
  bucket = aws_s3_bucket.www_morrisoncole_com.id
  acl    = "private"
}

resource "aws_s3_bucket_website_configuration" "www_morrisoncole_com" {
  bucket = aws_s3_bucket.www_morrisoncole_com.id

  redirect_all_requests_to {
    host_name = local.uk_root_domain
    protocol  = "https"
  }
}
