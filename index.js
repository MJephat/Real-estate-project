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

            `
            character.appendChild(card)

            }

    })



     // Like button function.
    // grabbing our elements.
    
   var likeButton = document.querySelector('.like_btn');
   var likeCount = document.querySelector('#count');
    
   var count = 0;
    
    likeButton.addEventListener('click', () => {
    count++;
    likeCount.textContent = count;
    });

    //like for pic 2
    var likeButton = document.querySelector('.like_btn1');
    var likeCount1 = document.querySelector('#count1');
    
    var count1 = 0;
    
    likeButton.addEventListener('click', () => {
    count1++;
    likeCount1.textContent = count1
    });

    //like for pic 3
    var likeButton = document.querySelector('.like_btn2');
    var likeCount2 = document.querySelector('#count2');
    
    var count2 = 0;
    
    likeButton.addEventListener('click', () => {
      count2++;
      likeCount2.textContent = count2
    });
    
    //like for pic 4
    var likeButton = document.querySelector('.like_btn3');
    var likeCount3 = document.querySelector('#count3');
    
    var count3 = 0;
    
    likeButton.addEventListener('click', () => {
    count3++;
    likeCount3.textContent = count3
    });
    
    // like for pic 5
    var likeButton = document.querySelector('.like_btn4');
    var likeCount4 = document.querySelector('#count4');
    
    var count4 = 0;
    
    likeButton.addEventListener('click', () => {
    count4++;
    likeCount4.textContent = count4
    });
    
    // like for pic 6
    var likeButton = document.querySelector('.like_btn5');
    var likeCount5 = document.querySelector('#count5');
    
    var count5 = 0;
    
    likeButton.addEventListener('click', () => {
    count5++;
    likeCount5.textContent = count5
    });
    
    // like for pic 7
    var likeButton = document.querySelector('.like_btn6');
    var likeCount6 = document.querySelector('#count6');
    
    var count6 = 0;
    
    likeButton.addEventListener('click', () => {
    count6++;
    likeCount6.textContent = count6
    });
    
    // like for pic 8
    var likeButton = document.querySelector('.like_btn7');
    var likeCount7 = document.querySelector('#count7');
    
    var count7 = 0;
    
    likeButton.addEventListener('click', () => {
    count7++;
    likeCount7.textContent = count7
    });
    
    // like for pic 9
    var likeButton = document.querySelector('.like_btn8');
    var likeCount8 = document.querySelector('#count8');
    
    var count8 = 0;
    
    likeButton.addEventListener('click', () => {
      count8++;
      likeCount8.textContent = count8
    });
    

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

//change event function
  function changeText(id) {
    id.innerHTML = "Realtor properties!";
    }



// slideshow function .

 const productContainers = [...document.querySelectorAll(".product-container")];

 const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
 const preBtn = [...document.querySelectorAll(".pre-btn")];

 productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
    })
 })

// filter function
fetch("http://localhost:3000/houses",)
    .then(res => res.json())
    .then(data => {
        const Data = data
        const filHome = document.querySelector("#hom");

        filHome.addEventListener("click", () =>{
        const filtered = Data.filter(function(houses){
            return houses.address == "Kitengela, kajiado"
            
        })
        console.log(filtered);
        }
        )
    })
        