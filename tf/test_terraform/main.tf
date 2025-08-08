terraform {
  required_version = "1.9.0"
}
resource "random_pet" "pet" {}
output "pet" {
  value = random_pet.pet
}
