import images from '../images';

function RightImages(){
    return(
        <>
          <div className="circle"></div>
        <div></div>
        <div id="animated-circle-container">
           
            <div className="dashed-svg-circle">
                <svg viewbox="0 0 346 346" width="346" height="346">
                    <circle id="svg-circle" r="168" fill="none" cx="50%" cy="50%" stroke="#EA6A12" stroke-width="4px" stroke-dasharray="25px"></circle>
                </svg>
                <img src={images.food1} alt="food frame" id="first" />
                <img src={images.food2} alt="food frame" id="second" />
                <img src={images.food3} alt="food frame" id="third" />
                <img src={images.food4} alt="food frame" id="fourth" />
                <img src={images.food5} alt="food frame" id="fifth" />
                <img src={images.food6} alt="food frame" id="sixth" />
            </div>
            </div>
        </>
    )
}
export default RightImages;