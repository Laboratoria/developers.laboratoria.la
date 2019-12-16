const Octokit = require('@octokit/rest');


const config = {
  github: {
    auth: process.env.GITHUB_TOKEN,
  },
};


const fetchGitHubTeams = (octokit, org) => octokit.paginate(`GET /orgs/${org}/teams`);
const fetchGitHubTeamMembers = (octokit, id) => octokit.paginate(`GET /teams/${id}/members`);


const run = async (config) => {
  const octokit = Octokit({ auth: config.github.auth });

  const teams = await fetchGitHubTeams(octokit, 'Laboratoria');
  const devsTeam = teams.find(({ slug }) => slug === 'developers');
  const devsTeamMembers = await fetchGitHubTeamMembers(octokit, devsTeam.id);

  console.log(JSON.stringify(devsTeamMembers.map(({ login }) => login), null, 2));
};


run(config);
