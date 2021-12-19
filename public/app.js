const socket = io('https://adda-chat.herokuapp.com/');

socket.on('message', text => {

    const el = `
    <li class="flex my-2 w-full">
        <img class="w-11 h-11 rounded-full ring-2 ring-indigo-500/50 mr-2" src="https://picsum.photos/200"
            alt="user">
        <div class="bg-indigo-500/50 w-9/12 px-4 py-2 rounded-xl">
            <p class="text-sm text-left">${text}</p>
            <p class="text-xs pt-.5 text-right">${new Date().toLocaleTimeString('en-US', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</p>
        </div>
    </li>`
    document.querySelector('ul').innerHTML += el

});

document.querySelector("button").addEventListener('click', e => {
    e.preventDefault();
    const text = document.querySelector('input').value;
    console.log(e.key)
    if (e.key === 'Enter' && text !== '') {
        socket.emit('message', text)
        document.querySelector('input').value = ''
    } else {
        socket.emit('message', text)
        document.querySelector('input').value = ''
    }
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