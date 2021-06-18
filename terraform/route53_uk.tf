resource "aws_route53_zone" "morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  name          = local.uk_root_domain
  comment       = "Managed by Terraform"
  force_destroy = false
}
