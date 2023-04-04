console.log("hello")
fetch("http://localhost:3000/houses",)
    .then(res => res.json())
    .then(data => {
        
        const  character = document.querySelector(".box")

        for(let i = 0; i < data.length; i++) {
            console.log(data[i]);

            let pic = data[i].image_url;
            let cost = data[i].price;
            let local = data[i].address;
            let  about = data[i].description;

            console.log(data[i]);

            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML +=`
            <img src="${pic}"style="width:300px; height:250px;" />
            <h5>Price: ${cost}</h5>
            <h5>Address: ${local}</h5>
            Description: ${about}

            `
            character.appendChild(card)

            }

    })


    // filter function
    


