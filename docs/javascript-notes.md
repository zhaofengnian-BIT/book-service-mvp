# Modern JavaScript Essentials

## Array Methods

### map()

**Purpose:** Transform every element in an array.

```js
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
// [2, 4, 6]
```

- Returns a new array.
- Does not modify the original array.
- Used when you want a modified version of every item.

Mental model:

> Array → transformed array

---

### filter()

**Purpose:** Keep only elements that satisfy a condition.

```js
const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(n => n % 2 === 0);
// [2, 4]
```

- Returns a new array.
- Removes items that do not pass the test.
- Original array remains unchanged.

Mental model:

> Array → smaller array

---

### find()

**Purpose:** Find the first matching element.

```js
const user = users.find(u => u.id === 2);
```

- Returns the first matching item.
- Returns `undefined` if no match is found.
- Stops searching after the first match.

Mental model:

> Array → single item

---

### reduce()

**Purpose:** Combine all elements into one final result.

```js
const sum = [1, 2, 3, 4].reduce(
  (acc, current) => acc + current,
  0
);
// 10
```

Common uses:

- Sum numbers
- Count occurrences
- Build objects
- Aggregate data

Mental model:

> Array → one final value

---

### Quick Selection Guide

| Goal | Method |
|--------|--------|
| Transform every item | map() |
| Keep some items | filter() |
| Find one item | find() |
| Produce one result | reduce() |

---

## JavaScript Modules

### What Is a Module?

A module is a JavaScript file that can:

- Export code
- Import code from other files

Example project:

```text
project/
├── math.js
├── user.js
└── app.js
```

---

### export

Makes code available to other files.

Named export:

```js
export function add(a, b) {
  return a + b;
}
```

or

```js
function add(a, b) {}
function subtract(a, b) {}

export { add, subtract };
```

---

### import

Uses code from another module.

```js
import { add } from "./math.js";
```

Named imports must match exported names.

---

### Default Export

A module may have one default export.

```js
export default function greet(name) {
  return `Hello ${name}`;
}
```

Import:

```js
import greet from "./greet.js";
```

No braces required.

---

### Named vs Default Exports

Named export:

```js
export function add() {}
```

Import:

```js
import { add } from "./math.js";
```

Default export:

```js
export default function add() {}
```

Import:

```js
import add from "./math.js";
```

---

### Import Everything

```js
import * as math from "./math.js";

math.add(2, 3);
math.subtract(5, 1);
```

---

### Browser Modules

When using modules directly in HTML:

```html
<script type="module" src="app.js"></script>
```

---

### React Connection

React components are usually exported and imported as modules:

```js
export default function Header() {
  return <h1>Hello</h1>;
}
```

```js
import Header from "./Header";
```

---

### Module Summary

| Keyword | Meaning |
|----------|----------|
| export | Make available to other files |
| import | Use code from another file |
| default export | Main thing exported by a file |
| default import | Import the main thing |

---

## Promises

### Why Promises Exist

Some operations take time:

- API requests
- Database queries
- File operations
- Timers

JavaScript continues executing while waiting.

---

### Promise States

A Promise can be:

| State | Meaning |
|---------|---------|
| Pending | Still working |
| Fulfilled | Success |
| Rejected | Failure |

---

### Creating a Promise

```js
const promise = new Promise((resolve, reject) => {
  if (success) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
```

---

### then()

Runs when the Promise succeeds.

```js
promise.then(result => {
  console.log(result);
});
```

---

### catch()

Runs when the Promise fails.

```js
promise.catch(error => {
  console.error(error);
});
```

---

### Promise Chaining

```js
doA()
  .then(doB)
  .then(doC)
  .catch(handleError);
```

Much cleaner than deeply nested callbacks.

---

### fetch()

Most common Promise example:

```js
fetch("/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

## async / await

### async

Marks a function as asynchronous.

```js
async function getData() {}
```

An async function automatically returns a Promise.

---

### await

Waits for a Promise to finish.

```js
const response = await fetch("/users");
```

Can only be used inside an async function.

---

### Example

```js
async function getUsers() {
  const response = await fetch("/users");
  const data = await response.json();

  console.log(data);
}
```

This is easier to read than long Promise chains.

---

### Error Handling

Use try/catch with await.

```js
async function getUsers() {
  try {
    const response = await fetch("/users");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

---

### Running Tasks in Parallel

Sequential:

```js
const users = await getUsers();
const posts = await getPosts();
```

Parallel:

```js
const [users, posts] = await Promise.all([
  getUsers(),
  getPosts()
]);
```

Usually faster.

---

## MERN Examples

Frontend:

```js
useEffect(() => {
  async function loadBooks() {
    const response = await fetch("/api/books");
    const data = await response.json();

    setBooks(data);
  }

  loadBooks();
}, []);
```

Backend:

```js
app.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});
```

MongoDB:

```js
const user = await User.findById(id);
```

---

## Promise & async/await Summary

### Promise

> "I'll give you a result later."

```js
fetch("/users")
```

returns a Promise.

---

### then()

> What happens on success?

```js
promise.then(...)
```

---

### catch()

> What happens on failure?

```js
promise.catch(...)
```

---

### async

> This function works with Promises.

```js
async function getData() {}
```

---

### await

> Pause until the Promise finishes.

```js
const data = await fetch(...);
```

---

## What Every MERN Beginner Should Know

1. `map()` transforms arrays.
2. `filter()` keeps matching items.
3. `find()` returns the first match.
4. `reduce()` combines items into one result.
5. `export` shares code between files.
6. `import` uses code from other files.
7. `fetch()` returns a Promise.
8. `await` can only be used inside an `async` function.
9. Use `try/catch` with `await`.
10. Use `Promise.all()` when multiple async operations can run in parallel.