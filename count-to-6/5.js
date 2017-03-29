

let userArray = process.argv.slice(2); // userArray equals here e.g. [1, "jdoe", "jdoe@example.com", "John", "Doe"]

const r = {};

[, r.username, r.email] = userArray;

// what goes here?

console.log(r); // {username: "jdoe", email: "john@doe.com"}
