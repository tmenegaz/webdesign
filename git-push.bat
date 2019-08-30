@echo off
git add .
set /p msn=Commite aqui
git commit -m "%msn%"
git push origin master
cls