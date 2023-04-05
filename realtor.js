document.addEventListener('DOMContentLoaded', function(){

    fetch("http://localhost:3000/houses",)
    .then(res => res.json())
    .then(data => {
        
        const  character = document.querySelector(".box")

        for(let i = 0; i < data.length; i++) {
            // console.log(data[i]);

            let pic = data[i].image_url;
            let cost = data[i].price;
            let local = data[i].address;
            let  about = data[i].description;

            // console.log(data[i]);

            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML +=`
            <img src="${pic}"style="width:100%; height:210px;" />
            <h5>Price: ${cost}</h5>
            <h5>Address: ${local}</h5>
            Description: ${about}</br>
            <button class="like_btn">
            <span id="icon"><i class="fa fa-heart"></i></span>
            <span id="count">0</span> Like
            </button>

            `
            character.appendChild(card)

            }

    })


    // Like button function.
    // grabbing our elements.
    
    let likeButton = document.getElementsByClassName(".like_btn"); 
    let likeIcon = document.getElementById("#icon");
    let count = document.getElementById("#count");

    // button clicked
    let clicked = false;
    
    likeButton.addEventListener("click", function(){
        if (!clicked){
            clicked =true;
            likeIcon.innerHTML = `<i class="fa fa-heart"></i>`;
            count.textContent++;
        }
        else{
            clicked = false;
            likeIcon.innerHTML =`<i class="fa fa-heart"></i>`
            count.textContent++;
        }
       })
    });








