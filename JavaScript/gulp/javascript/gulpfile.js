const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function tranformacaoJS(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, //arquivos de comentarios não irão para o arquivo final
            presets: ["env"]

        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
    
    // return cb()
}

const fim = cb => {
    console.log('Fim...')
    return cb()
}

exports.default = series(tranformacaoJS, fim)