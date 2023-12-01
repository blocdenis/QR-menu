import images from '../images';

function RightImages({page, svgClass}){
    return(
        <>

        {page === 'reset' ? 
            (
            <>
                <div className="circle move-x">
                    <img src={images.forgot.f1} alt='food frame' id='cfirst' />
                    <img src={images.forgot.f2} alt='food frame' id='csecond' />
                    <img src={images.forgot.f3} alt='food frame' id='cthird' />
                    <img src={images.forgot.f4} alt='food frame' id='cfourth'/>
                </div> 
            </>
            )
        :
        <div className="circle"></div>}
        

        <div id="animated-circle-container" className={svgClass}>
            <div className="dashed-svg-circle">
                <svg viewBox="0 0 346 346" width="346" height="346">
                    <circle id="svg-circle" r="168" fill="none" cx="50%" cy="50%" stroke="#EA6A12" strokeWidth="4px" strokeDasharray="25px"></circle>
                </svg>
                <img src={images.sign.food1} alt="food frame" id="first" />
                <img src={images.sign.food2} alt="food frame" id="second" />
                <img src={images.sign.food3} alt="food frame" id="third" />
                <img src={images.sign.food4} alt="food frame" id="fourth" />
                <img src={images.sign.food5} alt="food frame" id="fifth" />
                <img src={images.sign.food6} alt="food frame" id="sixth" />
            </div>
         </div>
        </>
    )
}
export default RightImages;