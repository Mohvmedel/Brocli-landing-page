// Image prompts to generate later
// Use these exact prompts with ChatGPT image generation, then place the exported
// images in /public/brand/ and replace the matching visual containers.

export const IMAGE_GENERATION_PROMPTS = [
  {
    purpose: "Hero cleaning agent image",
    recommendedSize: "16:9 wide hero image, at least 1800x1012",
    websitePlacement: "HeroServiceScene in app/components/Hero.jsx",
    prompt:
      "Create a premium, ultra-realistic hero image for a Moroccan cleaning service website called “Brocli”. Scene: a modern apartment in Rabat, Morocco, bright daylight, clean elegant living room, subtle Moroccan details, soft neutral colors. A professional cleaning agent stands naturally on the right side, friendly and trustworthy, wearing a clean modern uniform with a small Brocli logo or badge. Leave clean empty space on the left side for website text and CTA buttons. Style: premium commercial photography, realistic, natural lighting, clean, trustworthy, local Moroccan lifestyle. Avoid cartoon, 3D, fake stock photo look, exaggerated smiles, clutter, or too much text. Format: 16:9 wide hero image.",
  },
  {
    purpose: "Cleaning agent image",
    recommendedSize: "Vertical 4:5 or square, at least 1200x1500",
    websitePlacement: "Agent card in app/components/VisualProof.jsx",
    prompt:
      "Create a realistic commercial photo of a professional cleaning agent for “Brocli”, standing in a clean modern Rabat apartment. The agent wears a simple modern green and white uniform with a small Brocli badge, holding cleaning supplies naturally. Friendly, professional, trustworthy. Bright daylight, clean background, realistic Moroccan apartment style. No text except small uniform logo if possible. Format: vertical 4:5 or square.",
  },
  {
    purpose: "Clean apartment result image",
    recommendedSize: "4:3 or 16:9, at least 1600px wide",
    websitePlacement: "Clean result card in app/components/VisualProof.jsx",
    prompt:
      "Create a realistic photo of a freshly cleaned modern Moroccan apartment living room in Rabat. Bright daylight, spotless floor, clean sofa, organized table, subtle Moroccan decor, premium but realistic. No people. No text. Format: 4:3 or 16:9.",
  },
  {
    purpose: "Before/after cleaning image",
    recommendedSize: "16:9, at least 1600x900",
    websitePlacement: "Before/after card in app/components/VisualProof.jsx",
    prompt:
      "Create a realistic before/after cleaning comparison for a modern apartment room. Left side slightly messy but not disgusting, right side clean, fresh, and organized. Professional home cleaning result, bright daylight, realistic, premium website style. Do not make it exaggerated or dirty. No text. Format: 16:9.",
  },
  {
    purpose: "App booking screen mockup",
    recommendedSize: "16:9 or 4:5, at least 1400px wide",
    websitePlacement: "App booking mockup card in app/components/VisualProof.jsx",
    prompt:
      "Create a premium realistic website image showing a smartphone with a simple cleaning service booking app interface for “Brocli”. The screen suggests choosing a service, selecting a date, confirming price, and tracking the cleaning agent. Keep text minimal and generic. Background: clean modern apartment slightly blurred. Style: realistic commercial photo with modern app UI. Format: 16:9 or 4:5.",
  },
  {
    purpose: "Checklist screen mockup",
    recommendedSize: "4:5 or square, at least 1200px wide",
    websitePlacement: "Checklist mockup card in app/components/VisualProof.jsx",
    prompt:
      "Create a realistic smartphone mockup showing a cleaning checklist for a home cleaning service called “Brocli”. The UI should show completed cleaning steps with checkmarks, service progress, and support/review option. Keep text minimal and clean. Background: bright clean apartment. Premium, trustworthy, modern. Format: 4:5 or square.",
  },
  {
    purpose: "Coverage map image",
    recommendedSize: "16:9 wide image, at least 1600x900",
    websitePlacement: "Coverage map area in app/components/RabatLive.jsx",
    prompt:
      "Create a premium website illustration for a cleaning service coverage section in Rabat, Morocco. Visual: a clean modern map-style illustration of Rabat with soft location pins highlighting areas like Agdal, Hay Riad, Hassan, Souissi, and Centre-ville. Style: modern SaaS landing page illustration, clean, elegant, minimal, premium, soft green, yellow, and white color palette, subtle Moroccan design inspiration. Add small abstract buildings, roads, and location pins. No real map accuracy required, but it should clearly communicate “service available in Rabat”. Format: wide horizontal 16:9 image. No large text inside the image.",
  },
];
