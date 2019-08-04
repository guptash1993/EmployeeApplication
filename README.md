# Employee Application
---

The application provides CRUD operation for employees along with department details. 
There are 3 services running independently to facilitate the application along with a MySQL server.
The three services are:

**For Client Application:** Project: employee-client
* The project was built with [Create React App]
* Technology used: React, Node, keycloak-js, react-router, react-bootstrap, axios for http requests, and several react components.
* Application URL: http://localhost:3000
* To run client server
run `npm install` in employee-client root directory to install related dependencies
`npm start`: Start the client server
* To check details for connection with auth server: Go to employee-client/src/keycloak.json
* Application Screenshots: Please refer to /files/employee-client/ folder

**For Authentication:**
* Keycloak: Keycloak is an open source software product to allow single sign-on with Identity Management and Access Management aimed at modern applications and services.
* Application URL: http://localhost:8080/auth
* To run keycloak
`curl https://downloads.jboss.org/keycloak/6.0.1/keycloak-6.0.1.zip --output keycloak-6.0.1.zip`: To install keycloak server
`unzip keycloak-6.0.1.zip`: Unzip the keycloak code
`Rename  keycloak-6.0.1 employee-auth`  employee-auth
`cd employee-auth/bin` change directory to the bin folder
`/add-user-keycloak.sh -r master -u admin -p admin` add admin user
`./add-user.sh` -r master -u <username> -p <password>: to add new user
`./standalone.sh -b localhost`: Run the keycloak server in target IP (localhost in this case)
Go to `http://localhost:8080/auth`
Add new realm: fixer-users
Add new client: fixer-app
Add new user: kensuke
* For Admin demo: User- admin Password- admin
* For User demo: User- kensuke Password- test
* Application Screenshots: Please refer to /files/employee-auth/ folder

**For Backend Application:** Project: employee-server
* Technology used: Spring Boot as RESTful backend, Maven, Hibernate, MySQL
* RESTful API Address: http://localhost:8090
* To run backend server
`mvn spring-boot:run`: clean and run Spring Boot application
* Application Screenshots: Please refer to /files/employee-auth/ folder

**MySQL create script with initial data:** [db_meeting.sql](files/db_meeting.sql)
* Connected with employee-server through Hibernate ORM and MySQL drivers
* Config file details in application.properties under employee-server
* JDBC username/password = root/root


**TODO:**
* Display user information such as name, preffered name and if email is verfied by user or not (This information in stored in a variable currently) See files/employee-client/user-info.png)
* Add authorization for admin and other employees to restrict the changes to important employee information.
* Add client side input validations
* Add client tests
* Show the information that department having employees cannot be deleted. This validation is handled currently by the foreign key but need to be displayed to user in a meaningful message.
