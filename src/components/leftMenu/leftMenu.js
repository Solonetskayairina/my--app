    import React from "react";

    import './style.css'

    const LeftMenu = ({ onMenuClick }) => {
        return (
            <div className="left-menu">
                <ul>
                    <li onClick={() => onMenuClick("Container")}>Послуга 1</li>
                    <li onClick={() => onMenuClick("Container2")}>Послуга 2</li>
                </ul>
            </div>
        );
    };

    export default LeftMenu;