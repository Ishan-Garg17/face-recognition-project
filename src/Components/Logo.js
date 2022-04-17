import React from "react";
import Tilty from 'react-tilty';
import logo from './logo.png'
const Logo = () => {
    return (

        <div  className="ma5 ">
            <Tilty className="Tilt color shadow-3" axis="null" scale={1.5}
                options={{ max: 55 }} perspective={900} speed={300} reset={true} style={{ height: 120, width: 130,border: '1.5px solid black' }}>
                <div className=" pa3 Tilt-inner">
                    <img style={{marginTop: '10px'}} src={logo} alt="" />
                </div>
            </Tilty>
        </div>

    )

}

export default Logo;