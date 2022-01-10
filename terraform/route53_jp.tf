resource "aws_route53_zone" "morrisoncole_jp" {
  provider = aws.ap-northeast-1

  name          = local.jp_root_domain
  comment       = "Managed by Terraform"
  force_destroy = false
}

resource "aws_route53_record" "ns_morrisoncole_jp" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_jp.zone_id
  name    = local.jp_root_domain
  type    = "NS"
  records = [
    "ns-1502.awsdns-59.org.",
    "ns-364.awsdns-45.com.",
    "ns-1646.awsdns-13.co.uk.",
    "ns-843.awsdns-41.net.",
  ]
  ttl = 172800
}

resource "aws_route53_record" "soa_morrisoncole_jp" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_jp.zone_id
  name    = local.jp_root_domain
  type    = "SOA"
  records = [
    "ns-1502.awsdns-59.org. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400",
  ]
  ttl = 900
}

resource "aws_route53_record" "vercel_morrisoncole_jp" {
  provider = aws.ap-northeast-1

  zone_id = aws_route53_zone.morrisoncole_jp.zone_id
  name    = "alpha"
  type    = "CNAME"
  records = ["cname.vercel-dns.com"]
  ttl     = 300
}
