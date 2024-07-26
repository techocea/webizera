import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  company: { type: String, required: true },
  message: { type: String, required: true },
});

const Form = mongoose.models.Form || mongoose.model("Form",formSchema)
export default Form;