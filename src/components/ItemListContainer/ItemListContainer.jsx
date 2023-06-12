import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {db} from '../../services/config';
import { collection, getDocs, where, query } from 'firebase/firestore';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();

  useEffect( ()=> {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {const data = doc.data()
          return {id:doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
  },[idCategoria])

  return (
    <>
      <h1 style={{textAlign: "center"}}> Bienvenidxs a Tés del Sur! </h1>
      <h4 style={{textAlign: "center"}}> Dejate tentar por nuestros deliciosos tés, en lindos packagings de 100 gramos </h4>
      <ItemList productos={productos} />
    </>
  )}

export default ItemListContainer