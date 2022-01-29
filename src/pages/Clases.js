import React, { Component } from 'react';
import '../assets/css/Clases.css'

export default class Clases extends Component {
  render() {
    return (
                <div className='clases-container'>
                    <div className='clase-container'>
                        <div className='text-container left'>
                            <div className='title'>Instrumento</div>
                            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                             molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan</div>
                        </div>
                        <div className='image-container instrumentos'></div>
                    </div>
                    <div className='clase-container'>
                        <div className='image-container armonia'></div>          
                        <div className='text-container right'>
                            <div className='title'>Armonía</div>
                            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                             molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan</div>
                        </div>
                    </div>
                    <div className='clase-container'>
                        <div className='text-container left'>
                            <div className='title'>Audio Perspectiva</div>
                            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                             molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan</div>
                        </div>
                        <div className='image-container audio'></div>
                    </div>
                    <div className='clase-container'>
                        <div className='image-container examen'></div>          
                        <div className='text-container right'>
                            <div className='title'>Examen de Ingreso</div>
                            <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                             molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan</div>
                        </div>
                    </div>
                </div>
            );
  }
}
