module.exports = (app) => {
    //abrir a view index.ejs
    app.get('/', (req, res) => {
        res.render('index.ejs')
    })
}