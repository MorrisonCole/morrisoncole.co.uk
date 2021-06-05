resource "aws_s3_bucket" "main" {
  provider = aws.us-west-2

  bucket = "morrisoncole.co.uk"
  acl    = "public-read"

  website {
    error_document = "404.html"
    index_document = "index.html"
  }
}
