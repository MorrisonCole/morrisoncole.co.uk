resource "aws_route53_zone" "morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  name          = "morrisoncole.co.uk"
  comment       = "Managed by Terraform"
  force_destroy = false
}

resource "aws_route53_zone" "morrisoncole_com" {
  provider = aws.ap-northeast-1

  name          = "morrisoncole.com"
  comment       = "Managed by Terraform"
  force_destroy = false
}
