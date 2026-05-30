 LIVE LINK -> https://react-social-media-lovat.vercel.app/
 
# React Social Media App

A simple social media feed application built with React 19, React Router v7, and Bootstrap 5. It fetches posts from a public API, displays them in a card-based layout, and allows users to create and delete posts.

---

## Features

- **Post Feed** — Loads posts from [DummyJSON](https://dummyjson.com/posts) on page load via a React Router loader
- **Create Post** — Form to submit a new post (userId, title, body, tags) via a React Router action
- **Delete Post** — Remove any post from the feed with a single click
- **Tag Badges** — Each post displays its tags as clickable Bootstrap badge buttons
- **Sidebar Navigation** — Links to Dashboard (feed) and Create Post views
- **Dark-themed Header** — Top navigation bar with search input and Login / Sign-up buttons

---

## Tech Stack

| Layer | Library / Tool |
|---|---|
| UI Framework | React 19 |
| Routing | React Router DOM v7 |
| Styling | Bootstrap 5.3 |
| Icons | React Icons 5 |
| State Management | React Context + useReducer |
| Build Tool | Vite 7 |
| Data Source | [DummyJSON API](https://dummyjson.com) |

---

## Project Structure


src/
├── App.jsx                  # Root layout — wraps sidebar, header, footer, and <Outlet>
├── main.jsx                 # Router setup and app entry point
├── App.css                  # Global styles
├── Store/
│   └── PostList-Store.jsx   # Context + reducer for post state (add / delete)
└── component/
    ├── Header.jsx           # Top navigation bar
    ├── Footer.jsx           # Footer bar
    ├── SideBar.jsx          # Left sidebar with nav links and user dropdown
    ├── PostList.jsx         # Renders post cards; uses loader data from DummyJSON
    ├── Post.jsx             # Individual post card with delete button
    ├── CreatePost.jsx       # Create post form + action handler
    ├── WellcomeMEssage.jsx  # Shown when the post list is empty
    └── loading.jsx          # Loading indicator component




## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

`bash
# Clone the repository
git clone https://github.com/your-username/React_Social_media.git
cd React_Social_media

# Install dependencies
npm install

# Start the development server
npm run dev


The app will be available at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## Routes

| Path | Component | Description |
|---|---|---|
| `/` | `PostList` | Fetches and displays all posts |
| `/create-post` | `CreatePost` | Form to submit a new post |

---

## State Management

Global post state is handled by `PostListProvider` (`src/Store/PostList-Store.jsx`) using React Context and `useReducer`. The reducer supports three action types:

- `add` — Adds a single post to the list
- `add2` — Replaces the list with a fetched batch of posts
- `delete` — Removes a post by ID

> **Note:** The `PostLoader` in `PostList.jsx` fetches posts directly via `useLoaderData` (React Router's data loading pattern), so the context store is currently used mainly for delete operations.

---

## API

This project uses the free [DummyJSON](https://dummyjson.com) API for demo data. No API key is required.

| Action | Endpoint |
|---|---|
| Fetch posts | `GET https://dummyjson.com/posts` |
| Create post | `POST https://dummyjson.com/posts/add` |

> Posts created via the form are submitted to DummyJSON but **not persisted** — the API returns a mock response and the feed reloads from the original dataset.

---

## Known Limitations / Future Improvements

- Created posts are not persisted; a real backend or local state update would be needed
- The `addPost2` action is defined in the store but not wired up in the UI
- Login / Sign-up buttons in the header are decorative (no auth implemented)
- Search input in the header is not yet functional
- Minor typos exist in component and variable names (e.g. `CraetePost`, `Fotter`, `paylod`)

---

## License

This project is open source and available under the [MIT License](LICENSE).
