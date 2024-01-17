    import React from "react";

    import './style.css'

    export default function Header () {
        const handleLinkClick = (event) => {
            event.preventDefault();
        };
        return (
            <header>
                    <ul className='app-header'>
                        <li><a href="/" onClick={handleLinkClick}>Головна</a></li>
                        <li><a href="/about" onClick={handleLinkClick}>Про нас</a></li>
                        <li><a href="/contacts" onClick={handleLinkClick}>Контакти</a></li>
                    </ul>
            </header>
        )
    }