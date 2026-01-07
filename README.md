# FitLife Beta - Basic Prototype

Basic prototype of the FitLife fitness application with a minimalist design.

## Description

FitLife Beta is a simplified version of the fitness platform with a clean, minimalist design. The prototype demonstrates the core functionality of the application without complex visual effects.

## Features

- **Minimalist Design**: Grayscale palette with blue accent
- **Inter Typography**: Clean and modern font
- **Responsive**: Fully responsive design for all devices
- **5 Main Pages**:
  - Home (`/` or `/home`)
  - Workouts (`/workouts`)
  - Nutrition (`/nutrition`)
  - Community (`/community`)
  - Profile (`/profile`)

## Technologies

- **React** 18.2.0
- **TypeScript** 5.2.2
- **Vite** 5.0.8
- **Tailwind CSS** 3.4.0
- **Lucide React** (icons)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/neitforever/FitLife_beta.git
cd FitLife_beta
```

2. Install dependencies:
```bash
npm install
```

3. Start the dev server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/
│   └── a/              # Basic prototype components
│       ├── AButton.tsx
│       ├── ACard.tsx
│       ├── AInput.tsx
│       ├── ANavigation.tsx
│       ├── AFooter.tsx
│       ├── AApp.tsx
│       ├── AHomePage.tsx
│       ├── AWorkoutsPage.tsx
│       ├── ANutritionPage.tsx
│       ├── ACommunityPage.tsx
│       └── AProfilePage.tsx
├── App.tsx             # Main component with routing
└── main.tsx            # Entry point
```

## Design System

### Colors
- **Background**: White (`bg-white`)
- **Accent**: Blue (`blue-600`)
- **Borders**: Gray (`border-gray-200`)
- **Text**: Gray (`text-gray-700`, `text-gray-900`)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: `text-3xl sm:text-4xl font-bold`
- **Body**: `text-base` or `text-sm`

### Components
- **Buttons**: Height 44-48px, radius 10px
- **Cards**: Radius 12px, simple border
- **Inputs**: Height 44px, radius 10px

## Functionality

### Home Page
- Hero section with call-to-action
- Platform statistics
- Main features (workouts, nutrition)
- Popular programs

### Workouts
- List of workout programs
- Filtering by goals, level, location
- Modal window with program details

### Nutrition
- Meal plans for different goals
- Water tracker
- Calorie calculator

### Community
- Posts feed
- Active challenges
- User leaderboards

### Profile
- Dashboard
- Workout statistics
- Progress and measurements
- Achievements
- Settings
