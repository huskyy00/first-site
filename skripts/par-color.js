const userName = prompt("Как вас зовут?");
const newParagraphHTML =
    `<p class="par red">Привет, ${userName}!</p>`;
firstpar.insertAdjacentHTML('beforebegin', newParagraphHTML);