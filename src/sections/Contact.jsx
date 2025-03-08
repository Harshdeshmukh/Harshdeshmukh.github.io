import { useState } from "react";
import emailJS from "@emailjs/browser";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ message: "", type: "" });

    const { VITE_EMAILJS_SERVICE_ID: SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID: TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY: PUBLIC_KEY } = import.meta.env;

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;

        setLoading(true);
        try {
            await emailJS.send(SERVICE_ID, TEMPLATE_ID, {
                from_name: form.name,
                to_name: "Harshvardhan",
                message: form.message,
                reply_to: form.email,
            }, PUBLIC_KEY);

            showAlert("Message sent successfully!", "success");
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Email send error:", error);
            showAlert("Something went wrong! Try again later.", "error");
        } finally {
            setLoading(false);
        }
    };

    const showAlert = (message, type) => {
        setAlert({ message, type });
        setTimeout(() => setAlert({ message: "", type: "" }), 3000); // Auto-hide after 3 seconds
    };

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute min-h-screen inset-0" />
                <div className="contact-container w-full h-full text-left">
                    <h3 className="head-text text-4xl font-bold text-white">
                        Looking for a Skilled Developer?
                    </h3>
                    <p className="text-lg mt-3 text-gray-300">
                        I build scalable, high-performance web apps. Let’s connect!
                    </p>



                    {/* Alert Box */}
                    {alert.message && (
                        <div className={`fixed top-12 z-50 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg text-white transition-all duration-300 shadow-lg
                            ${alert.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
                            {alert.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex mt-12 flex-col space-y-7">
                        {["name", "email", "message"].map((field) => (
                            <label key={field} className="space-y-3">
                                <span className="field-label">
                                    {field === "message" ? "Your Message" : field.replace(/^\w/, (c) => c.toUpperCase())}
                                </span>
                                {field === "message" ? (
                                    <textarea
                                        rows={5}
                                        required
                                        name={field}
                                        value={form[field]}
                                        onChange={handleChange}
                                        placeholder="Hi..."
                                        className="field-input"
                                    />
                                ) : (
                                    <input
                                        required
                                        type={field === "email" ? "email" : "text"}
                                        name={field}
                                        value={form[field]}
                                        onChange={handleChange}
                                        placeholder={field === "email" ? "john.doe@gmail.com" : "John Doe"}
                                        className="field-input"
                                    />
                                )}
                            </label>
                        ))}

                        <button type="submit" className="field-btn" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
