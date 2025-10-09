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
import IconDoctor from "@/components/icons/IconDoctor";
import IconPaw from "@/components/icons/IconPaw";
import IconHeart from "@/components/icons/IconHeart";
import IconScience from "@/components/icons/IconScience";
import IconNature from "@/components/icons/IconNature";
import IconTrust from "@/components/icons/IconTrust";

const teamMembers = [
  {
    name: "Nala",
    role: "Co-Founder & Chief Inspiration Officer",
    specialty: "Hundegesundheit & Produkttestung",
    experience: "Seit Gründung",
    image: "/Nala1.jpg",
    description: "Nala ist nicht nur unser Maskottchen – sie ist das Herz von Founding Paws. Als unsere treue Begleiterin und erste Produkttesterin hat sie uns gezeigt, was Hunde wirklich brauchen. Nala lebt vor, was wir versprechen: ein gesundes, glückliches Hundeleben bis ins hohe Alter. Sie ist der Grund, warum wir nie Kompromisse bei der Qualität eingehen – denn sie verdient nur das Beste.",
    qualifications: ["Produkttesterin", "Qualitätskontrolle", "Chief Inspiration Officer"],
    socialLinks: {
      linkedin: null,
      email: "hallo@foundingpaws.de"
    },
    expertise: ["Hundegesundheit", "Produkttestung", "Qualitätssicherung"],
    expertiseIcons: [IconPaw, IconHeart, IconTrust]
  },
  {
    name: "Jackson",
    role: "Co-Founder & Chief Quality Officer",
    specialty: "Produktentwicklung & Qualitätssicherung",
    experience: "Seit Gründung",
    image: "/mockups/Jackson.jpg",
    description: "Jackson ist unser Senior-Experte und bringt die Weisheit der Jahre in jedes Produkt. Als älterer Hund kennt er die Herausforderungen des Alterns aus erster Hand – steife Gelenke, nachlassende Energie, manchmal auch Ängste. Deshalb testet er besonders unsere Vital Joints Formel mit der Geduld eines erfahrenen Lehrers. Wenn Jackson nach der Einnahme wieder fröhlich durch den Park tollt, wissen wir: Das Produkt funktioniert. Seine Zufriedenheit ist unser höchstes Ziel.",
    qualifications: ["Senior Produkttester", "Qualitätssicherung", "Gelenk-Experte"],
    socialLinks: {
      linkedin: null,
      email: "hallo@foundingpaws.de"
    },
    expertise: ["Gelenkgesundheit", "Senior Care", "Produktentwicklung"],
    expertiseIcons: [IconPaw, IconScience, IconTrust]
  },
  {
    name: "Nick Herbig",
    role: "Gründer & Geschäftsführer",
    specialty: "Strategie und Vertrieb",
    experience: "Seit Gründung",
    image: null,
    description: "Nick ist der Gründer von Founding Paws und bringt seine Erfahrung in der Strategie und im Vertrieb ein. Mit einem tiefen Verständnis für die Bedürfnisse von Hunden und der Leidenschaft für qualitativ hochwertige Produkte entwickelt er die Vision für unser Unternehmen. Nick arbeitet daran, dass Hundebesitzer Zugang zu hochwertigen, wissenschaftlich fundierten Supplements haben – basierend auf dem Prinzip, dass jeder Hund das Beste verdient.",
    qualifications: ["Gründer", "Strategie", "Vertrieb"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nick-herbig-1afb43",
      email: "hallo@foundingpaws.de"
    },
    expertise: ["Unternehmensstrategie", "Vertrieb", "Produktmanagement"],
    expertiseIcons: [IconBusiness, IconHeart, IconTrust]
  },
  {
    name: "Alica Szabries",
    role: "Gründerin & Geschäftsführerin",
    specialty: "Wissenschaft & Formulierung",
    experience: "Seit Gründung",
    image: null,
    description: "Alica ist die Ernährungsexpertin, die unsere Träume in Realität verwandelt. Sie entwickelt Formeln, die nicht nur wirken, sondern auch schmecken. Jedes Produkt, das wir herstellen, durchläuft Alicas strenge Tests – denn sie weiß: Dein Hund vertraut uns. Ihre Hingabe zur Perfektion ist der Grund, warum unsere Produkte so zuverlässig funktionieren. Für Alica ist jedes glückliche Hundegesicht der beste Lohn.",
    qualifications: ["Gründerin", "Ernährungsexpertin", "Formulierungsexpertin"],
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/alicaszabries/",
      email: "hallo@foundingpaws.de"
    },
    expertise: ["Ernährungswissenschaft", "Formulierung", "Forschung & Entwicklung"],
    expertiseIcons: [IconScientist, IconScience, IconMicroscope]
  }
];

