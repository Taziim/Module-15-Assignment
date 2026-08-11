package docker
# Deny any image that uses the 'latest' tag
deny[msg] {
    input.image.tag == "latest"
    msg := sprintf("Image %s uses forbidden tag 'latest'", [input.image.name])
}