const input = document.getElementById("inputnumber3");

function multiplicationDrill() {
    const N = parseInt(input.value);
    let output = "";

    for (let i = 1; i <= 10; i++) {
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        output += `${N} × ${randomNumber} = ${N * randomNumber} <br>`;
    }

    document.getElementById("mathdrilloutput").innerHTML = output;
}

document.querySelector('input[value="Click for multiplication drill"]').addEventListener("click", multiplicationDrill);