resource "aws_acm_certificate" "morrisoncole_co_uk" {
  provider = aws.us-east-1

  domain_name               = "*.${local.uk_root_domain}"
  subject_alternative_names = [local.uk_root_domain]
  validation_method         = "DNS"

  key_algorithm = "EC_prime256v1"

  options {
    certificate_transparency_logging_preference = "ENABLED"
  }
}

resource "aws_acm_certificate" "morrisoncole_com" {
  provider = aws.us-east-1

  domain_name = "*.${local.us_root_domain}"
  subject_alternative_names = [
    local.us_root_domain
  ]
  validation_method = "DNS"

  options {
    certificate_transparency_logging_preference = "ENABLED"
  }

  lifecycle {
    create_before_destroy = true
  }
}
