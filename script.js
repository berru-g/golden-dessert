//loader img smooth
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => loader.classList.add('fade-out'), 1000);
});

// animation scroll via GASP  
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("[data-gsap]").forEach(elem => {
    gsap.fromTo(elem,
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: elem,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        }
    );
});

//menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});

links.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.classList.remove('nav-active');
        hamburger.classList.remove('toggle');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

/*redirection after mail
const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêche l'envoi classique

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            window.location.href = "https://www.canva.com/design/DAGkHyepW1w/bZeR3AoqZLTk09F7h-HMjg/edit?utm_content=DAGkHyepW1w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"; // Redirige après succès
        } else {
            alert("Une erreur est survenue. Merci de réessayer.");
        }
    } catch (error) {
        alert("Erreur de connexion. Vérifiez votre réseau.");
    }
});
*/
