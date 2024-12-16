# JSON Web Token (JWT) authentication
[YT](https://youtu.be/xrj3zzaqODw?si=M8QE6JMfpBJkZLhQ)
1. public and private cryptography
2. state less and state full(session in the database) mechanisum.
3. Authentication(verify it is you) and authorization(access control)


# JWT token
> JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.
- Bearer `<token>`

## Example JWT Token(https://jwt.io/):
  Encoded | Decoded
```css
header.payload.signature
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9  // Header
.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImV4cCI6MTcxNzAzODAxMn0 // Payload
.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c // Signature
```
1. Header: The header contains metadata about the token, such as the algorithm used for signing and the token type.
    Structure: A JSON object, then Base64URL-encoded.
    ```js
    {
        "alg": "HS256", (algorithm useed)
        "typ": "JWT" (token type)
    }
    ```
2. Payload: The payload holds the claims, which are pieces of information about the user or session. It is also a JSON object, Base64URL-encoded.
    Claims are categorized into:
     1. Registered Claims: Predefined fields like iss (issuer), sub (subject), exp (expiration time), etc.
     2. Public Claims: Custom claims like username, role, or email.
     3. Private Claims: Specific to the application and agreed upon between the parties.
    ```js
    {
        "sub": "1234567890", (user id)index
        "name": "John Doe",
        "admin": true,
        "exp": 1717038012
    }
    ```
3. Signature
   The signature ensures the token's integrity and authenticity. It is created by combining:
    - The Base64URL-encoded header
    - The Base64URL-encoded payload
    - A secret key or private key, hashed using the algorithm specified in the header.
   **Verification Signature:**
    ```js
    HMACSHA256(
       base64UrlEncode(header) + "." + base64UrlEncode(payload),
       secret [...your secret key...] (eg. 256 bit key) -> this will generate the Private Key.
     )
    ```


### Refresh Token:
> JWT Refresh Tokens are used to obtain a new access token without requiring the user to reauthenticate. (renew the access token)
```json
{
    "access_token": "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTczMzQ3Mjk4OSwiZXhwIjoxNzMzNTU5Mzg5fQ.Xb1LVqvRumCnC0qK05LYvRlx8i1QYMgUmRphlutDfxpOnAMWhL4EO-1uX5YHfhdB",
    "refresh_token": "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTczMzQ3Mjk4OSwiZXhwIjoxNzM0MDc3Nzg5fQ.AAFTTHjNuhNpSctXluSFbCTYruygDgzW74eiU_AaJFVLz9pQy5UJHTLNqdn23CRG",
    "message": "User login was successful!"
}
```

- The secret key in JWT (JSON Web Token) is used for signing and validating the token, ensuring its integrity and authenticity
    ```application-dev.properties
    application.security.jwt.secret-key=5a4d4aa353d10573e4c9cc6825daaa02e054fc06e15280e98f7d583bc9d5f47e
    ```
    1. Signing the JWT (to create the signature).
    2. Verifying the JWT (to ensure its authenticity and integrity).


### Advantages:
1. Stateless: No session storage on the server.
2. Scalable: Ideal for microservices and APIs.
3. Secure: Tokens can expire, reducing risk.




December 4nd (Wed):
Added a feature to generate dynamic links for licenses in the format example.com/licenses?selectedLicense=${licenseId} to enable link-based opening of licenses. (Commit: LIC-23) (Jira/LIC)
feat: enhance input field styling with password toggle button customization and fix: Resolve issue with activation key generation returning null values. commits in fix/code-3 branch.