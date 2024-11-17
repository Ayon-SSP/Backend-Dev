## 📅 Day 0
Prefere: **mavion** you just need to update .pom file and done ✅. 

projects:
1. spring web
2. spring data jpa: to connect with db
3. Lombok: snipites.
...
3. spring security
4. lombok: snipites.
> POJO: exp and tool

.pom file `config file`

starter .java file. 
Folder resources:
  application.properties: 
    1. set the api protocal domain.
    2. db configuration details (maybe)


client -> https -> controler -> service layer ..
spring Boot flow arc.


MVC -> client -> controller -> service layer -> (Model, DAO)
                                                    |
                                                    DB, API endpoint.

**Model classes**: pojo classes of entity.
@Entity
eg. (I)Users
      Admin, Customer, other user (authorization)

**Repository**:
  Interfaces


**service layer**:
  
control
    



ORM: Object Relational Mapping
  - Hibernate
  - JPA
  - Spring Data JPA


## 📅 Day 1
controller: Using ORM
UserControler.java

```java
@RestController
@RequestMapping("/api/v1/users")
public class UserControler {
  @Autowired
  private final UserService userService;
  private final UserRepository repo;

  @GetMapping
  public List<User> getAllUsers() {
    return repo.findAll();
  }

  @PostMapping
  public User createUser(@RequestBody User user) {
    return userService.createUser(user);
  }

  ...
}

```


controler
  pathvariable, get, post, 
model
  User model(getter setters) -> User.java.
repository
service



## 📅 Day 2
> spring security [Link]()

1. Security







[accessing-data-mysql](https://spring.io/guides/gs/accessing-data-mysql)