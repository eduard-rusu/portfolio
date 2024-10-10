 provider "aws" {
   region = var.region

   default_tags {
     tags = {
       hashicorp-learn = "circleci"
     }
   }
 }

 resource "random_uuid" "randomid" {}

 resource "aws_s3_bucket" "app" {
   tags = {
     Name = "App Bucket"
   }

   bucket        = "${var.app}.${var.label}.${random_uuid.randomid.result}"
   force_destroy = true
 }

 resource "aws_s3_bucket_ownership_controls" "app" {
  bucket = aws_s3_bucket.app.id
  rule {
    object_ownership = "ObjectWriter"
  }
}

 resource "aws_s3_bucket_acl" "app" {
   bucket = aws_s3_bucket.app.id
   acl    = "private"
 }

locals {
  files = fileset(".", "**")
}

resource "aws_s3_object" "app" {
  for_each = { for file in local.files : file => file }

  key          = "index.html"
  bucket       = aws_s3_bucket.app.id
  content      = file("./index.html")
  content_type = "text/html"
}

 resource "aws_s3_bucket_website_configuration" "terramino" {
   bucket = aws_s3_bucket.app.bucket

   index_document {
     suffix = "index.html"
   }

   error_document {
     key = "error.html"
   }
 }