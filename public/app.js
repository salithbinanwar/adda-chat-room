const socket = io('https://adda-chat.herokuapp.com/');
// const socket = io('http://localhost:8080');

socket.on('message', (data) => {
    console.log(data);
    const el = `
    <li class="flex my-2 w-full">
        <div class="h-11 w-11 rounded-full ring-2 flex justify-center items-center ring-indigo-500/50 mr-2 uppercase">
            ${(data.name).substring(0, 1)}
        </div>
        
        <div class="bg-indigo-500/50 w-9/12 px-4 py-2 rounded-xl">
        <h6  class='text-sm font-mono'>${data.name}</h6>
            <p class="text-sm text-left">${data.text}</p>
            <p class="text-xs pt-.5 text-right">${new Date().toLocaleTimeString('en-US', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</p>
        </div>
    </li>`
    document.querySelector('ul').innerHTML += el

});

let name = localStorage.getItem('')


if (localStorage.getItem("lastname") === null) {
    let greetings = prompt("What is your name?")
    localStorage.setItem("lastname", greetings);
}




// console.log(greetings);


// document.getElementById("demo").innerHTML = ;

document.querySelector("button").addEventListener('click', e => {
    e.preventDefault();
    const text = document.querySelector('textarea').value;
    const name = localStorage.getItem("lastname")
    let data = { text, name }
    socket.emit('message', data)

    document.querySelector('textarea').value = ''

})


// document.querySelector('#chat').addEventListener('submit', e => {
//     e.preventDefault();

//     if (document.querySelector('input').value !== '') {
//         if (e.key === 'Enter') {
//             socket.emit('message', text)
//             document.querySelector('input').value = ''
//         } else {
//             socket.emit('message', text)
//             document.querySelector('input').value = ''
//         }
//     }
// })

let heading = document.querySelector('h1').offsetHeight;
let textHeight = document.querySelector('.textInput').offsetHeight;

document.querySelector('.textBox').style.height = `calc(100vh - ${heading + textHeight}px)`