FROM openjdk-11-rhel7:1.1

MAINTAINER iwan

USER root


#RUN mkdir /config
RUN mkdir /var/bca
RUN mkdir /var/bca/file

#COPY application.yml /config/application.yml
#COPY log4j2.xml /config/log4j2.xml
COPY user.json /var/bca/file/user.json

COPY ./target/auth-services.jar /deployments/auth-services.jar

#RUN chown -R 185:root /deployments

#ENTRYPOINT ["java","-Dport=12085","-jar","auth-services.jar"]