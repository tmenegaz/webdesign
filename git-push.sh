#!/bin/bash
git add .
echo "Commite aqui"
read msn
git commit -m "$msn"
git push origin master
clear
git log
clear
