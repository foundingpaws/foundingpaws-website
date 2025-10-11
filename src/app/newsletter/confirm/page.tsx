export const dynamic = 'force-static';

import Link from 'next/link';
export default async function NewsletterConfirmPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status } = await searchParams;

  const content = (() => {
    if (status === 'ok') {
      return {
        eyebrow: 'Bestätigung erfolgreich',
        title: 'Danke für deine Bestätigung',
        message:
          'Du bist jetzt auf unserer Warteliste. Deinen 10% Launch‑Vorteil haben wir dir per E‑Mail gesendet. Wir melden uns vor dem Start mit allen Details.',
        pillClass: 'bg-green/10 border-green/20 text-green',
        actions: (
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <Link href="/ratgeber" className="bg-green text-cream px-6 py-3 rounded-full font-medium hover:bg-green/90 transition-all">Zum Ratgeber</Link>
            <Link href="/produkte" className="bg-copper text-cream px-6 py-3 rounded-full font-medium hover:bg-copper/90 transition-all">Unsere Formeln</Link>
          </div>
        ),
      };
    }
    if (status === 'invalid') {
      return {
        eyebrow: 'Link ungültig',
        title: 'Bestätigungslink ungültig oder abgelaufen',
        message:
          'Bitte fordere einen neuen Bestätigungslink an, indem du dich kurz erneut anmeldest. Aus Sicherheitsgründen sind Links zeitlich begrenzt.',
        pillClass: 'bg-copper/10 border-copper/20 text-copper',
        actions: (
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <Link href="/#waitlist" className="bg-copper text-cream px-6 py-3 rounded-full font-medium hover:bg-copper/90 transition-all">Neu anmelden</Link>
            <Link href="/" className="bg-green/10 text-green px-6 py-3 rounded-full font-medium hover:bg-green/15 transition-all">Zur Startseite</Link>
          </div>
        ),
      };
    }
    if (status === 'error') {
      return {
        eyebrow: 'Fehler',
        title: 'Etwas ist schiefgelaufen',
        message:
          'Bitte versuche es später erneut oder kontaktiere uns direkt – wir helfen schnell weiter.',
        pillClass: 'bg-copper/10 border-copper/20 text-copper',
        actions: (
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a href="mailto:foundingpaws@gmail.com" className="bg-copper text-cream px-6 py-3 rounded-full font-medium hover:bg-copper/90 transition-all">Kontakt aufnehmen</a>
            <Link href="/" className="bg-green/10 text-green px-6 py-3 rounded-full font-medium hover:bg-green/15 transition-all">Zur Startseite</Link>
          </div>
        ),
      };
    }
    return {
      eyebrow: 'Anmeldung bestätigen',
      title: 'Bitte E‑Mail bestätigen',
      message: 'Öffne die E‑Mail in deinem Postfach und klicke auf „Anmeldung bestätigen“, um deine Anmeldung abzuschließen.',
      pillClass: 'bg-green/10 border-green/20 text-green',
      actions: (
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
          <Link href="/ratgeber" className="bg-green text-cream px-6 py-3 rounded-full font-medium hover:bg-green/90 transition-all">Ratgeber lesen</Link>
          <Link href="/" className="bg-green/10 text-green px-6 py-3 rounded-full font-medium hover:bg-green/15 transition-all">Zur Startseite</Link>
        </div>
      ),
    };
  })();

  return (
    <main className="bg-cream text-green">
      {/* Hero */}
      <section className="bg-green text-cream">
        <div className="container-wide py-14 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className={`inline-block pill ${content.pillClass.replace('text-', 'border-')} backdrop-blur-sm px-5 py-2 wv-eyebrow mb-5`} style={{ color: 'white', borderColor: 'rgba(255,255,255,.25)' }}>
              Newsletter
            </div>
            <h1 className="wv-h1" style={{ color: 'white' }}>{content.title}</h1>
            <div className="w-20 h-1 bg-copper mx-auto rounded-full mt-5"></div>
            <p className="wv-lead mt-6 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.92)' }}>{content.message}</p>
          </div>
        </div>
      </section>

      {/* Card */}
      <section className="wv-section">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-10 sm:p-12 border border-green/10 shadow-xl text-center">
            <div className={`inline-block pill ${content.pillClass} px-4 py-1.5 wv-caption font-medium mb-4`}>{content.eyebrow}</div>
            <h2 className="wv-h2 mb-2 text-green">{content.title}</h2>
            <p className="wv-body text-green/75 max-w-xl mx-auto">{content.message}</p>
            {content.actions}
          </div>
        </div>
      </section>
    </main>
  );
}

