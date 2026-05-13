const express = require('express');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

const projects = [
  {
    id: 1,
    name: 'Data Cleaner',
    description: 'A Python script to clean and normalize CSV datasets.',
    stack: ['Python', 'pandas']
  },
  {
    id: 2,
    name: 'API Scraper',
    description: 'A small API-based web scraper with JSON output and logging.',
    stack: ['Python', 'requests', 'BeautifulSoup']
  },
  {
    id: 3,
    name: 'Task Automator',
    description: 'A CLI tool for scheduling and automating file tasks.',
    stack: ['Python', 'argparse']
  },
  {
    id: 4,
    name: 'ML Prototype',
    description: 'A prototype model training pipeline using scikit-learn.',
    stack: ['Python', 'scikit-learn', 'numpy']
  }
];
let nextId = 5;

app.get('/api/projects', (req, res) => {
  res.status(200).json(projects);
});

app.post('/api/projects', (req, res) => {
  const { name, description, stack } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: 'Project name and description are required.' });
  }

  const newProject = {
    id: nextId++,
    name,
    description,
    stack: Array.isArray(stack) ? stack : []
  };

  projects.push(newProject);
  res.status(201).json(newProject);
});

app.delete('/api/projects/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = projects.findIndex(project => project.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Project not found.' });
  }

  projects.splice(index, 1);
  res.sendStatus(204);
});

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Express Project API</title>
</head>
<body>
  <h1>Express Project API</h1>
  <p>Use <code>/api/projects</code> to fetch, add, or remove projects.</p>
</body>
</html>`);
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
