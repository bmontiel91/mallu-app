export type TrackType = "languages" | "programming" | "cooking";

export type LanguageSubTrack = "english" | "italian" | "japanese" | "hiragana" | "kanji" | "korean" | "hangul" | "german";
export type ProgrammingSubTrack = "javascript" | "python" | "html-css" | "r";
export type CookingSubTrack = "fundamentals" | "recipes" | "plates";
export type SubTrack = LanguageSubTrack | ProgrammingSubTrack | CookingSubTrack;

// Fases de la lección
export type LessonPhase = "learn" | "practice" | "complete";

// Tarjeta de aprendizaje (se muestra en la fase "learn")
export interface LearnCard {
  id: string;
  word: string;
  translation: string;
  phonetic?: string;
  example?: string;
  note?: string;
}

// Tipos de ejercicios progresivos
export type ExerciseType = "match" | "select" | "complete" | "arrange";

export interface Exercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  promptExtra?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// Lección completa con tips + ejercicios
export interface Lesson {
  id: string;
  track: TrackType;
  subTrack: SubTrack;
  title: string;
  description: string;
  icon: string;
  learnCards: LearnCard[];
  exercises: Exercise[];
  xp: number;
}

export interface UserProgress {
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string;
  hearts: number;
  maxHearts: number;
  coins: number;
  completedLessons: string[];
  trackProgress: Record<TrackType, number>;
}

export type MascotExpression = "happy" | "thinking" | "sad" | "neutral" | "excited" | "waving";
