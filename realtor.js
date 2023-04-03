fetch("http://localhost:3000/houses")
    .then(res => res.json)
    .then(data => console.log(data));

