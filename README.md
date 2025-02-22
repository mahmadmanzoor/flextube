# FlexTube - Fullstack Video Streaming Platform

A modern YouTube clone built with Next.js 15, React 19, tRPC, PostgreSQL, and AI-powered features.

![Project Image](https://github.com/yourusername/flextube/blob/main/public/thumbnail.png)

## Features

- 🎥 **Advanced video player** with quality controls
- 🎬 **Real-time video processing** powered by Mux
- 📝 **Automatic video transcription** for accessibility and SEO
- 🖼️ **Smart thumbnail generation** using AI
- 🤖 **AI-powered title and description generation**
- 📊 **Creator Studio** with advanced metrics and insights
- 🗂️ **Custom playlist management** for users
- 📱 **Fully responsive design** across all devices
- 🔄 **Multiple content feeds** for diverse recommendations
- 💬 **Interactive comment system** with real-time updates
- 👍 **Like and subscription system** to support creators
- 🎯 **Watch history tracking** for personalized content suggestions
- 🔐 **Secure authentication system**
- 📦 **Module-based architecture** for scalability
- 🗄️ **PostgreSQL with DrizzleORM** for efficient data management
- 🚀 **Built with Next.js 15 & React 19** for modern web performance
- 🔄 **tRPC for type-safe APIs**
- 💅 **Styled using TailwindCSS & ShadcnUI**

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 18.0.0)
- PostgreSQL (for local development)
- Mux account for video processing
- OpenAI API key for AI-powered features

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/flextube.git
   ```
2. Navigate to the project folder:
   ```bash
   cd flextube
   ```
3. Install the dependencies using Bun:
   ```bash
   bun install
   ```
4. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```
5. Fill in the necessary environment variables:
   - PostgreSQL connection string
   - Mux API credentials
   - OpenAI API key for AI-powered features

### Usage

Start the development server:

```bash
bun run dev
```

Access the application at `http://localhost:3000`.

### Testing

Run tests to ensure functionality:

```bash
bun run test
```

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

## Roadmap

- [ ] Enhance AI-powered recommendations
- [ ] Implement monetization features for creators
- [ ] Add multi-language support
- [ ] Improve UI with additional themes
- [ ] Optimize performance with caching and background jobs

Feel free to contribute or suggest new features!
