terraform {
  backend "s3" {
    key     = "terraform/menoq-landing.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}
