const path = require('path');
const fs = require('fs');

console.log("tester");

let chirpsArr1 = [{
    "uId": "e54eab15-b6ef-40c3-a68e-765c787ffd23",
    "user": "WhataTester2",
    "msg": "This is a test #2",
    "create_at": 1705974198463
}, {
    "uId": "7f53f06d-bad0-48b6-b41e-acca9273882a",
    "user": "tester1",
    "msg": "This tester # 1",
    "create_at": 1705974171906
}, {
    "uId": "x20D88c1-79a0-d85a-43cd-0c9f6cc219c7",
    "user": "BitsandBytes",
    "msg": "Who is left over?",
    "create_at": 1705969826683
}, {
    "uId": "A20088c1-79a0-d85a-43cd-0c9f6cc219c7",
    "user": "AllTheKingsHorses",
    "msg": "Peat falls off and into the water",
    "create_at": 1705969811683
}, {
    "uId": "550088c1-79a0-d85a-43cd-0c9f6cc219c7",
    "user": "HumptyDumpty10",
    "msg": "Peat and Repeat are in a boat together",
    "create_at": 1705969726683
}];

console.log(chirpsArr1);

const chirpsRun = path.join(__dirname,'../chirpArrSet.json');

fs.writeFile(chirpsRun,JSON.stringify(chirpsArr1),(err) => {
    if(err) {
        console.log(err);
    }});

var filmArr = [];
const favFilmRun = path.join(__dirname, '../favorite-films.json');

fetch('http://api-ghibli.herokuapp.com/films')
    .then(res => res.json())
    .then((films) => {
        films.forEach(film => (
            filmArr.push({
                "id": `${film.id}`,
                "title": `${film.title}`,
                "rt_score": `${film.rt_score}`,
                "image": `${film.image}`,
                "description": `${film.description}`

            }),
            fs.writeFile(favFilmRun, JSON.stringify(filmArr), (err) => {
                if (err) {
                    console.log(err);
                }
            })
        ))
    })
    .catch(e => (e.message))