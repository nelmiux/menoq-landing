locals {
  now_stamp = formatdate("YYYYMMDDhhmmss", timestamp())
}

resource "null_resource" "build" {
  triggers = {
    updated_at = timestamp()
  }

  provisioner "local-exec" {
    command = <<EOF
      npm install
      rimraf dist
      npm run build --stage=${var.stage}
      aws s3 sync --delete dist "s3://${aws_s3_bucket.menoq_landing_bucket.id}/"
      aws cloudfront create-invalidation --distribution-id ${aws_cloudfront_distribution.menoq_landing_bucket_cloudfront.id} --paths '/*'
    EOF

    working_dir = "${path.module}/../../.."
  }

  depends_on = [aws_s3_bucket.menoq_landing_bucket, aws_cloudfront_distribution.menoq_landing_bucket_cloudfront]
}