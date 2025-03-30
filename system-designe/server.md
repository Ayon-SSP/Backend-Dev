
**Origin server:** An origin server is a computer `running one or more programs` that are designed to listen for and process incoming Internet requests.

**Edge server:** [Link](https://youtu.be/yOP5-3_WFus?si=8LctVNyXOlkwVncR)

# Reverse Proxy and Proxy [YT](https://youtu.be/4NB0NDtOwIQ?si=jk4L4uVX6TCEv7rO)
**Forward Proxy:** 


**Reverse Proxy:** 
> [Reverse Proxy](): 
> A reverse proxy is a `server that sits between the client and the origin server`. It accepts requests from clients and forwards them to the appropriate server. It also receives responses from the server and sends them back to the client. eg tools. NGINX, HAProxy, Apache HTTP Server
- `Client → Reverse Proxy → Backend Service (User, Order, Payment)`
- hides backend servers
- manages traffic efficiently
![Reverse Proxy](https://www.indusface.com/wp-content/uploads/2023/04/Forward-proxy-vs-reverse-proxy-1.png)

**Why Use a Reverse Proxy?**
✅ Load Balancing, Caching, Request Routing, Compression(payload size ⬇️)
✅ Security – Hides backend servers, protects from DDoS attacks.
✅ SSL Termination – Handles SSL encryption, reducing backend workload.











- NGINX 
Reverse proxies can also perform other tasks in front of the origin server, such as 
1. Protects a web site
2. load balancing
3. caching and
4. handles SSL encryption


Next Learning:
1. Edge server, origin server, CDN
2. ssl termination
3. Forward Proxy
4. S3 bucket