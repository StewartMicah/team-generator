var page = [`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="style.css"><title>my team</title><style>*{    margin: 0;}.title {    display: flex;    background-color: crimson;    width: 100%;    align-items: center;    justify-content: center;    font-size: 100px;    font-family: 'Times New Roman', Times, serif;}#cardContainer{    display: flex;    align-items: center;    justify-content: center;    }.card {    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);    transition: 0.3s;    width: 40%;  }    .card:hover {    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);  }    .container {    padding: 2px 16px;  }</style></head><body><h1 class="title">My Team</h1><div id="cardContainer">`, `</div><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"><script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script></body></html>`];

function generatePage(data) {
page.splice(1, 0, data);
return page.join(``);
}

module.exports = generatePage;