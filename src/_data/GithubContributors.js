const EleventyFetch = require('@11ty/eleventy-fetch');

async function GithubContributors() {
  try {
    const url = 'https://api.github.com/orgs/TampaDevs/repos';
    const response = await EleventyFetch(url, {
      duration: '4h',
      type: 'json',
    });

    const contributorsPromises = await response.map(repo => {
      return EleventyFetch(repo.contributors_url, {
        duration: '4h',
        type: 'json',
      });
    });

    const contributors = [].concat.apply([], await Promise.all(contributorsPromises));
    return contributors.filter((contributor, index, self) => {
      if (contributor.login === 'dependabot[bot]') {
        return false;
      }
      return index === self.findIndex((t) => (
        t.id === contributor.id
      ));
    });
  } catch (error) {
    return {
      error: error.message
    }
  }
}

module.exports = GithubContributors;
