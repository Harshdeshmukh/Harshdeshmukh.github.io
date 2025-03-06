import {useRef, useState} from "react";
import emailJS from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const [loading, setLoading] = useState(false);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value.trimStart()}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailJS.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Harshvardhan",
                    message: form.message,
                    reply_to: form.email,
                },
                PUBLIC_KEY
            );

            alert("Your message has been sent successfully!");
            setForm({name: "", email: "", message: ""});
        } catch (error) {
            console.error("Email send error:", error);
            alert("Something went wrong! Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute min-h-screen inset-0"/>
                <div className="contact-container w-full h-full text-left">
                    <h3 className="head-text">Let's Talk</h3>
                    <p className="text-lg mt-3 text-white-600">I'm here to help</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="flex mt-12 flex-col space-y-7">
                        {/* Full Name */}
                        <label htmlFor="name" className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                id="name"
                                required
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="field-input"
                            />
                        </label>

                        {/* Email */}
                        <label htmlFor="email" className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                id="email"
                                required
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="john.doe@gmail.com"
                                className="field-input"
                            />
                        </label>

                        {/* Message */}
                        <label htmlFor="message" className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea
                                id="message"
                                required
                                rows={5}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Hi..."
                                className="field-input"
                            />
                        </label>

                        {/* Submit Button */}
                        <button type="submit" className="field-btn" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
