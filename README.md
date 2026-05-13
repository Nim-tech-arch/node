# Express Project API

A simple Express server exposing an in-memory projects API.

## Installed dependencies

- `express`

## Available routes

- `GET /api/projects`
  - Returns a JSON array of 4 Python projects.
- `POST /api/projects`
  - Adds a new project to the in-memory array.
  - Request body should include `name` and `description`, optionally `stack`.
- `DELETE /api/projects/:id`
  - Removes a project by numeric `id`.
- `GET /`
  - Returns a small HTML landing page.
- Any other route returns `404 Not Found`.

## Run

```bash
cd c:\Users\USER\OneDrive\Desktop\REPOS\WEB-FOUNDATIONS\node
npm install
npm start
```

## Notes

- Uses Express middleware for logging and JSON parsing.
- Data is stored in memory, so it resets when the server restarts.
