
# System Design Primer: 

### Scalability
1. **Vertical scaling:** Optimize process and increase throughput with the same resources.
2. **Pre-Processing:** (Cron job)Preparing before hand at non-peek hours

### Resilience(recovering from failures quickly).
3. **Backup:** Keep backup's and avoid single point of failer
4. **Horizontal scaling:** Use more resources (more machines).

### Fault tolerance:
> in system design is the ability of a system to continue operating without interruption when a component fails.
5. **Microservices Architecture:** A type of distributed system architecture that breaks down an application into separate components, or services, that handle specific tasks.
6. **Distributed systems:** Collection of nodes or servers that work together to perform a function.
7. **load balancer:** a device that distributes network traffic across multiple resources to improve processing efficiency and application availability | works smart way and redirect's the requeste's with less traffic or best path to get response quickly.

### Future-proof:
8. **Decoupling:** handel seprate systems more efficiently eg. delevery agent and food restorent.
9. **logging and Metrics calculation:**
10. **Extensibility** 




**HLD:** (High level system designes)(talking on top)
**LLD:** (Low level system designes) | deper code level stuff | class diagram | function | Schema designe | ...


## Horizontal vs Vertical Scaling

| **Horizontal Scaling**         | **Vertical Scaling**        |
|------------------------------- |-----------------------------|
| 1. Load balancing required     | N/A                         |
| 2. Resilient                   | Single point of failure     |
| 3. Network call (RPC)          | Inter-process Communication |
| 4. Data Inconsistency          | Consistent                  |
| 5. Scales well                 | Limited by hardware         |