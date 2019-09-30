#!/bin/bash
## script para adicionar arquivos, commitar e subir a produção para a conta no github
## a conta do github foi conectada ao repositório local da seguinte forma.
## no diretório rais do repositório, neste caso disciplina, faça:
#git init
#git remote add origin https://github.com/<usuário-github>/webdesign

git add .
echo "Commite aqui"
read msn
git commit -m "$msn"
git push origin master
clear
## descomente as duas linhas abaixo se quiser ver o resultado do commit e limpar a tela
#git log
#clear
