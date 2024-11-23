let joke=document.getElementById("joke")
let button=document.getElementById("btn");
let url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";

let getjoke=()=>{
    fetch(url).then(data=>data.json())
    .then(item=>{
        joke.textContent=`${item.joke}`;
    });
}
button.addEventListener("click",getjoke);
getjoke();
