import React from "react";
import Tilty from 'react-tilty';
import logo from './logo.png'
const Logo = () => {
    return (

        <div className="ma2 mt0">
            <Tilty className="Tilt color" axis="null" scale={1.2}
                options={{ max: 35 }} perspective={900} speed={300} reset={true} style={{ height: 100, width: 100 }}>
                <div className=" pa2 Tilt-inner shadow4" style={{ border: '1.5px solid black', height: '100px', }}>
                    <img style={{marginTop: '10px'}} src={logo} alt="" />
                </div>
            </Tilty>
        </div>

    )

}

export default Logo;