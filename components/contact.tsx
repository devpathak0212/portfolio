import { Github, Linkedin, Mail, Twitter, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-10">
      <div className="mt-24 pt-8 border-t border-neutral-800 text-center">
        <p className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Dev Pathak. All rights reserved.
        </p>
      </div>
    </section>
  );
}
