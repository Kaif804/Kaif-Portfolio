import React from 'react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, SKILLS_LIST } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, ExternalLink, Award, CheckCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:m-0 print:static">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity print:hidden"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div 
        id="cv-modal-box"
        className="relative w-full max-w-4xl bg-[#111116] border border-[#2b2b36] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-left print:border-none print:shadow-none print:my-0 print:w-full print:bg-white print:text-black"
      >
        {/* Top action toolbar (hidden on print) */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#202028] bg-[#15151c] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5733]" />
            <h3 className="text-sm sm:text-base font-bold text-white">
              Curriculum Vitae — Kaif Qaiser
            </h3>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-[#ff5733] hover:bg-[#ff6b35] transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#1c1c24] hover:bg-[#ff5733] text-zinc-400 hover:text-white transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 print:max-h-none print:overflow-visible print:p-8 print:text-black">
          
          {/* Resume Header */}
          <div className="pb-6 border-b border-[#22222d] print:border-gray-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="print:hidden">
                <BrandLogo size="md" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight print:text-black">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-[#ff6b35] mt-1">
                {PERSONAL_INFO.title} • 3+ Years Experience
              </p>
              <p className="text-xs text-zinc-400 mt-2 max-w-xl leading-relaxed print:text-gray-700">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                className="w-24 h-28 rounded-xl object-cover object-top border border-[#2d2d38] print:border-gray-300 shadow-md"
              />
              <div className="space-y-1.5 text-xs text-zinc-300 print:text-gray-800 shrink-0 bg-[#16161d] p-4 rounded-xl border border-[#252530] print:bg-gray-50 print:border-gray-200">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#ff5733]" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline">{PERSONAL_INFO.displayPhone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#ff5733]" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#ff5733]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-[#ff5733]" />
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#ff6b35] hover:underline">LinkedIn Profile</a>
                </div>
              </div>
            </div>
          </div>

          {/* Core Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider print:text-black flex items-center gap-2">
              <Award className="w-4 h-4 text-[#ff5733]" />
              <span>Technical Skills & Tools</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {SKILLS_LIST.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#16161c] text-zinc-200 border border-[#252530] print:bg-gray-100 print:text-black print:border-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider print:text-black flex items-center gap-2">
              <Award className="w-4 h-4 text-[#ff5733]" />
              <span>Professional Work Experience</span>
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-[#141419] border border-[#22222a] print:bg-white print:border-gray-200 space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-sm font-bold text-white print:text-black">
                        {exp.role} — <span className="text-[#ff6b35] font-semibold">{exp.company}</span>
                      </h3>
                      <p className="text-xs text-zinc-400 print:text-gray-600">{exp.location}</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-300 print:text-gray-700 bg-[#1a1a24] px-2 py-0.5 rounded border border-[#292934] print:bg-transparent print:border-none">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 pt-1">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300 print:text-gray-800">
                        <CheckCircle className="w-3.5 h-3.5 text-[#ff5733] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider print:text-black flex items-center gap-2">
              <Award className="w-4 h-4 text-[#ff5733]" />
              <span>Education</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#141419] border border-[#22222a] print:bg-white print:border-gray-200">
                  <span className="text-[11px] font-mono text-[#ff6b35] block">{edu.period}</span>
                  <h4 className="text-xs font-bold text-white print:text-black mt-0.5">{edu.degree}</h4>
                  <p className="text-xs text-zinc-400 print:text-gray-700">{edu.institution} • {edu.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project References */}
          <div className="p-4 rounded-xl bg-[#15151c] border border-[#252532] print:bg-gray-50 print:border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h4 className="text-xs font-bold text-white print:text-black">Featured Project Showcase: Zaxflix</h4>
              <p className="text-xs text-zinc-400 print:text-gray-600">Movie & TV aggregator platform with category browsing and zero sign-up requirement.</p>
            </div>
            <a
              href="https://zaxflix.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff6b35] hover:underline"
            >
              <span>Visit https://zaxflix.com/</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
