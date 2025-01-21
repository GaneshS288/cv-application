import "../styles/General-info.css"

export default function GeneralInfo({fullName, email, phone}) {
    return(
        <section className="general-info">
            <h2 className="fullName">{fullName}</h2>
            <p className="email">Email : {email}</p>
            <p className="phone">Phone : {phone}</p>
            <hr />
        </section>
    )
}