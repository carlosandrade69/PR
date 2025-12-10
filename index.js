// Función para transformar el nombre a mayúsculas y mostrarlo en el elemento con ID "data"
function mostrarNombre(Carlox) {
    document.getElementById("data").innerHTML = nombre.toUpperCase();
}

const yesBtn = document.querySelector('#yesBtn');

// Comportamiento del botón "Sí"
yesBtn.addEventListener('click', function () {
    alert('Sabia que si querias haha'); // Puedes mandar los mensajes que quieras
    location.href = 'https://music.youtube.com/watch?v=yMV8GemAhuA&si=ZGn9G-dfbTl2fV_w'; // Cambiar el URL en YouTube de la canción que quieras
});

const noBtn = document.querySelector('#noBtn');

// Comportamiento del botón "No"
noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);

    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});
