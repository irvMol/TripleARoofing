const express = require('express');
const fetch = require('node-fetch');
const app = express();

const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const ORIGIN = process.env.ORIGIN || 'https://vigorousroofing.com';

app.get('/api/auth', (req, res) => {
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: `${ORIGIN}/api/auth/callback`,
    scope: 'repo,user',
  });
  res.redirect(`https://github.com/login/oauth/authorize?${params}`);
});

app.get('/api/auth/callback', async (req, res) => {
  const { code } = req.query;
  try {
    const response = await fetch(
      'https://github.com/login/oauth/access_token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          code,
        }),
      },
    );
    const data = await response.json();
    const token = data.access_token;
    if (!token) {
      res.status(401).send('Authentication failed');
      return;
    }
    const script = `
      <!doctype html><html><body><script>
        (function() {
          var token = ${JSON.stringify(token)};
          function cb(e) {
            window.opener.postMessage(
              'authorization:github:success:' + JSON.stringify({token: token}),
              e.origin
            );
            window.removeEventListener('message', cb, false);
            setTimeout(function(){ window.close(); }, 1000);
          }
          window.addEventListener('message', cb, false);
          window.opener.postMessage('authorizing:github', '*');
        })();
      <\/script></body></html>
    `;
    res.send(script);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(3000, () => console.log('OAuth proxy running on port 3000'));
