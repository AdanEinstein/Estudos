const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Antes1....')
    return cb()
}

const antes2 = cb => {
    console.log('Antes2....')
    return cb()
}

function copiar(cb) {
    gulp.src('pastaA/**/*.txt') //['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']
    // .pipe(imagePelaMetade())
    // .pipe(imageEmPretoEBranco())
    // .pipe(transformacaoA())
    // .pipe(transformacaoB())
    // .pipe(transformacaoC())
    .pipe(gulp.dest('pastaB')) //criação automatica
    return cb()
}

const fim = cb => {
    console.log('Fim!!')
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2), 
    copiar,
    fim
    )