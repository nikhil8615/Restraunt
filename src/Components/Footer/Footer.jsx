import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                        Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!
                    </p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon}/>
                        <img src={assets.twitter_icon}/>
                        <img src={assets.linkedin_icon}/>
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>Company</h2>
                    <ul> 
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+91 1234565432</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className='footer-copyright'>
                Copyright 2024 © Tomato.com - All Right Reserved
            </p>
        </div>
    )
}


export default Footer
