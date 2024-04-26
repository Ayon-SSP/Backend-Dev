## HTTP
> [docs/Web/HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
1. **HTTP** is a protocol that allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.
2. set of rules helps browser and server talk to each other.
3. **HTTP Request** is made up of three parts:
    1. **Request Line**: Contains the request method, the URL, and the HTTP version.
    2. **Request Headers**: Contains additional information about the request, such as the browser making the request, the server the request is being made to, and the type of response the browser is expecting. Meta data about the request.
    3. **Request Body**: Contains the data that is being sent to the server.

4. **HTTP Methods**: GET, HEAD, OPTIONS are safe and idempotent methods whereas PUT and DELETE methods are only idempotent. POST and PATCH methods are neither safe nor idempotent.
    1. **GET**: Requests data from a specified resource
    2. **POST**: Submits data to be processed to a specified resource
    3. **PUT**: Updates a specified resource
    4. **DELETE**: Deletes a specified resource
    5. **HEAD**: Same as GET but does not return a body
    6. **OPTIONS**: Returns the supported HTTP methods
    7. **PATCH**: Update partial resources
    8. **CONNECT**: Establishes a tunnel to the server
    9. **TRACE**: Echoes back the received request
5. **HTTP Status codes:** [Link](https://www.interviewbit.com/rest-api-interview-questions/#http-status-codes)
    These are the standard codes that refer to the predefined status of the task at the server. Following are the status codes formats available:
    1. 1xx - represents informational responses
    2. 2xx - Success
    3. 3xx - represents redirects
    4. 4xx - something wrong with out request
    5. 5xx - something wrong with the server level
    6. 200 - success/OK
    7. 201 - CREATED - used in POST or PUT methods.
    8. 304 - NOT MODIFIED - used in conditional GET requests to reduce the bandwidth use of the network. Here, the body of the response sent should be empty.
    9. 400 - BAD REQUEST - This can be due to validation errors or missing input data.
    10. 401- UNAUTHORIZED - This is returned when there is no valid authentication credentials sent along with the request.
    11. 403 - FORBIDDEN - sent when the user does not have access (or is forbidden) to the resource.
    12. 404 - NOT FOUND - Resource method is not available.
    13. 500 - INTERNAL SERVER ERROR - server threw some exceptions while running the method.
    14. 502 - BAD GATEWAY - Server was not able to get the response from another upstream server.

6. Authentication: [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
    ![HTTP Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication/http-auth-sequence-diagram.png)
7. HTTP caching: [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)
8. HTTP cookies: [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)