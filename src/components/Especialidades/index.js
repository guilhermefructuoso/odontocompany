import React from 'react'
import './especialidades.css'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'



function Especialidades() {
    
  

    return (
        <section id="especialidades">
            <div className="title-especialidades">
                <h2>Especialidades</h2>
            </div>
            <div className="container-quemsomos">
                <div className="icons">
                    <img src={icon1} alt="icone" />
                </div>

                <div className="content">
                    <label>ortodontia</label>
                    <p>
                        A função principal do tratamento ortodôntico é
                        restabelecer a oclusão dentária (perfeito engrenamento
                        dos dentes superiores com os inferiores), que é
                        fundamental para a correta mastigação e,
                        consequentemente, a adequada nutrição e saúde bucal.
                    </p>
                </div>

                <div className="icons">
                    <img src={icon2} alt="icone" />
                </div>

                <div className="content">
                    <label>periodontia</label>
                    <p>
                        Especialidade odontológica responsável pela prevenção e
                        tratamento das doenças que acometem os tecidos de
                        sustentação e proteção dos dentes (tratamento da gengiva
                        e do osso).
                    </p>
                </div>
            </div>

            <div className="container-quemsomos">
                <div className="icons">
                    <img src={icon3} alt="icone" />
                </div>

                <div className="content">
                    <label>odontopediatria</label>
                    <p>
                        A Odontopediatria é o tratamento odontológico preventivo
                        completo para crianças.
                    </p>
                </div>

                <div className="icons2">
                    <img src={icon4} alt="icone" />
                </div>

                <div className="content">
                    <label>implantes</label>
                    <p>
                        A implantodontia é a especialidade odontológica que
                        reabilita a saúde bucal quando há perda de um ou mais
                        dentes. Os implantes são cilindros metálicos (titânio)
                        que, ao serem instalados nos ossos maxilares, substituem
                        as raízes de dentes ausentes.
                    </p>
                </div>
            </div>

            <div className="container-quemsomos">
                <div className="icons2">
                    <img src={icon5} alt="icone" />
                </div>

                <div className="content">
                    <label>clínico geral</label>
                    <p>
                        Entre as competências do dentista clínico geral estão:
                        prevenção, diagnóstico e tratamento de uma ampla
                        variedade de condições, desordens e doenças dos dentes e
                        gengivas.
                    </p>
                </div>

                <div className="icons2">
                    <img src={icon6} alt="icone" />
                </div>

                <div className="content">
                    <label>próteses dentárias</label>
                    <p>
                        A especialidade de prótese dentária é responsável por
                        reestruturar os tecidos bucais e dentes perdidos, seja
                        por acidentes ou doenças periodontais, por peças
                        artificiais - fixas ou removíveis.
                    </p>
                </div>
            </div>

       
        </section>
    )
}

export default Especialidades
