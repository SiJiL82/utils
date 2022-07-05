# Trust PSGallery repository
# Set-PSRepository -Name 'PSGallery' -InstallationPolicy Trusted

# Terminal Icons
if (-Not (Get-Module -ListAvailable -Name "Terminal-Icons")) {
    Install-Module -Name Terminal-Icons -Repository PSGallery
}
Import-Module -Name Terminal-Icons

# PSReadline
if (-Not (Get-Module -ListAvailable -Name "PSReadLine")) {
    Install-Module PSReadLine -AllowPrerelease -Force
}
if ($host.Name -eq 'ConsoleHost')
{
    Import-Module PSReadLine
    Set-PSReadLineOption -PredictionSource History
    Set-PSReadLineOption -PredictionViewStyle ListView
    Set-PSReadLineOption -EditMode Windows
}

# Oh-My-Posh
try {
    oh-my-posh --init --shell pwsh --config https://raw.githubusercontent.com/SiJiL82/utils/main/configs/oh-my-posh/omp.json | Invoke-Expression
} catch {
    winget install JanDeDobbeleer.OhMyPosh
    Set-Variable PATH=C
    oh-my-posh --init --shell pwsh --config https://raw.githubusercontent.com/SiJiL82/utils/main/configs/oh-my-posh/omp.json | Invoke-Expression
}

Clear-host
