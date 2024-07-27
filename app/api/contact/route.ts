import { connectToDB } from "@/lib/connectToDB";
import { NextRequest, NextResponse } from "next/server";
import Form from "@/models/formModel";


export const POST = async (req: NextRequest) => {
  try {
    const { fullname, contact, email, country, message, company } =
      await req.json();

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
