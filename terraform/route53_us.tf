resource "aws_route53_zone" "morrisoncole_com" {
  provider = aws.ap-northeast-1

  name          = local.us_root_domain
  comment       = "Managed by Terraform"
  force_destroy = false
}

resource "aws_route53_record" "a_morrisoncole_com" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_com.zone_id
  name    = local.us_root_domain
  type    = "A"

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.morrisoncole_com.domain_name
    zone_id                = aws_cloudfront_distribution.morrisoncole_com.hosted_zone_id
  }
}

resource "aws_route53_record" "ns_morrisoncole_com" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_com.zone_id
  name    = local.us_root_domain
  type    = "NS"
  records = [
    "ns-1399.awsdns-46.org.",
    "ns-164.awsdns-20.com.",
    "ns-1962.awsdns-53.co.uk.",
    "ns-632.awsdns-15.net.",
  ]
  ttl = 172800
}

resource "aws_route53_record" "soa_morrisoncole_com" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_com.zone_id
  name    = local.us_root_domain
  type    = "SOA"
  records = [
    "ns-632.awsdns-15.net. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400",
  ]
  ttl = 900
}

resource "aws_route53_record" "google_site_verification" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_com.zone_id
  name    = local.us_root_domain
  type    = "TXT"
  records = [
    "google-site-verification=ECRNycYS1mdBkCnNIRzg3X-hMVkHYAkdDFrBRZBtkJ0",
    "google-site-verification=fd0o8QChRs6lI9wJPTeLso9kLJTOr1PuOqFp4p_FNlc"
  ]
  ttl = 300
}

resource "aws_route53_record" "www_morrisoncole_com" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_com.zone_id
  name    = "www.${local.us_root_domain}"
  type    = "A"
  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.www_morrisoncole_com.domain_name
    zone_id                = aws_cloudfront_distribution.www_morrisoncole_com.hosted_zone_id
  }
}

resource "aws_route53_record" "cname_morrisoncole_com" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_com.zone_id
  name    = "_98180eb7ff16ec5fb3427ee9b0e95b6f.${local.us_root_domain}"
  type    = "CNAME"

  records = [
    "_5bfa58c73be7d9227cb4a27ccc610470.auiqqraehs.acm-validations.aws.",
  ]
  ttl = 300
}
