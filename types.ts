
export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
  span?: 'small' | 'medium' | 'large' | 'tall' | 'wide'; // Layout hinting
}

export interface Metric {
  label: string;
  value: string;
  unit: string;
}

export interface ReportData {
  month: string;
  year: string;
  department: string;
  stats: {
    teams: string;
    requirements: string;
    completion: string;
  };
  posters: Project[];
  marketing: Project[];
  solarTerms: Project[];
  uiInterfaces: Project[];
  videos: Project[];
  summary: string;
}
