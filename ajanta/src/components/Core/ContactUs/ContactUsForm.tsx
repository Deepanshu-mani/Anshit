import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactImg from "@/assets/contactUs.png";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

function ContactUsForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isValidEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isValidEmail(formData.email)) {
            return toast.error("Please enter a valid email address.");
        }

        const requestData = {
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        setLoading(true);
        try {
            await axios.post("/api/send-mail", requestData);
            toast.success("Message sent successfully!");
            setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Failed to send message. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
                toastStyle={{
                    backgroundColor: "#1e293b",
                    color: "#e2e8f0",
                    fontSize: "14px",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                }}
            />

            <div className="max-w-7xl mx-auto bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl mt-10 flex flex-col md:flex-row items-center border border-white/10">
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image src={contactImg} alt="Contact Us" className="w-full max-w-sm md:max-w-md rounded-3xl animate-fade-in" />
                </div>

                <div className="w-full md:w-1/2 p-6">
                    <h2 className="text-4xl font-extrabold text-gray-800 text-center md:text-left mb-6">Contact Us</h2>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                            <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                        </div>

                        <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
                        <InputField label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
                        
                        <div>
                            <label className="block text-gray-700 font-medium text-lg">Message</label>
                            <textarea
                                name="message"
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white/80 shadow-sm transition-all"
                                rows={4}
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        {/* Custom Button */}
                        <button
                            type="submit"
                            className="relative w-full bg-gradient-to-r from-red-500 to-red-700 text-white py-3 px-6 button-rounded font-semibold text-lg transition-all duration-200 shadow-lg overflow-hidden group hover:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={loading}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 button-rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-95"></span>
                            <span className="relative">{loading ? "Sending..." : "Send Message"}</span>
                            <span className="absolute inset-0 border-4 border-transparent button-rounded animate-border-gradient"></span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

interface InputFieldProps {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type = "text", value, onChange }) => (
    <div className="w-full">
        <label className="block text-gray-700 font-medium text-lg">{label}</label>
        <input
            type={type}
            name={name}
            className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white/80 shadow-sm transition-all"
            placeholder={`Enter your ${label.toLowerCase()}`}
            value={value}
            onChange={onChange}
            required
        />
    </div>
);

export default ContactUsForm;