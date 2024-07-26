import { connectToDB } from "@/lib/connectToDB";
import { NextRequest, NextResponse } from "next/server";
import Form from "@/models/formModel";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  try {
    const { fullname, contact, email, country, message, company } = await req.json();

    await connectToDB();

    const newForm = new Form({
      fullname,
      contact,
      email,
      country,
      message,
      company,
    });
    await newForm.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New contact form submission from ${fullname}`,
      text: `Name: ${fullname}\nContact: ${contact}\nCountry: ${country}\nEmail: ${email}\nMessage: ${message}\nCompany: ${company}`,
    };

    await transporter.sendMail(mailOptions);

    return new NextResponse(
      JSON.stringify({ message: "Form submitted successfully", form: newForm }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Error in submitting form", error }),
      { status: 500 }
    );
  }
};
