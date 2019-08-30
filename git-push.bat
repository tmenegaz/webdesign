@echo off
rem script para adicionar arquivos, commitar e subir a produção para a conta no github
rem a conta do github foi conectada ao repositório local da seguinte forma.
rem no diretório rais do repositório, neste caso disciplina, faça:
rem git init
rem git remote add origin https://github.com/<usuário-github>/webdesign

git add .
set /p msn=Commite aqui: 
git commit -m "%msn%"
git push origin master
cls
rem descomente as duas linhas abaixo se quiser ver o resultado do commit e limpar a tela
rem git log
rem cls