import React from 'react'
import './quemsomos.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import odonto1 from '../../assets/odonto1.png'
import odonto2 from '../../assets/odonto2.png'
import odonto3 from '../../assets/odonto3.png'

function Quemsomos() {
    const responsive = {
        desktop: {
            breakpoint: { max: 1920, min: 1800 },
            items: 5,
        },
        teste: {
            breakpoint: { max: 1800, min: 1440 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1440, min: 1072 },
            items: 3,
        },

        miniTablet: {
            breakpoint: { max: 1072, min: 700 },
            items: 2,
        },

        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 1,
        },
    }

    return (
        <section id="quemsomos">
            <div className="title">
                <h2>Quem Somos?</h2>
                <p>
                    A OdontoCompany é uma rede de franquias de Clínicas
                    Odontológicas completa, atendendo diversas áreas da
                    odontologia atual e moderna! Somos conhecidos por nossos
                    pacientes, principalmente pelos resultados obtidos por
                    nossos dentistas no restabelecimento dos sorrisos, através
                    das avançadas técnicas de dentística e implantodontia,
                    utilizando a mais alta tecnologia, com segurança e conforto
                    em todas as etapas do tratamento.
                </p>
            </div>
            <Carousel responsive={responsive} autoPlaySpeed={30000}>
                <div className="foto">
                    <img src={odonto1} alt="consultorio" />
                </div>
                <div className="foto">
                    <img src={odonto2} alt="consultorio" />
                </div>
                <div className="foto">
                    <img src={odonto3} alt="consultorio" />
                </div>
                <div className="foto">
                    <img src={odonto1} alt="consultorio" />
                </div>
                <div className="foto">
                    <img src={odonto2} alt="consultorio" />
                </div>
                <div className="foto">
                    <img src={odonto3} alt="consultorio" />
                </div>
                <div className="foto">
                    <img src={odonto1} alt="consultorio" />
                </div>
                <div className="foto">
                    <img src={odonto2} alt="consultorio" />
                </div>
                <div className="foto">
                    <img src={odonto3} alt="consultorio" />
                </div>
            </Carousel>
        </section>
    )
}

export default Quemsomos
