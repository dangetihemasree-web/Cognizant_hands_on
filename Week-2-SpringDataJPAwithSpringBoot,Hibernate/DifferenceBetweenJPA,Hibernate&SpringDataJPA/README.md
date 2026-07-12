# Week 2: Spring Data JPA & Hibernate Object-Relational Mapping (ORM)

This module demonstrates the core configuration and foundational setup required to map Java classes directly to a MySQL database schema using Spring Data JPA and Hibernate.

-> Key Features Implemented
* **Automated Schema Generation:** Configured Hibernate's Data Definition Language (`ddl-auto=update`) property to automatically create relational database tables at runtime based on Java entity models.
* **Database Connection Pooling:** Utilized Spring Boot's default HikariCP connection pool for robust, high-performance database communication.
* **Component Scanning Realignment:** Explicitly configured packaging properties (`hibernate.scan.packages`) to seamlessly scan models outside the standard default base package string constraints.

 -> Structural Overview
The exercise features three key files uploaded inside this directory:
1. `Employee.java` - The concrete `@Entity` class mapping properties directly to columns inside the MySQL `employee` table.
2. `EmployeeRepository.java` - A data layer architecture abstraction extending `JpaRepository` to unlock built-in CRUD operations.
3. `application.properties` - Centralized configuration credentials specifying datasource parameters, dialect definitions, and logging rules.

 -> Verification Logs
During execution, Hibernate parsed the entity model definitions and successfully fired the underlying SQL queries onto the database schema engine:

```text
DEBUG org.hibernate.SQL : 
    create table employee (
        id integer not null auto_increment, 
        name varchar(255), 
        primary key (id)
    ) engine=InnoDB
INFO o.s.b.SpringApplication : Started OrmLearnApplication in 11.633 seconds
