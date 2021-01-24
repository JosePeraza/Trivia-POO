const url = 'https://opentdb.com/api.php?amount=10';

fetch(url)
    .then((response) => response.json())
    .then((data) => printData(data.results));


function printData(data) {
    // console.log(data);

    for(let i = 0; i < data.length; i++) {
        console.log(data[i])
    }
}