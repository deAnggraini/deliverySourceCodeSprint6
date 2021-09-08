FROM openjdk-11-rhel7:1.1

MAINTAINER iwan

USER root

#MAINTAINER jumono
#RUN mkdir /config
#RUN mkdir /images
#RUN mkdir /images/menus
#RUN mkdir /images/structures
#RUN mkdir /images/articles
#RUN mkdir /images/themes
#RUN mkdir /images/users

RUN mkdir -p /var/bca/images
RUN mkdir -p /var/bca/images/menus
RUN mkdir -p /var/bca/images/structures
RUN mkdir -p /var/bca/images/articles
RUN mkdir -p /var/bca/images/themes
RUN mkdir -p /var/bca/images/users

#COPY application.yml /config/application.yml
#COPY log4j2.xml /config/log4j2.xml
#COPY messages.properties messages.properties
#COPY messages_en.properties messages_en.properties



COPY ./target/pakar-doc-server.jar /deployments/pakar-doc-server.jar

#RUN chown -R 185:root /deployments


#EXPOSE 12082:12082

#ENTRYPOINT ["java","-Dport=12082","-Dlogging.config=file:/config/log4j2.xml","-Dspring.profiles.active=dev-local","-Dspring.config.location=file:/config/application.yml","-jar","pakar-doc-server.jar"]