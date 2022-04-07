FROM gradle:7.4.2-jdk17-alpine
ENV APP_HOME=/app
ENV APP_JAR_FILE=IMDB-0.0.1-SNAPSHOT.jar
WORKDIR ${APP_HOME}
COPY ./build/libs/${APP_JAR_FILE} /app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]