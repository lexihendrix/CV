import { ArrowUpCircle, HeartFill } from "react-bootstrap-icons";

export function Footer() {
    return (
        <section className="footer" id="footers" >
            <p>&copy; 2022 Made with <HeartFill color="lightpink" /> by <span>Alexandra Henriksson</span></p>
            <div id="back-to-top">
                <a href="#home" title="Back to top"><ArrowUpCircle color="lightpink" size={80} /></a>
            </div>
        </section>
    )
}