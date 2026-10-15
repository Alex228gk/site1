function registor_user(){
    const username = document.getElementById("un").value;
    const password = document.getElementById("psw").value;
    const button1 = document.getElementById("inc");

    if (username.trim() === ""){
        button1.innerText = "Введіть, будь ласка, імя";
        return;
    }
    if (password === "1234"){
        button1.innerText = `Correct, ${username}`;
    }
    else{
        button1.innerText = "Incorrect password";
    
    }
}