import React from "react";
import './ImageLinkForm.css'
const ImageLinkForm = () => {
    return (

        <div className="ma4 mt0">
            <p className="f3">
                {'This Magic Brain will detect faces in your picture, Give it a try!'}
            </p>
            <div className=" form center pa3 br3 shadow-5 w-100">
                <input className = "f4 pa2 w-80  center" type="text" />
                <button className="w-40 pointer h-40 link ph3 grow pv2 dib white bg-light-purple">Detect</button>
            </div>
        </div>

    )

}

export default ImageLinkForm;