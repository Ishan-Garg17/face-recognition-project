const FaceRecognition = ({imageURl})=>{
    return(
        <div className="w-40 center ">
            <img className="shadow-3 br3" style={{width: '500px',height:'auto'}} src={imageURl} alt="Sorry, Can't fetch Image" />
        </div>
    )
}
export default FaceRecognition;