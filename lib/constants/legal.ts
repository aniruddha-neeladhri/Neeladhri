export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  afterBullets?: {
    paragraphs?: string[];
    bullets?: string[];
  };
};

export type LegalPageContent = {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
};

export const PRIVACY_POLICY: LegalPageContent = {
  title: "Privacy Policy",
  effectiveDate: "August 20, 2026",
  lastUpdated: "August 20, 2026",
  intro: [
    "At Neeladhri Ceramics, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you visit or interact with our website.",
    "By using our website, you agree to the practices described in this Privacy Policy.",
  ],
  sections: [
    {
      title: "1. About Neeladhri Ceramics",
      paragraphs: [
        "Neeladhri Ceramics is a Bangalore-based business offering tiles, sanitaryware, bathroom fittings, kitchen solutions, and related interior products. Our showroom is located at #748/41, Skanda Mansion, JSS Circle, Kanakapura Road, Jayanagar 7th Block, Bangalore, Karnataka – 560070, India.",
        "For privacy-related questions, you can contact us at:",
        "Email: hello@neeladhri.com",
        "Phone: +91 80500 78367",
      ],
    },
    {
      title: "2. Information We Collect",
      paragraphs: [
        "We may collect information that you voluntarily provide when you interact with our website, including when you:",
      ],
      bullets: [
        "Submit a contact or enquiry form",
        "Request information about our products or services",
        "Contact us by email or phone",
        "Communicate with us through WhatsApp or other available channels",
        "Subscribe to communications or updates",
        "Request showroom or product-related assistance",
      ],
      afterBullets: {
        paragraphs: ["Depending on how you interact with us, this information may include:"],
        bullets: [
          "Name",
          "Email address",
          "Phone number",
          "Company or business name, where applicable",
          "Project or product requirements",
          "Messages or other information you choose to provide",
        ],
      },
    },
    {
      title: "3. Information Collected Automatically",
      paragraphs: [
        "When you visit our website, certain information may be collected automatically through cookies, analytics tools, and similar technologies.",
        "This may include:",
      ],
      bullets: [
        "IP address",
        "Browser type and version",
        "Device type",
        "Operating system",
        "Pages visited",
        "Time spent on pages",
        "Referring website or source",
        "General website usage information",
        "Date and time of your visit",
      ],
      afterBullets: {
        paragraphs: [
          "This information helps us understand how visitors use our website and improve its functionality, content, and user experience.",
        ],
      },
    },
    {
      title: "4. Cookies and Similar Technologies",
      paragraphs: [
        "Our website may use cookies and similar technologies to improve website functionality, understand website traffic, remember preferences, and provide a better browsing experience.",
        "Cookies may be used for:",
      ],
      bullets: [
        "Essential website functionality",
        "Website performance and analytics",
        "Understanding visitor behaviour",
        "Improving website content and user experience",
        "Measuring marketing and advertising performance, where applicable",
      ],
      afterBullets: {
        paragraphs: [
          "You can control or disable cookies through your browser settings. However, disabling certain cookies may affect the functionality of some parts of the website.",
        ],
      },
    },
    {
      title: "5. How We Use Your Information",
      paragraphs: ["We may use the information we collect to:"],
      bullets: [
        "Respond to your enquiries and requests",
        "Provide information about products and services",
        "Understand your project or product requirements",
        "Communicate with you regarding your enquiry",
        "Provide customer support",
        "Improve our website, products, and services",
        "Analyse website traffic and usage",
        "Maintain website security",
        "Prevent fraudulent or unauthorised activity",
        "Send relevant updates or marketing communications where permitted",
        "Comply with applicable legal and regulatory requirements",
      ],
      afterBullets: {
        paragraphs: [
          "We will only use your personal information for legitimate business purposes and in accordance with applicable law.",
        ],
      },
    },
    {
      title: "6. How We Share Your Information",
      paragraphs: [
        "We do not sell or rent your personal information to third parties.",
        "We may share information with trusted service providers when reasonably necessary to operate our website and business. These may include providers involved in:",
      ],
      bullets: [
        "Website hosting",
        "Website analytics",
        "Website security",
        "Communication and email services",
        "Customer enquiry management",
        "Marketing and advertising services",
        "Technical support",
      ],
      afterBullets: {
        paragraphs: [
          "These service providers are expected to handle information appropriately and only for the purposes for which it is provided.",
          "We may also disclose information where required by law, legal proceedings, government authorities, or to protect our rights, property, users, or the security of our website.",
        ],
      },
    },
    {
      title: "7. Third-Party Services and Links",
      paragraphs: [
        "Our website may contain links or integrations to third-party platforms, including social media and communication services such as WhatsApp, Instagram, LinkedIn, Google Maps, analytics services, or other external websites.",
        "When you interact with a third-party website or service, that third party may collect and process information according to its own privacy policy.",
        "Neeladhri Ceramics is not responsible for the privacy practices, security, or content of third-party websites or services.",
        "We recommend reviewing the privacy policies of any third-party services you use.",
      ],
    },
    {
      title: "8. WhatsApp and Other Communications",
      paragraphs: [
        "If you choose to contact Neeladhri Ceramics through WhatsApp, phone, email, social media, or another communication channel, we may receive the information you provide through that channel.",
        "We may use this information to respond to your enquiry, provide product information, discuss your requirements, or provide customer assistance.",
        "Your use of third-party communication platforms is also subject to the privacy policies and terms of those platforms.",
      ],
    },
    {
      title: "9. Marketing Communications",
      paragraphs: [
        "If you provide your contact information and consent to receive marketing communications, we may contact you about products, services, offers, updates, or other information that may be relevant to you.",
        "You may request to stop receiving marketing communications at any time by contacting us or following the available unsubscribe instructions.",
        "Even if you opt out of marketing communications, we may continue to send non-marketing communications where necessary, such as responses to enquiries or important service-related information.",
      ],
    },
    {
      title: "10. Data Security",
      paragraphs: [
        "We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, misuse, alteration, or disclosure.",
        "However, no method of transmitting or storing information online can be guaranteed to be completely secure. Therefore, while we take reasonable steps to protect your information, we cannot guarantee absolute security.",
      ],
    },
    {
      title: "11. Data Retention",
      paragraphs: [
        "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including responding to enquiries, providing services, maintaining business records, resolving disputes, enforcing agreements, and meeting legal or regulatory obligations.",
        "The specific retention period may vary depending on the type of information and the purpose for which it was collected.",
      ],
    },
    {
      title: "12. Your Privacy Rights",
      paragraphs: [
        "Depending on applicable law, you may have rights regarding your personal information, including the right to:",
      ],
      bullets: [
        "Request access to personal information we hold about you",
        "Request correction of inaccurate or incomplete information",
        "Request deletion of information where legally applicable",
        "Withdraw consent where processing is based on consent",
        "Opt out of certain marketing communications",
        "Ask questions about how your information is collected and used",
      ],
      afterBullets: {
        paragraphs: [
          "To exercise a privacy-related right or request information about your personal data, contact us using the details provided below.",
        ],
      },
    },
    {
      title: "13. Children's Privacy",
      paragraphs: [
        "Our website is intended for general audiences and is not specifically directed at children.",
        "We do not knowingly collect personal information from children in circumstances where such collection is prohibited by applicable law. If you believe that a child has provided personal information to us, please contact us so that we can take appropriate action.",
      ],
    },
    {
      title: "14. International Data Transfers",
      paragraphs: [
        "Some third-party technology, hosting, analytics, communication, or service providers we use may process information on servers located outside India.",
        "Where personal information is transferred or processed outside your jurisdiction, we will take reasonable steps to ensure that such processing is carried out in accordance with applicable privacy and data protection requirements.",
      ],
    },
    {
      title: "15. Changes to This Privacy Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in our website, business practices, technology, or applicable legal requirements.",
        "When we make changes, we will update the Effective Date at the top of this page. We encourage you to review this Privacy Policy periodically.",
      ],
    },
    {
      title: "16. Contact Us",
      paragraphs: [
        "If you have questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal information, please contact us:",
        "Neeladhri Ceramics",
        "#748/41, Skanda Mansion, JSS Circle, Kanakapura Road, Jayanagar 7th Block, Bangalore, Karnataka – 560070, India",
        "Email: hello@neeladhri.com",
        "Phone: +91 80500 78367",
        "We will make reasonable efforts to respond to privacy-related enquiries within a reasonable period.",
      ],
    },
    {
      title: "17. Consent",
      paragraphs: [
        "By using the Neeladhri Ceramics website, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of information as described above, subject to applicable law.",
      ],
    },
  ],
};

