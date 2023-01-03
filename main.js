const obj = {
    name: "freeman",
    age: 18,
    address: "sg"
}

var list = {
    ...obj,
    address: "hn"
}

console.log(list)