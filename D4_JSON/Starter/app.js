var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
};

console.log(JSON.stringify(objectLiteral));


console.log(
JSON.parse(
'{ "firstname": "Mary", "isAProgrammer": true }'
)
);