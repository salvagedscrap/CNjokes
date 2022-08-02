
document.querySelector('a').addEventListener('click', activateJoke())

function activateJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
.then(res=>res.json())
.then(data=>{
    console.log(data);
    document.querySelector('h2').innerText= data.value;
    
})

}



