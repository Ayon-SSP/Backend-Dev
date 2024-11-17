
```
JPA, Hibernate, and Spring Cheat Sheet
This cheat sheet covers core concepts of JPA, Hibernate (a popular JPA provider), and Spring integration for data persistence.

JPA Annotations:

@Entity: Marks a class as an entity mapped to a database table.
@Table: Specifies the table name associated with the entity (optional, defaults to class name).
@Id: Marks a field as the primary key of the entity.
@GeneratedValue: Specifies strategy for generating primary key values (e.g., IDENTITY for auto-increment).
@Column: Defines mapping for a database column (e.g., name of the column).
@Transient: Excludes a field from being persisted.
Relationships:

@OneToOne: One-to-one relationship between two entities.
@OneToMany: One-to-many relationship between two entities (often with a foreign key on the "many" side).
@ManyToOne: Many-to-one relationship between two entities (often with a foreign key on the "many" side).
Spring Data JPA:

Repositories: Interfaces extending CrudRepository or JpaRepository provide basic CRUD operations (Create, Read, Update, Delete) for entities.
@Repository: Marks an interface as a repository bean managed by Spring.
Custom finder methods: Spring Data JPA automatically implements finder methods based on naming conventions (e.g., findByFirstName).
Additional Annotations:

@Cacheable/@Cache: Enables caching for entities or collections.
@Formula: Defines a computed property using an SQL formula.
@NaturalId: Marks a property as a natural identifier (alternative to primary key).
@Filter/@Where: Defines filters or WHERE conditions for collections.
Hibernate Annotations (beyond JPA):

@Type: Specifies the Hibernate type for a property (useful for non-standard data types).
@Any: Maps a polymorphic association to any entity type.
@TypeDef: Defines a custom Hibernate type.
Resources:

JPA Annotations Cheat Sheet: https://www.javaguides.net/p/hibernate-tutorial.html
Learn Spring: Spring Data and JPA Cheatsheet: https://www.codecademy.com/learn/spring-apis-data-with-jpa/modules/data-strategies/cheatsheet
```

```java
package com.licenseing.entity;

import com.licenseing.utils.Role;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(unique = true)
    private String email;

    private String password;

    private String status;

    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "user")
    private List<Token> tokens;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

```


### Cascade
```java


```

### Joins
```java
@Entity
public class Course {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;

  @OneToMany(mappedBy = "course") // Mapped by refers to the field in Student | wher 'course' is same name as in the Student's course
  private List<Student> students;

  // Getters and Setters...
}
```
```java
@Entity
public class Student {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;

  @ManyToOne(cascade = CascadeType.ALL) // Many students belong to one Course
  @JoinColumn(name = "user_id") // Custom name for foreign key
  private Course course;

  // Getters and Setters...
}
```



### @Cacheable/@Cache:
```java
@Cache(cacheNames = "userCache") // Cache all methods in this repository
public interface UserRepository extends JpaRepository<User, Long> {

  User findByName(String name);

  List<User> findByEmail(String email);
}
```
```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  @Cacheable(cacheNames = "users") // Cache results in "users" cache
  User findByName(String name);
}
```
### @Formula
```java
@Entity
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private Double price;
  private Double discountPercentage;

  @Formula("(price * (1 - discount_percentage))") // SQL expression
  private Double discountedPrice;

  // Getters and Setters...
}
```


### 

```java
repo.findByEmail(String email)
repo.findByNameContaining(String name)

// update
User existingUser = userRepository.findById(userId).get();
existingUser.setName("Jane Doe");
userRepository.save(existingUser);

userRepository.deleteById(userId);
```