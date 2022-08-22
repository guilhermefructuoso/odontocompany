import React from 'react'
import './profissionais.css'
import dra from '../../assets/img-dra.png'
import dro from '../../assets/img-dro.png'

function Profissionais() {
    return (
        <section id="profissionais">
            <div className="title-pro">
                <h2>Profissionais</h2>
            </div>
            <div className="pro1">
                <div className="img-dra">
                    <img src={dra} alt="icone" width={250} height={320} />
                </div>
                <div className="content-pro">
                    <h3>Drª Cristiana Souza</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisci elit,
                        sed eiusmod tempor incidunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrum
                        exercitationem ullam corporis suscipit laboriosam, nisi
                        ut aliquid ex ea commodi consequatur. Quis aute iure
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint obcaecat cupiditat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum
                    </p>
                </div>
            </div>
            <div className="pro2">
            <div className="content-pro2">
                    <h3>Drª Cristiana Souza</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisci elit,
                        sed eiusmod tempor incidunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrum
                        exercitationem ullam corporis suscipit laboriosam, nisi
                        ut aliquid ex ea commodi consequatur. Quis aute iure
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint obcaecat cupiditat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum
                    </p>
                </div>

                <div className="img-dro">
                    <img src={dro} alt="icone" width={250} height={320} />
                </div>
            </div>
            <div className="pro1">
                <div className="img-dra">
                    <img src={dra} alt="icone" width={250} height={320} />
                </div>
                <div className="content-pro">
                    <h3>Drª Cristiana Souza</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisci elit,
                        sed eiusmod tempor incidunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrum
                        exercitationem ullam corporis suscipit laboriosam, nisi
                        ut aliquid ex ea commodi consequatur. Quis aute iure
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint obcaecat cupiditat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Profissionais
