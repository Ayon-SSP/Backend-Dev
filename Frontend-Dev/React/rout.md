# useRouter Hook in Next.js

The `useRouter` hook in Next.js comes from the `next/router` module and allows you to access the router object inside your components. This is useful for navigation, getting query parameters, and handling route changes.

## Usage

First, import the hook in a functional component:

```jsx
"use client"; // Needed for Next.js 13+ (App Router)

import { useRouter } from "next/navigation";

const MyComponent = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <div>
      <button onClick={navigateToHome}>Go to Home</button>
    </div>
  );
};

export default MyComponent;
```

---

## Key Methods of `useRouter`

| Method               | Description                                       |
|----------------------|---------------------------------------------------|
| `router.push(url)`   | Navigates to a new route.                        |
| `router.replace(url)` | Replaces the current history state (no back navigation). |
| `router.prefetch(url)` | Prefetches a page for faster loading.         |
| `router.reload()`    | Reloads the current page.                        |
| `router.back()`      | Goes back to the previous page.                  |
| `router.forward()`   | Goes forward in history.                         |

---

## Accessing Query Parameters

If you're using the **Pages Router (Next.js 12 or earlier)**:

```jsx
import { useRouter } from "next/router";

const MyComponent = () => {
  const router = useRouter();
  const { id } = router.query; // Access query params

  return <div>Product ID: {id}</div>;
};

export default MyComponent;
```

For **App Router (Next.js 13+ with Server Components)**, use:

```jsx
import { useSearchParams } from "next/navigation";

const MyComponent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return <div>Product ID: {id}</div>;
};

export default MyComponent;
```
## When to Use `useRouter` vs `usePathname`

- **`useRouter`** → Used for navigation.
- **`usePathname`** → Used to get the current path (`next/navigation`).
- **`useSearchParams`** → Used to get query parameters.

