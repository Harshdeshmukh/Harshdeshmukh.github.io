import { useState } from "react";
import emailJS from "@emailjs/browser";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ message: "", type: "" });

    const { VITE_EMAILJS_SERVICE_ID: SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID: TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY: PUBLIC_KEY } = import.meta.env;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
          ...prevForm,
          [name]: value
        }));
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
            <div 
                className="relative w-full min-h-screen flex items-center justify-center"
                style={{
                    backgroundImage: "url('/assets/terminal.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="contact-container w-full max-w-2xl mx-auto z-10 px-4 sm:px-8 py-12 sm:py-16">
                    <h3 className="head-text text-3xl sm:text-4xl font-bold text-white">
                        Looking for a Skilled Developer?
                    </h3>
                    <p className="text-base sm:text-lg mt-3 text-gray-300">
                        I build scalable, high-performance web apps. Let's connect!
                    </p>

                    {/* Alert Box */}
                    {alert.message && (
                        <div className={`fixed top-12 z-50 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg text-white transition-all duration-300 shadow-lg
                            ${alert.type === "success" ? "bg-green-600" : "bg-red-600"} w-5/6 sm:w-auto text-center`}>
                            {alert.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="flex mt-8 sm:mt-12 flex-col space-y-5 sm:space-y-7 w-full">
                        {["name", "email", "message"].map((field) => (
                            <label key={field} className="space-y-2 sm:space-y-3 block w-full">
                                <span className="field-label text-sm sm:text-base">
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
                                        className="field-input w-full text-sm sm:text-base"
                                    />
                                ) : (
                                    <input
                                        required
                                        type={field === "email" ? "email" : "text"}
                                        name={field}
                                        value={form[field]}
                                        onChange={handleChange}
                                        placeholder={field === "email" ? "john.doe@gmail.com" : "John Doe"}
                                        className="field-input w-full text-sm sm:text-base"
                                    />
                                )}
                            </label>
                        ))}

                        <div className="pt-4 sm:pt-6">
                            <button 
                                type="submit" 
                                className="field-btn flex items-center justify-center" 
                                disabled={loading}
                            >
                                <span className="mr-2">{loading ? "Sending..." : "Send Message"}</span>
                                <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow h-4 w-4 sm:h-5 sm:w-5" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;