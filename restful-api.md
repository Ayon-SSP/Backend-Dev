## REST API
> [REST API YT](https://youtu.be/-mN3VyJuCjM?si=w53Q_eJZb9WZzXha) + [IntervieBit](https://www.interviewbit.com/rest-api-interview-questions/#http-status-codes)
> Rest is the most common communication standard between computers over internet.

API: Application Programming Interface: a way for two computers talk to each other.

**REST:**
1. [json.md](json.md) + [http.md](http.md)
2. Representational State Transfer
3. the common API standard used by most mobile and web applications to talk to servers is called REST API.
4. An API that follows the REST standard is called a RESTful API.
5. post is `not idempotent` because it creates a new resource every time it is called | Get, put, delete, head, options are `idempotent` because they do not change the state of the server. | [Link](https://www.interviewbit.com/rest-api-interview-questions/#what-are-idempotent-methods-and-explain-its-relevancy-in-restful-web-services)
6. [core components of HTTP Request & Response 6. & 7.](https://www.interviewbit.com/rest-api-interview-questions/#core-components-of-http-request)
7. [put-vs-post](https://www.interviewbit.com/rest-api-interview-questions/#put-vs-post)
8. [idempotent and safe HTTP methods](https://www.interviewbit.com/rest-api-interview-questions/#difference-between-idempotent-and-safe-http-methods) | Safe methods are those that do not change any resources internally |
9. payload size: not in get and delete, but in post and put. sending data in the body of the request.
10. Not possible to maintain sessions in REST on the server-side. | REST is stateless, meaning that each request is independent and does not rely on any previous.

URI's
    1. Uniform Resource Identifier:
    > <protocol>://<service-name>/<ResourceType>/<ResourceID>
    URI = URL + URN
    ![img](https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/462/original/uri_example.png?1622557125)
    eg. https://example.com/api/v3/users
    eg. https://example.com/api/v3/products

    /users ✅ | /getUsers ❌



    Client                              ->                Server
    POST /Procucts HTTP/1.1
    Accept: 'application/json'
    ___________________________       ------------>
    {
        "name": "Product 1",
        "price": 100,
        "quantity": 10
    }

                                     <------------
                              HTTP/1.1 201 Created

    GET /Products/1 HTTP/1.1
    Accept: 'application/json'
    __________________________

1. Rest API is stateless, meaning that each request is independent and does not rely on any previous request. so easylly scalable and reliable.
To well behave REST API:
    1. if ther is to much of data, use pagination.
        `/products?limit=25&offset=50`
    2. versioning of api is very importent.
        `/api/v1/products`
2. some best practices: [Link](https://www.interviewbit.com/rest-api-interview-questions/#best-practices-for-developing-restful-web-services)
Also explore
    1. GraphQL
    2. SOAP
    3. gRPC
    4. AJAX: AJAX - Asynchronous javascript and XML 🤯. | AJAX is used for dynamic updation of UI without the need to reload the page. | ⚠️ MUST LEARN
    5. Web Socket: Real-time communication, communication is bi-directional.


### Optimizing API:
> [Link YT Short](https://youtube.com/shorts/b4TpO9pYpqk?si=7ZxKfiCIAQMT9fKT)
1. Use Pagination: limit the number of items returned in a single response.
2. asynchroneous logging: log the request and response in a separate thread.
3. Caching: cache the response of the API. use redis or memcached.
4. Payload Compression: compress the response payload.