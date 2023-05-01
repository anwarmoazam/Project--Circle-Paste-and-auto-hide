// let circleDOM = document.querySelector('.circle');
let state = updateState();
let newCircle = generateRandomCircle();
document.body.appendChild(newCircle);
console.log(newCircle);

// console.log(circleDOM);

document.addEventListener('mousemove', getPosition);
document.addEventListener('click',pasteRandomCircle);

function pasteRandomCircle({clientX,clientY}) {
    console.log('first in function');
    newCircle = generateRandomCircle();
    console.log('new circle created',newCircle);
    newCircle.style.left = `${clientX - (newCircle.clientHeight)/2}px`;
    console.log('clientX',clientX);
    
    newCircle.style.top = `${clientY - (newCircle.clientWidth)/2}px`;
    console.log('clientY',clientY);

    document.body.appendChild(newCircle);  
    
    console.log(clientX);
    console.log(clientY);

}

function getPosition({ clientX, clientY }) {
    newCircle.style.left = `${clientX - (newCircle.clientHeight)/2}px`;
    newCircle.style.top = `${clientY - (newCircle.clientWidth)/2}px`;

    // newCircle.style.left = `${clientX}px`;
    // newCircle.style.top = `${clientY}px`;

    console.log(clientX);
    console.log(clientY);
    
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateState(){
    return {size: getRandomNumber(50,200), color:`rgb(${getRandomNumber(0,255)},${getRandomNumber(0,255)},${getRandomNumber(0,255)}`};
}

function generateRandomCircle(){
    let state = updateState();
    let circleDOM = document.createElement('div');
    // circleDOM.classList.add('circle');
    circleDOM.style.width = `${state.size}px`;
    circleDOM.style.height = `${state.size}px`;
    circleDOM.style.background = state.color;
    circleDOM.style.borderRadius = `50%`;
    circleDOM.style.position = 'absolute';

    // document.body.appendChild(circleDOM);
    return circleDOM;
}


// console.log(generateRandomCircle());