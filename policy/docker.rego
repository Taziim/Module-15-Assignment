package docker

deny contains msg if {
    input.image.tag == "latest"

    msg := "Docker images must not use the latest tag"
}