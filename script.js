document.getElementById('darkMode').addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.querySelector('nav').style.backgroundColor = 'black';
});

document.getElementById('lightMode').addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.querySelector('nav').style.backgroundColor = '#f4f4f4';
});