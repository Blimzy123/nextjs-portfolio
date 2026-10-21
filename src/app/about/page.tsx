export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 8%",
        background: "#0b0b14",
        color: "#f5f5ff",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <section style={{ maxWidth: "800px", margin: "70px auto" }}>
        <p style={{ color: "#a78bfa", letterSpacing: "3px" }}>
          GET TO KNOW ME
        </p>

        <h1 style={{ fontSize: "48px", marginBottom: "24px" }}>
          About Me
        </h1>

        <p style={{ color: "#aaaabd", lineHeight: 2, fontSize: "18px" }}>
          Hello! I am an aspiring web developer passionate about creating
          attractive, accessible, and user-friendly websites.
        </p>

        <p style={{ color: "#aaaabd", lineHeight: 2, fontSize: "18px" }}>
          I am developing my skills in HTML, CSS, JavaScript, React,
          TypeScript, and Next.js by building practical projects and learning
          how modern websites work.
        </p>

        <h2 style={{ color: "#c4b5fd", marginTop: "40px" }}>My Goal</h2>

        <p style={{ color: "#aaaabd", lineHeight: 2 }}>
          My goal is to become a skilled developer who turns creative ideas
          into useful digital experiences.
        </p>
      </section>
    </main>
  );
}