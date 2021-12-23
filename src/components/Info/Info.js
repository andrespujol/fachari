import React from 'react'
import delivery from '../../assets/delivery.png'
import wallet from '../../assets/wallet.png'
import moneyBack from '../../assets/money-back.png'
import './Info.css'

export const Info = () => {
    return (
        <section className='info'>
            <article className='infoArticle'>
                <img src={delivery} alt={delivery} className='imgInfo'/>
                <div className='infoText'>
                    <h3>ENVÍOS</h3>
                    <p>A todo el país</p>
                </div>
            </article>
            <article className='infoArticle'>
                <img src={wallet} alt={wallet} className='imgInfo'/>
                <div className='infoText'>
                    <h3>PAGO SEGURO</h3>
                    <p>Tus pagos son seguros en nuestra plataforma</p>
                </div>
            </article>
            <article className='infoArticle'>
                <img src={moneyBack} alt={moneyBack} className='imgInfo'/>
                <div className='infoText'>
                    <h3>CAMBIOS</h3>
                    <p>En los primeros 15 días</p>
                </div>
            </article>
        </section>
    )
}
