import React, { Component } from 'react';
import '../assets/css/Inicio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar, faUsers } from '@fortawesome/free-solid-svg-icons'

export default class Inicio extends Component {
  render() {
    return (
        	<div className='inicio-container'>
				<div className='presentacion-container'>
					<div className='text-container'>
						<div className='title'>Taller de Educación Musical Aplicada</div>
                        <div className='subtitle'>TEMA</div>
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
					<div className='image-container'></div>
				</div>
				<div className='info-boxes-container'>
					<div className='info-box'>
						<FontAwesomeIcon icon={faGuitar} className='icon'/>

						<div className='title'>
							Metodología Suzuki
						</div>
						<div className='text'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, 
                            mattis tellus.
						</div>
					</div>
					<div className='info-box'>
						<FontAwesomeIcon icon={faUsers} className='icon'/>
						<div className='title'>
							Todas las edades
						</div>
						<div className='text'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, 
                            mattis tellus.
						</div>
					</div>
					<div className='info-box'>
						<FontAwesomeIcon icon={faGuitar} className='icon'/>
						<div className='title'>
							Blablabla
						</div>
						<div className='text'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, 
                            mattis tellus.
						</div>
					</div>
				</div>
            </div>
			);
  }
}
