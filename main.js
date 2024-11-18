function hideButtons(clickedId) {
    const buttonss = document.querySelector('.buttons');
    buttonss.remove();

    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.style.display = 'none';
        button.disabled = true;
    });

    const clickedImage = document.createElement('img');
    clickedImage.src = `img/${clickedId.charAt(0).toUpperCase() + clickedId.slice(1)}-Photoroom.png`;
    clickedImage.alt = clickedId;
    clickedImage.classList.add('img');

    
    const randomImageId = ['pedra', 'papel', 'tesoura'][Math.floor(Math.random() * 3)];
    const randomImage = document.createElement('img');
    randomImage.src = `img/${randomImageId.charAt(0).toUpperCase() + randomImageId.slice(1)}-Photoroom.png`;
    randomImage.alt = randomImageId;
    randomImage.classList.add('img');

    const player = document.createElement('div');
    player.classList.add('result-img');
    const playerP = document.createElement('p');
    playerP.innerText = 'Jogador';
    player.appendChild(playerP);
    player.appendChild(clickedImage);

    const cpu = document.createElement('div')
    cpu.classList.add('result-img');
    const cpuP = document.createElement('p');
    cpuP.innerText = 'Computador';
    cpu.appendChild(cpuP);
    cpu.appendChild(randomImage);

    const span = document.createElement('span');
    span.classList.add('result');
    span.appendChild(player);
    span.appendChild(cpu);


    const container = document.querySelector('.container');
    const h1 = document.getElementsByTagName('h1');
    if (
        (clickedId == 'pedra' && randomImageId == 'tesoura') ||
        (clickedId == 'papel' && randomImageId == 'pedra') ||
        (clickedId == 'tesoura' && randomImageId == 'papel')
    ) {
        h1[0].innerText = 'Você venceu!';
    } else if (clickedId === randomImageId) {
        h1[0].innerText = 'Empatou!';
    } else {
        h1[0].innerText = 'Você perdeu!';
    }
    container.appendChild(span);
}
