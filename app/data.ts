type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
  youtube?: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Pico LM',
    description: 'A Modular Language Model Development Toolkit',
    link: 'https://picolm.io/',
    image: '/pico.png',
    id: 'project1',
    youtube:
      'https://www.youtube.com/embed/llRUKwqMah4?si=qceLkSdPBx-_wR-f&amp;controls=0&amp;autoplay=1',
  },
  {
    name: 'ProteSyn Studio',
    description:
      'An AI platform that can generate protein structures from text using properites of the protein',
    link: 'https://protesyn.studio',
    image: '/protesyn.jpg',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'ProteSyn',
    title: 'Co-Founder & Software Engineer',
    start: 'Sep 2025',
    end: 'Present',
    link: 'https://protesyn.studio',
    id: 'work4',
  },
  {
    company: 'Cambridge University x Google Deepmind',
    title: 'AI Research Intern@Pico-LM',
    start: 'Jun 2025',
    end: 'Sep 2025',
    link: 'https://picolm.io',
    id: 'work1',
  },
  {
    company: 'KAI Consulting',
    title: 'Fullstack Engineer',
    start: 'Mar 2024',
    end: 'Aug 2024',
    link: 'https://www.kaiuk.co.uk/',
    id: 'work2',
  },
  {
    company: 'Lancy',
    title: 'Software Engineer',
    start: 'Aug 2023',
    end: 'Present',
    link: 'https://lan.cy',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'What I Built During My Research Internship at Cambridge',
    description: 'How Pico-LM is changing the way we build language models',
    link: '/blog/cambridge-research-internship',
    uid: 'blog-1',
  },
  {
    title: 'Designing Proteins with AI in the Age of Synthetic Biology',
    description: 'Synthetic biology is entering a new era.',
    link: '/blog/protesyn-studio-ai-synthetic-biology',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/313devs',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ali110kh/',
  },
  {
    label: 'Resume',
    link: '/resume.pdf',
  },
]

export const EMAIL = 'developerkh313@gmail.com'
