## Backend Servers
> ![backend servers](https://github.com/user-attachments/assets/21f0fc3d-ccf6-4bba-be15-339eb49899c5)
**Origin server:** An origin server is a computer `running one or more programs` that are designed to listen for and process incoming Internet requests.


**Edge server:** [Link](https://youtu.be/yOP5-3_WFus?si=8LctVNyXOlkwVncR) eg. [EdgeStore](https://edgestore.dev/)
**CDN** (Content Delivery Network):  [YT](https://youtu.be/RI9np1LWzqw?si=HcTgz8PJ6yW7eHiu)
![CDN Edge Server](https://github.com/user-attachments/assets/c062d15d-597d-4b81-9c4f-72372df4d90b)
  ✅ Use to speed up the delivery of static HTML content for users all around the world.
  ✅ CDN should be used whenever HTTP traffic is served.
  ✅ To bring service closer to the users, CDN deploys servers at hundreds of locations all over the world. and thease server locations are called `PoP(Point of Presence)`, server inside a PoP is `Edge server`.
  ✅ Different CDNs use different technologies to direct user's request to the closest PoP.
    📌 2 common ones are:
        1. DNS-based routing each PoP has its own IP address
        2. AnyCast network: all PoP share the same IP address
  ✅ Each edge server acts as a reverse proxy with a huge content cache
  ✅ Edge server acts as a reverse proxy, and it holdes huge content cache.
  ✅ https://youtu.be/RI9np1LWzqw?t=122
  ✅ CDN can provide protection for DDos attaction.
  ✅ Catching (copy of the static content) | image resizing | video transcoding | SSL termination | load balancing | web application firewall
  ✅ Fault tolerance: if one edge server goes down, the CDN can route traffic to another edge server in the same PoP or a different PoP.

💡 `CDNs` use `edge servers` to store and deliver content quickly to users from the nearest location



## Reverse Proxy and Proxy [YT ByteByteGo ***](https://youtu.be/4NB0NDtOwIQ?si=jk4L4uVX6TCEv7rO)

**Forward Proxy:** 
> ![Forward Proxy](https://github.com/user-attachments/assets/6310dcab-b9aa-45ae-b131-5e735c48dfbd):
> A forward proxy is a `server that sits between the group of clients machines and the internet`. When those clients make a request to websites on the internet, the forward proxy acts as a middleman intercepting those requests and talks to the web servers on behalf of the clients machines.
**Why Use a Forward Proxy?**
  ✅ Protects the client's online identity and location. [short part](https://youtu.be/4NB0NDtOwIQ?t=36)
  ✅ bypassing the firewall, it can be used to access blocked content.(eg. GT doesn't allow `github.com`)
  ✅ Blocks access to certain websites or content. - filtering rules, for this the every clients maching should be pointing to the forward proxy server.

**Reverse Proxy:** 
> ![Reverse Proxy](https://github.com/user-attachments/assets/e6a1fa74-362e-45c5-a949-a3bf97a2a960): 
> A reverse proxy is a `server that sits between the client and the origin server`. It accepts requests from clients and forwards them to the appropriate server. It also receives responses from the server and sends them back to the client. eg tools. NGINX, HAProxy, Apache HTTP Server
- `Client → Reverse Proxy → Backend Service (User, Order, Payment)`
- Hide IP address of the backend servers. -- eg. Origin server, Web server A, Web server B, Web server C.
- manages traffic efficiently
![Reverse Proxy](https://www.indusface.com/wp-content/uploads/2023/04/Forward-proxy-vs-reverse-proxy-1.png)

**Why Use a Reverse Proxy?**
  ✅ Load Balancing, Caching, Request Routing, Compression(payload size ⬇️)
  ✅ Security – Hides backend servers, protects from DDoS attacks.
  ✅ Handles SSL encryption – `https://`, reducing Origin server load or other distributed servers.











- NGINX 
Reverse proxies can also perform other tasks in front of the origin server, such as 
1. Protects a web site
2. load balancing
3. caching and
4. handles SSL encryption
5. Microservices https://youtu.be/lTAcCNbJ7KE?si=icGPSeKSdOGMtkqX
6. Serverless architecture


Next Learning:
1. Edge server, origin server, CDN
2. ssl termination
3. Forward Proxy
4. S3 bucket