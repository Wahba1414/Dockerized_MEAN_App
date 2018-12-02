# Project Title
Dockerized MEAN Application 

## Description 
Preparing environment to run  ```MEAN ``` app automatically and quickly using  ```Docker Compose ``` for development aspects.

### Contents

#### 1. project
folder Contains  ```MEAN ``` app folders/files. You can read more details about it from the following  ```Github ``` project.
 ```
    Wahba1414/JavaScript_MEAN_project_template
 ```

#### 2. webapp.Dockerfile
Docker file configurations to build an image for the MEAN app server with the following specifications:

* Connect to a databse container/service named "mongodatabase" setup by  ``` Docker Composer ``` through  port:  ``` 27017```.
* Listen to port ```8080``` for comming app requests.

    ##### Hints
    The above configurations(Environment paramters) can be modified by two ways:
    * By modifying project/.env file.
    * By modifying the "Dockerfile" and add the needed environment paramters.

#### 3. docker-compose.yml
Docker compose configurations file builds the needed services for the above  ```MEAN ``` app as following:

* webapp
Service runs the image configured by ```webapp.Dockerfile```.

* mongodatabase
Service runs ```mongo``` image.

     ##### Hints
  ```Docker Compose``` automatically creates some network (bridge network) to link these services together.


### Prerequisites
* Know about the ```Docker``` engine and ```Docker Compose```.
* Have ``` docker && docker-compose ``` installed on your machine.
* Know about  ```JavaScript ```  ```MEAN ``` stack.

### Building Steps:

#### 1. Download project source code and extract it.
#### 2. Need to create a directory on your machine to be used by mongo database service. You can run the following commands:
```
cd /etc
sudo mkdir mongodatabase
sudo chmod 777 mongodatabase
```
* ##### Hints:
    ##### - There are two options to handle mongo databse files, one managed by docker dontainer itself and the other one by the host itself, for more details and know more about the differences between the two options you can check Docker document about how to handle volumes.
    ##### - The above commands set ```mongodatabase``` folder permissions to be public and this is suitable for development phases only.
    
#### 3.  From inside the project directory just run the following command:
```
docker-compose up
```
This ```Docker Compose``` command set the needed containers for you to run this  ```MEAN ``` app. Just need to wait till finish and then can try the app. 

#### 4. To try the app, just type the following line in your browser. 
```
http://localhost:8080/
```

#### 5. Finally after finishing your work and need to clean up all created containers, images and networks, just run the following command:
```
docker-compose down
```





 