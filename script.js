let button = document.getElementById("button");

var attempt = 0;

button.addEventListener("click", () => {
    let title = document.getElementById("title");
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let link = document.getElementById("link");

    if (user && password) {
        attempt++;
        switch (attempt) {
            case 1:
                title.innerText = "sério isso?";
                break;
            case 2:
                title.innerText = "vamo, não é difícil";
                break;
            case 3:
                title.innerText = "vou te falar, mas antes tenta dnv";
                break;
            case 4:
                title.innerText = "u: bocuda s: pensoemvc";
                break;
            default:
                if (link.innerText) {
                    title.innerText = "penso em vc, até dms.";
                }
                break;
        }

        if (user == "bocuda" && password == "pensoemvc") {
            link.innerText = "https://bit.ly/3VggA0h";
        }
    } else if (user && !password || !user && password) {
        title.innerText = "é pra preencher os dois tá?"
    } else {
        title.innerText = "escreve alguma coisa né"
    }
});