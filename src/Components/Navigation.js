import React from "react";


const Navigation =({isSignedin,onRouteChange})=>{
    if(isSignedin)
    {
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={()=>onRouteChange('signin')} className="f3 link dim black underline pa4 pointer">Sign Out</p>
            </nav>
        )
    }
    else{
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={()=>onRouteChange('signin')} className="f3 link dim black underline pa4 pointer">Sign-in</p>
          <p onClick={()=>onRouteChange('register')} className="f3 link dim black underline pa4 pointer">Register</p>
        </nav>
        )
   }
}

export default Navigation