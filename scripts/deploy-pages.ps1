$ErrorActionPreference = "Stop"

Write-Host "1. Building production static bundle for GitHub Pages (/nakoda-real-estate/)..."
$env:VITE_BASE_PATH = '/nakoda-real-estate/'
npm run build

Write-Host "2. Creating temporary deployment branch..."
$currentBranch = (git branch --show-current).Trim()
if ([string]::IsNullOrWhiteSpace($currentBranch)) {
    $currentBranch = "main"
}

# Create a temporary clone in a clean temp directory to avoid any workspace file conflicts
$tempDeployDir = Join-Path $env:TEMP ("nakoda-deploy-" + [System.Guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Path $tempDeployDir -Force | Out-Null

try {
    Write-Host "3. Preparing git worktree in $tempDeployDir..."
    git worktree add -B gh-pages $tempDeployDir
    
    # Remove old files in worktree
    Get-ChildItem -Path $tempDeployDir -Exclude ".git" | Remove-Item -Recurse -Force
    
    # Copy compiled dist contents to worktree
    Copy-Item -Path "dist\*" -Destination $tempDeployDir -Recurse -Force
    
    # Commit and push from worktree
    Push-Location $tempDeployDir
    try {
        git add -A
        git commit -m "Deploy static site to GitHub Pages"
        Write-Host "4. Pushing gh-pages branch to origin..."
        git push origin gh-pages --force
    } finally {
        Pop-Location
    }
    
    Write-Host "5. Deployment push successful!"
} finally {
    git worktree remove --force $tempDeployDir 2>$null
    if (Test-Path $tempDeployDir) {
        Remove-Item -Path $tempDeployDir -Recurse -Force -ErrorAction SilentlyContinue
    }
}
