# Patchaiyappan K - Portfolio (React + Vite)

## Run
```
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview
```

## Structure
- `src/data.js` - all content (experience, projects, skills, links). Edit text here.
- `src/App.jsx` - page sections and layout
- `src/components/` - Reveal (scroll animation), Pills (tech tags)
- `src/index.css` - theme tokens (dark and light), layout, responsive rules
- `public/profile.jpg` - your photo (replace to change it)
- `public/shots/` - project screenshots shown in the Projects section (edit the file names in `src/data.js`)

## Resume download
`public/Patchaiyappan_K_Resume.pdf` is already included and linked from the hero, navbar and contact buttons. Replace that file to update your resume.

## Deploy
Netlify, Vercel or Cloudflare Pages: build command `npm run build`, output `dist`.
For GitHub Pages, set `base` in `vite.config.js` to `"/<repo-name>/"`.
