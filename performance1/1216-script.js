
fetch("1216-player.json")
    .then(response => response.json())

    .then(players => {

        const container =
            document.getElementById("player-container");


        players.forEach(player => {

            const card = document.createElement("div");

            card.className = "card";


            card.innerHTML = `
                <h3>${player.name}</h3>

                <p>
                    Position: ${player.position}
                </p>

                <p>
                    Number: ${player.number}
                </p>

                <p>
                    Country: ${player.country}
                </p>
            `;


            container.appendChild(card);

        });

    })


    .catch(error => {

        console.log("Error loading JSON:", error);

    });