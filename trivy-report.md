# Trivy Security Report
## Tool
Trivy
## Image
cicd-quality-app:1.0
## Initial Findings
The initial Docker image was scanned using Trivy.
| Vulnerability | Package | Action |
|---            |---      |---     |
| [alpine]      |[3.21.4] |[node:22-alpine] |
## Mitigation
The vulnerable dependencies/base image were updated where possible.
The Docker image was rebuilt and scanned again.
## Final Result
The final scan was reviewed to confirm that the identified issues were fixed or appropriately documented.