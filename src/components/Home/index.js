import React from 'react'
import './home.css'
import whats from '../../assets/whatsapp.png'

function Home() {
    return (
        <section id="home">
            <div className="h1-content">
                <h1>Você com a melhor versão do seu sorriso!</h1>
                <button>
                    <a
                        href="http://wa.me/+5513996401268?text=Olá, gostaria de agendar uma consulta!"
                        target="-blank"
                    >
                        Agende sua avaliação{' '}
                    </a>
                </button>
            </div>

            
            <div className="whats">
                        <a
                            href="http://wa.me/+5513996401268?text=Olá, gostaria de fazer um orçamento!"
                            target="-blank"
                        >
                            <img
                                src={whats}
                                alt="botão whatsapp"
                                width={75}
                                height={75}
                            />
                        </a>
                    </div>
        </section>
    )
}

export default Home
