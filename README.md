Office Locations App

A React + TypeScript + Vite web application that displays a responsive feed of office locations with a “Load More” feature. Focus is on clean architecture, accessibility, and polished UI/UX**.

---

Features

- Displays a list of office locations from API  
- Initially shows 4 locations, dynamically loads 4 more on button click (total 12)  
- Fully responsive layout:  
  - 4 cards per row on desktop  
  - 2 cards per row on tablet  
  - 1 card per row on mobile  
- Card background and layout styled via SCSS variables for easy theming  
- Accessible with ARIA roles and labels 
- Loading and error states handled gracefully  
- Clean and reusable components: `LocationCard` and `LocationList`  
- Unit tests with Vitest + React Testing Library

---

Tech Stack

- React 18 + TypeScript  
- Vite  
- SCSS with variables for styling  
- Vitest + React Testing Library for unit tests  

---

Getting Started

Prerequisites

- Node.js >= 18  
- npm >= 9  

Installation

```bash
# Clone repository
git clone https://github.com/sowjanya-Frontend/office-locations-app.git
cd Office-Locations-App

# Install dependencies
npm install

Running the App: 

Start the development server: 
npm run dev  - Open your browser at http://localhost:5173 [port number may change here please check] 

Building for Production:

Build the app: 
npm run build 

Preview production build: 
npm run preview 

Testing: 
Run all tests: 
npm run test

Contact: 

Project developed by: 
Sowjanya Kandra 

Email: 
kandra.sowjanya@gmail.com