
async function loadNews() {
  const res = await fetch("https://api.spaceflightnewsapi.net/v4/articles/");
  const data = await res.json();
  articles = data.results;

  articles = articles.map(a => ({
    title: a.title,
    description: a.summary,
    url: a.url
  }));

  renderNews(articles);
  showTrends();
}
