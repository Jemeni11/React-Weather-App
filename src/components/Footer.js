import React from 'react';
import styled from '@emotion/styled';

function Footer() {
    const newDate = new Date();

    const Footer = styled.footer`
        height: 5vh;
        text-align: center;
        background-color: #2C313C;
        color: white;
        font-size: 1rem;
    `

    return (
        <Footer>
            <small>Copyright {newDate.getFullYear()} | Emmanuel C. Jemeni</small>
        </Footer>
    )
}

export default Footer