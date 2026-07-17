# AI Student Support Chatbot Architecture Plan

## 1. Project Goal

Build a simple student support chatbot web app that helps users get information about:

- programs
- departments
- services
- faculty
- general student support

The app should have a modern sidebar layout, a main chat area, and a clean UI that can be expanded later.

## 2. Current Project Structure

- ai.html: page structure and UI layout
- ai.css: all visual styling, layout, responsiveness, and theme-related rules
- ai.js: chatbot logic, message handling, and reply generation

## 3. Architecture Overview

The project follows a simple frontend architecture using vanilla HTML, CSS, and JavaScript.

### Presentation Layer

Responsible for all visible UI elements:

- sidebar
- app header
- chat display area
- input box and send button
- status card and menu buttons

### Styling Layer

Responsible for layout and visual design:

- responsive layout for desktop and mobile
- sidebar styling
- chat bubble styling
- button states and hover effects
- theme color variables for future light/dark mode switching

### Interaction Layer

Responsible for behavior:

- capturing user input
- validating empty messages
- generating bot replies
- appending messages to the display area
- enabling Enter-to-send behavior

## 4. Suggested Component Breakdown

### A. Sidebar

Contains:

- brand header with icon and title
- new chat button
- navigation buttons (Programs, Departments, Services, Faculty, Help)
- status card with student support info
- dropdown menu for theme options

### B. Main Chat Area

Contains:

- header section
- message display area
- input area with text field and send button

### C. Chat Message System

Each message can be represented as:

- sender: user or bot
- text: message content
- timestamp: optional for future expansion

## 5. Data Flow

1. User types a message in the input field.
2. The app checks whether the input is empty.
3. The message is displayed as a user bubble.
4. The app analyzes the input text.
5. A matching bot reply is selected.
6. The bot reply is displayed after a short delay.
7. The display area scrolls to the newest message.

## 6. Logic Flow in JavaScript

The main behavior should be organized like this:

- get input and display elements
- create message bubble function
- define keyword-based reply rules
- handle button click and Enter key events
- display welcome message on load

## 7. Recommended Message Handling Model

Use a simple message object structure in the future:

```js
{
  id: 1,
  sender: "user",
  text: "Hello",
  timestamp: "2026-07-17T10:00:00"
}
```

This makes it easier to scale to:

- chat history
- message persistence
- richer UI animations
- future API integration

## 8. Styling Strategy

Use CSS with:

- reusable classes for buttons, cards, bubbles, and sidebar items
- custom properties for colors and spacing
- responsive media queries for mobile screens
- consistent spacing and rounded corners for a polished UI

## 9. Future Expansion Plan

### Phase 1: Improve Current Version

- add better chatbot reply logic
- make sidebar items interactive
- polish animations and transitions

### Phase 2: Add Data-driven Content

- move programs/departments/services into JSON or JavaScript objects
- make replies more structured and dynamic

### Phase 3: Upgrade to a More Advanced App

- connect to an AI API or backend service
- store chat history in local storage or a database
- support authentication and user profiles

## 10. Best Practices for This Project

- keep HTML semantic and clean
- separate structure (HTML), style (CSS), and behavior (JS)
- avoid hardcoding too much UI text in JavaScript
- use clear class names for maintainability
- prepare the design for future theme switching and API integration

## 11. Final Architecture Summary

The app is currently a lightweight vanilla frontend chatbot with:

- a structured HTML layout
- styled UI components
- JavaScript-powered responses

In the future, it can evolve into a more scalable app by introducing:

- modular JavaScript
- reusable UI components
- a backend or AI service
- persistent chat state
