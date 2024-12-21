// pages/refund-cancellation-policy.tsx

import { termsData } from "@/lib/utils";

export default function RefundCancellationPolicy() {
  const policy = termsData.refundPolicy;

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">{policy.title}</h1>
      <p className="text-sm mb-4">Effective Date: {policy.effectiveDate}</p>

      {policy.sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          {Array.isArray(section.content) ? (
            <ul className="list-disc pl-5">
              {section.content.map((item, idx) => (
                <li key={idx} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-base">{section.content}</p>
          )}
        </section>
      ))}
    </div>
  );
}
