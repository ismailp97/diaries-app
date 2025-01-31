# Base Image used to build image
FROM postgres 
# Sets the DB password
ENV POSTGRES_PASSWORD docker
# Sets the DB name
ENV POSTGRES_DB diaries
# Copies contents to 'diaries.sql' over to Image and DB entry point
COPY diaries.sql /docker-entrypoint-initdb.d/