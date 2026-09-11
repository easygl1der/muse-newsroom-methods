export const ARTICLE_URL =
  "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/";

export const MEDIA = {
  sizzle:
    "https://about.fb.com/wp-content/uploads/2026/09/Introducing-Muse_Sizzle-Video.mp4",
  fieldTrip:
    "https://about.fb.com/wp-content/uploads/2026/09/Muse_FieldTrip.mp4",
  japan: "https://about.fb.com/wp-content/uploads/2026/09/Muse_Japan.mp4",
  relationships:
    "https://about.fb.com/wp-content/uploads/2026/09/Muse_Relationships.mp4",
  shopping: "https://about.fb.com/wp-content/uploads/2026/09/Muse_Shopping.mp4",
  audio:
    "https://about.fb.com/wp-content/uploads/2026/09/elevenlabs-50106-1788888978.mp3",
  poster:
    "https://about.fb.com/wp-content/uploads/2026/09/Introducing-Muse_-Personal-AI-Agent_SocialShare.jpg?w=1600",
  sparkThumb:
    "https://about.fb.com/wp-content/uploads/2026/04/Introducing-Muse-Spark_Thumbnail.gif?fit=960%2C720",
  imageThumb:
    "https://about.fb.com/wp-content/uploads/2026/07/Muse-Image_Thumbnail.gif?fit=800%2C600",
} as const;

export const LINKS = {
  newsroom: "https://about.fb.com/news",
  security: "http://security.muse.ai",
  designed: "http://introducing.muse.ai",
  spark: "https://research.meta.ai/blog/introducing-muse-spark-1-3",
  linkProtections:
    "https://support.link.com/questions/what-s-covered-with-protections",
  museAi: "http://muse.ai",
  aboutMeta: "https://about.meta.com/",
  cookiePolicy: "https://www.facebook.com/privacy/policies/cookies/",
} as const;

export const PRODUCT_NAV = [
  { label: "AI glasses", href: "https://www.meta.com/ai-glasses/" },
  { label: "Meta Quest", href: "https://www.meta.com/quest/" },
  { label: "Explore Meta", href: "https://about.meta.com/" },
  { label: "Support", href: "https://www.meta.com/help/" },
  { label: "Newsroom", href: "https://about.fb.com/news" },
] as const;

export const NEWS_NAV = [
  {
    label: "Technologies",
    href: "https://about.fb.com/news/category/technologies/meta/",
  },
  {
    label: "Product News",
    href: "https://about.fb.com/news/category/product-news/",
  },
  {
    label: "Innovation",
    href: "https://about.fb.com/news/category/technology-and-innovation/",
  },
  {
    label: "Public Policy",
    href: "https://about.fb.com/news/category/public-policy/",
  },
  {
    label: "Youth Well-Being",
    href: "https://about.fb.com/news/category/youth-well-being/",
  },
  { label: "Privacy", href: "https://about.fb.com/news/category/privacy/" },
  { label: "Security", href: "https://about.fb.com/news/category/security/" },
] as const;

export const CAROUSEL_SLIDES = [
  { id: "field-trip", src: MEDIA.fieldTrip, label: "Field trip" },
  { id: "japan", src: MEDIA.japan, label: "Japan trip" },
  { id: "relationships", src: MEDIA.relationships, label: "Relationships" },
] as const;

export const TAKEAWAYS = [
  "Muse is a personal AI agent. It doesn’t just answer questions, it actually does the work. It helps people stay on top of things, takes tasks and projects off their plate, and turns long-term goals into action plans.",
  "Meta built Muse from the ground up to be a safe, secure, private, and widely available personal AI agent.",
  "Muse runs on Muse Secure VM, a dedicated secure computer with its own browser, and can work on a person’s behalf across the apps they use daily, learning from conversations, reflecting on what matters to them, and getting sharper along the way.",
  "Each person stays in control of their Muse and decides how much access it gets.",
] as const;

