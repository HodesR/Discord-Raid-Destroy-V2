@echo off
title Install All Modules 
:top
cls
node launch.js
pause
    call npm init
    call npm install discord.js
    call npm install chalk
pause
exit
goto :top
