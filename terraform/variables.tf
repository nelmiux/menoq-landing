variable "app_name" {
  description = "The name of the application"
  type        = string
  default     = "menoq-landing"
}

variable "stage" {
  description = "The environment to deploy the application"
  type        = string
  default     = "dev"
}
