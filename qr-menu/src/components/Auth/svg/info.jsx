
const InfoSVG = ({type}) => {
    return (
        <>
            <circle fill="#8DDDFF" cx="50%" cy="50%" r="25"></circle>
            <circle id="tiny-circle" fill="#fff" cx="50%" cy="30%" r="3"></circle>
            <line stroke="#fff" strokeWidth="3.5px" strokeLinecap="round" x1="27.5px" y1="25px" x2="27.5px" y2="45px"></line>
        </>
    )
}

export default InfoSVG;