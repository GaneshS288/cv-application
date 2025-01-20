export default function GeneralInfoInputs() {
    return(
        <>
            <div>
                <label htmlFor="fullName">Full Name :</label>
                <input type="text" id="fullName" required/>
            </div>

            <div>
                <label htmlFor="mail">Email :</label>
                <input type="email" id="mail" required/>
            </div>

            <div>
                <label htmlFor="phone">Phone :</label>
                <input type="tel" id="phone" required />
            </div>
        </>
    )
}