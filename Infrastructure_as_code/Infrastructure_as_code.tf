# Define provider
provider "aws" {
  region = "us-east-1"  
}

# Define variables
variable "instance_type" {
  default = "t2.micro"
}

variable "db_instance_class" {
  default = "db.t3.micro"
}

variable "db_name" {
  default = "mydatabase"
}

variable "db_username" {
  default = "myadmin"
}

variable "db_password" {
  default = "password"  
}

# Define resources
resource "aws_instance" "my_ec2_instance" {
  ami           = "ami-0c55b159cbfafe1f0"  # Ubuntu 20.04 LTS
  instance_type = var.instance_type
  key_name      = "my_key_pair"  

  tags = {
    Name = "MyEC2Instance"
  }
}

resource "aws_db_instance" "my_db_instance" {
  identifier            = "mydbinstance"
  instance_class        = var.db_instance_class
  engine                = "postgres"
  engine_version        = "13.3"
  name                  = var.db_name
  username              = var.db_username
  password              = var.db_password
  allocated_storage     = 20
  publicly_accessible   = false 

  tags = {
    Name = "MyDBInstance"
  }
}
