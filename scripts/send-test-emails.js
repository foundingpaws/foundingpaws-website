// Sends three test emails via Resend to a target email:
// 1) Double-Opt-In confirmation
// 2) Welcome with 10% discount
// 3) Regular Welcome
// Usage: node scripts/send-test-emails.js target@example.com

const target = process.argv[2];
if (!target || !target.includes('@')) {
  console.error('Usage: node scripts/send-test-emails.js target@example.com');
  process.exit(1);
}

const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_FX3Hp2tM_MNYDGTopxwMjDBy7WcStVrkd';
const FROM_EMAIL = 'noreply@foundingpaws.de';
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://foundingpaws.de';

async function sendEmail({ subject, html }) {
  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ from: FROM_EMAIL, to: [target], subject, html })
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Resend error ${resp.status}: ${text}`);
  }
  return resp.json();
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function confirmHtml(confirmUrl) {
  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;line-height:1.65;color:#2d5a27;background:#f8f6f0;margin:0;padding:0;">
    <div style="max-width:680px;margin:0 auto;background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 18px 40px rgba(0,0,0,.08);">
      <div style="padding:32px 28px;border-bottom:1px solid #e7e3da;">
        <div style="font-size:18px;letter-spacing:.02em;color:#2d5a27;font-weight:700;">Founding Paws</div>
        <div style="margin-top:4px;font-size:13px;color:rgba(45,90,39,.75);">Wissenschaft trifft Herz</div>
      </div>
      <div style="padding:42px 34px;">
        <h1 style="margin:0 0 10px;font-size:28px;line-height:1.25;font-weight:700;color:#2d5a27;">Noch ein Schritt – bitte bestätige deine E‑Mail</h1>
        <p style="margin:0 0 14px;font-size:16px;color:rgba(45,90,39,.85);">Wir möchten dir nur <strong>wirklich hilfreiche</strong> Inhalte senden. Mit deiner Bestätigung sichern wir dir deinen <strong style=\"color:#b46a34\">10% Launch‑Vorteil</strong> und Zugang zu praxisnahen Inhalten.</p>
        <div style="background:#f8f6f0;border:1px solid #e7e3da;border-radius:14px;padding:16px 18px;margin:16px 0;">
          <div style="font-weight:700;margin-bottom:6px;color:#2d5a27;">Was du nach der Bestätigung erhältst</div>
          <ul style="margin:0;padding-left:18px;color:rgba(45,90,39,.85);">
            <li>Klar strukturierte Tipps mit Dosierungen & Sicherheitshinweisen</li>
            <li>Einblicke in Entwicklung & Qualität unserer Formeln</li>
            <li>Frühen Zugang zu Launch‑Infos – inkl. 10% Vorteil</li>
          </ul>
        </div>
        <div style="text-align:center;margin:28px 0 8px;">
          <a href="${confirmUrl}" style="display:inline-block;background:#b46a34;color:#fff;text-decoration:none;padding:14px 26px;border-radius:999px;font-weight:600;font-size:16px;box-shadow:0 6px 18px rgba(180,106,52,.25);">Anmeldung bestätigen</a>
        </div>
        <p style="margin:14px 0 0;font-size:12px;color:rgba(45,90,39,.7);">Falls der Button nicht funktioniert, öffne diesen Link:<br><span style="word-break:break-all;color:#b46a34;">${confirmUrl}</span></p>
        <p style="margin:14px 0 0;font-size:12px;color:rgba(45,90,39,.7);">Du kannst dich jederzeit mit einem Klick wieder abmelden. Datenschutz ist uns wichtig.</p>
      </div>
      <div style="padding:18px 28px;background:#f8f6f0;border-top:1px solid #e7e3da;text-align:center;">
        <p style="margin:0;font-size:12px;color:#6b6b6b;">Fragen? Antworte einfach auf diese E‑Mail oder schreibe an <a href="mailto:foundingpaws@gmail.com" style="color:#b46a34;text-decoration:none;">foundingpaws@gmail.com</a></p>
      </div>
    </div>
  </div>`;
}

