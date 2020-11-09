const { Octokit } = require('@octokit/rest');

const config = {
  github: {
    auth: process.env.GITHUB_TOKEN,
  },
};

const fetchGitHubTeams = (octokit, org) => octokit.paginate(`GET /orgs/${org}/teams`);
const fetchGitHubTeamMembers = (octokit, id) => octokit.paginate(`GET /teams/${id}/members`);

const run = async (config) => {
  const octokit = new Octokit({ auth: config.github.auth });
  const teams = await fetchGitHubTeams(octokit, 'Laboratoria');
  const devsTeam = teams.find(({ slug }) => slug === 'developers');
  const devsTeamMembers = await fetchGitHubTeamMembers(octokit, devsTeam.id);
  return devsTeamMembers.map(({ login }) => login);
};

run(config)
  .then(members => console.log(JSON.stringify(members, null, 2)))
  .catch(console.error);
