import ArrayLogo from '$lib/images/logos/array.svelte';
import BlondeAmbitionLogo from '$lib/images/logos/blondeambition.svelte';
import CharlottesWebLogo from '$lib/images/logos/charlottesweb.svelte';
import CommunicoreLogo from '$lib/images/logos/communicore.svelte';
import CVMediaLogo from '$lib/images/logos/cvmedia.svelte';
import DrPhilLogo from '$lib/images/logos/drphil.svelte';
import ExorcismLogo from '$lib/images/logos/exorcismofemilyrose.svelte';
import StartingOutLogo from '$lib/images/logos/startingoutintheevening.svelte';
import TweddleLogo from '$lib/images/logos/tweddle.svelte';

export type Experience = {
  jobTitle: string;
  company: string;
  subCompany?: string;
  location: string;
  dates: string;
  logo: typeof BlondeAmbitionLogo;
  responsibilities: string[];
};

export const experienceList: Experience[] = [
  {
    jobTitle: 'Software Engineer',
    company: 'Array',
    location: 'Remote',
    dates: 'Apr 2022 - Jun 2023',
    logo: ArrayLogo,
    responsibilities: [
      'Worked on a small team of engineers that helped build, maintain and customize the front-end of embeddable web components.',
      'Used the Svelte framework in conjunction with Typescript to build components, and Microsoft Playwright for writing tests.',
      'Created custom themes for clients based on Figmas, design guides and branding, as well as made specific functionality and behavior changes that were requested.',
      'Helped in the development of our custom internal Theme Editor tool that allowed for a GUI-based, user-friendly experience theming our clients, contributing to the reduction of deployment times.',
      'Assisted in the implementation of a localization framework across our entire codebase, allowing for the addition of new language and customization options.',
      'Regularly participated in code reviews.',
    ],
  },
  {
    jobTitle: 'Senior Lead Video Editor / Web Developer',
    company: 'Tweddle Group',
    location: 'Clinton Township, MI',
    dates: 'May 2013 - Dec 2021',
    logo: TweddleLogo,
    responsibilities: [
      'Edited Owner Information videos for clients that included FCA, Mazda Europe, Nissan/Infiniti North America/Canada/Mexico in over 20 languages.',
      'Part of a team that researched and tested development of 360° video and VR development using Unity.',
      'Managed teams of freelance editors that were utilized for overflow work.',
      'Developed the front-end of the company website from scratch and maintained it using HTML, CSS, JavaScript, and the Bootstrap framework.',
      'Updated and maintained our internal WordPress intranet site.',
      'Created a database using Microsoft Access to track employee training of our in-house classes.',
      'Set up quarterly, customer-facing webinars using Crowdcast and Zoom Webinar, as well as created landing pages for the specific service/product discussed.',
      'Created a variety of marketing campaigns with Mailchimp in collaboration with the Marketing, Sales and Design departments.',
    ],
  },
  {
    jobTitle: 'Video Editor',
    company: 'Communicore',
    location: 'Troy, MI',
    dates: 'May 2007 - Apr 2013',
    logo: CommunicoreLogo,
    responsibilities: [
      'Edited award-winning long-format, commercials and corporate videos for a variety of clients. ',
      'Created and replicated masters on a variety of tape formats, as well as authored DVDs and Blu-rays.',
      'Winner of 2010’s D Show Award: The Best of the Craft, for editing “Audi: 100 Years” video.',
    ],
  },
  {
    jobTitle: 'Manager of Transcription / Transcriber',
    company: '"Dr. Phil"',
    subCompany: 'CBS / Paramount Television',
    location: 'Hollywood, CA',
    dates: 'Jul 2004 - Feb 2007',
    logo: DrPhilLogo,
    responsibilities: [
      'Started as a transcriber before being promoted to Manager of the department within the first few months of starting.',
      'Lead a team who transcribed interview and B-Roll footage for Editors to use in show segments, collaborating with Segment Directors and Producers on needed material.',
    ],
  },
  {
    jobTitle: 'Post-Production Assistant',
    company: '"Blonde Ambition"',
    subCompany: 'Sony Pictures / Millennium Films',
    location: 'Hollywood, CA',
    dates: 'Jan 2007',
    logo: BlondeAmbitionLogo,
    responsibilities: [
      'Organized all incoming dailies material including script notes, shot logs, camera reports, etc.',
      'Acted as a liaison between the Editor, Assistant Editor and various outside vendors.',
    ],
  },
  {
    jobTitle: 'Assistant Editor',
    company: '"Starting Out in the Evening"',
    subCompany: 'InDigEnt',
    location: 'Hollywood, CA',
    dates: 'Apr 2006 - May 2006',
    logo: StartingOutLogo,
    responsibilities: [
      'Set up and maintained projects and workspaces for the Editor, as well as all of the backups.',
      'Digitized and synced all video and audio.',
      'Organized and tagged all shots and audio in order to provide a more efficient editing workflow.',
      "Edited some portions of the film's audio and sound effects.",
    ],
  },
  {
    jobTitle: 'Visual Effects Assistant',
    company: '"Charlotte\'s Web"',
    subCompany: 'Paramount / Nickelodeon / Walden Media',
    location: 'Hollywood, CA',
    dates: 'Nov 2005 - Apr 2006',
    logo: CharlottesWebLogo,
    responsibilities: [
      'Handled all incoming visual effects shots and distributed them to appropriate departments.',
      'Gathered and turned over shot information and data to vendors.',
      'Set up shot reviews between Visual Effects Supervisor and vendors.',
    ],
  },
  {
    jobTitle: 'Post-Production Assistant',
    company: '"The Exorcism of Emily Rose"',
    subCompany: 'Sony Screen Gems',
    location: 'Hollywood, CA',
    dates: 'Feb 2005 - Sep 2005',
    logo: ExorcismLogo,
    responsibilities: [
      'Assisted all members of the Editorial team to ensure a smoothly running department.',
      'Created temporary visual effects for early screenings of the film using Adobe After Effects.',
      'Coordinated between post-production members, directors, producers and others in the delivery of various paperwork, screeners, and other materials.',
      'Maintained the organization and cleanliness of the department, as well as making sure the food was always stocked and the coffee was always flowing.',
    ],
  },
  {
    jobTitle: 'Video Editor',
    company: 'CVMedia',
    location: 'Northville, MI',
    dates: 'Oct 2003 - Jun 2004',
    logo: CVMediaLogo,
    responsibilities: [
      'Was originally hired to help with live events, DVD/tape replications and transfers, and other various office tasks. Shortly after, I became a full time editor, cutting various corporate videos with Avid and Adobe After Effects.',
    ],
  },
];
