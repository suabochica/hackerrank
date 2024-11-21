Proxy Validator
===============

Validate the problem statement because it has enough specific cases...

Conditions:

- `name` should be not empty, and with a maximum of 100 characters.
- `email` should be validated with the next regular expression `[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}`.
- `age` should be a value between 18 to 200.

Input

```txt
  name: "alex",
  email: "alex@gmail.com",
  age: 20
```

Output

```txt
  name: "chris",
  email: "Email property invalid",
  age: "Age property invalid"
```
