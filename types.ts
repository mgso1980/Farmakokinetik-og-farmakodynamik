export interface LearningActivity {
  text: string;
  link?: string;
}

export interface SectionData {
  level: string;
  description: string;
  activities: LearningActivity[];
  purpose: string[];
  workMethod?: string;
}

export interface TopicData {
  title: string;
  sections: SectionData[];
}

export interface LearningSectionProps {
  data: SectionData;
  topic: string;
}