
ECHO on
ECHO   "######## Deploy  Starting #############"

REM Run Deploy in a new window and until finish
Start /WAIT npm run deploy


REM Show Tree of file in this directory just for fun
TREE

echo on "######## Deploy ends#############"
