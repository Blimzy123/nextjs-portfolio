import Link from "next/link";

export default function ContactPage() {
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
      <section style={{ maxWidth: "750px", margin: "0 auto" }}>
        <p style={{ color: "#a78bfa", letterSpacing: "3px" }}>
          LET&apos;S CONNECT
        </p>

        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Contact Me</h1>

        <p style={{ color: "#aaaabd", lineHeight: 1.9, fontSize: "17px" }}>
          Have a project idea, collaboration opportunity, or question? I&apos;d
          love to hear from you.
        </p>

        <div
          style={{
            marginTop: "35px",
            padding: "30px",
            border: "1px solid #29283d",
            borderRadius: "16px",
            background: "#131321",
          }}
        >
          <h2 style={{ color: "#c4b5fd" }}>Get in Touch</h2>

          <p style={{ color: "#aaaabd", lineHeight: 1.8 }}>
            You can contact me by email using the link below.
          </p>

          <a
            href="mailto:your-email@example.com?subject=Portfolio%20Enquiry"
            style={{
              display: "inline-block",
              marginTop: "15px",
              padding: "14px 22px",
              borderRadius: "9px",
              background: "#8b5cf6",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Send Me an Email
          </a>

          <p
            style={{
              color: "#88889e",
              fontSize: "13px",
              marginTop: "25px",
            }}
          >
            Remember to replace your-email@example.com in the code with your
            actual email address.
          </p>
        </div>

        <p style={{ marginTop: "35px" }}>
          <Link
            href="/projects"
            style={{ color: "#a78bfa", textDecoration: "none" }}
          >
            Explore My Projects →
          </Link>
        </p>
      </section>
    </main>
  );
}