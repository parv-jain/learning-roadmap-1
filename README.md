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

## WHY to learn Design Patterns
- Design patterns are a toolkit of tried and tested solutions to common problems in software design. Even if you never encounter these problems, knowing patterns is still useful because it teaches you how to solve all sorts of problems using principles of object-oriented design.
- Design patterns define a common language that you and your teammates can use to communicate more efficiently.

## Criticism of patterns
- Kludges for a weak programming language: Usually the need for patterns arises when people choose a programming language or a technology that lacks the necessary level of abstraction. In this case, patterns become a kludge that gives the language much-needed super-abilities. For example, the Strategy pattern can be implemented with a simple anonymous (lambda) function in most modern programming languages.


- Inefficient solutions: Patterns try to systematize approaches that are already widely used. This unification is viewed by many as a dogma, and they implement patterns “to the letter”, without adapting them to the context of their project.


- Unjustified use: `If all you have is a hammer, everything looks like a nail.` This is the problem that haunts many novices who have just familiarized themselves with patterns. Having learned about patterns, they try to apply them everywhere, even in situations where simpler code would do just fine.


## Classification of Design Patterns
### Creational
- Different ways to create objects: `object creation mechanisms that increase flexibility and reuse of existing code.`
- Factory Method: `Provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.`
- Abstract Factory
- Builder
- Prototype
- Singleton

### Structural
- Relationships between these objects: `assemble objects and classes into larger structures, while keeping these structures flexible and efficient.`
- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

### Behavioural
- Interaction or Communication between these objects: `effective communication and the assignment of responsibilities between objects.`
- Chain of Responsibility
- Command
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor