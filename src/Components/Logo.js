import React from "react";
import Tilty from 'react-tilty';
const Logo = () => {
    return (

        <div className="ma4 mt0">
            <Tilty className="Tilt" axis="null" scale={1.2}
                options = {{max: 35}}  perspective={900} speed={300} reset={true}  style={{height: 150, width: 100}}>
                <div className="Tilt-inner shadow2" style={{border: '1px solid black',height: '100px',}}></div>
            </Tilty>
        </div>

    )

}

export default Logo;