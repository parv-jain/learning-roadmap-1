## Learning Plan August 2022
- v8 internals
- object lifecycle
- gc cycle
- Design patterns

## Debugging Memory leaks in Node.js
- Application Server: src/app/index.js
- Run application server with --trace_gc flag: node --trace_gc src/app/index.js
- The application here is very simple and has a very obvious leak. The array tasks would grow over application lifetime causing it to slow down and eventually crash. The problem is that we are not only leaking closure but entire request objects as well.
- GC in V8 employs stop-the-world strategy, therefore it means more objects you have in memory the longer it will take to collect garbage. People who are trying to access our application would have to wait longer after some hundred thousand requests because of GC. Also, GC is invoked every few seconds which means that every few seconds users would experience problems accessing our application. And delay will grow up until application crashes.

### Node.js Memory leak Debugging using Chrome Dev Tools
- Run node application with --inspect flag to enter into inspector mode.
- Go to chrome://inspect on your browser, and you can now inspect your application.

## Design Patterns
- Designing object oriented software - How to structure your classes? and how these classes should collaborate?
- Focus is on building **reusable** and **extensible** object oriented software.
- Design patterns are elegant solutions to repeating problems in software design.

## Design Pattern Categories
### Creational
- Different ways to create objects.
### Structural
- Relationships between these objects.
### Behavioural
- Interaction or Communication between these objects.
