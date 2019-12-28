import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import {ButtonContainer} from './Button';
import styled from 'styled-components';
const logoImg = {
    height: '70px',
    width: '250px'
}
export default class Navbar extends Component {
    render() {
        const imgBacaroo = '/img/bacarooBlue.png';
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5 mb-20'>
            {/*
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}

                <Link to='/'>
                    <img src={imgBacaroo} alt='bacaroo' style= {logoImg} className='navbar-brand' />
                </Link>
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>products</Link>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                            <i className='fas fa-cart-plus' />
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
            
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue); 
    /*position: fixed;
    width: 100%;
    z-index: 5; */
    .nav-link{
        color:var(--mainWhite) !important;
        font-size: 1.3rem;        
        text-transform: capitalize;
    }   
`