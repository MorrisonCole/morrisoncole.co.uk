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
    "10 inbound-smtp.us-east-1.amazonaws.com.",
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
    "google-site-verification=hLh_6PrYN-1R2zPgB-ga1cbc_hVyLqB6VMzyO3xY_Q8",
    "openai-domain-verification=dv-mnVt5rr5zsXQPrGLkxc6ZQiM",
    "v=spf1 include:amazonses.com ~all",
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
    "10 inbound-smtp.us-east-1.amazonaws.com.",
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

resource "aws_route53_record" "cname_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = "_5357e7220f4d24d467d9bd53039ebad3.${local.uk_root_domain}"
  type    = "CNAME"

  records = [
    "_b17fef609136024cd7b27cded3eb4f6f.mhbtsbpdnt.acm-validations.aws.",
  ]
  ttl = 300
}

# WorkMail DNS Records

resource "aws_route53_record" "autodiscover_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = "autodiscover.${local.uk_root_domain}"
  type    = "CNAME"
  records = [
    "autodiscover.mail.us-east-1.awsapps.com.",
  ]
  ttl = 300
}

# Custom MAIL FROM domain for SES/WorkMail

resource "aws_route53_record" "mx_mail_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = "mail.${local.uk_root_domain}"
  type    = "MX"
  records = [
    "10 feedback-smtp.us-east-1.amazonses.com.",
  ]
  ttl = 300
}

resource "aws_route53_record" "txt_mail_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = "mail.${local.uk_root_domain}"
  type    = "TXT"
  records = [
    "v=spf1 include:amazonses.com ~all",
  ]
  ttl = 300
}

resource "aws_route53_record" "amazonses_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = "_amazonses.${local.uk_root_domain}"
  type    = "TXT"
  records = [
    "G8isCZCBieNxOLYlM345UJcsHDIIxRLFrEHkuRTion8=",
  ]
  ttl = 300
}

resource "aws_route53_record" "dmarc_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = "_dmarc.${local.uk_root_domain}"
  type    = "TXT"
  records = [
    "v=DMARC1;p=quarantine;pct=100;fo=1",
  ]
  ttl = 300
}

resource "aws_route53_record" "dkim1_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = "cx5zm6omnhhcedioidjhshqwwpr75wzi._domainkey.${local.uk_root_domain}"
  type    = "CNAME"
  records = [
    "cx5zm6omnhhcedioidjhshqwwpr75wzi.dkim.amazonses.com.",
  ]
  ttl = 300
}

resource "aws_route53_record" "dkim2_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = "74wwcvedkviyitj3rb2xaq4yq7megmip._domainkey.${local.uk_root_domain}"
  type    = "CNAME"
  records = [
    "74wwcvedkviyitj3rb2xaq4yq7megmip.dkim.amazonses.com.",
  ]
  ttl = 300
}

resource "aws_route53_record" "dkim3_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_co_uk.zone_id
  name    = "67ia5zaldlbyrhiwjcm27smeimtbaxgi._domainkey.${local.uk_root_domain}"
  type    = "CNAME"
  records = [
    "67ia5zaldlbyrhiwjcm27smeimtbaxgi.dkim.amazonses.com.",
  ]
  ttl = 300
}
