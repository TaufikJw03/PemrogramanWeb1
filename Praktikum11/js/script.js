document.querySelectorAll("#option a").forEach((a) => {
    // Jika nanti di klik maka akan menjalankan fungsi computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    });
})
function computerChoice(element){
    // Pilihan user
    let pilihanUser = element.target.innerText;

    // Menangkap element result dengan queryselector
    let pilihanKomputer = document.querySelector("#result");

    // membuat array pilihan untuk komputer
    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random komputer 
    pilihanKomputer.innerHTML = choices[Math.round(Math.random() * 2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // Jika pilihan user == komputer (draw)
    if(pilihanUser == pilihanKomputer){
        alert("SERI");
    }

    // Jika pilihan user menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("I'AM WIN");
    } else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("I'AM WINN");
    } else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("I'AM WINNN");
    }
    
    // Jika pilihan komputer menang
    if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        alert("KOMP WIN");
    } else if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        alert("KOMP WINN");
    } else if(pilihanKomputer == "Paper" && pilihanUser == "Rock"){
        alert("KOMP WINNN");
    }
}
