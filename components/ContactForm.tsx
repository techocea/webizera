"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "react-toastify";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        contact: "",
        email: "",
        country: "",
        company: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true)

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            setLoading(true)
            setFormData(data);
            // toast.success("Form submitted successfully!");

            setTimeout(() => {
                window.location.href = "/";
            }, 1000);
            // if (res.ok) {
            //     toast.success("Form submitted successfully");
            // }
        } catch (error) {
            setLoading(false);
            toast.error("Error in submitting the form");
            console.log("Error in submitting the form", error);
        }
    };
    return (
        <div className="lg:max-w-xl w-full">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                    <Input
                        onChange={handleInputChange}
                        name="fullname"
                        value={formData.fullname}
                        placeholder="Full Name"
                        required
                    />
                    <Input
                        onChange={handleInputChange}
                        name="email"
                        value={formData.email}
                        placeholder="Email Address"
                        required
                    />
                    <Input
                        onChange={handleInputChange}
                        name="contact"
                        value={formData.contact}
                        placeholder="Contact Number"
                        required
                    />
                    <Input
                        onChange={handleInputChange}
                        name="country"
                        value={formData.country}
                        placeholder="Country"
                        required
                    />
                </div>
                <div className="grid grid-cols-1 gap-6 mt-6">
                    <Input
                        onChange={handleInputChange}
                        name="company"
                        value={formData.company}
                        placeholder="Company"
                        required
                    />
                    <Input
                        onChange={handleInputChange}
                        name="message"
                        value={formData.message}
                        placeholder="Message"
                        required
                    />
                </div>
                <div className="mt-16 ">
                    <Button
                        variant="secondary"
                        className="max-md:w- text-white font-medium rounded-none uppercase text-lg"
                    >
                        {loading ? "Submitting ..." : "Submit"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
