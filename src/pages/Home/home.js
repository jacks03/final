import React from 'react';
import TestiMonials from '../../components/TestiMonials/TestiMonials';
import "./home.css"

const Home = () => {
    return (
        <div className='sec-home'>

            <div className='container-home'>
            <div className='content-home'>
                <h2>PRODUCTOS SALUDABLES Y ALTERNATIVOS PARA LOS MENORES DEL HOGAR</h2>
                    <h3>JUGUETES EDUCATIVOS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam congue sed et leo, dignissim odio justo.
</p>
            </div>
<div className='carousel'>

<TestiMonials/>
</div>

</div>
        </div>

    );
};

export default Home;