<h1 align="center">Node.js Learning phase<h1>

## Nodejs
Nodejs is a runtime Env. for javascript

### lecture 1
hello.js and main.js file imported... and use

### Lecture 2
file.js
sycn... , async...

we can do any kind of file operation that is not possible in normal js.


### How nodejs works...
- blocking request 
- non blocking request

Sync request can block the thread and execute.
but async request do not block the the thread.

### http server in node.js

<details>
<summary>create server and store log request in the log.txt file</summary>

```javascript
const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} new req\n`;
    fs.appendFile("log.txt" , log , (err , data)=>{
        switch(req.url){
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                res.end("AboutPage");
                break;
            default:
                res.end("404 not found");
                break
                
        }
    })
});
```
</details>

### URL..
### Version
version 4.18.2 =>

frist .  second    .  third
mejor . Recomended . optional

^4.18.2 mean mejor will not change but recomended and optional will update with the current version.

~4.18.2 mean mejor and Recomended will not change but optional will update with the current version.

#### Restfull api..

server and client architechture. request and response.

CSR -> Client Side Rendering. Its not fast enough.

SSR -> Server Side Rendering. Its very fast.

