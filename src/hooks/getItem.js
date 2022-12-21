import {doc,collection,getDoc,getDocs,query,where,getFirestore} from 'firebase/firestore';

import { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';

    
function GetItem(){

const [info, setInfo]=useState(null);

const {category,id}=useParams();


const dataBase=getFirestore();

const refItems=[dataBase,'Items'];

const consulta= id ? doc(...refItems,id) : collection(...refItems);

useEffect(()=>{

    //-------------------------------------------Categorias de productos-------------------------------------
    if(category){
    
        const q = query(consulta, where("category",'==',category));
        
        getDocs(q).then((prods)=> setInfo(prods.docs.map((doc)=>({id: doc.id,...doc.data()}))));
        
        return;
        
        }
        
        //-------------------------------------------Ir al detalle de un producto-------------------------------------
        
        if(id){
        
            getDoc(consulta).then((prod)=>{
            
            if(prod.exists()){setInfo({id:prod.id, ...prod.data()})}
            
            }).catch((problema)=>console.log({problema}))

        return;
            
        }
    
    //----------------------------------------------Creacion de articulos en general-------------------------------
    
    getDocs(consulta).then((prods)=>setInfo(prods.docs.map((prod)=>({id: prod.id, ...prod.data()}))));
     
    },[]);

return info

}


export default GetItem