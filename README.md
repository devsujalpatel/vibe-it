<img width="1500" height="256" alt="vibeit" src="https://github.com/user-attachments/assets/ce3c1b19-10a8-4d43-bacc-68f0217b4108" />

<p align="center"><strong>vibeit</strong> is a sleek, modern web app built with <a href="https://nextjs.org/">Next.js</a>. It helps developers beautifully showcase their coding projects — from quick scripts to full-fledged applications.</p>

## 🔥 Features

- 🧠 Add and manage your coding projects
- 🖼️ Upload thumbnails, descriptions, and tags
- 🔗 Link GitHub, Live Demo, and Tech Stack
- 📋 Clean, organized dashboard for project editing
- 📱 Fully responsive across all devices
- 🌐 SEO-optimized for better reach and sharing
- 🔐 Optional user authentication

## ⚙️ Tech Stack

| Tech           | Purpose                                     |
| -------------- | ------------------------------------------- |
| **Next.js**    | React framework for full-stack capabilities |
| **Tailwind**   | Utility-first CSS styling                   |
| **TypeScript** | Type-safe, scalable code                    |
| **Clerk**      | Secure, pluggable authentication (optional) |
| **Prisma**     | Type-safe ORM for DB (PostgreSQL/MySQL)     |
| **Vercel**     | Instant deployment + custom domains         |
| **ShadCN UI**  | Modern prebuilt UI components (optional)    |

## 📦 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/vibeit.git
cd vibeit

# 2. Install dependencies
bun install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Start the dev server
npm run dev

# Visit: http://localhost:3000
```

### 🔑 Sample `.env.local`

```bash
DATABASE_URL=
NEXT_PUBLIC_APP_URL="http://localhost:3000/"

AI,
GEMINI_API_KEY=

E2B,
E2B_API_KEY=
E2B_ACCESS_TOKEN=

Clerk,
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
```

## 🛣️ Roadmap (Ideas & Improvements)

- 💾 Database persistence for project data
- 🖼️ Image upload support
- 🤖 AI-powered project descriptions (OpenAI API)
- 📊 Project analytics
- 🧰 Filter/search by tech stack or tags

## 🧑‍💻 Contributing

Contributions are always welcome!

```bash
# 1. Fork the repo

# 2. Create a new branch
git checkout -b feature/your-feature-name

# 3. Make your changes

# 4. Commit your work
git commit -m 'Add: your feature'

# 5. Push and open a PR
git push origin feature/your-feature-name
```

## 📄 License

This project is open-source under the [MIT License](LICENSE).

## ✨ Credits

Made with ❤️ by [Sujal Patel](https://github.com/devsujalpatel)
