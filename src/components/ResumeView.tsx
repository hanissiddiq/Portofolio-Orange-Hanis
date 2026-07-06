/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { portfolioData } from '../data/portfolioData';
import LucideIcon from './LucideIcon';

interface ResumeViewProps {
  onClose?: () => void;
  isPrintOnly?: boolean;
}

export default function ResumeView({ onClose, isPrintOnly = false }: ResumeViewProps) {
  const { profile, experience, education, certificates, skills, techStack } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const containerClasses = isPrintOnly
    ? "hidden print:block bg-white text-slate-900 p-8 max-w-[8.5in] mx-auto font-sans leading-relaxed"
    : "bg-white dark:bg-slate-950/95 text-slate-800 dark:text-slate-200 p-6 md:p-10 max-w-4xl mx-auto rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 font-sans leading-relaxed overflow-y-auto max-h-[90vh] backdrop-blur-md";

  return (
    <div className={containerClasses}>
      {/* Resume Header Controls (Only shown if not printing, and not a print-only layout) */}
      {!isPrintOnly && (
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6 mb-8 print:hidden">
          <div className="flex items-center gap-2">
            <LucideIcon name="Award" className="w-6 h-6 text-[#FE7F2D]" />
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Curriculum Vitae</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#FE7F2D] hover:bg-[#FE7F2D]/90 rounded-lg transition-colors cursor-pointer"
            >
              <LucideIcon name="Printer" className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <LucideIcon name="X" className="w-4 h-4" />
                <span>Close</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Main CV Content */}
      <div className="space-y-8">
        {/* CV Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white print:text-black">
                {profile.fullName}
              </h1>
              <p className="text-lg font-semibold text-[#FE7F2D] mt-1 print:text-slate-700">
                {profile.title}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 print:text-slate-600 max-w-xl">
                {profile.bio}
              </p>
            </div>
            
            <div className="space-y-1 text-sm text-slate-600 dark:text-slate-400 print:text-slate-700">
              <div className="flex items-center gap-2">
                <LucideIcon name="Mail" className="w-4 h-4 text-slate-400 print:text-black" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <LucideIcon name="Phone" className="w-4 h-4 text-slate-400 print:text-black" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <LucideIcon name="MapPin" className="w-4 h-4 text-slate-400 print:text-black" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <LucideIcon name="Globe" className="w-4 h-4 text-slate-400 print:text-black" />
                <span>hanissiddiq.dev</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column CV Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Experience & Education */}
          <div className="md:col-span-2 space-y-8">
            {/* Experience Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-[#FE7F2D] pb-1 print:text-black print:border-black">
                Work Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white print:text-black">
                          {exp.position}
                        </h4>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 print:text-slate-700">
                          {exp.companyName} • {exp.employmentType}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 print:text-slate-600 shrink-0">
                        {exp.startDate} – {exp.endDate}
                      </span>
                    </div>
                    
                    <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-400 space-y-1 print:text-slate-700 ml-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>

                    {exp.achievements.length > 0 && (
                      <div className="mt-1 pl-2 border-l-2 border-slate-200 dark:border-slate-800 print:border-slate-400">
                        <p className="text-xs font-semibold text-slate-800 dark:text-slate-300 print:text-black">
                          Key Achievements:
                        </p>
                        <ul className="list-disc list-inside text-xs text-slate-500 dark:text-slate-400 print:text-slate-600 ml-2 mt-1">
                          {exp.achievements.map((ach, i) => (
                            <li key={i}>{ach}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-[#FE7F2D] pb-1 print:text-black print:border-black">
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white print:text-black">
                        {edu.degree} in {edu.fieldOfStudy}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 print:text-slate-700">
                        {edu.institution}
                      </p>
                      {edu.description && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 print:text-slate-600 mt-1">
                          {edu.description}
                        </p>
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 print:text-slate-600">
                      {edu.startDate} – {edu.endDate}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Skills, Certificates & Languages */}
          <div className="space-y-8">
            {/* Core Skills Summary */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-[#FE7F2D] pb-1 print:text-black print:border-black">
                Core Skills
              </h3>
              <div className="space-y-3">
                {skills.map((cat, i) => (
                  <div key={i} className="space-y-1">
                    <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 print:text-black">
                      {cat.category}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((sk, j) => (
                        <span
                          key={j}
                          className="px-2 py-0.5 text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded print:border-slate-300 print:bg-slate-50 print:text-black"
                        >
                          {sk.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-[#FE7F2D] pb-1 print:text-black print:border-black">
                Certifications
              </h3>
              <div className="space-y-3">
                {certificates.map((cert) => (
                  <div key={cert.id} className="text-xs">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 print:text-black">
                      {cert.name}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 print:text-slate-600">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-[#FE7F2D] pb-1 print:text-black print:border-black">
                Languages
              </h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 print:text-slate-700 list-disc list-inside">
                {profile.languages.map((lang, i) => (
                  <li key={i}>{lang}</li>
                ))}
              </ul>
            </div>

            {/* Personal Values */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b-2 border-[#FE7F2D] pb-1 print:text-black print:border-black">
                Core Values
              </h3>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 print:text-slate-700 list-disc list-inside">
                {profile.values.map((val, i) => (
                  <li key={i}>{val}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
