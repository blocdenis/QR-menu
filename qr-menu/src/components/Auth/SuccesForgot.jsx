const Succes = ({email, btnStyle}) => {

    const reloadPage = () => {
        location.reload()
    }

    return (
        <>

            <div className="reset-header-container" style={{textAlign: 'center'}}>
                <h3 style={{fontFamily: '"Playfair Display", monoscape', fontSize: '2rem', whiteSpace: 'nowrap'}}>
                    Success !
                </h3>
            </div>

            <div className="reset-info-container" style={{margin: '2rem 0px', textAlign: 'center'}}>

                <p style={{color: 'rgb(149, 152, 149)', lineHeight: '28px'}}>
                    Password changed succesfully for {email}. Now you can back and login in your account.
                </p>

            </div>

            <div className="reset-button-container">

                <button style={btnStyle} onClick={reloadPage}>Back to home</button>

            </div>

        </>
    )
}

export default Succes;