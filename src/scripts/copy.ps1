$type = $args[0]
$text = ''

if ($type -eq "--text") {
    for ($i = 1; $i -lt $args.Count; $i++) {
        $text += $args[$i] + " "
    }

    Set-Clipboard -Value $text
    Write-Host "Text copied"
}
else {
    Write-Host "Invalid argument"
}