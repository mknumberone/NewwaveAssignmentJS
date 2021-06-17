//API
var fiml1Api="http://localhost:3000/fiml1"
var fiml2Api="http://localhost:3000/fiml2"
//Slider 1 render
const slider1=fetch(fiml1Api)
    .then(function(respone){
        return respone.json()
    })
    .then(function(fiml1s){
        var htmls = fiml1s.map(function(fiml1){
            return `
            <li>
                <img src=${fiml1.img}/>    
            </li>`
        })
        var html = htmls.join("")
        document.getElementById('fiml1').innerHTML=html
    })
    .catch(function(err){
        alert("Có lỗi")
    })
//Slider 2 render
const slider2=fetch(fiml2Api)
    .then(function(respone){
        return respone.json()
    })
    .then(function(fiml2s){
        var htmls = fiml2s.map(function(fiml2){
            return `
            <li>
                <img src=${fiml2.img}/>    
            </li>`
        })
        var html = htmls.join("")
        document.getElementById('fiml2').innerHTML=html
    })
    .catch(function(err){
        alert("Có lỗi")
    })
