document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const poemContainer = document.getElementById('poemContainer');
    const restOfSite = document.getElementById('restOfSite');
    const audio = document.getElementById('backgroundMusic');
    const musicControlButton = document.getElementById('musicControlButton');

    const poem = `Pour toi, j'ai médité des heures durant
Cherchant les mots justes, l'émotion que je ressent
Lorsque tu me parles, dans mon ventre des papillons
S'envolent et dansent, créant mille frissons

Me noyer dans tes yeux serait un sort enviable
T'aborder, te parler fut mon choix le plus viable
Effleurer tes cheveux, un rêve qui m'enivre
Tes paroles la nuit sont ma raison de vivre

Dans tes bras je trouve mon refuge éternel
Ton sourire illumine mon monde, tel un arc-en-ciel
Avec toi, chaque instant devient une douce mélodie
Alors du fond de mon cœur, simplement je te dis 

Juline, je t'aime`;

    startButton.addEventListener('click', function() {
        console.log('Bouton cliqué');
        // Démarrer la musique
        audio.volume = 0.02;
        audio.play().then(() => {
            console.log('Lecture audio démarrée');
            // Animation de transition
            welcomeScreen.classList.add('fade-out');
            mainContent.classList.remove('hidden');
            mainContent.classList.add('fade-in');
            musicControlButton.classList.remove('hidden');
            
            setTimeout(() => {
                mainContent.classList.add('visible');
                welcomeScreen.style.display = 'none';
                // Démarrer le poème
                typeWriter(poem, 0);
                // Démarrer le timer
                updateTimer();
                setInterval(updateTimer, 1000);
            }, 1000);
        }).catch(error => {
            console.log('Erreur de lecture audio:', error);
        });
    });

    musicControlButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            musicControlButton.textContent = 'Pause la musique';
        } else {
            audio.pause();
            musicControlButton.textContent = 'Jouer la musique';
        }
    });

    function typeWriter(text, index) {
        if (index < text.length) {
            poemContainer.innerHTML += text.charAt(index);
            setTimeout(() => typeWriter(text, index + 1), 50);
        } else {
            setTimeout(() => {
                restOfSite.classList.remove('hidden');
            }, 1000);
        }
    }
});

const startDate = new Date("2024-11-30T22:30:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes`;
}