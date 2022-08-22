import React from 'react'
import { useForm } from 'react-hook-form'
import firebase from '../../firebaseConnection'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { toast } from 'react-toastify'
import { IoMdPin } from 'react-icons/io'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import 'react-toastify/dist/ReactToastify.css'
import './contato.css'

function Contato() {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({})
    const onSubmit = async (data) => {
        await firebase
            .firestore()
            .collection('contact')
            .add({
                name: data.name,
                email: data.email,
                phone: data.phone,
                destination: data.destination,
                message: data.message,
            })
            .then(() => {
                toast.success('Mensagem enviada com sucesso!')
            })
            .catch((error) => {
                alert('ERRO' + error)
            })

        await firebase
            .firestore()
            .collection('mail')
            .add({
                to: 'portosegurotaxi1@gmail.com',
                message: {
                    subject: 'Olá, gostaria de fazer um orçamento!',
                    html: JSON.stringify(data),
                },
            })

        reset({
            name: '',
            email: '',
            phone: '',
            destination: '',
            message: '',
        })
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyA2vjH8h2NeYbIDe_Ow1B-GD2_CEkikj4w',
    })

    const position = {
        lat: -23.948392,
        lng: -46.462125,
    }

    return (
        <section id="contato">
            <div className="form-home">
                <div className="title-form">
                    <h3>Agende sua avaliação</h3>
                    <p>
                        Entre em contato pelo formulário abaixo ou através do
                        nosso Whastapp!
                    </p>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Nome*</label>
                        <input
                            className={errors.name ? 'red-border' : ''}
                            placeholder="Digite seu nome..."
                            {...register('name', { required: true })}
                        />
                        <label>E-mail*</label>
                        <input
                            className={errors.email ? 'red-border' : ''}
                            placeholder="Digite seu e-mail..."
                            {...register('email', { required: true })}
                        />
                        <label>Telefone*</label>
                        <input
                            className={errors.phone ? 'red-border' : ''}
                            placeholder="Digite seu telefone..."
                            {...register('phone', { required: true })}
                        />

                        <label>Mensagem</label>
                        <textarea
                            placeholder="Digite sua mensagem..."
                            {...register('message')}
                        />

                        <div className="contact-button">
                            <button id="btn" type="submit">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="map-container">
                
            <div className='horario'>
                    <h3>Horário de funcionamento</h3>

                    <p>Segunda a Sexta 09:00 - 19:00 </p>  
                    <p>Sábado 09:00 - 13:00</p>
                </div>
                <div className="map">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={{
                                width: '100%',
                                height: '100%',
                            }}
                            center={position}
                            zoom={15}
                        >
                            <Marker position={position} />
                        </GoogleMap>
                    ) : (
                        <></>
                    )}
                    <div className="direction">
                        <div className="item-direction">
                            <div className="contact-icon">
                                <IoMdPin color="#24c18c" />
                            </div>
                            <div>
                                <span>
                                    Av. Dr. José Singer, 246 - Conjunto
                                    Residencial Humaitá, São Vicente - SP,
                                    11349-000
                                </span>
                            </div>
                        </div>
                        <div className="item-direction">
                            <div className="contact-icon">
                                <FaEnvelope color="#24c18c" />{' '}
                            </div>
                            <div className="contact-icon">
                                <span>contato@odontocompanyhumaita.com.br</span>
                            </div>
                        </div>
                        <div className="item-direction">
                            <div className="contact-icon">
                                <FaPhoneAlt color="#24c18c" />
                            </div>
                            <div>
                                <span>+55 13 99640-1268</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contato
