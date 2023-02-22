
import express from 'express'
import PhotoService from './services/photos/index'

const app = express()

app.use(function (_req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
    });

app.use(express.json())
app.set('views','./views')

const PORT = 3001

app.get('/ping',(_req,res) => {
    console.log('hola perro')

    res.send('pong')



})


app.get('/photos',async (_req,res) => {
    console.log('tamos en photos')

    const photos = await PhotoService.getAllPhotos()

    if(photos.length < 1)
            res.status(404).send('no hay fotos') 
    
    // res.setHeader('Acess-Control-Allow-Origin','*')
    res.send(photos)
    

})





app.listen(PORT,()=>{
    console.log(` TAMO ACTIVO EN EL ${PORT}`);



    
})


