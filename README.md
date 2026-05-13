# Manual Node Server

A simple Node.js server with no frameworks.

## Available routes

- `GET /`
  - Returns an HTML page.
- `GET /api/projects`
  - Returns a JSON array of 4 Python projects.
- `POST /api/contact`
  - Logs the request body to the console.
- Any other route returns `404 Not Found`.

## Run

```bash
cd c:\Users\USER\OneDrive\Desktop\REPOS\WEB-FOUNDATIONS\node
npm start
```

## Notes

- Built with the built-in `http` module.
- No frameworks used.
