export type JobItem = {
  title: string;
  company: string;
  location: string;
  link: string;
};

export type Job = {
  jobs: JobItem[];
};