var xhr = new XMLHttpRequest();
var url = './news_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function () {
    var news = xhr.response.news;
    var newsDiv = document.getElementById('news');

      news.forEach(function(item) {
      var newsItemDiv = document.createElement('div');
      newsItemDiv.classList.add('article');

      var title = document.createElement('h2');
      title.textContent = item.title;

      var description = document.createElement('p');
      description.textContent = item.description;

      var keyActionListHeader = document.createElement('h3');
      keyActionListHeader.textContent = 'Key Action List:';

      var keyActionList = document.createElement('ul');
      item.key_actions.forEach(function(key) {
        var listItem = document.createElement('li');
        listItem.textContent = key;
        keyActionList.appendChild(listItem);
      });

      var positiveImpactHeader = document.createElement('h3');
      positiveImpactHeader.textContent = 'Positive Impact:';

      var positiveImpactList = document.createElement('ul');
      item.positive_impacts.forEach(function(impact) {
        var listItem = document.createElement('li');
        listItem.textContent = impact;
        positiveImpactList.appendChild(listItem);
      });

      newsItemDiv.appendChild(title);
      newsItemDiv.appendChild(description);
      newsItemDiv.appendChild(keyActionListHeader);
      newsItemDiv.appendChild(keyActionList);
      newsItemDiv.appendChild(positiveImpactHeader);
      newsItemDiv.appendChild(positiveImpactList);

      newsDiv.appendChild(newsItemDiv);
    });
}
xhr.send();