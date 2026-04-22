"use client"

import { Github } from "lucide-react";
import { useRef } from "react";

const works = [
  { id: "01", title: "준비 중입니다", category: "Coming Soon", year: "2026", link: "https://github.com/OnsaenaroStudio" },
];

const services = [
  { label: "Web Development", desc: "아이디어가 웹으로 구현되도록 만듭니다" },
  { label: "Open Source", desc: "커뮤니티와 함께 더 나은 코드를 만듭니다" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);


  return (
    <main className="font-sans" style={{ background: "#FAFAFA", color: "#0A0A0A", overflow: "hidden" }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::selection { background: #95CAF9; color: #0A0A0A; }
        .grad-text {
          background: linear-gradient(135deg, #95E6FA 0%, #95CAF9 48.96%, #9EA4F2 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .nav-link {
          font-size: 11px; letter-spacing: 0.15em;
          text-transform: uppercase; color: #0A0A0A; text-decoration: none;
          position: relative; padding-bottom: 2px;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 0; height: 1px;
          background: linear-gradient(90deg, #95E6FA, #9EA4F2); transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .grad-border-btn {
          position: relative;
          background: transparent;
          border: none;
          padding: 14px 32px;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          color: #0A0A0A;
          font-weight: 600;
          z-index: 1;
          transition: color 0.3s ease;
        }
        .grad-border-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(135deg, #95E6FA 0%, #95CAF9 48.96%, #9EA4F2 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          z-index: -1;
        }
        .grad-border-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #95E6FA 0%, #95CAF9 48.96%, #9EA4F2 100%);
          opacity: 0;
          z-index: -2;
          transition: opacity 0.3s ease;
        }
        .grad-border-btn:hover::after {
          opacity: 1;
        }
        .grad-border-btn:hover {
          color: #0A0A0A;
        }
        .grad-border-btn-dark {
          color: #FAFAFA;
        }
        .grad-border-btn-dark:hover {
          color: #0A0A0A;
        }
        .work-row {
          display: grid; grid-template-columns: 60px 1fr auto auto;
          align-items: center; gap: 32px; padding: 24px 0;
          border-top: 1px solid #E8E8E8; cursor: pointer;
          transition: all 0.25s ease; position: relative;
        }
        .work-row:last-child { border-bottom: 1px solid #E8E8E8; }
        .work-row:hover { padding-left: 16px; }
        .work-row:hover .work-title {
          background: linear-gradient(135deg, #95E6FA 0%, #95CAF9 48.96%, #9EA4F2 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .work-row:hover .work-arrow { opacity: 1; transform: translateX(0); }
        .work-arrow {
          opacity: 0; transform: translateX(-8px); transition: all 0.25s ease;
          font-size: 12px;
        }
        .service-card {
          padding: 32px; border: 1px solid #E8E8E8; position: relative;
          overflow: hidden; transition: all 0.3s ease; background: #FAFAFA;
        }
        .service-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, #95E6FA, #95CAF9, #9EA4F2);
          transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease;
        }
        .service-card:hover::before { transform: scaleX(1); }
        .service-card:hover { background: #F0F7FF; }
        .float-shape { position: absolute; pointer-events: none; transition: transform 0.1s ease-out; }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(8px, -12px) rotate(2deg); }
          66% { transform: translate(-6px, 8px) rotate(-1deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-word { display: inline-block; animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .hero-word:nth-child(2) { animation-delay: 0.1s; }
        .hero-word:nth-child(3) { animation-delay: 0.2s; }
        .marquee-track {
          display: flex; gap: 48px; white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); } to { transform: translateX(-50%); }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "20px 48px",
        background: "rgba(250,250,250,0.85)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(149,202,249,0.2)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://raw.githubusercontent.com/OnsaenaroStudio/.github/main/profile/onsaemiro_logo.png"
            alt="온새나로 로고" style={{ height: 28, width: "auto" }}
          />
          <span className="font-serif" style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.08em" }}>
            온새나로
          </span>
        </div>
        <div style={{ display: "flex", gap: 40 }}>
          {["Work", "About", "Services", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section ref={heroRef} id="hero" style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "flex-end", padding: "0 48px 80px",
        position: "relative", overflow: "hidden",
      }}>

        <div style={{
          position: "absolute", top: "50%", right: 48,
          transform: "translateY(-50%) rotate(90deg)", transformOrigin: "center",
          fontSize: 10, letterSpacing: "0.25em", color: "#BEBEBE", textTransform: "uppercase",
        }}>
          ONSAENARO STUDIO
        </div>

        <div style={{ maxWidth: 900, position: "relative", zIndex: 1 }}>
          <div style={{
            fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#9EA4F2", marginBottom: 32,
          }}>
            ◆ MAKE IDEAS IN REAL
          </div>

          <h1 className="font-serif" style={{
            fontSize: "clamp(56px, 9vw, 120px)",
            fontWeight: 400, lineHeight: 0.92, letterSpacing: "-0.02em", marginBottom: 48,
          }}>
            <span className="hero-word grad-text" style={{ display: "block" }}>새로운 길을</span>
            <span className="hero-word" style={{ display: "block", fontStyle: "italic" }}>개척합니다.</span>
          </h1>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48 }}>
            <p className="font-serif" style={{
              fontSize: 15, lineHeight: 1.9, color: "#444", maxWidth: 380, fontWeight: 300,
            }}>
              설명
            </p>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <button className="grad-border-btn">
                PROJECTS →
              </button>
              <a href="#about" style={{
                fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
                color: "#666", textDecoration: "none",
              }}>
                About ↓
              </a>
            </div>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: 40, left: 48,
          display: "flex", alignItems: "center", gap: 12,
          fontSize: 10, letterSpacing: "0.2em", color: "#BEBEBE", textTransform: "uppercase",
        }}>
          <div style={{ width: 40, height: 1, background: "linear-gradient(90deg, #95E6FA, #9EA4F2)" }} />
          Scroll
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{
        borderTop: "1px solid #E8E8E8", borderBottom: "1px solid #E8E8E8",
        padding: "16px 0", overflow: "hidden", background: "#F5F5F5",
      }}>
        <div className="marquee-track">
          {[...Array(2)].map((_, i) =>
            ["Web Development", "◆", "App Development", "◆", "System Design", "◆", "Open Source", "◆", "TypeScript", "◆", "Next.js", "◆"].map(
              (item, j) => (
                <span key={`${i}-${j}`} style={{
                  fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
                  color: item === "◆" ? "#9EA4F2" : "#666",
                }}>
                  {item}
                </span>
              )
            )
          )}
        </div>
      </div>

      {/* WORK */}
      <section id="work" style={{ padding: "120px 48px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64 }}>
          <div>
            <div style={{
              fontSize: 10, letterSpacing: "0.25em", color: "#9EA4F2",
              textTransform: "uppercase", marginBottom: 12,
            }}>
              Selected Projects
            </div>
            <h2 className="font-serif" style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 400, lineHeight: 1.0, letterSpacing: "-0.02em",
            }}>
              PROJECTS
            </h2>
          </div>
          <a href="#" style={{
            fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#666", textDecoration: "none",
          }}>
            View All →
          </a>
        </div>
        <div>
          {works.map((work) => (
            <div key={work.id} className="work-row">
              <span style={{ fontSize: 11, color: "#BEBEBE", letterSpacing: "0.1em" }}>
                {work.id}
              </span>
              <span className="work-title font-serif" style={{
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 400, letterSpacing: "-0.01em", transition: "all 0.25s ease",
              }}>
                {work.title}
              </span>
              <span style={{ fontSize: 11, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {work.category}
              </span>
              <span style={{ fontSize: 11, color: "#BEBEBE" }}>
                {work.year}
              </span>
              <span className="work-arrow" onClick={() => window.open(work.link ? "#", "_blank")}>→</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "120px 48px", background: "#F5F5F5", borderTop: "1px solid #E8E8E8" }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{
            fontSize: 10, letterSpacing: "0.25em", color: "#9EA4F2",
            textTransform: "uppercase", marginBottom: 12,
          }}>
            Services
          </div>
          <h2 className="font-serif" style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 400, lineHeight: 1.0, letterSpacing: "-0.02em",
          }}>
            WORKS
          </h2>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 1, background: "#E8E8E8", border: "1px solid #E8E8E8",
        }}>
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div style={{
                fontSize: 10, letterSpacing: "0.2em", color: "#9EA4F2",
                textTransform: "uppercase", marginBottom: 20,
              }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-serif" style={{ fontSize: 22, fontWeight: 400, marginBottom: 16, lineHeight: 1.2 }}>
                {s.label}
              </div>
              <p className="font-serif" style={{ fontSize: 13, lineHeight: 1.8, color: "#666", fontWeight: 300 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "120px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{
              fontSize: 10, letterSpacing: "0.25em", color: "#9EA4F2",
              textTransform: "uppercase", marginBottom: 12,
            }}>
              About
            </div>
            <h2 className="font-serif" style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 32,
            }}>
              온새나로는<br />
              <span className="grad-text">자연스러움으로</span><br />
              <span style={{ fontStyle: "italic" }}>코드를 짭니다.</span>
            </h2>
            <p className="font-serif" style={{
              fontSize: 14, lineHeight: 2.0, color: "#555", fontWeight: 300, marginBottom: 40,
            }}>
              온새나로는 "자연 그대로"를 뜻하는 순우리말 '온새미'와<br />
              "새로운 세상을 연다"는 뜻의 '나로'를 합친 이름입니다.<br />
              있는 그대로의 방식으로, 새로운 길을 만들어 나갑니다.
            </p>
            <div style={{ display: "flex", gap: 48 }}>
              {[["2026", "탄생"], ["0+", "프로젝트"]].map(([num, label]) => (
                <div key={label}>
                  <div className="grad-text font-serif" style={{
                    fontSize: 36, fontWeight: 400, lineHeight: 1, marginBottom: 4,
                  }}>
                    {num}
                  </div>
                  <div style={{
                    fontSize: 10, letterSpacing: "0.2em", color: "#999", textTransform: "uppercase",
                  }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative", height: 440 }}>
            <div style={{
              position: "absolute", top: 0, right: 0, width: "70%", height: "70%",
              background: "linear-gradient(135deg, rgba(149,230,250,0.2) 0%, rgba(158,164,242,0.15) 100%)",
              clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
            }} />
            <div style={{
              position: "absolute", bottom: 0, left: 0, width: "55%", height: "55%",
              border: "1px solid rgba(149,202,249,0.5)",
              clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
            }} />
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)", textAlign: "center",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://raw.githubusercontent.com/OnsaenaroStudio/.github/main/profile/onsaemiro_logo.png"
                alt="온새나로"
                style={{ width: 100, height: "auto", filter: "drop-shadow(0 8px 32px rgba(149,202,249,0.4))" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{
        padding: "120px 48px", background: "#0A0A0A",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)", width: 600, height: 600,
          background: "radial-gradient(circle, rgba(149,202,249,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{
            fontSize: 10, letterSpacing: "0.25em", color: "#9EA4F2",
            textTransform: "uppercase", marginBottom: 24,
          }}>
            Let's Build Together
          </div>
          <h2 className="font-serif" style={{
            fontSize: "clamp(40px, 7vw, 96px)",
            fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.03em",
            color: "#FAFAFA", marginBottom: 48,
          }}>
            새로운 시작을<br />
            <span className="grad-text">함께 만들어요.</span>
          </h2>
          <button className="grad-border-btn grad-border-btn-dark" style={{ fontSize: 12, padding: "18px 48px" }}>
            Contact Us →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "32px 48px", background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ fontSize: 10, letterSpacing: "0.15em", color: "#444", textTransform: "uppercase" }}>
          © 2026 온새나로 스튜디오 ALL RIGHTS RESERVED.
        </div>
        <div style={{ fontSize: 10, letterSpacing: "0.15em", color: "#444", textTransform: "uppercase" }}>
          <Github onClick={() => window.open("https://github.com/OnsaenaroStudio", "_blank")} />
        </div>
      </footer>
    </main>
  );
}
