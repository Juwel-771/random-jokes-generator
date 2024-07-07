// const jokeContainer = document.getElementById("joke-box");
const jokeBox = document.getElementById("joke");
const jokeBtn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    jokeBox.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeBox.textContent = `${item.joke}`;
        jokeBox.classList.add("fade");
    });
};

jokeBtn.addEventListener("click", getJoke);

getJoke();
