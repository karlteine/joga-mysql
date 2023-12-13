const app = require('./utils/app')
const articleRoutes = require('./routes/articles')
const authorRoutes = require('./routes/author')

app.use('/', articleRoutes)
app.use('/article', articleRoutes)
app.use('/author', authorRoutes)

app.listen(3010, () => {
    console.log('server is connected at port 3010')
})