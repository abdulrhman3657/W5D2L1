

// fetch('https://66e7e69ab17821a9d9da6e9d.mockapi.io/post', {
//     method: 'POST',
//     body: JSON.stringify({
//                 username: "user1",
//                 textarea: "hello world",
//                 img: "https://images.pexels.com/photos/31901166/pexels-photo-31901166/free-photo-of-vintage-ceramic-pots-in-warm-tones.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })



// fetch('', {
//     method: 'POST',
//     body: JSON.stringify({
//                 username: "user1",
//                 textarea: "hello world",
//                 img: "https://images.pexels.com/photos/31901166/pexels-photo-31901166/free-photo-of-vintage-ceramic-pots-in-warm-tones.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })

let container = document.getElementById("container");
let card = document.getElementById("card");
let btn = document.getElementById("btn");
let username = document.getElementById("name");
let userInfo = document.getElementById("userInfo");
let url = document.getElementById("url");


fetch('https://682199fa259dad2655afc100.mockapi.io/name')
    .then(response => response.json())
    .then(data => {

    data.forEach(element => {

        let div  = document.createElement("div")
        // div.classList.add("align-self-center")
        let username = document.createElement("h4")
        username.innerText = element.username

        console.log(element.url)

        let img = document.createElement("img")
        img.src = element.img
        img.style.width = "100%"
        // img.classList.add("rounded-3")

        

        let del_btn = document.createElement("button")
        del_btn.innerText = "delete"

        del_btn.addEventListener("click", () => {
            fetch(`https://682199fa259dad2655afc100.mockapi.io/name/${element.id}`, {
            method: 'DELETE',
            });  
        
            
            // location.reload();
        
        })

        div.classList.add("d-flex")
        div.classList.add("flex-column")
        div.classList.add("w-25")
        div.classList.add("p-3")
        div.classList.add("m-3")
        div.classList.add("rounded-3")

        div.style.border = "3px solid"

        div.appendChild(username)
        div.appendChild(img)
        div.appendChild(del_btn)


        userInfo.appendChild(div)
        
    });

    })

btn.addEventListener("click", () => {

    // console.log(username.value)
    // console.log(url.value)


    fetch('https://682199fa259dad2655afc100.mockapi.io/name', {
        method: 'POST',
        body: JSON.stringify({
                username: username.value,
                img: url.value
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })

})




