@ECHO ON
@ECHO ***********************************************************************
@ECHO            ##           ##           ##         #     ########
@ECHO           ##  ##     ##  ##        ##  ##      ##     #
@ECHO          ##    ##  ##     ##     ##     ##  ##         ########
@ECHO         ##      ##         ## ##         ##
@ECHO ***********************************************************************
@ECHO OFF
timeout /t 10 /nobreak > NUL
call mvn clean
call mvn package
call mvn spring-boot:run -X

