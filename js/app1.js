let state = updateState();

document.addEventListener('mousemove', moveCircle);
document.addEventListener('click',pasteRandomCircle);

function pasteRandomCircle({clientX,clientY}) {
    let newCircle = document.querySelector('.circle');
    if(newCircle){
        console.log('yes');
        console.log(newCircle);
        const xPosition = clientX;
        const yPosition = clientY;
        document.body.appendChild(newCircle);
        newCircle.style.left = `${xPosition-(newCircle.style.width/2)}px`;
        newCircle.style.top = `${yPosition-(newCircle.style.height/2)}px`;
        // newCircle = generateRandomCircle(clientX,clientY);
        // newCircle.style.left = `${clientX - (newCircle.clientWidth)/2}px`;
        // newCircle.style.top = `${clientY - (newCircle.clientHeight)/2}px`;
        console.log(newCircle);
    } else{
        console.log('no');
        newCircle = generateRandomCircle(clientX,clientY);
        console.log(newCircle);
        document.body.appendChild(newCircle);
        newCircle.style.left = `${clientX - (newCircle.clientWidth)/2}px`;
        newCircle.style.top = `${clientY - (newCircle.clientHeight)/2}px`;
    }
    // newCircle.style.left = `${clientX}px`;

    // newCircle = generateRandomCircle();
    // console.log(newCircle);
    // newCircle.style.left = `${clientX - (newCircle.clientWidth)/2}px`;
    // newCircle.style.top = `${clientY - (newCircle.clientHeight)/2}px`;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateState(){
    return {size: getRandomNumber(50,200), color:`rgb(${getRandomNumber(0,255)},${getRandomNumber(0,255)},${getRandomNumber(0,255)}`};
}

function moveCircle(e){
    const circle = document.querySelector('.circle');
    if(circle){
        console.log('circle found');
        // pasteRandomCircle();
        circle.style.left = `${e.clientX - (circle.clientWidth)/2}px`;
        circle.style.top = `${e.clientY - (circle.clientHeight)/2}px`;
    }else{
        console.log('no circle found');
    }
}

function generateRandomCircle(xPos, yPos){
    let state = updateState();
    let circleDOM = document.createElement('span');
    circleDOM.classList.add('circle');
    circleDOM.style.width = `${state.size}px`;
    circleDOM.style.height = `${state.size}px`;
    circleDOM.style.background = state.color;
    circleDOM.style.borderRadius = `50%`;
    circleDOM.style.left = xPos + 'px';
    circleDOM.style.top = yPos + 'px';
    return circleDOM;
}