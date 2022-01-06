import React from 'react'
// import { InstagramList } from './InstagramList/InstagramList'
import { UncontrolledCarousel } from 'reactstrap'
import './Instagram.css'
import 'bootstrap/dist/css/bootstrap.min.css';




export const Instagram = () => {




    return (
        <section>
            <h2 className='instagramTitle'> Seguinos en instagram </h2>
            <UncontrolledCarousel className='carrusel'
                items={[
                    {
                    // altText: 'Slide 1',
                    // caption: 'Slide 1',
                    key: 1,
                    src: "http://imgfz.com/i/1cSAQBh.png",
                    },
                    {
                    // altText: 'Slide 2',
                    // caption: 'Slide 2',
                    key: 2,
                    src: "http://imgfz.com/i/Vsv2LT4.png"
                    },
                    {
                    // altText: 'Slide 3',
                    // caption: 'Slide 3',
                    key: 3,
                    src: "http://imgfz.com/i/ct5MJp8.png"
                    },
                    {
                        // altText: 'Slide 4',
                        // caption: 'Slide 4',
                        key: 4,
                        src: "http://imgfz.com/i/u9F8Rb1.png"
                    },
                    {
                        // altText: 'Slide 5',
                        // caption: 'Slide 5',
                        key: 5,
                        src: "http://imgfz.com/i/zUovgjZ.png"
                    }
                ]}
            />
        </section>
    );
}
