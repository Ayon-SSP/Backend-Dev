# Advanced API Client Configuration with Axios and JWT Refresh Token Handling in React
> In modern web development, efficiently managing API calls and ensuring secure, uninterrupted communication with backend services are paramount. For React developers, leveraging Axios for HTTP requests coupled with robust JWT token management can elevate your application's reliability and security. This article delves into an advanced setup for an Axios API client with JWT token refresh capabilities, followed by a practical example of creating a product with Redux.

**Setting Up the Axios Instance**
To start, we configure Axios with a base URL and JSON headers. This provides a centralized configuration, simplifying API interaction:
```js
import axios from 'axios';
import store from '../app/store';
import { refresh_token, logout } from '../app/index';

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
apiClient.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.access_token;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```

**Adding Response Interceptors**
Response interceptors handle token expiry scenarios by intercepting 401 responses. The interceptor attempts to refresh the token and retry the original request, providing seamless user experience:
```js
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await store.dispatch(refresh_token());
        const token = store.getState().auth.access_token;
        originalRequest.headers['Authorization'] = `Bearer ${token}`;
        return apiClient(originalRequest);
      } catch (err) {
        store.dispatch(logout());
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
```
**Practical Application: Creating a Product with JWT Handling**
Leveraging the configured apiClient, we can create complex actions in Redux. Below is an advanced example of creating a product, complete with toast notifications for user feedback and comprehensive error handling:
```js
import { CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE } from '../constants/productConstants';
import apiClient from '../utils/apiClient';
import { toast } from 'react-toastify';

export const createProduct = (productData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_PRODUCT_REQUEST });
    
    try {
      const createPromise = apiClient.post('/products', productData);

      toast.promise(
        createPromise,
        {
          loading: 'Creating product...',
          success: <b>Product created!</b>,
          error: ({ response }) => {
            if (response?.status === 401) {
              return <b>Unauthorized access.</b>;
            } else {
              return (
                <p>Could not create product: <b>{response?.data?.error || 'Error creating product.'} [{response?.status}]</b></p>
              );
            }
          },
        }
      );

      const response = await createPromise;
      dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: response.data });

    } catch (error) {
      if (error.response && error.response.status === 400) {
        dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.response.data.details });
      } else {
        console.error('Error creating product:', error);
      }
    }
  };
};
```

## Conclusion

This advanced setup for an Axios API client with JWT refresh token handling and Redux integration exemplifies a robust solution for managing API requests in a React application. By intercepting requests and responses, we ensure secure, seamless communication with our backend, enhancing both user experience and application reliability.

Feel free to integrate and modify this setup according to your project needs, and elevate your API interactions to a professional level. For further enhancements, consider adding custom error handling middleware and additional security measures like token encryption.

Happy coding!