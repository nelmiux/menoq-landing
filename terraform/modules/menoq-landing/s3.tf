locals {
  name_prefix  = "${var.app_name}-${var.account_id}-${var.stage}"
}

resource "aws_s3_bucket" "menoq_landing_bucket" {
  bucket = local.name_prefix

  tags = {
    name        = local.name_prefix
    environment = var.stage
  }
}

resource "aws_s3_bucket_policy" "menoq_landing_bucket_policy" {
  bucket = aws_s3_bucket.menoq_landing_bucket.id
  policy = data.aws_iam_policy_document.menoq_landing_bucket_policy_document.json
}
