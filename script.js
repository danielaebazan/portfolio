//Faded dark scrolled navbar
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Faded white active main-link
var mainLinks = document.querySelectorAll('.main-link');

mainLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        mainLinks.forEach(function(link) {
            link.classList.remove('active');
        });
        link.classList.add('active');
    });
});

// Add this JavaScript to your script.js file

function openNote(noteId) {
    const noteOverlay = document.getElementById('note-overlay');
    const notes = document.querySelectorAll('.note-text');
    notes.forEach(note => note.style.display = 'none'); 
    document.getElementById(noteId).style.display = 'block'; 
    noteOverlay.style.display = 'flex'; 
}

function closeNote() {
    const noteOverlay = document.getElementById('note-overlay');
    noteOverlay.style.display = 'none'; 
}