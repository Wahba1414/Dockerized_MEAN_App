#This file builds a custom image on Ubuntu distribution v18.04 to run MEAN app.


#select the base image. 
#can be any version of ubuntu and the same concepts can apply.
FROM ubuntu:18.04

#Run the needed commands for preparing Node.js environment.

#iInstalling needed packages for installing any debian package && curl && git.
#Installing nodejs && package manager for JavaScript "npm".

RUN apt-get update && apt-get install -y build-essential curl git nodejs npm

#Expose ports for Container.
EXPOSE 8080

#copy all files from host current directory to container one (project folder)
COPY . .

#Set the working directory.
WORKDIR /project

#Install bower and Grunt globally.
RUN npm install --global bower && npm install -g grunt-cli

#Install needed packages to run the MEAN app.
#npm packages.
RUN npm install
#bower packages.
RUN bower install --allow-root

#set any needed environment variables.

#Run the web app.
CMD ["grunt"]