export const SECURITY_POINTS = [
  "Muse runs on its own dedicated computer in the cloud, contained so no one else’s agent can reach it. That is where Muse lives and where the data and credentials for any service a person connects are securely stored.",
  "A separate Sentinel agent runs on that same machine, kept apart from Muse at the system level. Nothing Muse does reaches the internet unless the Sentinel approves it, and it asks the person for permission when needed.",
  "Muse has no visibility into people’s passwords or payment methods. Any credentials a person shares go into secure storage, so Muse can use them without seeing them, including passwords a person types into the browser themselves.",
  "Muse checks with the person before sensitive actions like sending an email or making a purchase. Muse shows people a complete audit trail of everything it has done and plans to do.",
  "People choose which apps Muse connects to and exactly how much access it gets. For things like email, people choose what Muse can do, whether it reads their mail or can also send on their behalf.",
  "People can change access or disconnect a service whenever they want. People can also opt out of their interactions being used to train Meta’s AI models.",
  "Muse doesn’t share a person’s conversations or the data in their VM with Meta’s ad systems.",
  "Muse remembers what matters to a person, and they can always tell it to “forget” specific things it’s learned.",
] as const;

export const RELATED = [
  {
    href: "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/",
    title:
      "Introducing Muse Spark: MSL’s First Model, Purpose-Built to Prioritize People",
    date: "April 8, 2026",
    image: MEDIA.sparkThumb,
  },
  {
    href: "https://about.fb.com/news/2026/07/introducing-muse-image-meta-ai/",
    title: "Introducing Muse Image: Image Generation Built for Your World",
    date: "July 7, 2026",
    image: MEDIA.imageThumb,
  },
] as const;

export const RECENT_NEWS = [
  {
    href: "https://about.fb.com/news/2026/09/inside-metas-infrastructure-lab/",
    title: "Inside Meta’s Infrastructure Lab",
  },
  {
    href: "https://about.fb.com/news/2026/08/closed-loop-cooling-explained-the-plumbing-behind-metas-ai/",
    title: "Closed-Loop Cooling Explained: The Plumbing Behind Meta’s AI",
  },
  {
    href: "https://about.fb.com/news/2026/08/open-letter-to-tiktok-and-youtube-to-join-us-in-supporting-teens/",
    title:
      "An Open Letter to TikTok and YouTube to Join Us in Supporting Teens",
  },
  {
    href: "https://about.fb.com/news/2026/08/agreement-with-state-attorneys-general-supporting-teens/",
    title:
      "Our Agreement With Bipartisan Attorneys General: Calling on TikTok and YouTube to Join Us in Supporting Teens",
  },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Meta Store",
    links: [
      "Ray-Ban Meta glasses",
      "Oakley Meta glasses",
      "Meta Quest",
      "Accessories",
      "Apps and games",
      "Meta Quest gift cards",
      "Refurbished Meta Quest 3",
      "Refurbished Meta Quest 3S",
      "Refurbished Ray-Ban Meta glasses",
      "More from Ray-Ban",
      "Meta Quest: Play now. Pay later.",
      "Meta Warranty Plus",
      "Meta for Work",
      "Meta for Education",
      "Meta Quest referrals",
      "Education discount",
      "Blog",
    ],
  },
  {
    title: "Store support and legal",
    links: [
      "Meta Help Center",
      "Order status",
      "Returns",
      "Find a product demo",
      "Authorized retailers",
      "Legal",
      "Terms of sale",
      "Meta Quest safety center",
    ],
  },
  {
    title: "Community",
    links: [
      "Creators",
      "Developers",
      "Businesses",
      "Non-profits",
      "VR for Good",
      "Download SDKs",
      "Made for Meta partner program",
    ],
  },
  {
    title: "Our actions",
    links: ["Data and privacy", "Responsible business practices", "Elections"],
  },
  {
    title: "About us",
    links: [
      "About Meta",
      "Careers",
      "Media gallery",
      "Brand resources",
      "For investors",
      "Newsroom",
    ],
  },
  {
    title: "Site terms and policies",
    links: ["Community standards", "Privacy policy", "Terms", "Cookie policy"],
  },
  {
    title: "App support",
    links: [
      "Shop Meta Quest",
      "Refurbished Meta Quest 2",
      "Forums",
      "Referrals",
    ],
  },
] as const;

export const CATEGORIES = [
  {
    label: "Meta",
    href: "https://about.fb.com/news/category/technologies/meta/",
  },
  {
    label: "Product News",
    href: "https://about.fb.com/news/category/product-news/",
  },
  {
    label: "Technology and Innovation",
    href: "https://about.fb.com/news/category/technology-and-innovation/",
  },
] as const;

export const COOKIE_COPY =
  "To help personalize content, tailor and measure ads, and provide a safer experience, we use cookies. By clicking or navigating the site, you agree to allow our collection of information on and off Facebook through cookies. Learn more, including about available controls: Cookie Policy.";
