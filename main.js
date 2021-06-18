//API
const fiml1Api = "https://60cc0a5771b73400171f6eb6.mockapi.io/Fiml1"
const fiml2Api = "https://60cc0a5771b73400171f6eb6.mockapi.io/Fiml2"
//Slider 1 render
const slider1 = fetch(fiml1Api)
    .then(function(respone){
        return respone.json()
    })
    .then(function(fiml1s){
        let htmls = fiml1s.map(function(fiml1){
            return `
            <li>
                <img src=${fiml1.img}/>    
            </li>`
        })
        let html = htmls.join("")
        document.getElementById('fiml1').innerHTML=html
    })
    .catch(function(err){
        alert("Có lỗi")
    })
//Slider 2 render
const slider2 = fetch(fiml2Api)
    .then(function(respone){
        return respone.json()
    })
    .then(function(fiml2s){
        let htmls = fiml2s.map(function(fiml2){
            return `
            <li>
                <img src=${fiml2.img}/>    
            </li>`
        })
        let html = htmls.join("")
        document.getElementById('fiml2').innerHTML=html
    })
    .catch(function(err){
        alert("Có lỗi")
    })
