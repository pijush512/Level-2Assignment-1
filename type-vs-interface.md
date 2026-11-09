# Core Differences Between Type Aliases and Interfaces in TypeScript

TypeScript provides two powerful ways to define the shape of objects and data structures: Type Aliases and Interfaces. While they often overlap in functionality, understanding their core differences helps developers write cleaner and more maintainable code.

## Introduction
When building scalable TypeScript applications, defining custom types is a daily task. Both `type` and `interface` allow us to describe object shapes, function types, and object-oriented contracts. However, they behave differently under the hood regarding extension, declaration merging, and union handling.

## Core Differences and Code Examples

### 1. Declaration Merging (Interfaces Win)
One of the unique features of an `interface` is declaration merging. If you define the same interface multiple times, TypeScript automatically merges them into a single definition. Type aliases, on the other hand, will throw a duplicate identifier error.

```typescript
// Interface supports merging
interface User {
  name: string;
}
interface User {
  age: number;
}
const person: User = { name: "Alice", age: 25 }; // Valid

// Type alias does not support merging
type Point = { x: number };
// type Point = { y: number }; // Error: Duplicate identifier