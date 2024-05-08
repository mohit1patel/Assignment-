function translateText() {
    const sourceText = document.getElementById('source-text').value;
    const targetLanguage = document.getElementById('target-language').value;
    const apiKey = 'YOUR_RAPIDAPI_KEY'; // Replace with your RapidAPI key
    const endpoint = 'https://google-translate1.p.rapidapi.com/language/translate/v2';

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': apiKey
        },
        body: `q=${encodeURIComponent(sourceText)}&target=${targetLanguage}`
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const translatedText = data.data.translations[0].translatedText;
        document.getElementById('translated-text').innerText = translatedText;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('translated-text').innerText = 'Translation Error';
    });
}
