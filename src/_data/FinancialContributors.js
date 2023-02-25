const EleventyFetch = require('@11ty/eleventy-fetch');

async function getFinancialContributors() {
  let url = 'https://opencollective.com/tampadevs/members/all.json';
  const response = await EleventyFetch(url, {
    duration: '4h',
    type: 'json',
  })
  return response.filter( function (d)  {
    if (d.role === 'BACKER' || d.totalAmountDonated > 0) {
      return d;
    }
  });
}

async function donors() {
  const financialContributors = await getFinancialContributors();
  return financialContributors.filter(data => data.tier === '' || data.tier === '🏴‍☠️ Crew Mate' || data.tier === '🏴‍☠️ First Mate');
}

async function silverSponsors() {
  const financialContributors = await getFinancialContributors();
  return financialContributors.filter(data => data.tier === '🏆 Silver Sponsor');
}
async function goldSponsors() {
  const financialContributors = await getFinancialContributors();
  return financialContributors.filter(data => data.tier === '🏆 Gold Sponsor');
}
async function platinumSponsors() {
  const financialContributors = await getFinancialContributors();
  return financialContributors.filter(data => data.tier === '🏆 Platinum Sponsor');
}

module.exports = async function () {
  return {
    all: await getFinancialContributors(),
    donors: await donors(),
    silverSponsors: await silverSponsors(),
    goldSponsors: await goldSponsors(),
    platinumSponsors: await platinumSponsors()
  };
}
