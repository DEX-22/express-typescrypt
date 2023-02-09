
import express from 'express'
import PhotoService from './services/photos/index'

const app = express()

app.use(express.json())
app.set('views','./views')

const PORT = 3000

app.get('/ping',(_req,res) => {
    console.log('hola perro')

    res.send('pong')



})


app.get('/photos',async (_req,res) => {
    console.log('tamos en photos')

    const p:any = []

    const photos = await PhotoService.getAllPhotos()

    if(photos.length < 1)
        res.status(404).send(photos) 
    else
        photos.map(photo => {
            
            p.push(photo)
            res.sendFile(`${__dirname}/views/index.html`)

        })
    
    res.send(`<pre>${p[2].id}</pre>`)


})





app.listen(PORT,()=>{
    console.log(` TAMO ACTIVO EN EL ${PORT}`);



    
})


