const dogContNode = document.querySelector("#dog-breeds")
const dropDown = document.getElementById("breed-dropdown")

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"


fetch(breedUrl).then(resp=>resp.json())
.then(data =>{
    for (let breed in data.message) {
        //console.log(breed)
        let subBreed 
        data.message[breed].forEach(item => {
            subBreed = item
        });
        const breedNode = document.createElement("li")
        if (subBreed) {
        breedNode.textContent = `${breed}\t${subBreed}`
        }
        else(breedNode.textContent = breed)
        dogContNode.append(breedNode)
    }  
})
console.log(dropDown.value)
dropDown.addEventListener("change",(e)=> {
    const listNode = document.querySelectorAll("li")
    listNode.forEach(item=>{
        if (item.textContent.slice(0,1) !== e.target.value) {
            item.hidden = true;
        }
        else (item.hidden = false)

    })
})

/**/