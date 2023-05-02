// let circleDOM = document.querySelector('.circle');
let state = updateState();
// let newCircle = generateRandomCircle();
// document.body.appendChild(newCircle);
// console.log(newCircle);

// console.log(circleDOM);

document.addEventListener('mousemove', getPosition);
document.addEventListener('click',pasteRandomCircle);

function pasteRandomCircle({clientX,clientY}) {
    let newCircle = generateRandomCircle();
    console.log(newCircle);
    document.body.appendChild(newCircle);
    newCircle.style.left = `${clientX - (newCircle.clientWidth)/2}px`;
    // newCircle.style.left = `${clientX}px`;

    newCircle.style.top = `${clientY - (newCircle.clientHeight)/2}px`;
    newCircle = generateRandomCircle();
    console.log(newCircle);
    newCircle.style.left = `${clientX - (newCircle.clientWidth)/2}px`;
    newCircle.style.top = `${clientY - (newCircle.clientHeight)/2}px`;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateState(){
    return {size: getRandomNumber(50,200), color:`rgb(${getRandomNumber(0,255)},${getRandomNumber(0,255)},${getRandomNumber(0,255)}`};
}

function getPosition(e){

}

function generateRandomCircle(){
    let state = updateState();
    let circleDOM = document.createElement('div');
    circleDOM.classList.add('circle');
    circleDOM.style.width = `${state.size}px`;
    circleDOM.style.height = `${state.size}px`;
    circleDOM.style.background = state.color;
    circleDOM.style.borderRadius = `50%`;
    circleDOM.style.position = 'absolute';
    return circleDOM;
}