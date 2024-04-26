## Json
1. JSON objects are used for server-client data transfer, It's a format for the data storage and exchange.
2. lightweight, text, written in JavaScript, language independent, Easy to read and write
3. name/value pairs, file extension is `.json` | MIME type for JSON text is `"application/json"`
4. **JSON RPC**: It is a simple remote procedure call protocol same as XML-RPC although it uses the lightweight JSON format instead of XML
5. **JSON Parser**: JSON parser is used to parse the JSON data into objects to use its value. It can be parsed by javaScript, PHP and jQuery
6. **JSONP:** JSON with Padding. | `https://www.example.com/jsonp?callback` -> (json) -> `myFunction(json)`.
```js
let myFunction = (data) => {
  console.log(data);
}
<script src="https://www.example.com/jsonp?callback=myFunction"></script>
// where myFunction is a function that will be called when the JSON data is loaded

```
7. ⚠️ It does not contain type definition
**Data types supported by JSON includes**
    1. Number
    1. String
    1. Boolean
    1. Array
    1. Object
    1. Null

eg:
```json
{
    "string": "This is a string",
    "number": 42,
    "boolean": true,
    "array": [1, 2, 3],
    "object": {
        "nested_string": "Nested string value",
        "nested_number": 123,
        "nested_boolean": false,
        "nested_array": ["apple", "banana", "orange"],
        "nested_object": {
            "inner_string": "Inner string value",
            "inner_number": 456
        }
    },
    "null_value": null,
    "empty_array": [],
    "empty_object": {},
    "unicode_string": "Unicode: \u00E7\u00F6\u00FC\u011F",
    "date": "2024-04-26",
    "time": "15:30:00",
    "datetime": "2024-04-26T15:30:00",
    "escaped_string": "This string contains \"quotes\" and \\/backslashes\\/",
    "multiline_string": "This is a\nmultiline\nstring",
    "base64_encoded_data": "SGVsbG8gV29ybGQh",
    "url": "https://www.example.com",
    "regular_expression": "/^\\d+$/",
    "big_integer": 9007199254740991,
    "scientific_notation": 1.23e-4,
    "infinity": Infinity,
    "-infinity": -Infinity,
    "not_a_number": NaN
}

```
```js
var json_obj = {
  "name": "John",
  "age": 30,
  "city": "New York",
  "Language": ["English", "French"],
  "married": false,
  "spouse": null,
  "children": [
      {
          "name": "Jane",
          "age": 5
      },
      {
          "name": "John",
          "age": 7
      }
  ]
};

console.log(json_obj["children"][0]);
var json_str = JSON.stringify(json_obj);
var json_obj2 = JSON.parse(json_str);
```


**Headers:** These can be used to provide extra context for our request, prove our permission to access resources, or for other important metadata
```js
const options = {method: 'GET',
headers: {accept: 'application/json'}};

fetch('https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=XXX, options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));
```
```py
import requests

url = "https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=XXX"
headers = {"accept": "application/json"}
response = requests.get(url, headers=headers)

print(response.text)
```
```js
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});

fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```