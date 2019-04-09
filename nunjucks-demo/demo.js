const nunjucks = require('nunjucks')

// nunjucks.configure({autoescape: true})

nunjucks.configure('views',{ autoescap:true })
const result = nunjucks.render('index.html',{ foo: 'h1' })
const result2 = nunjucks.renderString('Hello {{ username }}',{ username: 'Janes' })