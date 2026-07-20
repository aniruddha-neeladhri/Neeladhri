import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_CHARS = 500;

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildContactEmailHtml({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeMessage = escapeHtml(message);
  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Enquiry</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f1ec;font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f4f1ec;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:#ffffff;border:1px solid #e8dfd2;overflow:hidden;">
          <tr>
            <td style="background-color:#1a1a1a;padding:28px 32px;text-align:center;">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#D3B898;font-family:Arial,Helvetica,sans-serif;">
                Neeladhri Ceramics
              </p>
              <h1 style="margin:0;font-size:28px;font-weight:400;color:#ffffff;line-height:1.3;">
                New Contact Enquiry
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 32px 8px;">
              <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#4a4a4a;font-family:Arial,Helvetica,sans-serif;">
                You have received a new message from the website contact form.
              </p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #efe7db;background-color:#faf8f5;">
                <tr>
                  <td style="padding:14px 18px;border-bottom:1px solid #efe7db;width:120px;vertical-align:top;">
                    <span style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#9a8568;font-family:Arial,Helvetica,sans-serif;">Name</span>
                  </td>
                  <td style="padding:14px 18px;border-bottom:1px solid #efe7db;vertical-align:top;">
                    <span style="font-size:15px;color:#1a1a1a;font-family:Arial,Helvetica,sans-serif;">${safeName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 18px;border-bottom:1px solid #efe7db;width:120px;vertical-align:top;">
                    <span style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#9a8568;font-family:Arial,Helvetica,sans-serif;">Email</span>
                  </td>
                  <td style="padding:14px 18px;border-bottom:1px solid #efe7db;vertical-align:top;">
                    <a href="mailto:${safeEmail}" style="font-size:15px;color:#c46f1f;text-decoration:none;font-family:Arial,Helvetica,sans-serif;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 18px;width:120px;vertical-align:top;">
                    <span style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#9a8568;font-family:Arial,Helvetica,sans-serif;">Phone</span>
                  </td>
                  <td style="padding:14px 18px;vertical-align:top;">
                    <span style="font-size:15px;color:#1a1a1a;font-family:Arial,Helvetica,sans-serif;">${safePhone}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:8px 32px 28px;">
              <p style="margin:0 0 10px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#9a8568;font-family:Arial,Helvetica,sans-serif;">
                Message
              </p>
              <div style="padding:18px 20px;background-color:#fffaf4;border-left:4px solid #F79440;font-size:15px;line-height:1.7;color:#2d2d2d;font-family:Arial,Helvetica,sans-serif;white-space:pre-wrap;">${safeMessage}</div>
            </td>
          </tr>

          <tr>
            <td style="padding:0 32px 28px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="background-color:#1a1a1a;border-radius:2px;">
                    <a href="mailto:${safeEmail}" style="display:inline-block;padding:12px 22px;font-size:13px;letter-spacing:0.5px;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;">
                      Reply to ${safeName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:18px 32px;background-color:#faf8f5;border-top:1px solid #efe7db;text-align:center;">
              <p style="margin:0 0 6px;font-size:12px;color:#7a7a7a;font-family:Arial,Helvetica,sans-serif;">
                Submitted on ${submittedAt} (IST)
              </p>
              <p style="margin:0;font-size:12px;color:#7a7a7a;font-family:Arial,Helvetica,sans-serif;">
                <a href="https://neeladhri.com" style="color:#c46f1f;text-decoration:none;">neeladhri.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildContactEmailText({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  return [
    "NEELADHRI CERAMICS",
    "New Contact Enquiry",
    "────────────────────────────",
    "",
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Phone:   ${phone || "Not provided"}`,
    "",
    "Message:",
    message,
    "",
    "────────────────────────────",
    `Submitted: ${submittedAt} (IST)`,
    "https://neeladhri.com",
  ].join("\n");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (message.length > MAX_CHARS) {
      return NextResponse.json(
        { error: `Message must be ${MAX_CHARS} characters or fewer.` },
        { status: 400 },
      );
    }

    const to =
      process.env.CONTACT_TO_EMAIL?.trim() || "sachin@thegeekonomy.com";
    const from =
      process.env.CONTACT_FROM_EMAIL?.trim() ||
      "Neeladhri <noreply@neeladhri.com>";

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New contact enquiry from ${name}`,
      html: buildContactEmailHtml({ name, email, phone, message }),
      text: buildContactEmailText({ name, email, phone, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "Something went wrong while sending your message." },
      { status: 500 },
    );
  }
}
