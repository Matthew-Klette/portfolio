import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

const CLUSTERS = [
  {
    title: "Programming Foundations",
    description:
      "OOP in Java & C#, algorithms, data structures, design patterns, software SDLC.",
    tools: "Visual Studio · IntelliJ · Git · GitHub",
    codes: "IPRG · PRLD · PROG 1A/1B/2A",
  },
  {
    title: "Web & UI/UX Development",
    description:
      "HTML, CSS, JavaScript, responsive design, wireframing, prototyping, accessibility.",
    tools: "Figma · Adobe XD · Browser DevTools",
    codes: "WEDE · PIXD",
  },
  {
    title: "Mobile App Development",
    description:
      "Native Android, Kotlin, app lifecycle, UI components, REST APIs, mobile scripting.",
    tools: "Android Studio · Kotlin · Gradle · ADB",
    codes: "IMAD · MAST",
  },
  {
    title: "Network Engineering",
    description:
      "TCP/IP, OSI model, LAN/WAN design, routing, switching, subnetting, DNS/DHCP.",
    tools: "Cisco Packet Tracer · Wireshark",
    codes: "NWEG 1A · 1B",
  },
  {
    title: "Information Systems",
    description:
      "Systems analysis, SDLC, data modelling, business process design, IT governance.",
    tools: "draw.io · Lucidchart · ERD modelling",
    codes: "INSY 1B · 2A",
  },
  {
    title: "Cloud Development",
    description:
      "Azure services, IaaS/PaaS/SaaS, serverless, cloud-native deployment, CI/CD pipelines.",
    tools: "Microsoft Azure · Azure Portal · MS Learn",
    codes: "CLDV 6211",
  },
  {
    title: "Security Principles",
    description:
      "Cybersecurity fundamentals, threat modelling, access control, encryption, risk assessment.",
    tools: "Wireshark · Nmap · Kali Linux · Nessus",
    codes: "PRSE 6212",
  },
  {
    title: "Computational Mathematics",
    description:
      "Discrete maths, boolean logic, set theory, statistics, quantitative reasoning for CS.",
    tools: "MATLAB basics · GeoGebra · Excel",
    codes: "MAPC · IQTT",
  },
  {
    title: "Professional Practice",
    description:
      "IT ethics, professional communication, workplace integration, digital literacy, WIL.",
    tools: "Microsoft 365 · Teams · SharePoint",
    codes: "ITPP · DIAL · XHAW",
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionEyebrow number="05" label="EDUCATION" />
        <div className="mb-14 flex flex-col gap-1">
          <h3 className="font-heading text-3xl tracking-tight text-fg sm:text-4xl">
            BCAD — Application Development
          </h3>
          <p className="font-mono text-sm text-fg-muted">
            In progress · IIE Varsity College, Nelson Mandela Bay — plus a
            completed Higher Certificate in Mobile Application and Web
            Development.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CLUSTERS.map((cluster, i) => (
          <Reveal key={cluster.title} delay={(i % 3) * 80}>
            <div className="flex h-full flex-col rounded-2xl border border-border p-6">
              <h4 className="mb-3 font-heading text-lg tracking-tight text-fg">
                {cluster.title}
              </h4>
              <p className="mb-4 font-mono text-xs leading-relaxed text-fg-muted">
                {cluster.description}
              </p>
              <p className="mt-auto font-mono text-[10px] uppercase tracking-wide text-fg-muted/70">
                {cluster.tools}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-fg-muted/50">
                {cluster.codes}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
