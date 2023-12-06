resource "aws_route53_zone" "morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  name          = local.uk_root_domain
  comment       = "Managed by Terraform"
  force_destroy = false
}

resource "aws_route53_record" "a_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = local.uk_root_domain
  type    = "A"

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.morrisoncole_co_uk.domain_name
    zone_id                = aws_cloudfront_distribution.morrisoncole_co_uk.hosted_zone_id
  }
}

resource "aws_route53_record" "aaaa_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = local.uk_root_domain
  type    = "AAAA"

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.morrisoncole_co_uk.domain_name
    zone_id                = aws_cloudfront_distribution.morrisoncole_co_uk.hosted_zone_id
  }
}

resource "aws_route53_record" "mx_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = local.uk_root_domain
  type    = "MX"
  records = [
    "1 ASPMX.L.GOOGLE.COM.",
    "5 ALT1.ASPMX.L.GOOGLE.COM.",
    "5 ALT2.ASPMX.L.GOOGLE.COM.",
    "10 ASPMX2.GOOGLEMAIL.COM.",
    "10 ASPMX3.GOOGLEMAIL.COM.",
    "10 ASPMX4.GOOGLEMAIL.COM.",
    "10 ASPMX5.GOOGLEMAIL.COM.",
    "10 mail.morrisoncole.co.uk.",
  ]
  ttl = 300
}

resource "aws_route53_record" "ns_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = local.uk_root_domain
  type    = "NS"
  records = [
    "ns-463.awsdns-57.com.",
    "ns-542.awsdns-03.net.",
    "ns-1212.awsdns-23.org.",
    "ns-1825.awsdns-36.co.uk.",
  ]
  ttl = 172800
}

resource "aws_route53_record" "soa_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = local.uk_root_domain
  type    = "SOA"
  records = [
    "ns-463.awsdns-57.com. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400",
  ]
  ttl = 900
}

resource "aws_route53_record" "txt_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = local.uk_root_domain
  type    = "TXT"
  records = [
    "google-site-verification=l9nxzwNCDiiCTEPu1R2glmGhlpBJCnfX_OKOVLE04r8",
    "openai-domain-verification=dv-mnVt5rr5zsXQPrGLkxc6ZQiM"
  ]
  ttl = 300
}

resource "aws_route53_record" "github_verify_txt_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = "_github-pages-challenge-MorrisonCole.${local.uk_root_domain}"
  type    = "TXT"
  records = [
    "9a15d658cb1fac7a4d7337b134971f",
  ]
  ttl = 300
}

resource "aws_route53_record" "mx_subdomains_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = "*.${local.uk_root_domain}"
  type    = "MX"
  records = [
    "10 mail.morrisoncole.co.uk.",
  ]
  ttl = 300
}

resource "aws_route53_record" "gmail_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = "gmail.${local.uk_root_domain}"
  type    = "CNAME"
  records = [
    "ghs.google.com.",
  ]
  ttl = 300
}

resource "aws_route53_record" "a_www_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = "www.${local.uk_root_domain}"
  type    = "A"
  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.www_morrisoncole_co_uk.domain_name
    zone_id                = aws_cloudfront_distribution.www_morrisoncole_co_uk.hosted_zone_id
  }
}

resource "aws_route53_record" "vercel_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = local.alpha_uk_root_domain
  type    = "A"
  records = ["76.76.21.21"]
  ttl     = 300
}
