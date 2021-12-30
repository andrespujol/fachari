import React from 'react'
import { MayoristaProduct } from './MayoristaProduct/MayoristaProduct'
import './MayoristaList.css'

export const MayoristaList = ({products}) => {
    return (
        <>
            <MayoristaProduct/>
            <div className="contenedorCards" >
                {products.map(item=>(
                    <MayoristaProduct 
                    key={item.id} {...item}
                    />
                ))}
            </div>
        </>
    )
}
