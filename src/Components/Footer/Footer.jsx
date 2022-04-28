import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <div className="song-footer">
        <div className="copy-right">
            <medium className='copy-color'>&copy;{new Date().getFullYear()} FRM ABVE PLAYLIST</medium> | Lets HUNT
        </div>
    </div>

  );
}

export default Footer;