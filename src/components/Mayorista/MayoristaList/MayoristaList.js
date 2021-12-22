import React from 'react'
import { MayoristaProduct } from './MayoristaProduct/MayoristaProduct'

export const MayoristaList = ({products}) => {
    return (
        <div>
            <MayoristaProduct/>
            <div className="contenedorCards" >
                {products.map(item=>(
                    <MayoristaProduct 
                    key={item.id} {...item}
                    />
                ))}
            </div>
        </div>
    )
}
