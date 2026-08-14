// app/page.tsx — Javari Health
// AI health and wellness tools — symptom info, wellness plans, mental health
// CR AudioViz AI · EIN 39-3646201 · May 2026
// IMPORTANT: Not medical advice. Always consult a healthcare professional.
"use client";
import { useState } from "react";

const TOOLS = [
  { icon: "💪", label: "Wellness Plan",       desc: "Personalized fitness and nutrition roadmap",           href: "/wellness" },
  { icon: "🧠", label: "Mental Wellness",      desc: "Journaling prompts, breathing exercises, CBT tools",   href: "/mental" },
  { icon: "😴", label: "Sleep Optimizer",      desc: "Improve sleep quality with evidence-based strategies", href: "/sleep" },
  { icon: "🥗", label: "Nutrition Guide",      desc: "Meal planning for your health goals",                 href: "/nutrition" },
  { icon: "🏃", label: "Exercise Library",     desc: "Workouts for every level and goal",                   href: "/exercise" },
  { icon: "📋", label: "Symptom Journal",      desc: "Track symptoms to share with your doctor",            href: "/journal" },
  { icon: "💊", label: "Medication Tracker",   desc: "Reminders and interaction checks",                    href: "/medications" },
  { icon: "🩺", label: "Find a Doctor",        desc: "Search local providers by specialty",                 href: "/find-doctor" },
];

export default function HealthHome() {
  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  async function generatePlan() {
    if (!goal.trim()) return;
    setLoading(true); setPlan("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: `Create a practical 30-day wellness plan for this goal: "${goal}". Include: weekly fitness schedule (3-4 workouts), nutrition guidelines (not a strict diet, just principles), sleep optimization tips, and one mental wellness habit. Keep it realistic and sustainable.` }],
          stream: false,
          systemOverride: "You are a certified wellness coach with expertise in fitness, nutrition, and mental health. Provide evidence-based, practical wellness plans. Always remind users that this is general wellness guidance and not a substitute for professional medical advice."
        }),
      });
      const data = await res.json();
      setPlan(data?.choices?.[0]?.message?.content || data?.content || "Error.");
    } catch { setPlan("Connection error."); }
    setLoading(false);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#040912", color: "#e2e8f0", fontFamily: "system-ui" }}>
      <nav style={{ background: "#1E3A5F", padding: "0 20px", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 20 }}>💚</span>
          <span style={{ fontWeight: 800, color: "#00B4D8", fontSize: 15 }}>Javari Health</span>
          <span style={{ color: "#374151", fontSize: 11 }}>· Not medical advice</span>
        </div>
        <a href="https://craudiovizai.com/auth/signup" style={{ background: "#FF0800", color: "#fff", borderRadius: 7, padding: "5px 14px", fontSize: 12, fontWeight: 700, textDecoration: "none" }}>Sign Up Free</a>
      </nav>

      <section style={{ background: "linear-gradient(135deg,#1E3A5F,#040912)", padding: "64px 24px 56px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(26px,4vw,48px)", fontWeight: 900, color: "#fff", margin: "0 0 14px", lineHeight: 1.05 }}>
            Your Health Journey,<br /><span style={{ color: "#00B4D8" }}>Guided by AI</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.65, margin: "0 0 12px" }}>
            Wellness plans, fitness programs, nutrition guidance, and mental health tools.
            Built to support — not replace — your healthcare team.
          </p>
          <p style={{ fontSize: 12, color: "#374151", margin: "0 0 28px", padding: "8px 16px", background: "rgba(255,255,255,0.03)", borderRadius: 8, display: "inline-block" }}>
            ⚠️ For general wellness only. Always consult a qualified healthcare professional for medical decisions.
          </p>
        </div>
      </section>

      {/* Quick wellness plan */}
      <section style={{ maxWidth: 700, margin: "0 auto", padding: "36px 20px 0" }}>
        <div style={{ background: "#0F1F32", border: "1px solid rgba(0,180,216,0.12)", borderRadius: 16, padding: "24px 28px" }}>
          <h2 style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 800, color: "#fff" }}>Get Your 30-Day Wellness Plan</h2>
          <p style={{ margin: "0 0 16px", color: "#6B7280", fontSize: 13 }}>Tell Javari your wellness goal and get a practical, sustainable 30-day plan.</p>
          <div style={{ display: "flex", gap: 8 }}>
            <input value={goal} onChange={e => setGoal(e.target.value)} onKeyDown={e => e.key === "Enter" && generatePlan()}
              placeholder="Lose 15 lbs, improve sleep, reduce stress, run a 5K..."
              style={{ flex: 1, background: "#172D48", border: "1px solid rgba(0,180,216,0.15)", borderRadius: 8, padding: "11px 14px", color: "#e2e8f0", fontSize: 13, outline: "none", fontFamily: "system-ui" }} />
            <button onClick={generatePlan} disabled={loading || !goal.trim()}
              style={{ background: loading || !goal.trim() ? "#0F1F32" : "#1E3A5F", color: loading || !goal.trim() ? "#374151" : "#00B4D8", border: "1px solid rgba(0,180,216,0.2)", borderRadius: 8, padding: "11px 18px", fontSize: 13, fontWeight: 700, cursor: loading || !goal.trim() ? "not-allowed" : "pointer", fontFamily: "system-ui", whiteSpace: "nowrap" }}>
              {loading ? "..." : "💪 Get Plan"}
            </button>
          </div>
          {plan && (
            <div style={{ marginTop: 16, padding: "14px 16px", background: "rgba(0,180,216,0.05)", border: "1px solid rgba(0,180,216,0.12)", borderRadius: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#00B4D8" }}>Your 30-Day Plan</span>
                <button onClick={() => navigator.clipboard?.writeText(plan)} style={{ background: "transparent", color: "#6B7280", border: "none", fontSize: 11, cursor: "pointer", fontFamily: "system-ui" }}>Copy</button>
              </div>
              <pre style={{ margin: 0, fontSize: 13, color: "#e2e8f0", lineHeight: 1.65, whiteSpace: "pre-wrap", fontFamily: "system-ui" }}>{plan}</pre>
            </div>
          )}
        </div>
      </section>

      <section style={{ maxWidth: 960, margin: "0 auto", padding: "48px 20px 72px" }}>
        <h2 style={{ textAlign: "center", fontSize: "clamp(18px,3vw,28px)", fontWeight: 800, color: "#fff", margin: "0 0 32px" }}>All Wellness Tools</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 12 }}>
          {TOOLS.map(t => (
            <div key={t.href} style={{ background: "#0F1F32", border: "1px solid rgba(0,180,216,0.08)", borderRadius: 14, padding: "20px 18px", textDecoration: "none", display: "block" }}>
              <span style={{ fontSize: 28, display: "block", marginBottom: 8 }}>{t.icon}</span>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#e2e8f0", marginBottom: 5 }}>{t.label}</div>
              <div style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.4 }}>{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(0,180,216,0.08)", padding: "14px 24px", textAlign: "center" }}>
        <p style={{ color: "#374151", fontSize: 11, margin: "0 0 4px" }}>
          This platform provides general wellness information only. It is not a substitute for professional medical advice, diagnosis, or treatment.
        </p>
        <p style={{ color: "#374151", fontSize: 11, margin: 0 }}>
          © 2026 CR AudioViz AI, LLC — EIN: 39-3646201 · <a href="https://craudiovizai.com/auth/signup" style={{ color: "#FF0800", textDecoration: "none", fontWeight: 600 }}>Sign Up Free</a>
        </p>
      </footer>
    </div>
  );
}