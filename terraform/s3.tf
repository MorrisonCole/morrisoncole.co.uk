resource "aws_s3_bucket" "main" {
  bucket = "morrisoncole.co.uk"
  acl    = "public-read"

  website {
    error_document = "404.html"
    index_document = "index.html"
  }
}
