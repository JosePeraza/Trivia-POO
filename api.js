function getQuestions() {
    const totalQuestions = document.getElementById('total-questions').value;
    const questionsCategory = document.getElementById('questions-category').value;
    const questionsDifficult = document.getElementById('questions-difficult').value;
    const questionsType = document.getElementById('questions-type').value;


    const url = `https://opentdb.com/api.php?amount=${totalQuestions}&category=${questionsCategory}&difficulty=${questionsDifficult}&type=${questionsType}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => printQuestions(data));
 
}

function printQuestions(data) {
    if(data.response_code === 1) {
        const container = document.getElementById('questions-container');
        container.innerHTML = ` <h2>¡Lo sentimos, no hay suficientes preguntas para mostrar!</h2>
                                    <h2><small class="text-muted">Intente con menos preguntas...</small></h2>`;
    } else {
    //obtener donde quiero los elementos/datos
    const containerData = document.getElementById('questions-container');

    //generar los datos/elementos                    
    let html = '';
    let i = 1;

    data.results.forEach(element => {
        const incorrectAnswer = element.incorrect_answers;
        const correctAnswer = element.correct_answer;
        incorrectAnswer.push(correctAnswer);
        
        answers = incorrectAnswer.sort(() => Math.random() - 0.5)

        // console.log(answers);

        let htmlIncorrectA = '';

        
        let a = 1;
        answers.forEach(currentA => {
            
            htmlIncorrectA +=   `<div class="form-check mt-2">
                                <input class="form-check-input" type="radio" name="p${i}"  required>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    ${currentA}
                                </label>
                            </div>`
                            const totalQuestionss = document.getElementById('answers-form');
                            console.log(totalQuestionss["p" + i]);
            a++;                
        });

        html += `<div class="col-md-4 mb-3">
                    <div class="card h-100">
                        <div class="card-body">
                            ${element.question}
                            ${htmlIncorrectA}
                        </div>
                    </div>
                </div>`;
        i++;
    });
    //poner los datos en html
    containerData.innerHTML = html;
    } 
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