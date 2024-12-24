# Advanced API Client Configuration with Axios and JWT Refresh Token Handling in React
> In modern web development, efficiently managing API calls and ensuring secure, uninterrupted communication with backend services are paramount. For React developers, leveraging Axios for HTTP requests coupled with robust JWT token management can elevate your application's reliability and security. This article delves into an advanced setup for an Axios API client with JWT token refresh capabilities, followed by a practical example of creating a product with Redux.

**Setting Up the Axios Instance**
To start, we configure Axios with a base URL and JSON headers. This provides a centralized configuration, simplifying API interaction:
```js
import axios from 'axios';
import store from '../app/store';
import { refresh_token, logout } from '../app/index';

// Create an Axios instance with a base URL and default JSON headers
const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1/`,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

**Adding Request Interceptors**
Request interceptors allow us to automatically attach the JWT token to every outgoing request, ensuring secure endpoints are always accessed with proper authorization:

```js
// Add a request interceptor to attach the JWT token to every outgoing request
apiClient.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.access_token; // Get the token from Redux store
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Add the Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); // Handle request errors
  }
);
```

**Adding Response Interceptors**
Response interceptors handle token expiry scenarios by intercepting 401 responses. The interceptor attempts to refresh the token and retry the original request, providing seamless user experience:
```js
// Add a response interceptor to handle 401 errors and refresh the token
apiClient.interceptors.response.use(
  (response) => {
    return response; // Return the response if it's successful
  },
  async (error) => {
    const originalRequest = error.config;

    // Check for 401 status and ensure we haven't retried this request already
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh the token
        await store.dispatch(refresh_token());
        const token = store.getState().auth.access_token;

        // Update the Authorization header and retry the original request
        originalRequest.headers['Authorization'] = `Bearer ${token}`;
        return apiClient(originalRequest);
      } catch (err) {
        // Logout the user if token refresh fails
        store.dispatch(logout());
        return Promise.reject(err);
      }
    }

    return Promise.reject(error); // Handle other errors
  }
);

export default apiClient;
```
**Practical Application: Creating a Product with JWT Handling**
Leveraging the configured apiClient, we can create complex actions in Redux. Below is an advanced example of creating a product, complete with toast notifications for user feedback and comprehensive error handling:
```js
// actions/dataActions.js

import {
  CREATE_DATA_REQUEST,
  CREATE_DATA_SUCCESS,
  CREATE_DATA_FAILURE,
} from '../constants/dataConstants';
import apiClient from '../utils/apiClient';
import { toast } from 'react-toastify';

export const createData = (dataPayload) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_DATA_REQUEST });

    try {
      // Make the API call to create data
      const createPromise = apiClient.post('/data', dataPayload);

      // Show toast notifications for user feedback
      toast.promise(createPromise, {
        loading: 'Uploading data...',
        success: <b>Data successfully uploaded!</b>,
        error: ({ response }) => {
          if (response?.status === 401) {
            return <b>Unauthorized access.</b>;
          }
          return (
            <p>
              Could not upload data: <b>{response?.data?.error || 'Error uploading data.'} [{response?.status}]</b>
            </p>
          );
        },
      });

      // Await the API response
      const response = await createPromise;
      dispatch({ type: CREATE_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      // Handle errors and dispatch failure action
      if (error.response?.status === 400) {
        dispatch({ type: CREATE_DATA_FAILURE, payload: error.response.data.details });
      } else {
        console.error('Error uploading data:', error);
      }
    }
  };
};
```

## Conclusion

This advanced setup for an Axios API client with JWT refresh token handling and Redux integration exemplifies a robust solution for managing API requests in a React application. By intercepting requests and responses, we ensure secure, seamless communication with our backend, enhancing both user experience and application reliability.

Feel free to integrate and modify this setup according to your project needs, and elevate your API interactions to a professional level. For further enhancements, consider adding custom error handling middleware and additional security measures like token encryption.

Happy coding!