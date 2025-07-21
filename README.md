# Base Site

A modern React application built with Vite, featuring a responsive navbar with smooth animations.

## 🚀 Deployment

This project is configured for easy deployment on Vercel.

### Automatic Deployment
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the configuration and deploy
3. The app will be built from the `my-app` directory

### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from the root directory
vercel

# Follow the prompts to configure your deployment
```

## 🛠️ Development

```bash
# Navigate to the app directory
cd my-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
base_site/
├── my-app/           # Main React application
│   ├── src/         # Source code
│   ├── public/      # Static assets
│   ├── package.json # Dependencies and scripts
│   └── vite.config.js # Vite configuration
├── vercel.json      # Vercel deployment configuration
└── README.md        # This file
```

## ⚙️ Configuration

- **Framework**: Vite + React
- **Build Output**: `my-app/dist`
- **Root Directory**: `my-app`
- **Node Version**: Compatible with Vercel's latest LTS

## 🔧 Vercel Settings

The `vercel.json` file configures:
- Build command: `npm run build`
- Output directory: `my-app/dist`
- Framework detection: Vite
- Root directory: `my-app`

## 📱 Features

- Responsive design
- Smooth scroll animations
- Modern UI components
- Optimized for performance