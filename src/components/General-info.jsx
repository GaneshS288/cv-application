
export default function GeneralInfo({fullName, email, phone}) {
    return(
        <section className="general-info">
            <h2 className="fullName">{fullName}</h2>
            <p className="email">{email}</p>
            <p className="phone">{phone}</p>
        </section>
    )
}