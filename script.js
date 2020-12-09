
setTimeout(
    () => {
        let username = prompt("What's your name ?").trim().toLowerCase();

        if(username === "arzad"){
            alert("You have the exact same name as mine ;)");
        }else{
            alert("I like your name :p");
        }

        let h1 = document.getElementsByTagName("h1")[0];
        h1.textContent = `Hello ${username.toUpperCase()}!`;
    }, 3000);