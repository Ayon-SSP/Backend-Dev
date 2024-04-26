### Data Storage
1. **Cookies**: Small piece of data stored in the user's computer by the web browser while browsing a website. Cookies were designed to be a reliable mechanism for websites to remember stateful information or to record the user's browsing activity.
1. **Local Storage**: The localStorage and sessionStorage properties allow to save key/value pairs in a web browser. The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.
1. **Session Storage**: The sessionStorage object stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.
1. **IndexedDB**: IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data.
1. **Web SQL**: Web SQL Database is a web page API for storing data in databases that can be queried using a variant of SQL. The API is supported by Google Chrome, Opera, Safari, and the Android Browser.

#### Cookies
> go to notes for more details. && [HTTP & Cookies Must watch advanced](https://youtu.be/s04Vjlcgwco?si=2LILTvPDvzgho92P)
1. 4kb size limit
1. First party(user data) and 3ed party cookies(ads).
4. can be read and write by client-side and server-side.
5. can be read by the clients.
```js
document.cookie
setcookie(name, value, expire, path, domain, secure, httponly);
$_COOKIE[name]
setcookie("user","Yahoo",time() + (86400*30),"/",domain="True(default)",secure,httponly);
$_COOKIE["user"]    // Yahoo   to check|| if isset($_COOKIE["user"]) echo "set" else "not"
```
#### Sessions
> go to notes for more details. && [Sessions](https://youtu.be/9l3z9j4J9cY?si=2LILTvPDvzgho92P)
1. A session is a way to store information (in variables) to be used across multiple pages.
2. Unlike a cookie, the information is not stored on the users computer.
3. session storage get's cleared when the browser is closed.
4. session data is stored on the server.
5. 5mb size limit.
6. it works per window
```php
session_start();
$_SESSION[name] = value;
$_SESSION["favcol"] = "orange";
print_r($_SESSION);   -> Array([favcol]=>orange)
session_unset(); // remover all session variables
session_destroy();
```
> ![image](https://github.com/Ayon-SSP/Ayon-SSP/assets/80549753/04ac0a38-3a52-4074-9c32-6f188199e87b)
#### Local Storage
1. local storage data is cleared if the page is closed.
2. does not expire. need to manually remove.
3. 5mb size limit.
4. only localstorage can be read by the clients.
```js
localStorage.setItem("name", "John");
localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.clear();
```
Difference between: [YT](https://youtu.be/TyjJsSBLijc?t=296)
