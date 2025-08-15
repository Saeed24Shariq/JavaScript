const searchInp = document.querySelector('.search input[type = "text"]');
searchInp.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        event.preventDefault();
        search();
    }
})
function search() {
    const chkResult = Array.from(document.getElementsByClassName('result-con'));
    chkResult.map(element => {
        if (element) {
            element.remove();
        }
    })
    console.log(chkResult);
    const text = document.querySelector('.search input[type = "text"]').value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data[0].meanings[0].definitions[0]);
            data[0].meanings.map((op) => {
                result(op.partOfSpeech.toUpperCase(), "Definition: " + op.definitions[0].definition);
            })
        })
}

function result(type, meaning) {
    const middleDiv = document.querySelector('.main-result-con');
    // Creating Elements and their Attributes
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result-con';
    // type
    const typeCon = document.createElement('span');
    typeCon.className = "type";
    typeCon.innerText = type;
    // Meaning
    const meaningCon = document.createElement('span');
    meaningCon.className = "meaning";
    meaningCon.innerText = meaning;



    // Appending Child to the Parrent
    middleDiv.appendChild(resultDiv);
    resultDiv.appendChild(typeCon);
    resultDiv.appendChild(meaningCon);
}