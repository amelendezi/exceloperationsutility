// This file contains the JavaScript code for the application. It handles the logic and interactivity of the web app.

document.addEventListener('DOMContentLoaded', () => {
    const appElement = document.getElementById('app');
    appElement.innerHTML = '<h1>Welcome to My Edge App</h1>';
    
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    appElement.appendChild(button);
    
    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });

    // Adding a second button
    const secondButton = document.createElement('button');
    secondButton.textContent = 'Click Me Too';
    appElement.appendChild(secondButton);

    secondButton.addEventListener('click', () => {
        alert('You Clicked Me!');
    });
});