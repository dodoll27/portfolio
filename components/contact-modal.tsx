"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Linkedin,
  Github,
  Instagram,
  Mail,
  FileText,
  LucideIcon,
} from "lucide-react";

type ContactModalContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const ContactModalContext = createContext<ContactModalContextType | null>(null);

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
}

type ContactLink = {
  name: string;
  href: string;
  icon: LucideIcon;
  descriptionKey: string;
  color: string;
};

const contactLinks: ContactLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/teodora-botezatu-b87537205/",
    icon: Linkedin,
    descriptionKey: "linkedin",
    color: "hover:bg-[#0A66C2] hover:text-white",
  },
  {
    name: "GitHub",
    href: "https://github.com/dodoll27",
    icon: Github,
    descriptionKey: "github",
    color: "hover:bg-[#1a1a1a] hover:text-white",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/teo_devo/",
    icon: Instagram,
    descriptionKey: "instagram",
    color:
      "hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white",
  },
  {
    name: "Email",
    href: "mailto:teo.bootezatu@gmail.com",
    icon: Mail,
    descriptionKey: "email",
    color: "hover:bg-[#7C3AED] hover:text-white",
  },
  {
    name: "Resume",
    href: "/Resume-EN.pdf",
    icon: FileText,
    descriptionKey: "resume",
    color: "hover:bg-[#16A34A] hover:text-white",
  },
];

function ContactModalContent() {
  const t = useTranslations("contact");

  return (
    <DialogContent className="bg-[#FAF9F6] border-[#e5e5e5] max-w-md">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-[#1a1a1a]">
          {t("title")}
        </DialogTitle>
        <p className="text-sm text-[#666] mt-1">{t("subtitle")}</p>
      </DialogHeader>

      <div className="grid gap-3 mt-4">
        {contactLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className={`flex items-center gap-4 p-4 rounded-xl border border-[#e5e5e5] bg-white transition-all duration-200 ${link.color}`}
            >
              <div className="w-10 h-10 rounded-lg bg-[#F3F4F6] flex items-center justify-center transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-[#1a1a1a]">{link.name}</p>
                <p className="text-xs text-[#999]">{t(link.descriptionKey)}</p>
              </div>
            </a>
          );
        })}
      </div>
    </DialogContent>
  );
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ContactModalContext.Provider value={{ open, setOpen }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <ContactModalContent />
      </Dialog>
    </ContactModalContext.Provider>
  );
}
