import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import FadeIn from "@/components/FadeIn";
import GlassmorphismCard from "@/components/GlassmorphismCard";
import IconMicroscope from "@/components/icons/IconMicroscope";
import IconPassion from "@/components/icons/IconPassion";
import IconTransparency from "@/components/icons/IconTransparency";
import IconSustainability from "@/components/icons/IconSustainability";
import IconBusiness from "@/components/icons/IconBusiness";
import IconScientist from "@/components/icons/IconScientist";

const teamMembers = [
  {
    name: "Nala",
    role: "Co-Founder & Chief Inspiration Officer",
    specialty: "Hundegesundheit & Produkttestung",
    experience: "Seit Gründung",
    image: "/Nala1.jpg",
    description: "Nala ist nicht nur unser Maskottchen – sie ist das Herz von Founding Paws. Als unsere treue Begleiterin und erste Produkttesterin hat sie uns gezeigt, was Hunde wirklich brauchen. Nala lebt vor, was wir versprechen: ein gesundes, glückliches Hundeleben bis ins hohe Alter. Sie ist der Grund, warum wir nie Kompromisse bei der Qualität eingehen – denn sie verdient nur das Beste.",
    qualifications: ["Produkttesterin", "Qualitätskontrolle", "Chief Inspiration Officer"]
  },
  {
    name: "Jackson",
    role: "Co-Founder & Chief Quality Officer",
    specialty: "Produktentwicklung & Qualitätssicherung",
    experience: "Seit Gründung",
    image: "/mockups/Jackson.jpg",
    description: "Jackson ist unser Senior-Experte und bringt die Weisheit der Jahre in jedes Produkt. Als älterer Hund kennt er die Herausforderungen des Alterns aus erster Hand – steife Gelenke, nachlassende Energie, manchmal auch Ängste. Deshalb testet er besonders unsere Vital Joints Formel mit der Geduld eines erfahrenen Lehrers. Wenn Jackson nach der Einnahme wieder fröhlich durch den Park tollt, wissen wir: Das Produkt funktioniert. Seine Zufriedenheit ist unser höchstes Ziel.",
    qualifications: ["Senior Produkttester", "Qualitätssicherung", "Gelenk-Experte"]
  },
  {
    name: "Nick Herbig",
    role: "Gründer & Geschäftsführer",
    specialty: "Strategie und Vertrieb",
    experience: "Seit Gründung",
    image: null,
    description: "Nick ist der Gründer von Founding Paws und bringt seine Erfahrung in der Strategie und im Vertrieb ein. Mit einem tiefen Verständnis für die Bedürfnisse von Hunden und der Leidenschaft für qualitativ hochwertige Produkte entwickelt er die Vision für unser Unternehmen. Nick arbeitet daran, dass Hundebesitzer Zugang zu hochwertigen, wissenschaftlich fundierten Supplements haben – basierend auf dem Prinzip, dass jeder Hund das Beste verdient.",
    qualifications: ["Gründer", "Strategie", "Vertrieb"]
  },
  {
    name: "Alica Szabries",
    role: "Gründerin & Geschäftsführerin",
    specialty: "Wissenschaft & Formulierung",
    experience: "Seit Gründung",
    image: null,
    description: "Alica ist die Ernährungsexpertin, die unsere Träume in Realität verwandelt. Sie entwickelt Formeln, die nicht nur wirken, sondern auch schmecken. Jedes Produkt, das wir herstellen, durchläuft Alicas strenge Tests – denn sie weiß: Dein Hund vertraut uns. Ihre Hingabe zur Perfektion ist der Grund, warum unsere Produkte so zuverlässig funktionieren. Für Alica ist jedes glückliche Hundegesicht der beste Lohn.",
    qualifications: ["Gründerin", "Ernährungsexpertin", "Formulierungsexpertin"]
  }
];

const values = [
  {
    icon: IconMicroscope,
    title: "Wissenschaft",
    description: "Alle unsere Entscheidungen basieren auf aktueller Forschung und evidenzbasierten Erkenntnissen."
  },
  {
    icon: IconPassion,
    title: "Leidenschaft",
    description: "Wir lieben Hunde und sind leidenschaftlich daran interessiert, ihr Leben zu verbessern."
  },
  {
    icon: IconTransparency,
    title: "Transparenz",
    description: "Wir kommunizieren offen über unsere Prozesse, Inhaltsstoffe und Entwicklungen."
  },
  {
    icon: IconSustainability,
    title: "Nachhaltigkeit",
    description: "Verantwortungsvoller Umgang mit Ressourcen und umweltfreundliche Verpackungen."
  }
];

