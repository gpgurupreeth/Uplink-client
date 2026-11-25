import React, { useState } from 'react';
import type { PageId } from '../types';
import { quizQuestions, quizResults } from '../data/content';
import { ArrowRight, RotateCcw, CheckCircle2, Server, Code2, Layers } from 'lucide-react';

interface DiscoveryQuizProps {
  onNavigate: (page: PageId, prefill?: string) => void;
}

/**
 * Multinational-grade solution evaluation questionnaire:
 * - Clean light background (#FFFFFF and #F8FAFC)
 * - Clear, high-contrast progress bar (33% -> 66% -> 100%)
 * - 3 outcome paths: IT Services, Software & Automation, or Both
 * - Pre-populates contact inquiry upon selection
 */
export default function DiscoveryQuiz({ onNavigate }: DiscoveryQuizProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<('it' | 'software' | 'both')[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const totalSteps = quizQuestions.length;
  const currentQuestion = quizQuestions[currentStepIndex];

  const progressPercent = isCompleted
    ? 100
    : Math.round(((currentStepIndex + 1) / totalSteps) * 100);

  const handleOptionSelect = (weight: 'it' | 'software' | 'both') => {
    const updated = [...selectedAnswers, weight];
    setSelectedAnswers(updated);

    if (currentStepIndex + 1 < totalSteps) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentStepIndex(0);
    setSelectedAnswers([]);
    setIsCompleted(false);
  };

  const computeResult = () => {
    const itCount = selectedAnswers.filter((a) => a === 'it').length;
    const softwareCount = selectedAnswers.filter((a) => a === 'software').length;
    const bothCount = selectedAnswers.filter((a) => a === 'both').length;

    if (bothCount >= 1 && (itCount > 0 || softwareCount > 0)) {
      return quizResults.both;
    }
    if (itCount > softwareCount) {
      return quizResults.it;
    }
    if (softwareCount > itCount) {
      return quizResults.software;
    }
    return quizResults.both;
  };

  const finalResult = isCompleted ? computeResult() : null;

  return (
    <section
      id="discovery-quiz"
      aria-labelledby="quiz-heading"
      className="py-20 lg:py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded mb-3">
            Interactive Solution Assessment
          </span>

          <h2
            id="quiz-heading"
            className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-4"
          >
            Determine your organization's technical path
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Answer three operational questions to receive a tailored recommendation across our IT Services,
            Software &amp; Automation, or dual-vertical practices.
          </p>

          {/* Clean High-Contrast Progress Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
              <span>{isCompleted ? 'Assessment completed' : `Step ${currentStepIndex + 1} of ${totalSteps}`}</span>
              <span className="text-[#0B3D91] font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div
                className="h-full bg-[#0B3D91] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
                role="progressbar"
                aria-valuenow={progressPercent}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>

        {/* ACTIVE QUESTION STEP */}
        {!isCompleted && currentQuestion && (
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-lg p-6 sm:p-10 shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0B3D91]">
                Question {currentQuestion.id} of {totalSteps}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight mt-1 mb-2">
                {currentQuestion.question}
              </h3>
              <p className="text-sm text-slate-600 font-normal">
                {currentQuestion.subtitle}
              </p>
            </div>

            {/* Clickable Option Cards */}
            <div className="space-y-3.5">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleOptionSelect(option.divisionWeight)}
                  aria-label={`Select option: ${option.label}`}
                  className="w-full text-left p-5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0B3D91] transition-all flex items-start justify-between group focus-visible:ring-2 focus-visible:ring-[#0B3D91]"
                >
                  <div className="pr-4">
                    <p className="text-base font-semibold text-[#0F172A] group-hover:text-[#0B3D91] transition-colors mb-1">
                      {option.label}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {option.description}
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-[#0B3D91] group-hover:text-white transition-colors flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Standardized technical assessment</span>
              {currentStepIndex > 0 && (
                <button
                  type="button"
                  onClick={handleRestart}
                  className="hover:text-slate-800 flex items-center gap-1 underline"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start over</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* RESULTS CARD */}
        {isCompleted && finalResult && (
          <div className="bg-[#F8FAFC] border-2 border-[#0B3D91] rounded-lg p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#0B3D91] text-white">
                Recommendation
              </span>
              <span className="text-xs text-slate-500">
                Based on your operational inputs
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight mb-3">
              {finalResult.title}
            </h3>

            <p className="text-sm sm:text-base font-medium text-slate-700 mb-4">
              {finalResult.tagline}
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
              {finalResult.description}
            </p>

            <div className="bg-white border border-slate-200 rounded-lg p-6 mb-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Recommended initial deliverables:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {finalResult.recommendedServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('contact', finalResult.prefillInquiry)}
                className="min-h-[44px] flex-1 inline-flex items-center justify-center gap-2 bg-[#0B3D91] hover:bg-[#082B69] text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-colors"
              >
                <span>{finalResult.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleRestart}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
