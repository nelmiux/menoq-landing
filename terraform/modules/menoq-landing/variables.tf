variable "app_name" {
  description = "The name of the application"
  type        = string
}

variable "app_version" {
  description = "The version of the app"
  type        = string
  default     = "0.0.1"
}

variable "module_name" {
  description = "The name of the application"
  type        = string
  default     = "menoq_landing"
}

variable "stage" {
  description = "The environment to deploy the application"
  type        = string
}

variable "region" {
  description = "The AWS region to deploy the application"
  type        = string
}

variable "cloudfront_origin_path" {
  description = "The CloudFront origin path"
  type        = string
  default     = ""
}

variable "cloudfront_price_class" {
  description = "The price class for the CloudFront distribution"
  type        = string
  default     = "PriceClass_All"
}

variable "cloudfront_default_root_object" {
  description = "The default root object for the CloudFront distribution"
  type        = string
  default     = "index.html"
}

variable "account_id" {
  type = string
}