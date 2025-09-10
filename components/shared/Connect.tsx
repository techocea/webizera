"use client";

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import ContactForm from "../forms/ContactForm";

export default function Connect() {
    const number = "+94724388956";
    const message = "Hello, I need to create a new website";

    const handleWhatsappClick = () => {
        const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };
    return (
        <section className="my-28 px-8" id="connect">
            <div className="flex flex-col lg:flex-row max-w-5xl w-full mx-auto gap-8">
                <div className="flex">
                    <Card className="p-8 bg-accent border max-w-sm w-full">
                        <CardHeader>
                            <CardTitle className="text-white text-3xl">
                                Let's build something exceptional
                            </CardTitle>
                        </CardHeader>
                        <CardDescription>
                            <p className="text-sm text-muted">
                                Fast responses. Transparent pricing. Results that convert.
                            </p>

                            <div className="space-y-6 mt-6">
                                <Button
                                    variant="link"
                                    className="flex items-center gap-2 px-2 w-full justify-start"
                                    size="lg"
                                >
                                    <span className="uppercase px-3 py-1 rounded-md text-sm bg-[rgba(34,197,94,0.15)] max-w-10 w-full h-10 flex items-center justify-center text-primary">
                                        <Mail size={28} />
                                    </span>
                                    <div className="flex flex-col items-start gap-0.5 ml-2">
                                        <h6 className="font-medium">Email</h6>
                                        <p className="text-sm text-muted-foreground font-light">
                                            contact@webizera.com
                                        </p>
                                    </div>
                                </Button>
                                <Button
                                    variant="link"
                                    className="flex items-center gap-2 px-2 w-full justify-start"
                                    size="lg"
                                >
                                    <span className="uppercase px-3 py-1 rounded-md text-sm bg-[rgba(34,197,94,0.15)] max-w-10 w-full h-10 flex items-center justify-center text-primary">
                                        <Phone size={28} />
                                    </span>
                                    <div className="flex flex-col items-start gap-1 ml-2">
                                        <h6 className="font-medium">WhatsApp</h6>
                                        <p className="text-sm text-muted-foreground font-light">
                                            +94 72 438 8956
                                        </p>
                                    </div>
                                </Button>
                                <Button
                                    variant="link"
                                    className="flex items-center gap-2 px-2 w-full justify-start"
                                    size="lg"
                                >
                                    <span className="uppercase px-3 py-1 rounded-md text-sm bg-[rgba(34,197,94,0.15)] max-w-10 w-full h-10 flex items-center justify-center text-primary">
                                        <MapPin size={28} />
                                    </span>
                                    <div className="flex flex-col items-start gap-1 ml-2">
                                        <h6 className="font-medium">Location</h6>
                                        <p className="text-sm text-muted-foreground font-light">
                                            Heathrow, UK
                                        </p>
                                    </div>
                                </Button>

                                <div>
                                    <Button
                                        className="font-bold flex items-center gap-2"
                                        variant="default"
                                        size="lg"
                                    >
                                        <MessageCircle /> WhatsApp Fast
                                    </Button>
                                </div>
                            </div>
                        </CardDescription>
                    </Card>
                </div>
                <div className="flex-2">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
