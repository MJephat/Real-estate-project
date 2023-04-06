// pop up notification on submit
function alertFunction(){
    alert("submitted successfully")
}


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
            Description: ${about}
            </br>
        
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            </br>

            <button class="like_btn">
            <span class="fa fa-heart icon"></i></span>
            <span id="count">0</span> Like
            </button>

            `
            character.appendChild(card)

            }

    })


     // Like button function.
    // grabbing our elements.
    
    let likeButton = document.getElementsByClassName(".like_btn").textContent 
    let likeIcon = document.getElementsByClassName(".icon").textContent
    let likeCount = document.querySelector("#count").textContent;

    // Heart Like counts
var clicks = 0;
function onClick() 
{
    clicks += 1;
    document.querySelector(".card").innerHTML = clicks;
};
    // button clicked
    // let clicked = false;
    
    // likeButton.addEventListener("click", ()=>{
        
    //     console.log("like button clicked");
    //     if (!clicked){
    //         clicked =true;
    //         likeIcon.innerHTML = `<i class="fa fa-heart"></i>`;
    //         likeCount.textContent+=1;
    //     }
    //     else{
    //         clicked = false;
    //         likeIcon.innerHTML =`<i class="fa fa-heart"></i>`
    //         likeCount.textContent+=1;
    //     }
    //    })
    // });


// submitting the form event.
let form = document.getElementById("weka")

form.addEventListener('submit',function(event){
     event.preventDefault()// prevents the form from auto submitting.
    
    let jina = document.getElementById("name").value
    console.log(jina);
    let eMail = document.getElementById("email").value
    console.log(eMail);
    let Phone = document.getElementById("phone").value
    console.log(Phone);

    form.reset();



    })
})

  //change event
  function changeText(id) {
    id.innerHTML = "Realtor properties!";
    }