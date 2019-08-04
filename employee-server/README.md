## Microservice for handling the REST APIs from frontend

**Technology used:** Spring Boot as RESTful backend, Maven, Hibernate, MySQL
	
**RESTful API Address:** http://localhost:8090

**Employee endpoints**
 * HTTP GET 	: "localhost:8080/employees" to fetch list of all employees.
 * HTTP GET 	: "localhost:8080/employees/{id}" get employee by employee id.
 * HTTP POST	: "localhost:8080/employees" to create a new employee.
 * HTTP PUT 	: "localhost:8080/employees/{id}" for updating new employee.
 * HTTP DELETE : "localhost:8080/employees/{id}" to delete an employee by employee id.

**Configuration Files**

`WebConfiguration.java` : CORS methods("GET", "POST", "PUT", "DELETE") allowed for development.

`HibernateConfiguration.java` : Hibernate configurations

**Maven Run Configurations**

`mvn spring-boot:run`: clean and run Spring Boot application

`mvn test`: clean and run tests
(Note: Attached test results in ../files/employee-server-test.PNG)