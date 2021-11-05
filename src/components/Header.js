import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="https://www.yariskabin.com.tr/assets/img/logo.png"/>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt=""/>
                    <span>ANA SAYFA</span>
                </a>

                <a>
                    <img src="/images/search-icon.svg" alt=""/>
                    <span>ARAMA</span>
                </a>

                <a>
                    <img src="/images/watchlist-icon.svg" alt=""/>
                    <span>İSTEK</span>
                </a>
            </NavMenu>
            <UserImg src="https://www.w3schools.com/howto/img_avatar.png"/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.5px;
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`