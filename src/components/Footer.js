import React from 'react';
import styled from '@emotion/styled';

function Footer() {
    const Footer = styled.footer`
        height: 4vh;
        text-align: center;
        background-color: #2C313C;
        color: white;
        font-size: 1rem;
    `
    const List = styled.ul`
        list-style-type: none;
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
    `
    const ListItem = styled.li`
        padding: 0 10px; 
    `
    const Link = styled.a`
        text-decoration: none;
        color: white;
        padding-left: 3px;
    `

    return (
        <Footer>
            <List>
                <ListItem>
                    <img align="left" alt="Twitter" width="18px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/twitter.svg" />
                    <Link href='https://twitter.com/Jemeni11_' target="_blank" rel="noopener noreferrer">Twitter</Link>
                </ListItem>
                <ListItem>
                    <img align="left" alt="Email" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/gmail.svg" />
                    <Link href='mailto:emmanueljemeni@gmail.com' target="_blank" rel="noopener noreferrer">Email</Link>
                </ListItem>
                <ListItem>
                    <img align="left" alt="GitHub" width="22px" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hashnode.svg" />
                    <Link href='https://github.com/Jemeni11' target="_blank" rel="noopener noreferrer">GitHub</Link>
                </ListItem>
                <ListItem>
                    <img align="left" alt="Dev.to" width="22px" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg" />
                    <Link href='https://dev.to/jemeni11' target="_blank" rel="noopener noreferrer">Dev.to</Link>
                </ListItem>
                <ListItem>
                    <img align="left" alt="Hashnode" width="22px" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hashnode.svg" />
                    <Link href='https://jemeni11.hashnode.dev' target="_blank" rel="noopener noreferrer">Hashnode</Link>
                </ListItem>
            </List>
        </Footer>
    )
}

export default Footer