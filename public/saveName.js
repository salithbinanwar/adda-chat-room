
const inputName = () => {
    let greetings = prompt()
    let name = localStorage.setItem("lastname", greetings);


    console.log(greetings);

    // Set Item

    // Retrieve
    document.getElementById("demo").innerHTML = localStorage.getItem("lastname");

}

document.getElementById("demo").innerHTML = localStorage.getItem("lastname");