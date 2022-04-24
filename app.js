// Script for calculating score
const soal = [
    {
        skor: {
            a: 4,
            b: 3,
            c: 2,
            d: 1,
            e: 5,
        },
        skorSiswa: 0
    },
    {
        skor: {
            a: 2,
            b: 4,
            c: 5,
            d: 1,
            e: 3,
        },
        skorSiswa: 0
    },
    {
        skor: {
            a: 2,
            b: -2,
            c: 2,
            d: -2,
        },
        skorSiswa: 0
    }
]
    

const calculate = function (targetSoal) {
    const jawaban = document.querySelector('input[name="' + targetSoal + '"]:checked').value
    const nomorSoal = parseInt(targetSoal.match(/\d/)[0])
    let score = soal[nomorSoal - 1].skor[jawaban]
    soal[nomorSoal - 1].skorSiswa = score
}
const calculateComplex = function (targetSoal) {
    const jawaban = document.querySelectorAll('#' + targetSoal + ' input:checked')
    const nomorSoal = parseInt(targetSoal.match(/\d/)[0])
    let score = 0
    for (let i = 0; i < jawaban.length; i++){
        score += soal[nomorSoal - 1].skor[jawaban[i].value]
    }
    soal[nomorSoal - 1].skorSiswa = score
}

const showScore = function () {
    const target = document.getElementById('target')
    let totalScore = 0
    for (let i = 0; i < soal.length; i++){
        totalScore += soal[i].skorSiswa
    }
    target.innerHTML = totalScore
}