import {
  to = aws_s3_bucket.morrisoncole_co_uk
  id = "morrisoncole.co.uk"
}

resource "aws_s3_bucket" "morrisoncole_co_uk" {
  provider = aws.ap-northeast-1
  bucket   = local.uk_root_domain
}

import {
  to = aws_s3_bucket_policy.allow_public_read
  id = aws_s3_bucket.morrisoncole_co_uk.id
}

resource "aws_s3_bucket_policy" "allow_public_read" {
  provider = aws.ap-northeast-1
  bucket   = aws_s3_bucket.morrisoncole_co_uk.id
  policy   = data.aws_iam_policy_document.allow_public_read.json
}

data "aws_iam_policy_document" "allow_public_read" {
  statement {
    sid = "PublicReadGetObject"

    principals {
      type        = "AWS"
      identifiers = ["*"]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      "${aws_s3_bucket.morrisoncole_co_uk.arn}/*",
    ]
  }
}

import {
  to = aws_s3_bucket_website_configuration.morrisoncole_co_uk
  id = aws_s3_bucket.morrisoncole_co_uk.id
}

resource "aws_s3_bucket_website_configuration" "morrisoncole_co_uk" {
  provider = aws.ap-northeast-1
  bucket   = aws_s3_bucket.morrisoncole_co_uk.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

import {
  to = aws_s3_bucket.www_morrisoncole_co_uk
  id = "www.morrisoncole.co.uk"
}

resource "aws_s3_bucket" "www_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1
  bucket   = "www.${local.uk_root_domain}"
}

import {
  to = aws_s3_bucket_website_configuration.www_morrisoncole_co_uk
  id = aws_s3_bucket.www_morrisoncole_co_uk.id
}

resource "aws_s3_bucket_website_configuration" "www_morrisoncole_co_uk" {
  provider = aws.ap-northeast-1
  bucket   = aws_s3_bucket.www_morrisoncole_co_uk.id

  redirect_all_requests_to {
    host_name = local.uk_root_domain
    protocol  = "https"
  }
}

import {
  to = aws_s3_bucket.morrisoncole_com
  id = "morrisoncole.com"
}

resource "aws_s3_bucket" "morrisoncole_com" {
  provider = aws.ap-northeast-1
  bucket   = local.us_root_domain
}

import {
  to = aws_s3_bucket_website_configuration.morrisoncole_com
  id = aws_s3_bucket.morrisoncole_com.id
}

resource "aws_s3_bucket_website_configuration" "morrisoncole_com" {
  provider = aws.ap-northeast-1
  bucket   = aws_s3_bucket.morrisoncole_com.id

  redirect_all_requests_to {
    host_name = local.uk_root_domain
    protocol  = "https"
  }
}

import {
  to = aws_s3_bucket.www_morrisoncole_com
  id = "www.morrisoncole.com"
}

resource "aws_s3_bucket" "www_morrisoncole_com" {
  provider = aws.ap-northeast-1
  bucket   = "www.${local.us_root_domain}"
}

import {
  to = aws_s3_bucket_website_configuration.www_morrisoncole_com
  id = aws_s3_bucket.www_morrisoncole_com.id
}

resource "aws_s3_bucket_website_configuration" "www_morrisoncole_com" {
  provider = aws.ap-northeast-1
  bucket   = aws_s3_bucket.www_morrisoncole_com.id

  redirect_all_requests_to {
    host_name = local.uk_root_domain
    protocol  = "https"
  }
}
