// pages/contact-us.tsx

import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-base mb-4">
        Have questions or need assistance? We&apos;re here to help. Feel free to
        reach out to us through any of the channels below.
      </p>
      <h2 className="text-xl font-semibold mt-6">Get in Touch</h2>
      <ul className="list-disc pl-5">
        <li>
          <strong>Phone:</strong>{" "}
          <Link href="tel:9481535216" className="text-blue-500">
            9481535216
          </Link>
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:support@restobytes.in" className="text-blue-500">
            support@restobytes.in
          </a>
        </li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Office Address</h2>
      <p className="text-base mb-4">
        Restobytes
        <br />
        Gonikoppal, Karnataka, India
      </p>
      <h2 className="text-xl font-semibold mt-6">Follow Us</h2>
      <p className="text-base">
        Stay updated with the latest news and updates from Restobytes by
        following us on social media.
      </p>
    </div>
  );
}
