
**Origin server:** An origin server is a computer `running one or more programs` that are designed to listen for and process incoming Internet requests.

**Edge server:** [Link](https://youtu.be/yOP5-3_WFus?si=8LctVNyXOlkwVncR)

# Reverse Proxy and Proxy [YT](https://youtu.be/4NB0NDtOwIQ?si=jk4L4uVX6TCEv7rO)
**Forward Proxy:** 
> [Reverse Proxy](https://www.indusface.com/blog/what-is-reverse-proxy/): A reverse proxy is a `server that sits between the client and the origin server`. It accepts requests from clients and forwards them to the appropriate server. It also receives responses from the server and sends them back to the client.
![Reverse Proxy](https://www.indusface.com/wp-content/uploads/2023/04/Forward-proxy-vs-reverse-proxy-1.png)
- NGINX 
Reverse proxies can also perform other tasks in front of the origin server, such as 
1. Protects a web site
2. load balancing
3. caching and
4. handles SSL encryption


[Figma Dev mode](https://help.figma.com/hc/en-us/sections/15023066873239-Dev-Mode)

SSG, SSR, CSR: Special Service Group, static Generating(pre-rendring)
Single Page Application (SPA), Server-Side Rendering (SSR), and Static Site Generator (SSG), Incremental Static Regeneration (ISR), Client-Side Rendering (CSR)
1. SEO: short for search engine optimization.
2. CSR: Stands for Client-Side Rendering, which was used for dynamic single-page applications but can have slower initial loads and SEO issues
3. SSG: Static Site Generation pre-renders all pages during build time, which can result in fast load times. This technique is ideal for high-traffic websites that need to be fast and scalable.
4. SSR: Server-Side Rendering returns rendering to the server, which can improve initial load times and SEO. However, SSR can be slower because it requires server-side calculation for each request.
5. ISR: Incremental Static Regeneration updates static content dynamically without rebuilding the entire site. This can reduce server load and improve user experience. ISR is a good choice for websites with dynamic content that doesn't change frequently, such as blogs or personal websites.
CDN (Content Delivery Network)


[YT Next js short's](https://www.youtube.com/shorts/Rpr-epDYNN4)


**CDN** (Content Delivery Network):  [YT](https://youtu.be/RI9np1LWzqw?si=HcTgz8PJ6yW7eHiu)
  - use to speed up the delivery of static HTML content for users all around the world.
  - CDN should be used whenever HTTP traffic is served.
  - To bring service closer to the users, CDN deploys servers at hundreds of locations all over the world. and thease server locations are called PoP(Point of Presence) `Edge server` server inside the PoP.
  - different CDNs use different technologies to direct user's request to the closest PoP.
    - 2 common ones are 
        1. DNS-based routing each PoP has its own IP address
        2. AnyCast network: all PoP share the same IP address
   - each edge server acts as a reverse proxy with a huge content cache
   - Edge server acts as a reverse proxy, and it holdes huge content cache.
   - https://youtu.be/RI9np1LWzqw?t=122

1. CDN can provide protection for DDos attaction.
2. CDN has high availability.
3. CDN can reply to user’s requestion from the nearest PoP.


# OAuth 2
> [Link](https://youtu.be/ZV5yTm4pT8g?si=CnamTMzd1l0s4gDA)

### React:
1. treditional react app is rendered client side where the browser starts with a shell of an html page lacking any rendered content from there the browser fetches the javascript file containing the react code to render content to the page and make it interactive 
   - but there are 2 major drawback with client side rendering
     1. content is not reliably indexed by all search engines or read by social media link bots.
     2. it can take longer to reach the first contentful paint when a user first lands on the web page 
so, it's the best of both worlds fully rendered content for bots highly interactive content for user
Next is framewor that allows you to build a react app but render the content in advance on the server so the first thing a user or search bot sees is the fully rendered html after receiving this initial page client side rendering takes over and it works just like a traditional React app


# Next JS
> Next.js is a powerful framework built on top of React that provides a variety of features, such as server-side rendering (SSR), static site generation (SSG), and hybrid rendering, making it a great choice for e-commerce projects.
> create fast search engine optimize react apps with 0 configurations

**Static generation:** render all pages at build time or pre rendering.
  - send all propes to components and render out all the html locally and upload it to the storage bucket where it can easyly catch *CDN* 
  ```javascript
  export async function getStaticProps() {
    const req = await fetch(`/some-api`);
    const car = await req.json();

    return {
      props: { car },
    }
  }

  export default function Car({ car }) {
    return <h1> {car.make}</h1>
  }
  ```
1. pages rapedly changing data -> server side rendering
   ```javascript
   getServerSideProps() {
    ... // request time
   }
   ```
2. static pages Pop(Edge server) CDN catch 
   build time use multiple times for different clientes
3. INCREMENTAL STATIC REGENERATION ->
   - re-generate single pages in the background.
   - ```javascript
        return {
      export async function getStaticProps() {
          props: { car },
          revalidate: 30 // 30 seconds
        }
      }
     ```


SSG vs SSR vs ISR.


```bash
npx create-next-app
  
```


SSG(static Generation) vs SSR(server side rendering) vs ISR
Static Generation
```javascript
export async functioh getStaticProps({ params }) { -> tells next to prerender page
  const req = await fetch(`http://localhost:3000/${params.id}.json`);

}
```



