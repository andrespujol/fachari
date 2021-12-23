import React from 'react'
// import { InstagramList } from './InstagramList/InstagramList'
import { UncontrolledCarousel } from 'reactstrap'
import './Instagram.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export const Instagram = () => {




    return (
        <section>
            <h2 className='instagramTitle'> Seguinos en instagram </h2>
            <UncontrolledCarousel className='carousel'
                items={[
                    {
                    altText: 'Slide 1',
                    caption: 'Slide 1',
                    key: 1,
                    src: "https://i.ibb.co/W6C5MW4/Instagram-1.png"
                    },
                    {
                    altText: 'Slide 2',
                    caption: 'Slide 2',
                    key: 2,
                    src: "https://i.ibb.co/NpWRdy5/Instagram-2.png"
                    },
                    {
                    altText: 'Slide 3',
                    caption: 'Slide 3',
                    key: 3,
                    src: "https://i.ibb.co/fSN2VMZ/Instagram-3.png"
                    },
                    {
                        altText: 'Slide 4',
                        caption: 'Slide 4',
                        key: 4,
                        src: "https://i.ibb.co/zH8C5cy/Instagram-4.png"
                    },
                    {
                        altText: 'Slide 5',
                        caption: 'Slide 5',
                        key: 5,
                        src: "https://i.ibb.co/fFTBnVs/Instagram-5.png"
                    }
                ]}
            />
        </section>
    );
}
