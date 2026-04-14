// Type definitions for the Blueprint Generator

export interface Answer {
  [key: string]: string | string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple';
  options: string[];
}

export interface BlueprintInput {
  id: string;
  value: string;
}

export interface BlueprintPhase {
  title: string;
  steps: string[];
}

export interface Blueprint {
  title: string;
  service: string;
  summary: string;
  inputs: BlueprintInput[];
  phases: BlueprintPhase[];
}

export type Step = 'select' | 'quiz' | 'generating' | 'complete';

export interface ServiceQuestions {
  [key: string]: QuizQuestion[];
}
