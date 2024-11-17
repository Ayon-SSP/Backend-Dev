# Spring Boot
> 


1. the main class contains anotation which start the application is `@SpringBootApplication`
  @SpringBootApplication -> @Configuration
                         -> @EnableAutoConfiguration
                         -> @ComponentScan

2. IOC: Inversion of Control
  > container which store all the beans( The classes which isanotated with @Component)
  > it basicaly scanns the whold programm and pre-created the objects which class containing @Component. and we can directly use it.

3. Application scanns all the classes that are in the base package


1. @Autowired: depedent injection. auto assigne an object.
2. @EnableAutoConfiguration: auto configuration.
3. @Configuraion: can create @Been function 





SpringBoot best practice architecture
https://medium.com/learnwithnk/best-practices-in-spring-boot-project-structure-layers-of-microservice-versioning-in-api-cadf62bd3459
https://github.com/tomoyane/springboot-bestpractice
https://www.baeldung.com/java-dao-vs-repository