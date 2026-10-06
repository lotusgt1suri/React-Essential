# React Essentials

A small React app built while learning the core concepts of React — components, JSX, props, and state. It renders a list of core concepts and an interactive "Examples" tab section where clicking a topic (Components, JSX, Props, State) displays its description and a code snippet.

## Features

- Header with a randomly chosen tagline word ("Fundamental", "Core", "Concise") on each render
- Reusable `CoreConcepts` cards rendered from a data array using `.map()`
- Interactive tabs (`TabButton`) with active-state styling driven by React state
- Props and component composition (`{...item}` spreading, `children`)
- Generic `Section` wrapper that forwards extra props and renders a configurable container element
- Conditional rendering ("Please select a Topic." placeholder)

## Tech Stack

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/) — dev server and build tool

## Project Structure

```
src/
├── assets/            # images used by the core concepts cards
├── components/
│   ├── Header.jsx           # logo, title, and random tagline
│   ├── CoreConceptsWrap.jsx # "Core Concepts" section, maps CORE_CONCEPTS
│   ├── CoreConcepts.jsx     # single concept card
│   ├── ExampleCom.jsx       # "Examples" section with tabs and selected-topic state
│   ├── TabButton.jsx        # tab button with active state
│   └── Section.jsx          # reusable section wrapper (title + children)
├── data.js            # CORE_CONCEPTS and EXAMPLES data
├── index.css          # global styles
├── App.jsx            # composes Header, CoreConceptsWrap, ExamplesCom
└── index.jsx          # React root / entry point
```

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal (e.g. `http://localhost:5173`).

### Other scripts

```bash
npm run build     # production build
npm run preview   # preview the production build locally
```

## Learning Notes

This project was built step by step as a React fundamentals exercise, covering:

- Passing and destructuring props
- Managing UI state with `useState`
- Rendering lists with `.map()` and the importance of the `key` prop
- Conditional rendering
- Splitting a large component into smaller, focused components
- Forwarding props with rest/spread (`...specialProps`) and using a prop as a dynamic element type (`container`)
- Importing static assets (images) correctly in Vite