export default function TeamPage() {
  return (
    <main className="bg-cream text-green">
      {/* Hero Section */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-block pill bg-cream/15 border border-cream/25 px-5 py-2 wv-eyebrow wv-spacing-md" style={{color: 'white'}}>
                Unser Team
              </div>
              <h1 className="wv-h1 wv-spacing-sm" style={{color: 'white'}}>
                Unser Team bei Founding Paws
              </h1>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead wv-spacing-md max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                Ein interdisziplinäres Team aus Menschen und Hunden – Tierärzte, Pharmazeuten, 
                Wissenschaftler und unsere vierbeinigen Produkttester, vereint durch die Leidenschaft für die Gesundheit von Hunden.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="wv-section bg-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Unser Expertenteam
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Erfahrene Fachkräfte mit jahrelanger Expertise in Veterinärmedizin, 
                Pharmazie und Produktentwicklung.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={member.name} animation="slide-up" delay={index * 100}>
                <GlassmorphismCard className="p-8 text-center hover-lift-feature">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-copper/20">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className={`w-full h-full object-cover ${member.name === "Jackson" ? "object-[center_10%]" : "object-center"}`}
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-green/20 to-copper/20 flex items-center justify-center">
                        <div className="w-16 h-16 text-green/60">
                          {member.name === "Nick Herbig" ? (
                            <IconBusiness className="w-full h-full" />
                          ) : (
                            <IconScientist className="w-full h-full" />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="wv-h3 text-green wv-spacing-xs">
                    {member.name}
                  </h3>
                  <p className="wv-h4 text-copper wv-spacing-xs">
                    {member.role}
                  </p>
                  <p className="wv-body text-green/70 wv-spacing-sm">
                    {member.specialty}
                  </p>
                  
                  <div className="wv-spacing-sm">
                    <p className="wv-body text-green/80">
                      {member.description}
                    </p>
                  </div>

                  <div className="border-t border-taupe/15 pt-4 wv-spacing-sm">
                    <div className="wv-caption text-green/60 wv-spacing-xs">
                      {member.experience} Berufserfahrung
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.qualifications.map((qual, idx) => (
                        <span key={idx} className="pill bg-green/10 text-green px-3 py-1 text-xs">
                          {qual}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassmorphismCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="wv-section bg-gradient-to-b from-cream to-taupe/5">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="text-center wv-spacing-2xl">
              <h2 className="wv-h2 text-green wv-spacing-sm">
                Unsere Werte
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-green/70 wv-spacing-md max-w-3xl mx-auto">
                Die Prinzipien, die unser Handeln leiten und unsere Entscheidungen prägen.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollAnimation key={value.title} animation="fade-in" delay={index * 100}>
                <GlassmorphismCard className="p-6 text-center hover-lift-feature">
                  <div className="w-16 h-16 mx-auto wv-spacing-sm text-copper">
                    <value.icon className="w-full h-full" />
                  </div>
                  <h3 className="wv-h4 text-green wv-spacing-xs">
                    {value.title}
                  </h3>
                  <p className="wv-body text-green/75">
                    {value.description}
                  </p>
                </GlassmorphismCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wv-section bg-green text-cream">
        <div className="container-wide">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="wv-h2 text-cream wv-spacing-sm">
                Hast du Fragen an unser Team?
              </h2>
              <div className="w-16 h-1 bg-copper mx-auto rounded-full wv-spacing-md"></div>
              <p className="wv-lead text-cream/90 wv-spacing-md">
                Unser Expertenteam steht dir gerne für Fragen rund um die Gesundheit 
                deines Hundes zur Verfügung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center wv-spacing-md">
                <a href="mailto:team@foundingpaws.de" className="btn-primary pill text-cream px-8 py-4 font-medium">
                  Kontakt aufnehmen
                </a>
                <a href="#finder-mvp" className="btn-secondary pill text-cream px-8 py-4 font-medium">
                  Bedarfsfinder
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
