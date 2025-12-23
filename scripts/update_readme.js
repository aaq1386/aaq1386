const fs = require('fs');
const axios = require('axios');

const username = 'aaq1386';
const readmePath = 'README.md';
const maxRepos = 4;

async function getRepos() {
  const res = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${maxRepos}`);
  return res.data.map(r => ({
    name: r.name,
    url: r.html_url,
    desc: r.description || '',
  }));
}

(async () => {
  const repos = await getRepos();
  let table = `| Repository | Description |\n| --- | --- |\n`;
  repos.forEach(r => {
    table += `| [${r.name}](${r.url}) | ${r.desc} |\n`;
  });

  let readme = fs.readFileSync(readmePath, 'utf-8');
  const start = '<!-- REPOS-START -->';
  const end = '<!-- REPOS-END -->';
  const regex = new RegExp(`${start}[\\s\\S]*${end}`, 'm');

  const newContent = `${start}\n${table}${end}`;
  if (readme.match(regex)) {
    readme = readme.replace(regex, newContent);
  } else {
    readme += `\n${newContent}`;
  }

  fs.writeFileSync(readmePath, readme);
})();
