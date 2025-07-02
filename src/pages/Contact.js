import { contactDetails } from "../Details";

function Contact() {
    const {email, phone} = contactDetails
    return(
        <div className="contact-container page-content">
        <div className="contact-box">
            <h2 className="contact-heading">For any queries, please send an email.</h2>
            <a className="contact-email" href={`mailto:${email}`}>
            {email}
            </a>
        </div>
        </div>
    )
}
export default Contact;