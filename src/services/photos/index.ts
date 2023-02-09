import axios from '../../utils/axios/index'
import {Photo} from '../../types/index'

class PhotosService{

    private url = "/photos"
    // private Photo:Photo
    private Photos: Photo[] = []


    async getAllPhotos(){

        const {data} = await axios.get(this.url)
        this.Photos = data


        if(this.Photos.length < 1 ) throw new Error("No hay info");
        

        return this.Photos

    }


}


export default new PhotosService
