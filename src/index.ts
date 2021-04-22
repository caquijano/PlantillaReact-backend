import app from './app'
import './database'

const PORT = process.env.PORT || '4000'

app.listen(PORT, function (){
    console.log('server port'+PORT)
})