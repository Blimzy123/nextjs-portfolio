import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "TypeScript Counter",
    category: "TypeScript · React",
    description:
      "An interactive counter application built with React class components and TypeScript state.",
    status: "Learning project",
  },
  {
    number: "02",
    title: "Vehicle Project",
    category: "JavaScript · OOP",
    description:
      "A vehicle class project exploring object-oriented programming and methods such as starting an engine.",
    status: "Learning project",
  },
  {
    number: "03",
    title: "My Portfolio",
    category: "Next.js · React · CSS",
    description:
      "A multi-page portfolio website showcasing my skills, projects, and contact information.",
    status: "In progress",
  },
];

export default function ProjectsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px 8%",
        background: "#0b0b14",
        color: "#f5f5ff",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <nav style={{ marginBottom: "65px" }}>
        <Link
          href="/"
          style={{ color: "#a78bfa", textDecoration: "none" }}
        >
          ← Back to Home
        </Link>
      </nav>

      <section style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p style={{ color: "#a78bfa", letterSpacing: "3px" }}>MY WORK</p>

        <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>Projects</h1>

        <p
          style={{
            color: "#aaaabd",
            lineHeight: 1.8,
            maxWidth: "650px",
            marginBottom: "45px",
          }}
        >
          Here are some projects from my development journey. Each one helps me
          practise new skills and build practical experience.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((project) => (
            <article
              key={project.number}
              style={{
                padding: "28px",
                border: "1px solid #29283d",
                borderRadius: "16px",
                background: "#131321",
              }}
            >
              <p style={{ color: "#a78bfa", fontSize: "14px" }}>
                PROJECT {project.number}
              </p>

              <Image
                src="/project-art.svg"
                alt={`Illustration for ${project.title}`}
                width={800}
                height={500}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  marginBottom: "18px",
                }}
              />

              <h2 style={{ fontSize: "23px" }}>{project.title}</h2>

              <p style={{ color: "#c4b5fd", fontSize: "13px" }}>
                {project.category}
              </p>

              <p style={{ color: "#aaaabd", lineHeight: 1.8 }}>
                {project.description}
              </p>

              <p style={{ color: "#88889e", fontSize: "13px" }}>
                {project.status}
              </p>
            </article>
          ))}
        </div>

        <p style={{ marginTop: "45px" }}>
          <Link
            href="/contact"
            style={{
              color: "#ffffff",
              background: "#8b5cf6",
              padding: "14px 22px",
              borderRadius: "9px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Get in Touch
          </Link>
        </p>
      </section>
    </main>
  );
}