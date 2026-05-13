const http = require('http');

const projects = [
  {
    name: 'Data Cleaner',
    description: 'A Python script to clean and normalize CSV datasets.',
    stack: ['Python', 'pandas']
  },
  {
    name: 'API Scraper',
    description: 'A small API-based web scraper with JSON output and logging.',
    stack: ['Python', 'requests', 'BeautifulSoup']
  },
  {
    name: 'Task Automator',
    description: 'A CLI tool for scheduling and automating file tasks.',
    stack: ['Python', 'argparse']
  },
  {
    name: 'ML Prototype',
    description: 'A prototype model training pipeline using scikit-learn.',
    stack: ['Python', 'scikit-learn', 'numpy']
  }
];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Node Manual Server</title>
</head>
<body>
  <h1>Welcome to the manual Node server</h1>
  <p>Use <code>/api/projects</code> to fetch the list of Python projects.</p>
</body>
</html>`);
    return;
  }

  if (method === 'GET' && url === '/api/projects') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(projects));
    return;
  }

  if (method === 'POST' && url === '/api/contact') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
      if (body.length > 1e6) {
        res.writeHead(413, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Payload too large');
        req.connection.destroy();
      }
    });

    req.on('end', () => {
      console.log('Contact request body:', body);
      res.writeHead(204);
      res.end();
    });

    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('404 Not Found');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
