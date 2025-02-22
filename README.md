# NexusAI Support Platform

A modern, AI-powered customer support platform built with Next.js, React, and TypeScript.

## Features

- 🚀 Modern, futuristic UI design
- 🌙 Dark mode optimized
- 🎨 Stunning purple gradient theme
- 📱 Fully responsive
- 🔒 Authentication ready
- 📊 Interactive dashboard
- 🤖 AI-powered support system (placeholder)

## Tech Stack

- Next.js (Latest version)
- React
- TypeScript
- Tailwind CSS
- ShadCN UI Components
- Lucide React Icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── (auth)/
│   │   ├── signin/
│   │   └── signup/
│   ├── dashboard/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   └── theme-provider.tsx
├── lib/
│   └── utils.ts
└── public/
```

## Environment Variables

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_API_URL=your_api_url_here
```

## Backend Integration

The frontend is prepared for backend integration with placeholder API calls. Key integration points:

- Authentication (Sign In/Sign Up)
- Dashboard data fetching
- Real-time chat functionality
- Analytics data

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.