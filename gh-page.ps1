# Stop a PowerShell script on the first error?
$ErrorActionPreference = "Stop"

# Clean host
Clear-Host

# Run deploy
npm run deploy

# Run all test
# Why  -- Symbol? see angular original page @Idrice
npm run test-deploy

# Run all e2e
# why  --disable-gpu flag ? see angular original page? @Idrice
# npm run e2e-deploy

#Go to docs
Set-Location docs

# Copy
Copy-Item index.html 404.html -PassThru



#Preview location
cd..



#### JUST FOR FUN ###
# Find all css file and remane it to scss
cd "./src/app" 
$cssFiles = Get-ChildItem .\ -Filter "*.css" -Recurse
$counter = 0 
$cssFiles | ForEach-Object ($_) { 
    $counter++;
    Write-Output $_.fullname -foreground green
}

# REname .css in component.ts file to .scss
 $compFiles = Get-ChildItem .\ -Filter "*.component.ts" -Recurse 
$compFiles  | ForEach-Object ($_) { 
    $counter++;
    Write-Output $_.fullname
#	(Get-Content -path $_.fullname -Raw) -replace '.css','.scss'
}




