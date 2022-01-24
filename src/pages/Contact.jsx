import React from 'react';
import Mouse from '../components/Mouse';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SocialNetwork from '../components/SocialNetwork';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';


export default function Contact() {
    return (
        <main>
            <Mouse />
            <div className="contact">
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">

                    <div className="address">
                        <div className="content">
                            <h4>Adresse</h4>
                            <p>Technopole Elghazela</p>
                            <p>Oumeima RACHDI | 2022</p>
                            <p>Email: oumeima.rachdi@sesame.com.tn</p>
                        </div>
                    
                    </div>

                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard text="06********" className="hover">
                                <p style={{cursor: 'pointer'}} className='clipboard'
                                onClick={()=> {
                                    alert('Téléphone copié !');
                                }}
                                >06********</p>
                            </CopyToClipboard>
                        </div>
                    </div>

                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text='oumeima.rachdi@sesame.com.tn'
                            className='hover'>
                                <p style={{cursor:'pointer'}} className='clipboard'onClick={()=> {
                                    alert('Email copié !');
                                }}>oumeima.rachdi@sesame.com.tn</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                </div>
                <ButtonsBottom left={'/ecosysteme'} />
            </div>        
        </main>
    )
}
