import { Fragment } from "react";
const Rank = ({name,Rank})=>{

    return(
        <Fragment>
        <div className="f3 white">
            {`${name}, Your Current Entry Count is.....`}
        </div>
        <div className="f1 white">
            {`#${Rank}`}
        </div>
        </Fragment>

    )

}

export default Rank;