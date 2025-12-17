import { useState } from "react";
import { Icon } from "@iconify/react";

export default function ContactsForm() {
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    name: null,
    phone: null,
    email: null,
    location: null,
    message: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function submitContact(e) {
    e.preventDefault();
    if (loader) return;

    setLoader(true);
    setErrorMessage({
      name: null,
      phone: null,
      email: null,
      location: null,
      message: null,
    });

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE}/form/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        if (data?.errors) {
          setErrorMessage(data.errors);
        } else {
          throw new Error("Something went wrong");
        }
        return;
      }

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setForm({
          name: "",
          phone: "",
          email: "",
          location: "",
          message: "",
        });
      }, 2400);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoader(false);
    }
  }

  return (
    <div className="w-full h-full bg-white/20 backdrop-blur-2xl border border-primary/20 rounded-3xl py-8 px-4 md:p-8 flex flex-col items-center justify-center">
      
      {/* HEADER */}
      {!success && (
        <div className="w-full flex flex-col items-center py-10 gap-y-2">
          <h1 className="text-2xl font-bold text-primary">Get in Touch</h1>
          <p>Have a project in mind?</p>
        </div>
      )}

      {/* SUCCESS */}
      {success && (
        <div className="w-full h-[640px] flex flex-col items-center justify-center gap-y-4">
          <Icon
            icon="line-md:circle-twotone-to-confirm-circle-transition"
            className="text-8xl text-primary"
          />
          <h4 className="text-xl text-center font-medium px-6">
            Request received! Our team will contact you soon.
          </h4>
        </div>
      )}

      {/* FORM */}
      {!success && (
        <form
          onSubmit={submitContact}
          className="w-full h-auto px-4 space-y-3"
        >
          {/* NAME */}
          <fieldset className="w-full">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              className="input input-primary w-full"
              placeholder="Name"
            />
            {errorMessage.name && (
              <p className="text-error text-sm">{errorMessage.name}</p>
            )}
          </fieldset>

          {/* PHONE */}
          <fieldset className="w-full">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              className="input input-primary w-full"
              placeholder="Phone"
            />
            {errorMessage.phone && (
              <p className="text-error text-sm">{errorMessage.phone}</p>
            )}
          </fieldset>

          {/* EMAIL */}
          <fieldset className="w-full">
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="input input-primary w-full"
              placeholder="Email"
            />
            {errorMessage.email && (
              <p className="text-error text-sm">{errorMessage.email}</p>
            )}
          </fieldset>

          {/* LOCATION */}
          <fieldset className="w-full">
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              type="text"
              className="input input-primary w-full"
              placeholder="Location"
            />
            {errorMessage.location && (
              <p className="text-error text-sm">{errorMessage.location}</p>
            )}
          </fieldset>

          {/* MESSAGE */}
          <fieldset className="w-full">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="3"
              placeholder="Message"
              className="textarea textarea-primary w-full"
            />
            {errorMessage.message && (
              <p className="text-error text-sm">{errorMessage.message}</p>
            )}
          </fieldset>

          {/* SUBMIT */}
          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
            disabled={loader}
          >
            {loader && <span className="loading loading-spinner" />}
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
