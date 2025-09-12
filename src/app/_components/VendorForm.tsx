"use client";
import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import Spinner from "./Spinner";
const VendorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [sMessage, setSMessage] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage("");
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setSMessage("");
    const requiredFields = ["name", "email", "phone", "location"];
    const emptyFields = requiredFields.filter(
      (field) => !formData[field as keyof typeof formData].trim(),
    );

    if (emptyFields.length > 0) {
      setErrorMessage(
        `Please fill in all required fields: ${emptyFields.join(", ")}`,
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrorMessage("Please enter a valid phone number");
      return;
    }
    setIsLoading(true);
    try {
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzI9oaFheSTCCk_vDz-7JsFP8de8MqvZTmh3f8MU3BA_x1Bsvt8nv4RY4OFSeqptCf9Rg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formDataToSend.toString(),
        },
      );

      setSMessage(
        "You're on the list! We'll keep you updated with exclusive perks and launch details soon. 🚀",
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
      });

      const form = event.target as HTMLFormElement;
      form.reset();
    } catch (error) {
      setErrorMessage("Error submitting your details");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-2 pb-20 md:w-[600px]"
    >
      {errorMessage && (
        <div className="rounded-md border border-red-600 bg-red-200 py-3 text-center text-xs text-red-600 sm:text-base">
          {errorMessage}
        </div>
      )}
      {sMessage && (
        <div className="text- rounded-md bg-[#CEDDD0] px-16 py-3 text-center text-sm">
          <h3 className="pb-2 text-xl font-semibold">
            Thank You for Joining grevego
          </h3>
          {sMessage}
        </div>
      )}
      {isLoading && <Spinner />}

      <InputField
        label=" Name"
        placeholder="Type Your  name"
        type="text"
        name="name"
        onchange={handleChange}
      />
      <InputField
        label="Email Address"
        placeholder="Type Your email address"
        type="email"
        name="email"
        onchange={handleChange}
      />
      <InputField
        label="Phone Number"
        placeholder="Type Your Phone number"
        type="text"
        name="phone"
        onchange={handleChange}
      />

      <InputField
        label="Office Address"
        placeholder="Type Your Location eg. Lagos, Nigeria"
        type="text"
        name="location"
        onchange={handleChange}
      />
      <div className="my-3 flex items-center gap-2">
        <input type="checkbox" className="size-4 accent-primaryColor" />
        <p className="text-xs text-muted-foreground md:text-base">
          Get the latest Grevego and exclusive offers.
        </p>
      </div>
      <Button
        variant="primary"
        title="Submit"
        style="w-[60%] mx-auto mt-10"
        btnType="submit"
      />
    </form>
  );
};
export default VendorForm;
