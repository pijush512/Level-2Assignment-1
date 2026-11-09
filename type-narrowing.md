# Understanding Type Narrowing in TypeScript

Type narrowing is a core mechanism in TypeScript that allows us to refine a general type into a more specific type within a conditional block, ensuring safe and predictable code execution.

## Introduction
In real-world applications, variables often accept union types (e.g., `string | number`). Before performing operations specific to a string or a number, TypeScript requires us to prove the exact type at runtime. This process of refinement is called type narrowing.

## Practical Examples of Type Narrowing

### 1. Using `typeof` Guard
The `typeof` operator is the most common way to narrow primitive types like strings, numbers, booleans, and symbols.

```typescript
function printValue(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase()); // TypeScript knows val is a string here
  } else {
    console.log(val.toFixed(2)); // TypeScript knows val is a number here
  }
};