     const div = document.createElement('div')
     const body = document.querySelector('body')
     body.appendChild(div)

const ul = `
       <ul>
    <button onClick="btn(1)">1</button>
    <button onClick="btn(2)">2</button>
    <button onClick="btn(3)">3</button>
    <button onClick="btn(4)">4</button>
    </ul>
    `
div.innerHTML = ul

function btn(str) {
    console.log(`вы нажали на кнопку ${str}`);
}


