
function printData(data) {
    console.log(data);
    // for(let i = 0; i < data.length; i++) {
    //     console.log(data[i])
    // }
}

function getQuestions() {
    const totalQuestions = document.getElementById('total-questions').value;


    const url = `https://opentdb.com/api.php?amount=${totalQuestions}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => printData(data.results));
}