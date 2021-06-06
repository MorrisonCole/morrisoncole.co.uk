resource "aws_acm_certificate" "morrisoncole_co_uk" {
  provider = aws.us-east-1

  domain_name = "*.morrisoncole.co.uk"
  subject_alternative_names = [
    "morrisoncole.co.uk"
  ]
  validation_method = "EMAIL"


  options {
    certificate_transparency_logging_preference = "ENABLED"
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate" "morrisoncole_com" {
  provider = aws.us-east-1

  domain_name = "*.morrisoncole.com"
  subject_alternative_names = [
    "morrisoncole.com"
  ]
  validation_method = "DNS"

  options {
    certificate_transparency_logging_preference = "ENABLED"
  }

  lifecycle {
    create_before_destroy = true
  }
}
