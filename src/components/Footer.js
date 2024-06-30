import React from "react";
import '../styles.css';

export default function Footer(){
    const currentDate = new Date().getFullYear();
    return(
    
                <footer className="footer">
                   <p className="footer-text"> 
                   @ {currentDate} Moviedux, All rights reserved.

                   </p>
                </footer>
            )
}
