"use server";

import nodemailer from "nodemailer";

export interface ContactFormState {
  success: boolean;
  message: string;
}

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  // Basic validation
  if (!name || !email || !subject || !message) {
    return { success: false, message: "Lütfen tüm alanları doldurun." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Geçerli bir e-posta adresi girin." };
  }

  const transporter = nodemailer.createTransport({
    host: "smail08.doruk.net.tr",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    authMethod: "LOGIN",
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    // 1) Notify Freyr inbox
    await transporter.sendMail({
      from: `"Freyr Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `[Freyr İletişim] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#101010;color:#fff;border-radius:12px;">
          <h2 style="color:#D2AD7A;font-style:italic;margin-bottom:8px;">Yeni İletişim Formu</h2>
          <hr style="border-color:#2a2a2a;margin-bottom:20px"/>
          <p><strong>Ad Soyad:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Konu:</strong> ${subject}</p>
          <p style="margin-top:16px;"><strong>Mesaj:</strong></p>
          <p style="background:#1a1a1a;padding:16px;border-radius:8px;color:#c4c4c4;line-height:1.7;">${message.replace(/\n/g, "<br/>")}</p>
          <hr style="border-color:#2a2a2a;margin-top:24px"/>
          <p style="color:#555;font-size:12px;">Freyr Event & Congress — Website Contact Form</p>
        </div>
      `,
    });

    // 2) Send confirmation to the submitter
    await transporter.sendMail({
      from: `"Freyr Event & Congress" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Mesajınız Alındı — Freyr Event & Congress`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#101010;color:#fff;border-radius:12px;">
          <h2 style="color:#D2AD7A;font-style:italic;margin-bottom:4px;">Mesajınız Alındı</h2>
          <p style="color:#888;font-size:13px;margin-top:0;">Freyr Event &amp; Congress</p>
          <hr style="border-color:#2a2a2a;margin:16px 0"/>
          <p style="line-height:1.7;color:#c4c4c4;">Merhaba <strong style="color:#fff;">${name}</strong>,</p>
          <p style="line-height:1.7;color:#c4c4c4;">
            İletişim formunu doldurduğunuz için teşekkür ederiz. Mesajınız tarafımıza ulaşmıştır;
            en kısa sürede size geri döneceğiz.
          </p>
          <div style="background:#1a1a1a;border-left:3px solid #D2AD7A;padding:16px;border-radius:0 8px 8px 0;margin:20px 0;">
            <p style="margin:0;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Konu</p>
            <p style="margin:6px 0 0;color:#fff;">${subject}</p>
          </div>
          <hr style="border-color:#2a2a2a;margin:24px 0 16px"/>
          <p style="color:#555;font-size:12px;line-height:1.6;">
            Freyr Event &amp; Congress<br/>
            <a href="tel:+905422473635" style="color:#D2AD7A;text-decoration:none;">+90 542 247 3635</a>
          </p>
        </div>
      `,
    });

    return {
      success: true,
      message: "Mesajınız iletildi. En kısa sürede size dönüş yapacağız.",
    };
  } catch (err) {
    console.error("Mail error:", err);
    return {
      success: false,
      message: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.",
    };
  }
}
