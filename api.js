function getQuestions() {
    const totalQuestions = document.getElementById('total-questions').value;
    const questionsCategory = document.getElementById('questions-category').value;
    const questionsDifficult = document.getElementById('questions-difficult').value;
    const questionsType = document.getElementById('questions-type').value;


    const url = `https://opentdb.com/api.php?amount=${totalQuestions}&category=${questionsCategory}&difficulty=${questionsDifficult}&type=${questionsType}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => printQuestions(data.results));
}

function printQuestions(data) {
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

function getCategories() {
    const url = 'https://opentdb.com/api_category.php';
    fetch(url)
        .then((response) => response.json())
        .then((data) => printCategories(data.trivia_categories));
}

function printCategories(categories) {
    //obtener donde quiero los elementos/datos
    const categoryData = document.getElementById('questions-category');

    //generar los datos/elementos                    
    
    categories.forEach(element => {
        categoryData.innerHTML += `<option value="${element.id}">${element.name}</option>`;
    });
}

getCategories();