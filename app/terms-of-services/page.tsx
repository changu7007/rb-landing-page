import { termsData } from "@/lib/utils";

export default function TermsOfService() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold">{termsData.termsOfService.title}</h1>
      <p className="text-sm mb-4">
        Effective Date: {termsData.termsOfService.effectiveDate}
      </p>
      {termsData.termsOfService.sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-lg font-semibold mb-2">{section.title}</h2>
          {Array.isArray(section.content) ? (
            <ul className="list-disc pl-5">
              {section.content.map((item, idx) => (
                <li key={idx} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p>{section.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}
