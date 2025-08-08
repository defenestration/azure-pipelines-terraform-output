terraform {
  required_version = ">= 1.10"
}

resource "random_pet" "pet" {
}

output "pet" {
  value = random_pet.pet
}
