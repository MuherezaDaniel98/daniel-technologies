export const PHONES = ["0788807025", "0730463754"];
export const EMAILS = [
  "muherezadaniel98@gmail.com",
  "danielmuhereza176@gmail.com",
];

export const wa = (
  number,
  text = "Hello Daniel Technologies, I would like to know more.",
) =>
  `https://wa.me/256${number.replace(/^0/, "")}?text=${encodeURIComponent(text)}`;

export const FALLBACK = [
  [
    "course",
    "Web development",
    "Build responsive websites and web apps from HTML and CSS to full stack.",
  ],
  [
    "course",
    "Database design and development",
    "Model data, write SQL and build reliable databases.",
  ],
  [
    "course",
    "Data analysis",
    "Clean, analyse and present data with practical projects.",
  ],
  [
    "course",
    "Programming with Python and JavaScript",
    "Learn to code from the basics to real programs.",
  ],
  [
    "course",
    "Graphic designing",
    "Create logos, posters and social media designs.",
  ],
  [
    "course",
    "Microsoft Office applications",
    "Word, Excel, PowerPoint and more for school and work.",
  ],
  [
    "course",
    "Windows Server administration",
    "Set up and manage users, networks and server roles.",
  ],
  [
    "service",
    "OS installation",
    "Clean installs and upgrades of Windows and other systems.",
  ],
  [
    "service",
    "Software maintenance and troubleshooting",
    "Fix errors, slow computers and broken software.",
  ],
  [
    "service",
    "Networking",
    "Set up, secure and repair wired and wireless networks.",
  ],
].map(([category, title, description], id) => ({
  id,
  category,
  title,
  description,
}));
