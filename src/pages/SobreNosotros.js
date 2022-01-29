import React, { Component } from 'react';
import '../assets/css/SobreNosotros.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'

export default class SobreNosotros extends Component {
  render() {
    return (
            <div className='about-us-container'>
                <div className='about-us-text'>
                    <div className='text-container'>
                        <div className='title'>Profesor</div>
                        <div className='subtitle'>ROBERTO PERALTA</div>
                        <div className='info'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, 
                            mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                            tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti
                            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
                            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu
                            tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. 
                            Aliquam in elementum tellus.
                        </div>
                    </div>
                    <div className='social-media'>
                        <a rel="noreferrer" target="_blank" href='https://www.instagram.com/roberto00peralta/?hl=es-la' style={{textDecoration:'none',color: 'black'}}>
                            <FontAwesomeIcon icon={faInstagram} className='icon'/>
                        </a>
                        <a rel="noreferrer" target="_blank" href='https://twitter.com/roberto_peralta' style={{textDecoration:'none',color: 'black'}}>
                            <FontAwesomeIcon icon={faTwitter} className='icon' />
                        </a>
                        <a rel="noreferrer" target="_blank" href='https://m.facebook.com/people/Roberto-F-Peralta/1381050629' style={{textDecoration:'none',color: 'black'}}>
                            <FontAwesomeIcon icon={faFacebook} className='icon' />
                        </a>
                        <a rel="noreferrer" target="_blank" href='https://www.youtube.com/user/arribalosbeatles' style={{textDecoration:'none',color: 'black'}}>
                            <FontAwesomeIcon icon={faYoutube} className='icon' />
                        </a>
                    </div>
                </div>
                <div className='about-us-img'></div>
            </div>
            )
        }
}
