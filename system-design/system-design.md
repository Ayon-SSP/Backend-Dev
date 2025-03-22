
# System Design Primer: 
Index: [List](https://chatgpt.com/share/67cff34d-1518-8013-9c2d-d6641bf143c9)


Terms:
**Web server:** A web server is software that stores, processes, and delivers web pages to clients (like browsers) over the internet using the HTTP/HTTPS protocol. It handles requests from clients and responds with web content (HTML, CSS, JS, images, etc.). Examples: Apache, Nginx, Tomcat, Node.js (used as a server for JavaScript-based apps)



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














## 4. Database Design
> Relational Database (SQL) – Structured data, ACID-compliant (e.g., Oracle, MySQL, PostgreSQL).
> NoSQL Database – Unstructured/semi-structured data, high scalability (e.g., MongoDB, Cassandra).
> Sharding – Splitting data across multiple databases.
> Replication – Creating copies of data to improve availability and fault tolerance.
> Indexing – Improves query performance by creating a lookup table.
> ➡️ Example: Partitioning in PostgreSQL, MongoDB Replica Sets.

### Database sharding: 
Is a horizontal partitioning technique that divides a large database table into smaller, more manageable pieces called "shards," each operating as an independent database with the same schema but containing only a subset of the overall data, thereby enhancing performance, scalability, and manageability by distributing the data load across multiple servers.

**Key Sharding Strategies:**
1. Range-Based Sharding
2. Hash-Based Sharding
3. Directory-Based Sharding

Implementation Steps:











**Pointes:**
1. Shared disk architecture:
    - Multiple Database server
    - Parallel processing on servers (Scalability)
    - If a server fails, client  re-routed to next available server in db cluster
    - servers are connected with Shared Storage infrastructure
2. Replication
	- Replica of server
    - Replicas are further distributed in different geography
    - Client task is distributed between replicas
    - Multiple replica in same location = high availability replica
    - If one replica fails, clients are re-routed to the next available replica
3. Partitioning and Sharding
	- Large data is divided into multiple logical partitions
    - Each partition contains subset of overall data
    - When partitions are placed in separate nodes in clusters = sharding
    - Each shard has computing resource to act as independent system
    - Allows clients to process data parallelly on partitions



**NGINX:** a free, open-source web server that can also be used as a 
  Load balancing, 
  Reverse proxy, 
  Caching,
  Mail proxy,
  Compression,
  Health checks
    TODO: incomplete