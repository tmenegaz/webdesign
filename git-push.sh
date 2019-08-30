#!/bin/bash
git add .
echo "Commite aqui"
read msn
git commit -m "$msn"
git push origin master
clear
## descomente as duas linhas abaixo se quiser ver o resultado do cimmit e limpar a tela
#git log
#clear
