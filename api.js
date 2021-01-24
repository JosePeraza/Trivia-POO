function getQuestions() {
    const totalQuestions = document.getElementById('total-questions').value;
    const questionsCategory = document.getElementById('questions-category').value;
    const questionsDifficult = document.getElementById('questions-difficult').value;
    const questionsType = document.getElementById('questions-type').value;


    const url = `https://opentdb.com/api.php?amount=${totalQuestions}&category=${questionsCategory}&difficulty=${questionsDifficult}&type=${questionsType}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => printData(data.results));
}

function printData(data) {
    //obtener donde quiero los elementos/datos
    const containerData = document.getElementById('questions-container');

    //generar los datos/elementos                    
    let html = '';

    data.forEach(element => {
        html += `   <div class="col-md-4 mb-3">
                        <div class="card h-100">
                            <div class="card-body">
                            ${element.question}
                            </div>
                        </div>
                    </div>`;
    });
    //poner los datos en html
    containerData.innerHTML = html;
}