function welcomeDiscountHtml() {
  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;line-height:1.65;color:#2d5a27;background:#f8f6f0;margin:0;padding:0;">
    <div style="max-width:680px;margin:0 auto;background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 18px 40px rgba(0,0,0,.08);">
      <div style="padding:32px 28px;border-bottom:1px solid #e7e3da;">
        <div style="font-size:18px;letter-spacing:.02em;color:#2d5a27;font-weight:700;">Founding Paws</div>
      </div>
      <div style="padding:42px 34px;">
        <h1 style="margin:0 0 12px;font-size:28px;line-height:1.25;font-weight:700;color:#2d5a27;">Schön, dass du da bist</h1>
        <p style="margin:0 0 12px;font-size:16px;color:rgba(45,90,39,.85);">Wir wissen, wie viel dir dein Hund bedeutet. Deshalb verbinden wir <strong>evidenzbasierte Rezepturen</strong> mit <strong>echter Alltagstauglichkeit</strong>. Danke für dein Vertrauen.</p>
        <div style="background:#f8f6f0;border:1px dashed #b46a34;color:#b46a34;border-radius:14px;padding:16px 20px;text-align:center;font-weight:700;letter-spacing:.5px;margin:16px 0 10px;">
          DEIN VORTEIL: <span style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">LAUNCH10</span>
        </div>
        <p style="margin:0 0 16px;font-size:12px;color:rgba(45,90,39,.75);">Einlösbar, sobald der Shop live ist – wir informieren dich rechtzeitig.</p>
        <div style="background:#f8f6f0;border:1px solid #e7e3da;border-radius:14px;padding:16px 18px;margin:18px 0;">
          <div style="font-weight:700;margin-bottom:6px;color:#2d5a27;">Nächste Schritte</div>
          <ol style="margin:0;padding-left:18px;color:rgba(45,90,39,.85);">
            <li><a href="${BASE_URL}/produkte" style="color:#2d5a27;text-decoration:underline;">Formeln ansehen</a> – Überblick & Entwicklungsprinzipien</li>
            <li><a href="${BASE_URL}/ratgeber" style="color:#2d5a27;text-decoration:underline;">Ratgeber auswählen</a> – starte mit einem Thema, das euch gerade hilft</li>
            <li>Antworte uns kurz mit Alter & Thema deines Hundes – wir empfehlen gezielt Inhalte</li>
          </ol>
        </div>
        <blockquote style="margin:18px 0 0;padding:14px 18px;border-left:3px solid #b46a34;background:#fdfaf6;border-radius:8px;color:#2d5a27;">
          „Unser Ziel: spürbare Verbesserungen im Alltag – ohne leere Versprechen.“
          <div style="font-size:12px;color:rgba(45,90,39,.75);margin-top:6px;">– Alica, Founding Paws</div>
        </blockquote>
        <div style="text-align:center;margin:26px 0 0;">
          <a href="${BASE_URL}/produkte" style="display:inline-block;background:#2d5a27;color:#fff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:600;font-size:15px;box-shadow:0 6px 18px rgba(45,90,39,.18);">Unsere Formeln ansehen</a>
        </div>
      </div>
      <div style="padding:18px 28px;background:#f8f6f0;border-top:1px solid #e7e3da;text-align:center;">
        <p style="margin:0;font-size:12px;color:#6b6b6b;">Fragen? <a href="mailto:foundingpaws@gmail.com" style="color:#b46a34;text-decoration:none;">Antworte einfach</a> – wir lesen alles.</p>
      </div>
    </div>
  </div>`;
}

function welcomeHtml() {
  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;line-height:1.65;color:#2d5a27;background:#f8f6f0;margin:0;padding:0;">
    <div style="max-width:680px;margin:0 auto;background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 18px 40px rgba(0,0,0,.08);">
      <div style="padding:32px 28px;border-bottom:1px solid #e7e3da;">
        <div style="font-size:18px;letter-spacing:.02em;color:#2d5a27;font-weight:700;">Founding Paws</div>
        <div style="margin-top:4px;font-size:13px;color:rgba(45,90,39,.75);">Wissenschaft trifft Herz</div>
      </div>
      <div style="padding:42px 34px;">
        <h1 style="margin:0 0 10px;font-size:28px;line-height:1.25;font-weight:700;color:#2d5a27;">Willkommen</h1>
        <p style="margin:0 0 14px;font-size:16px;color:rgba(45,90,39,.85);">Hallo und herzlich willkommen, schön, dass du da bist. Wir begleiten dich mit <strong>klaren, evidenzbasierten Empfehlungen</strong> – immer pragmatisch und empathisch.</p>
        <div style="display:block;background:#f8f6f0;border:1px solid #e7e3da;border-radius:14px;padding:18px 20px;margin:16px 0;">
          <div style="font-weight:700;margin-bottom:6px;color:#2d5a27;">Dein Weg durch unseren Ratgeber</div>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:6px;">
            <a href="${BASE_URL}/stress-angst" style="background:#ffffff;border:1px solid #e7e3da;color:#2d5a27;text-decoration:none;padding:10px 14px;border-radius:999px;font-weight:600;font-size:14px;">Stress & Entspannung</a>
            <a href="${BASE_URL}/gelenke-mobilitaet" style="background:#ffffff;border:1px solid #e7e3da;color:#2d5a27;text-decoration:none;padding:10px 14px;border-radius:999px;font-weight:600;font-size:14px;">Gelenke & Mobilität</a>
            <a href="${BASE_URL}/kognition-herz" style="background:#ffffff;border:1px solid #e7e3da;color:#2d5a27;text-decoration:none;padding:10px 14px;border-radius:999px;font-weight:600;font-size:14px;">Kognition & Herz</a>
            <a href="${BASE_URL}/haut-fell" style="background:#ffffff;border:1px solid #e7e3da;color:#2d5a27;text-decoration:none;padding:10px 14px;border-radius:999px;font-weight:600;font-size:14px;">Haut & Fell</a>
          </div>
        </div>
        <div style="text-align:center;margin:26px 0 0;">
          <a href="${BASE_URL}/ratgeber" style="display:inline-block;background:#2d5a27;color:#fff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:600;font-size:15px;box-shadow:0 6px 18px rgba(45,90,39,.18);">Zum Ratgeber</a>
        </div>
        <p style="margin:18px 0 0;font-size:12px;color:rgba(45,90,39,.75);">Wenn du magst, antworte kurz mit Alter & Thema deines Hundes – wir empfehlen passende Artikel.</p>
      </div>
      <div style="padding:18px 28px;background:#f8f6f0;border-top:1px solid #e7e3da;text-align:center;">
        <p style="margin:0;font-size:12px;color:#6b6b6b;">Fragen? <a href="mailto:foundingpaws@gmail.com" style="color:#b46a34;text-decoration:none;">foundingpaws@gmail.com</a></p>
      </div>
    </div>
  </div>`;
}

(async () => {
  try {
    const confirmUrl = `${BASE_URL}/api/newsletter/confirm?token=TEST`;
    console.log('Sending confirm email to', target);
    await sendEmail({ subject: 'Bitte bestätige deine Anmeldung – Founding Paws', html: confirmHtml(confirmUrl) });
    await sleep(1200);

    console.log('Sending welcome discount email to', target);
    await sendEmail({ subject: 'Willkommen – dein 10% Launch‑Vorteil', html: welcomeDiscountHtml() });
    await sleep(1200);

    console.log('Sending regular welcome email to', target);
    await sendEmail({ subject: 'Willkommen bei Founding Paws', html: welcomeHtml() });

    console.log('All test emails sent successfully.');
  } catch (e) {
    console.error('Failed to send test emails:', e);
    process.exit(1);
  }
})();


