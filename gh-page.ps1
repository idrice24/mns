# Stop a PowerShell script on the first error?
$ErrorActionPreference = "Stop"

# Clean host
Clear-Host

# Run all test
npm run test-deploy

# Run deploy
npm run deploy


#Go to docs
Set-Location docs

# Copy
Copy-Item index.html 404.html -PassThru



#Preview location
cd..





