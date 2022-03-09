import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return ( 
        <>
        <h2 className='fs-1 m-4 text-center text-white'>{greeting}</h2>
        <ItemCount/>
        </>
     );
}
 
export default ItemListContainer;