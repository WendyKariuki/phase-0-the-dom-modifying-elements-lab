const mainElement = document.getElementById('main');
mainElement.remove();

const newHeader = document.createElement("h1")
document.body.appendChild(newHeader);

newHeader.setAttribute('id', 'victory');

newHeader.innerHTML = `WENDY is the champion`;
