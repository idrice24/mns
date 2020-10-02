
ECHO on
ECHO   "######## Deploy  Starting #############"

REM Run Deploy in a new window and until finish
REM Start  /WAIT  npm run deploy


REM Copy and paste commad
robocopy  docs/index.html  docs/404.html

REM Show Tree of file in this directory just for fun
TREE

echo on "######## Deploy ends#############"