export const TERMS_AND_CONDITIONS: LegalPageContent = {
  title: "Terms and Conditions",
  effectiveDate: "August 20, 2026",
  lastUpdated: "August 20, 2026",
  intro: [
    "Welcome to the Neeladhri Ceramics website. These Terms and Conditions govern your access to and use of our website and services. By accessing or using this website, you agree to comply with these Terms and Conditions.",
    "If you do not agree with any part of these terms, please do not use our website.",
  ],
  sections: [
    {
      title: "1. About Neeladhri Ceramics",
      paragraphs: [
        "Neeladhri Ceramics provides information about tiles, sanitaryware, bathroom fittings, kitchen solutions, interior products, brands, collections, and related products and services.",
        "The information presented on this website is intended for general informational and business purposes.",
      ],
    },
    {
      title: "2. Use of Our Website",
      paragraphs: ["You agree to use this website only for lawful purposes and in a manner that does not:"],
      bullets: [
        "Violate any applicable local, state, national, or international law",
        "Infringe the rights of Neeladhri Ceramics or any third party",
        "Attempt to gain unauthorised access to the website or its systems",
        "Introduce malicious software, viruses, or harmful code",
        "Interfere with the operation, security, or performance of the website",
        "Use website content for fraudulent or misleading purposes",
        "Scrape, copy, reproduce, or exploit website content without permission",
      ],
      afterBullets: {
        paragraphs: [
          "We reserve the right to restrict or terminate access to the website if we reasonably believe these Terms and Conditions have been violated.",
        ],
      },
    },
    {
      title: "3. Product Information",
      paragraphs: [
        "We make reasonable efforts to ensure that product descriptions, images, specifications, dimensions, colours, finishes, availability, and other information displayed on the website are accurate and up to date.",
        "However, product colours and finishes may appear differently depending on your device, screen settings, lighting, photography, or other factors.",
        "Product availability, specifications, pricing, and other details may change without prior notice.",
        "Website information should not be treated as a final confirmation of product availability or suitability.",
      ],
    },
    {
      title: "4. Product Enquiries and Requests",
      paragraphs: [
        "Submitting an enquiry through our website does not automatically constitute an order, purchase agreement, booking, or confirmation of product availability.",
        "When you submit an enquiry, our team may contact you to discuss your requirements, product options, availability, pricing, delivery, installation, and other relevant details.",
        "Any purchase or service agreement will be subject to the applicable quotation, invoice, order confirmation, or other commercial terms provided by Neeladhri Ceramics.",
      ],
    },
    {
      title: "5. Pricing and Availability",
      paragraphs: [
        "Prices, offers, product availability, and specifications may change at any time.",
        "Where prices or availability are not displayed on the website, you should contact Neeladhri Ceramics for current information.",
        "Any quotation provided by us may be subject to applicable taxes, delivery charges, installation charges, product availability, and other conditions specified in the quotation.",
      ],
    },
    {
      title: "6. Intellectual Property",
      paragraphs: [
        "Unless otherwise stated, the content available on this website, including:",
      ],
      bullets: [
        "Text",
        "Product descriptions",
        "Images",
        "Graphics",
        "Logos",
        "Branding",
        "Website design",
        "Page layouts",
        "Videos",
        "Icons",
        "Other visual and written materials",
      ],
      afterBullets: {
        paragraphs: [
          "is owned by or licensed to Neeladhri Ceramics and is protected by applicable intellectual property laws.",
          "You may view and use the website for your personal or legitimate business purposes. You may not reproduce, modify, distribute, republish, sell, or commercially exploit website content without prior written permission.",
          "Third-party brand names, trademarks, logos, product images, and other intellectual property remain the property of their respective owners.",
        ],
      },
    },
    {
      title: "7. Third-Party Websites and Services",
      paragraphs: [
        "Our website may contain links to third-party websites, social media platforms, communication services, maps, or other external services.",
        "These third-party websites and services operate independently from Neeladhri Ceramics and may have their own terms and privacy policies.",
        "We are not responsible for the availability, accuracy, security, content, or practices of third-party websites or services.",
        "Your use of third-party platforms is subject to the terms and policies established by those providers.",
      ],
    },
    {
      title: "8. User-Submitted Information",
      paragraphs: [
        "If you submit information, enquiries, feedback, reviews, or other content through our website or communication channels, you confirm that:",
      ],
      bullets: [
        "The information you provide is accurate to the best of your knowledge",
        "You have the right to provide the information",
        "Your submission does not violate any applicable law",
        "Your submission does not infringe the rights of another person or organisation",
      ],
      afterBullets: {
        paragraphs: [
          "You should not submit confidential, sensitive, or proprietary information unless it is necessary for your enquiry.",
        ],
      },
    },
    {
      title: "9. Website Availability",
      paragraphs: [
        "We aim to keep our website available and functioning properly, but we do not guarantee that the website will always be:",
      ],
      bullets: [
        "Available without interruption",
        "Free from errors",
        "Free from viruses or other harmful components",
        "Compatible with every device or browser",
        "Completely accurate or up to date",
      ],
      afterBullets: {
        paragraphs: [
          "We may temporarily suspend, modify, or discontinue any part of the website for maintenance, updates, security, technical issues, or other business reasons.",
        ],
      },
    },
    {
      title: "10. Disclaimer",
      paragraphs: [
        "The information provided on this website is offered for general informational purposes.",
        "While we make reasonable efforts to maintain accurate information, we do not guarantee that all website content will always be complete, accurate, current, or error-free.",
        "Product images, colours, specifications, dimensions, finishes, and other representations may vary from the actual products.",
        "Before making a purchase or finalising a project, customers should confirm product specifications, availability, pricing, measurements, suitability, and other relevant details with our team.",
      ],
    },
    {
      title: "11. Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by applicable law, Neeladhri Ceramics will not be liable for any indirect, incidental, consequential, special, or other losses arising from or related to:",
      ],
      bullets: [
        "Your use or inability to use the website",
        "Reliance on information published on the website",
        "Errors or omissions in website content",
        "Website interruptions or technical issues",
        "Third-party websites or services",
        "Unauthorised access or security incidents beyond our reasonable control",
      ],
      afterBullets: {
        paragraphs: [
          "Nothing in these Terms and Conditions is intended to exclude or limit liability where such exclusion or limitation is not permitted under applicable law.",
        ],
      },
    },
    {
      title: "12. Indemnification",
      paragraphs: [
        "To the extent permitted by applicable law, you agree to indemnify and hold harmless Neeladhri Ceramics, its employees, representatives, affiliates, and service providers from claims, losses, liabilities, damages, costs, or expenses arising from:",
      ],
      bullets: [
        "Your misuse of the website",
        "Your violation of these Terms and Conditions",
        "Your violation of applicable laws",
        "Your infringement of the rights of another person or organisation",
      ],
    },
    {
      title: "13. Privacy",
      paragraphs: [
        "Your use of this website is also subject to our Privacy Policy, which explains how we collect, use, store, and protect personal information.",
        "Please review our Privacy Policy before submitting personal information through the website.",
      ],
    },
    {
      title: "14. Changes to These Terms",
      paragraphs: [
        "Neeladhri Ceramics may update these Terms and Conditions from time to time.",
        "Changes may be made to reflect updates to our website, products, services, business practices, or applicable legal requirements.",
        "The updated version will be published on this page with a revised Effective Date. Your continued use of the website after changes are published constitutes acceptance of the updated Terms and Conditions.",
      ],
    },
    {
      title: "15. Governing Law",
      paragraphs: [
        "These Terms and Conditions shall be governed by and interpreted in accordance with the laws applicable in India.",
        "Any disputes arising in connection with these Terms and Conditions or your use of the website shall be subject to the jurisdiction of the courts having appropriate jurisdiction in Bangalore, Karnataka, India, unless otherwise required by applicable law.",
      ],
    },
    {
      title: "16. Contact Us",
      paragraphs: [
        "If you have questions about these Terms and Conditions, please contact us:",
        "Neeladhri Ceramics",
        "#748/41, Skanda Mansion, JSS Circle, Kanakapura Road, Jayanagar 7th Block, Bangalore, Karnataka – 560070, India",
        "Email: hello@neeladhri.com",
        "Phone: +91 80500 78367",
      ],
    },
  ],
};
