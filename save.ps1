$ErrorActionPreference = "Stop"

# Always operate from the project directory
$ProjectRoot = "C:\Users\ABC\Projects\my-app"
Set-Location $ProjectRoot

Write-Host "`n=== MB Studio | Sauvegarde Git ===" -ForegroundColor Cyan

# Check Git and repository
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    throw "Git n'est pas installé ou n'est pas accessible."
}

git rev-parse --is-inside-work-tree *> $null
if ($LASTEXITCODE -ne 0) {
    throw "Aucun dépôt Git trouvé. Initialise d'abord Git avec git init."
}

# Ensure important secrets and generated folders stay ignored
$IgnoreChecks = @(".env", ".env.local", ".next", "node_modules")
foreach ($Path in $IgnoreChecks) {
    git check-ignore --quiet -- $Path
    if ($LASTEXITCODE -ne 0) {
        throw "Sécurité : '$Path' n'est pas ignoré par Git. Corrige .gitignore avant de continuer."
    }
}

# Stage changes only after showing the current state
Write-Host "`n--- État actuel ---" -ForegroundColor Yellow
git status --short
if ($LASTEXITCODE -ne 0) { throw "Impossible de lire l'état Git." }

Write-Host "`n--- Changements détectés ---" -ForegroundColor Yellow
git diff --stat
git diff --cached --stat

Write-Host "`n--- Fichiers sensibles potentiels ---" -ForegroundColor Yellow
$SensitivePattern = '(^|/)\.env($|\.)|(^|/)(id_rsa|id_ed25519)(\.|$)|\.pem$|credentials|secrets?'
$PotentialSensitive = @(
    git ls-files --cached --others --exclude-standard |
    Where-Object { $_ -match $SensitivePattern }
)

if ($PotentialSensitive.Count -gt 0) {
    Write-Host "Attention : ces chemins méritent une vérification :" -ForegroundColor Red
    $PotentialSensitive | ForEach-Object { Write-Host "  $_" -ForegroundColor Red }
    $Continue = Read-Host "As-tu vérifié qu'aucun secret n'est inclus ? Tape OUI pour continuer"
    if ($Continue -cne "OUI") {
        Write-Host "Sauvegarde annulée." -ForegroundColor Yellow
        exit 0
    }
}

$Confirm = Read-Host "`nVeux-tu préparer une sauvegarde de tous les changements suivis et non ignorés ? (O/N)"
if ($Confirm -notin @("O", "o", "OUI", "oui")) {
    Write-Host "Sauvegarde annulée. Aucun commit créé." -ForegroundColor Yellow
    exit 0
}

# Stage all non-ignored project changes
git add -A
if ($LASTEXITCODE -ne 0) { throw "Échec de git add." }

Write-Host "`n--- Aperçu exact de la sauvegarde ---" -ForegroundColor Cyan
git status --short
git diff --cached --stat

# Show staged changes for final review
git diff --cached --name-status

$FinalConfirm = Read-Host "`nConfirme-tu ce contenu pour créer le commit ? (O/N)"
if ($FinalConfirm -notin @("O", "o", "OUI", "oui")) {
    git reset
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Attention : impossible de retirer tous les fichiers de l'index." -ForegroundColor Red
    }
    Write-Host "Commit annulé. Les fichiers du projet restent inchangés." -ForegroundColor Yellow
    exit 0
}

$Message = Read-Host "Message de sauvegarde (Entrée = sauvegarde MB Studio)"
if ([string]::IsNullOrWhiteSpace($Message)) {
    $Message = "Sauvegarde MB Studio"
}

git commit -m $Message
if ($LASTEXITCODE -ne 0) {
    throw "Le commit a échoué. Vérifie la configuration Git et les messages ci-dessus."
}

Write-Host "`n--- Sauvegarde créée ---" -ForegroundColor Green
git log -1 --oneline
git status --short
