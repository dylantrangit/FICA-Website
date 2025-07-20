import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      setSubmitted(true);
      form.reset();
    } catch (error) {
      alert("Error submitting the form");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <div className=" text-white px-6 py-20 text-center "
      style={{
        background: 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(15, 15, 15, 1) 10%, rgba(12, 34, 50, 1) 73%, rgba(13, 64, 102, 1) 100%)'
      }}
      >
        <h1 className="text-4xl font-bold font-poppins animate-fade-in">Contact Us</h1>
      </div>

      {/* Form */}
      <div className="bg-white text-black px-6 py-12 mt-[-56px] flex justify-center">
        <div className="w-full max-w-xl">
          {submitted ? (
            <div className="text-center text-green-600 text-lg font-medium">
              ✅ Thanks! We'll be in touch soon.
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Netlify hidden input */}
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label htmlFor="name">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="w-full border px-4 py-2"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border px-4 py-2"
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  required
                  name="message"
                  id="message"
                  rows="5"
                  className="w-full border px-4 py-2"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          )}
        </div>
      </div>
      <div hidden>
        <form name="contact" netlify>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
      </div>
    </div>
  );
}
