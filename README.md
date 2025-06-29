# 🅿️ Next.js Multi-Tenant Domain Parking System

> Self-hosted, open-source domain parking infrastructure powered by MDX, Next.js — designed for creators, builders, and digital collectors.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://kirkpinar.org)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/ilhXeoN0s9S)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🧭 Overview

This is a clean, MDX-powered domain parking system built on Next.js 15 and Vercel Edge Runtime.

It renders a fully customizable landing page per domain using frontmatter metadata and dynamic routing. SEO, mobile responsiveness, content independence — all handled.

🧰 Live: [https://kirkpinar.org](https://kirkpinar.org)

---

## 💡 Why This Exists

> "I’ve registered domains over the years for meaningful or experimental ideas.  
> Instead of letting them expire silently, I’m listing them openly with context, purpose, and story."

This system:
- Makes each domain independently discoverable
- Provides value beyond just DNS redirection
- Helps others do the same with minimal overhead

Fork it, theme it, or build something better with it.

---

## ✨ Features

- Multi-tenant support (domain-based routing)
- MDX content with price + contact frontmatter
- Responsive, typographic layout
- SEO + OG tags (JSON-LD upcoming)
- humans.txt support with project info
- trustthe.dev version tracking
- Vercel Edge Runtime ready
- MIT licensed and open for remix

---

## How It Works

1. **Domain Detection**: Automatically detects the current domain from request headers
2. **Content Loading**: Loads the corresponding MDX file from the `/content` folder
3. **Dynamic Rendering**: Displays domain-specific content, pricing, and contact information
4. **Cross-linking**: Shows other available domains in the footer

---

## 📁 File Structure

```
/
├── content/           # MDX files per domain
├── components/        # Shared UI components
├── lib/               # Domain resolution logic
├── public/            # Static assets incl. humans.txt
├── pages/             # Next.js routes
└── README.md
```

---

## 📝 MDX Content Format

Each domain uses an `.mdx` file in `/content`, with frontmatter like this:

```yaml
---
locale: en
title: example.com SALE!
description: BIG SALE! example.com $15,000
price: 15000
currency: USD
contact: contact@example.com
---
```
Then follows regular MDX body content (section headers, story, value prop, etc).

Sample: (premium-domain-template)[premium-domain-template.mdx]
---

## 🚀 Getting Started

```bash
git clone https://github.com/gokerDEV/parking
cd parking
pnpm install
```

Then:
- Add your `.mdx` files to `/content`
- Push to GitHub
- Deploy on Vercel
- Assign your custom domains to the project

---

## 📄 Prompt used on v0.dev

```
Create a multi-tenant domain parking website using Next.js and Tailwind CSS.
Each domain will serve its own landing page with content defined in an MDX file.

Requirements:
Detect current domain from request headers.
Load the correct .mdx content file from the /content folder based on domain.

Show:
Domain title
Sale price and currency
Description (loaded from MDX body)
Contact email (markdown-style link)
Footer listing other domains for sale (with links)

Style: Minimal, clean, responsive. Use Tailwind CSS. Typography focus.

Deployable on Vercel with edge runtime and domain-level routing.
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Built with [v0.dev](https://v0.dev) - AI-powered development
- Version tracking by [trustthe.dev](https://trustthe.dev)
- UI components from [Shadcn UI](https://ui.shadcn.com)
- Deployed on [Vercel](https://vercel.com)

---

> “Domains are ideas waiting for time. Let’s give them one.”
