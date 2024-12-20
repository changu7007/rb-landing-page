import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const termsData = {
  termsOfService: {
    title: "Terms of Service",
    effectiveDate: "19-12-2024",
    sections: [
      {
        title: "Services Provided",
        content:
          "Restobytes provides a SaaS platform for restaurant owners to manage and track orders, inventory, payrolls, and more. Our Services may also allow integration with third-party apps like Zomato, Swiggy, and similar delivery platforms. Additionally, we offer solutions for building custom online food ordering portals.",
      },
      {
        title: "Eligibility",
        content: [
          "Be at least 18 years of age.",
          "Be authorized to act on behalf of the business entity you represent.",
        ],
      },
      {
        title: "User Responsibilities",
        content: [
          "Provide accurate and up-to-date information.",
          "Maintain the confidentiality of your account credentials.",
          "Use our Services in compliance with applicable laws and regulations.",
        ],
      },
      {
        title: "Prohibited Activities",
        content: [
          "Use the Services for any illegal or unauthorized purpose.",
          "Interfere with or disrupt the functionality of the Services.",
          "Attempt to access data or accounts you do not own or have explicit permission to access.",
        ],
      },
      {
        title: "Third-Party Integrations",
        content: [
          "Restobytes is not responsible for the actions or policies of third-party platforms.",
          "Your use of third-party services is subject to their respective terms and policies.",
        ],
      },
      {
        title: "Subscription and Payments",
        content: [
          "Pay the subscription fees as outlined on our platform.",
          "Authorize us to collect payments via Razorpay.",
          "Ensure timely payment of all applicable fees to maintain uninterrupted access to our Services.",
        ],
      },
      {
        title: "Data Privacy",
        content:
          "Our collection and use of your data are governed by our Privacy Policy.",
      },
      {
        title: "Intellectual Property",
        content:
          "All content, software, and materials provided by Restobytes are the property of Restobytes or its licensors. Unauthorized use is strictly prohibited.",
      },
      {
        title: "Termination",
        content:
          "Restobytes reserves the right to suspend or terminate your access to the Services for violations of these Terms or any other reason at our discretion.",
      },
      {
        title: "Limitation of Liability",
        content: [
          "Indirect, incidental, or consequential damages.",
          "Loss of data or profits resulting from the use or inability to use the Services.",
        ],
      },
      {
        title: "Governing Law",
        content:
          "These Terms are governed by the laws of Karnataka, India. Any disputes will be resolved in the courts of Gonikoppal, Karnataka.",
      },
      {
        title: "Contact Information",
        content: ["Phone: +91 9481535216", "Email: support@restobytes.in"],
      },
    ],
  },
  privacyPolicy: {
    title: "Privacy Policy",
    effectiveDate: "19-12-2024",
    sections: [
      {
        title: "Information We Collect",
        content: [
          "**Personal Information**: Name, contact details, payment information, etc.",
          "**Business Information**: Restaurant name, inventory data, order details, etc.",
          "**Usage Data**: Log data, IP addresses, and other technical information.",
        ],
      },
      {
        title: "How We Use Your Information",
        content: [
          "Provide and improve our Services.",
          "Facilitate third-party integrations.",
          "Communicate with you about updates and support.",
          "Process payments securely via Razorpay.",
        ],
      },
      {
        title: "Third-Party Sharing",
        content: [
          "Third-party app integrations (e.g., Zomato, Swiggy).",
          "Service providers assisting with payment processing, hosting, or analytics.",
        ],
      },
      {
        title: "Data Security",
        content:
          "We implement industry-standard measures to protect your data. However, no method of transmission over the internet is 100% secure.",
      },
      {
        title: "Your Rights",
        content: [
          "Access and update your personal data.",
          "Request the deletion of your data.",
          "Opt-out of certain communications.",
        ],
      },
      {
        title: "Cookies and Tracking",
        content:
          "We use cookies to enhance your experience and analyze website traffic. You can manage cookie preferences through your browser settings.",
      },
      {
        title: "Data Retention",
        content:
          "We retain your data as long as necessary to provide our Services or comply with legal obligations.",
      },
      {
        title: "Children's Privacy",
        content:
          "Our Services are not intended for individuals under 18 years of age.",
      },
      {
        title: "Changes to This Policy",
        content:
          "We may update this Privacy Policy from time to time. Changes will be effective upon posting.",
      },
      {
        title: "Contact Information",
        content: ["Phone: +91 9481535216", "Email: support@restobytes.in"],
      },
    ],
  },
};
