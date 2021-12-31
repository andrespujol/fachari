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
                    src: "https://files.fm/thumb_show.php?i=hxz9g9e58",
                    },
                    {
                    // altText: 'Slide 2',
                    // caption: 'Slide 2',
                    key: 2,
                    src: "https://files.fm/thumb_show.php?i=3wahtxhbv"
                    },
                    {
                    // altText: 'Slide 3',
                    // caption: 'Slide 3',
                    key: 3,
                    src: "https://files.fm/thumb_show.php?i=un3bkrafa"
                    },
                    {
                        // altText: 'Slide 4',
                        // caption: 'Slide 4',
                        key: 4,
                        src: "https://files.fm/thumb_show.php?i=gcmdvx8r8"
                    },
                    {
                        // altText: 'Slide 5',
                        // caption: 'Slide 5',
                        key: 5,
                        src: "https://files.fm/thumb_show.php?i=sjhfx5ftw"
                    }
                ]}
            />
        </section>
    );
}
