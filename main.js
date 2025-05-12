

let container = document.getElementById("container");
let card = document.getElementById("card");
let btn = document.getElementById("btn");
let username = document.getElementById("name");
let textarea = document.getElementById("textarea");
let userInfo = document.getElementById("userInfo");
let url = document.getElementById("url");

let list = []

fetch('https://682199fa259dad2655afc100.mockapi.io/name')
    .then(response => response.json())
    .then(data => {

    list = data

    data.forEach(element => {

        let div  = document.createElement("div")
        // div.classList.add("align-self-center")
        let username = document.createElement("h4")
        username.innerText = element.username

        let textarea = document.createElement("p")
        textarea.innerText = element.textarea

        let img = document.createElement("img")
        img.src = element.img
        img.style.width = "100%"
        img.classList.add("rounded-3")

        

        let del_btn = document.createElement("button")
        del_btn.innerText = "delete"
        del_btn.classList.add("btn")
        del_btn.classList.add("btn-danger")

        del_btn.addEventListener("click", () => {
            fetch(`https://682199fa259dad2655afc100.mockapi.io/name/${element.id}`, {
            method: 'DELETE',
            }).then(() => {
                location.reload();
            })
        
        })

        div.classList.add("d-flex")
        div.classList.add("flex-column")
        div.classList.add("col-lg")
        div.classList.add("p-3")
        div.classList.add("m-3")
        div.classList.add("rounded-3")

        div.style.border = "3px solid"

        div.appendChild(username)
        div.appendChild(img)
        div.appendChild(textarea)
        div.appendChild(del_btn)


        userInfo.appendChild(div)
        
    });

    })

btn.addEventListener("click", () => {

    let err_msg =  document.getElementById("err-msg");
    err_msg.style.color = "red"

    if(username.value == "" || textarea.value == "" || url.value == ""){
        err_msg.innerText = "all values must be filled"
        return
    }

    if(username.value.length <= 4){
        err_msg.innerText = "username must have more than 4 letters"
        return
    }
    
    if(textarea.value.length <= 6 ){
        err_msg.innerText = "textarea must have more than 6 letters"
        return
    }

    // ---------------------

    let check = list.find((element) => {
        return element.username == username.value
    });

    if(check){
        err_msg.innerText = "user already exists"
        return
    }

    // ---------------------

    fetch('https://682199fa259dad2655afc100.mockapi.io/name', {
        method: 'POST',
        body: JSON.stringify({
                username: username.value,
                textarea: textarea.value,
                img: url.value
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(() => {
        location.reload();
    })

})




            // let check = data.find((element) => {
            //     return element == username.value
            // });

            // if(check){
            //     err_msg.innerText = "user already exists"
            // }


