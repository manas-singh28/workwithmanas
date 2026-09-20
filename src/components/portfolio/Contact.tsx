import emailjs from "@emailjs/browser";
import { CheckCircle2, Download, Linkedin, Loader2, Mail, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./primitives";
import resume from "@/assets/resume/PM_ManasSingh_Resume.pdf.asset.json";

const EMAILJS_SERVICE_ID = "default_service";
const EMAILJS_TEMPLATE_ID = "template_z27ucyb";
const EMAILJS_PUBLIC_KEY = "wrOUSiNyhbpP8g5cV";

const inputClass =
  "w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30";

function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const fromName = String(data.get("name") ?? "").trim();
    const fromEmail = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!fromName || !fromEmail || !subject || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (fromName.length > 100 || subject.length > 200 || message.length > 2000) {
      toast.error("One of the fields is too long.");
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: fromName,
          from_email: fromEmail,
          subject,
          from_message: message,
          to_name: "Manas",
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setSent(true);
      form.reset();
      toast.success("Message sent — I'll get back to you soon!");
    } catch {
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <Reveal>
      <div className="glass-card relative overflow-hidden p-6 sm:p-10">
        <div className="bg-gradient-primary pointer-events-none absolute -bottom-40 right-0 size-80 rounded-full opacity-15 blur-[120px]" />
        {sent ? (
          <div className="flex flex-col items-center gap-4 py-10 text-center">
            <CheckCircle2 className="size-12 text-primary-glow" />
            <h3 className="text-2xl font-semibold">Message Sent!</h3>
            <p className="max-w-md text-sm text-muted-foreground">
              Thanks for reaching out. I read every message and will reply to you shortly.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm transition-colors hover:border-ring"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <label htmlFor="contact-name" className="text-xs font-medium text-muted-foreground">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                maxLength={100}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="contact-email" className="text-xs font-medium text-muted-foreground">
                Email ID
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                maxLength={255}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
            <div className="grid gap-1.5 sm:col-span-2">
              <label htmlFor="contact-subject" className="text-xs font-medium text-muted-foreground">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                maxLength={200}
                placeholder="What's this about?"
                className={inputClass}
              />
            </div>
            <div className="grid gap-1.5 sm:col-span-2">
              <label htmlFor="contact-message" className="text-xs font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                maxLength={2000}
                rows={5}
                placeholder="Tell me about your idea, role, or project…"
                className={`${inputClass} resize-y`}
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={sending}
                className="bg-gradient-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
              >
                {sending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="size-4" /> Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </Reveal>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something Great"
        subtitle="Open to Technical Product Management roles and product collaborations. Reach out — I reply to every message."
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="glass-card relative flex h-full flex-col justify-center overflow-hidden p-8 sm:p-10">
            <div className="bg-gradient-primary pointer-events-none absolute -top-40 left-1/2 size-96 -translate-x-1/2 rounded-full opacity-20 blur-[120px]" />
            <h3 className="text-xl font-semibold sm:text-2xl">Prefer a direct line?</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Call, email, or grab my resume — whatever works best for you.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="mailto:Singhmanas102@gmail.com"
                className="glass-card glass-card-hover inline-flex items-center gap-2.5 px-5 py-3 text-sm"
              >
                <Mail className="size-4 text-primary-glow" />
                Singhmanas102@gmail.com
              </a>
              <a
                href="tel:+919560972556"
                className="glass-card glass-card-hover inline-flex items-center gap-2.5 px-5 py-3 text-sm"
              >
                <Phone className="size-4 text-primary-glow" />
                +91 9560972556
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/manasingh/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm transition-colors hover:border-ring"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
              <a
                href={resume.url}
                target="_blank"
                rel="noreferrer"
                download="PM_ManasSingh_Resume.pdf"
                className="bg-gradient-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Download className="size-4" /> Download Resume
              </a>
            </div>
          </div>
        </Reveal>
        <ContactForm />
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© 2026 Manas</p>
        <p>Built with passion for Product, Engineering &amp; Design.</p>
      </div>
    </footer>
  );
}
