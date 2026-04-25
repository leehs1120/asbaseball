const search = document.getElementById("search");
const players = document.querySelectorAll(".player-card");

search.addEventListener("keyup", function () {
    const value = search.value.toLowerCase();

    players.forEach(player => {
        const name = player.innerText.toLowerCase();

        if (name.includes(value)) {
            player.style.display = "block";
        } else {
            player.style.display = "none";
        }
    });
});
