const Forgot = ({func, circle, sEmail, btnStyle}) => {

    const wrapper = (e, bool) => {
        circle(bool);
        const email = e.target.parentElement.parentElement.querySelector('.reset-input-container > input').value;

        sEmail(email);
    }


    return (
        <>
            <div className="reset-header-container" style={{textAlign: "center"}}>
                <h3 style={{fontFamily: '"Playfair Display", monoscape', fontSize: '2rem', whiteSpace: 'nowrap'}}>Reset Password</h3>
            </div>

            <div className="reset-info-container" style={{margin: '2rem 0px', textAlign: 'center'}}>
                <p style={{color: 'rgb(149, 152, 149)', lineHeight: '28px'}}>
                    Enter your email addres and we'll send you an email with instructions to reset your password
                </p>
            </div>

            <div className="reset-input-container" style={{margin: '2rem 0px 0px 0px', display: 'flex', flexFlow: 'column'}}>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your Email" name="email" id="email" style={{margin: '2rem 0'}} />
            </div>

            <div className="reset-button-container">
                <button style={btnStyle} onClick={(e) => wrapper(e, false)}>Reset</button>
            </div>
        </>
    )
}



export default Forgot;

