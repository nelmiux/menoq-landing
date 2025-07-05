data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

module "menoq_landing" {
  source     = "./modules/menoq-landing"
  app_name   = var.app_name
  region     = data.aws_region.current.id
  stage      = var.stage
  account_id = data.aws_caller_identity.current.account_id
}
