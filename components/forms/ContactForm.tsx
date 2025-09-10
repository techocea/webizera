import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const ContactForm = () => {
    return (
        <Card className="p-8 bg-accent border w-full space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
                <div className="flex flex-col space-y-2 text-muted">
                    <label htmlFor="fullName">Full Name*</label>
                    <input
                        type="text"
                        placeholder="James Bond"
                        className="border p-2 rounded-md bg-white/5"
                    />
                </div>
                <div className="flex flex-col space-y-2 text-muted">
                    <label htmlFor="email">Email*</label>
                    <input
                        type="text"
                        placeholder="you@company.com"
                        className="border p-2 rounded-md bg-white/5"
                    />
                </div>
                <div className="flex flex-col space-y-2 text-muted">
                    <label htmlFor="contact">Phone*</label>
                    <input
                        type="text"
                        placeholder="+212 6 00 00 00"
                        className="border p-2 rounded-md bg-white/5"
                    />
                </div>
                <div className="flex flex-col space-y-2 text-muted">
                    <label htmlFor="company">Company Name*</label>
                    <input
                        type="text"
                        placeholder="My Company"
                        className="border p-2 rounded-md bg-white/5"
                    />
                </div>
                <div className="col-span-full flex flex-col space-y-2 text-muted">
                    <label htmlFor="budget">Estimated Budget*</label>
                    <select className="border p-2 rounded-md bg-white/5">
                        <option value="">-- Select your budget --</option>
                        <option value=""> budget &lt; LKR 50000</option>
                        <option value="">LKR 50000 &lt; budget &lt; LKR 200000 </option>
                        <option value="">budget &gt; LKR 200000</option>
                    </select>
                </div>
                <div className="col-span-full flex flex-col space-y-2 text-muted">
                    <label htmlFor="project_description">Describe Your Project*</label>
                    <textarea
                        rows={5}
                        placeholder="James Bond"
                        className="border p-2 rounded-md bg-white/5"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 border p-4 rounded-md bg-white/5">
                <input type="checkbox" />
                <p className="text-muted text-sm">
                    I accept the <span className="text-primary">Privacy Policy</span> and{" "}
                    <span className="text-primary">Terms of Use</span>
                </p>
            </div>

            <Button size="lg" className="font-bold text-lg w-full">Request a free quote</Button>
        </Card>
    );
};

export default ContactForm;
