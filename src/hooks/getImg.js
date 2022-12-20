import {getDownloadURL, getStorage, ref} from 'firebase/storage';
import {useEffect, useState } from 'react';

export const GetImg=(productImg)=>{

const [imagen, setImagen]=useState(null);
const firestore=getStorage();
const imageReference=ref(firestore,productImg)

useEffect(() => {
    getDownloadURL(imageReference)
      .then((data) => setImagen(data))
      .catch((err) => console.error({ err }));
  }, [imageReference]);


return imagen

}
