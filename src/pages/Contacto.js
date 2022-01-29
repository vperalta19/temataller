import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faYoutube, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import '../assets/css/Contacto.css'

export default class Contacto extends Component {
  render() {
    return (
            <div className='contacto-container'>
                <div className='contacto-text'>
                    <div className='text-container'>
                        <div className='title'>CONTACTANOS</div>
                        <div className='info'>
                            Para mas información sobre nuestras clases, precios y horarios comunicarse via whats app o tambien pueden encontrarnos en nuestras redes sociales.
                        </div>
                    </div>
                    <div className='social-media'>
                        <a rel="noreferrer" target="_blank" href='https://www.instagram.com/temataller/?utm_medium=copy_link' style={{textDecoration:'none',color: 'black'}}>
                            <FontAwesomeIcon icon={faInstagram} className='icon'/>
                        </a>
                        <a rel="noreferrer" target="_blank" href='https://twitter.com/roberprofmus' style={{textDecoration:'none',color: 'black'}}>
                            <FontAwesomeIcon icon={faTwitter} className='icon' />
                        </a>
                        <a rel="noreferrer" target="_blank" href='https://es-la.facebook.com/TemaTaller' style={{textDecoration:'none',color: 'black'}}>
                            <FontAwesomeIcon icon={faFacebook} className='icon' />
                        </a>
                        <a rel="noreferrer" target="_blank" href='https://www.youtube.com/channel/UCMNWeu1OY1GETJpN2xF0qaQ' style={{textDecoration:'none',color: 'black'}}>
                            <FontAwesomeIcon icon={faYoutube} className='icon' />
                        </a>
                    </div>
                    <a rel="noreferrer" target="_blank" className='send-wpp' href='https://wa.me/543854044595?text=Hola! Me gustaría saber mas de las clases.'>
                        <FontAwesomeIcon icon={faWhatsapp} className='icon'/>
                        <div className='send-wpp-text'>Enviar mensaje por Whats App</div>
                    </a>
                </div>
                <div className='contacto-img'>
                    
                </div>
            </div>);
  }
}