const values = [
  {
    icon: IconMicroscope,
    title: "Wissenschaft",
    description: "Alle unsere Entscheidungen basieren auf aktueller Forschung und evidenzbasierten Erkenntnissen.",
    color: "green"
  },
  {
    icon: IconPassion,
    title: "Leidenschaft",
    description: "Wir lieben Hunde und sind leidenschaftlich daran interessiert, ihr Leben zu verbessern.",
    color: "copper"
  },
  {
    icon: IconTransparency,
    title: "Transparenz",
    description: "Wir kommunizieren offen über unsere Prozesse, Inhaltsstoffe und Entwicklungen.",
    color: "taupe"
  },
  {
    icon: IconSustainability,
    title: "Nachhaltigkeit",
    description: "Verantwortungsvoller Umgang mit Ressourcen und umweltfreundliche Verpackungen.",
    color: "green"
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

      {/* Team Members - Modern Masonry Grid */}
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

          {/* Modern Team Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollAnimation key={member.name} animation="slide-up" delay={index * 150}>
                <div className="group h-full">
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-taupe/20 hover:border-copper/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden h-full flex flex-col">
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-copper/5 to-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    {/* Profile Image */}
                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-copper/20 group-hover:border-copper/40 transition-all duration-500 group-hover:scale-105">
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
                        <div className="w-full h-full bg-gradient-to-br from-green/20 to-copper/20 flex items-center justify-center group-hover:from-green/30 group-hover:to-copper/30 transition-all duration-500">
                          <div className="w-16 h-16 text-green/60 group-hover:text-copper/70 transition-colors duration-500">
                            {member.name === "Nick Herbig" ? (
                              <IconBusiness className="w-full h-full" />
                            ) : (
                              <IconScientist className="w-full h-full" />
                            )}
                          </div>
                        </div>
                      )}
                      
                      {/* Soft Glow Effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-copper/10 to-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                    
                    {/* Name & Role */}
                    <div className="text-center mb-4 flex-shrink-0">
                      <h3 className="wv-h4 text-green group-hover:text-copper transition-colors duration-500 mb-1">
                        {member.name}
                      </h3>
                      <p className="wv-body text-copper group-hover:text-green transition-colors duration-500 font-medium mb-1">
                        {member.role}
                      </p>
                      <p className="wv-small text-green/70 group-hover:text-green/90 transition-colors duration-500">
                        {member.specialty}
                      </p>
                    </div>
                    
                    {/* Description */}
                    <div className="mb-4 flex-grow">
                      <p className="wv-small text-green/80 group-hover:text-green/90 transition-colors duration-500 leading-relaxed line-clamp-4">
                        {member.description}
                      </p>
                    </div>

                    {/* Expertise Icons */}
                    <div className="flex justify-center gap-2 mb-4 flex-shrink-0">
                      {member.expertiseIcons.map((Icon, idx) => (
                        <div key={idx} className="w-8 h-8 bg-gradient-to-br from-copper/10 to-green/10 rounded-full flex items-center justify-center group-hover:from-copper/20 group-hover:to-green/20 transition-all duration-500 group-hover:scale-110">
                          <Icon className="w-4 h-4 text-copper/70 group-hover:text-copper transition-colors duration-500" />
                        </div>
                      ))}
                    </div>

                    {/* Qualifications */}
                    <div className="border-t border-taupe/15 pt-4 flex-shrink-0">
                      <div className="wv-caption text-green/60 group-hover:text-green/80 transition-colors duration-500 mb-2">
                        {member.experience} Berufserfahrung
                      </div>
                      <div className="flex flex-wrap justify-center gap-1 mb-3">
                        {member.qualifications.map((qual, idx) => (
                          <span key={idx} className="pill bg-green/10 text-green group-hover:bg-copper/10 group-hover:text-copper px-2 py-1 text-xs transition-all duration-500">
                            {qual}
                          </span>
                        ))}
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex justify-center gap-3">
                        {member.socialLinks.linkedin && (
                          <a 
                            href={member.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                            aria-label={`${member.name} LinkedIn Profil`}
                          >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        )}
                        <a 
                          href={`mailto:${member.socialLinks.email}`}
                          className="w-7 h-7 bg-gradient-to-br from-copper to-copper/80 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                          aria-label={`${member.name} E-Mail`}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Values Carousel Section */}
      <section className="wv-section bg-gradient-to-b from-cream to-taupe/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-copper/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-wide relative z-10">
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

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation key={value.title} animation="fade-in" delay={index * 150}>
                <div className="group relative">
                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${value.color}/5 to-${value.color === 'copper' ? 'green' : 'copper'}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                  
                  {/* Content Card */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center border border-taupe/20 hover:border-copper/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
                    {/* Icon Container */}
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br from-${value.color}/10 to-${value.color === 'copper' ? 'green' : 'copper'}/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 pointer-events-none`}></div>
                      <div className={`relative w-full h-full bg-gradient-to-br from-${value.color} to-${value.color === 'copper' ? 'copper/80' : 'green/80'} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="wv-h4 text-green group-hover:text-copper transition-colors duration-300 wv-spacing-sm">
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="wv-body text-green/75 leading-relaxed group-hover:text-green/90 transition-colors duration-300">
                      {value.description}
                    </p>
                    
                    
                    {/* Decorative Element */}
                    <div className={`absolute top-4 right-4 w-2 h-2 bg-${value.color}/30 rounded-full group-hover:bg-${value.color}/60 transition-colors duration-300`}></div>
                  </div>
                </div>
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
