// Sample articles data
const articles = [
    {
        title: "Τελετή αποφοίτησης 84ου ΣΥΚ στην Κύπρο",
        image: "articles/teleti_apofitisis/Article_cover.jpeg",
        date: "24/09/2024",
        author: "admin",
        link: "articles/teleti_apofitisis/teleti_apofitisis.html"
    },
    {
        title: "Άρθρο 1",
        image: "../kipriaki_dimokratia/articles/teleti_apofitisis/Article_cover.jpeg",
        date: "25/09/2024",
        author: "admin",
        link: "../cyprus/cyprus_articles/article1.html"
    },
    {
        title: "Άρθρο 1",
        image: "../kipriaki_dimokratia/articles/teleti_apofitisis/Article_cover.jpeg",
        date: "25/09/2024",
        author: "admin",
        link: "../cyprus/cyprus_articles/article1.html"
    },
    {
        title: "Άρθρο 1",
        image: "../kipriaki_dimokratia/articles/teleti_apofitisis/Article_cover.jpeg",
        date: "25/09/2024",
        author: "admin",
        link: "../cyprus/cyprus_articles/article1.html"
    },
    {
        title: "Άρθρο 1",
        image: "../kipriaki_dimokratia/articles/teleti_apofitisis/Article_cover.jpeg",
        date: "25/09/2024",
        author: "admin",
        link: "../cyprus/cyprus_articles/article1.html"
    },
    {
        title: "Άρθρο 2",
        image: "../kipriaki_dimokratia/articles/teleti_apofitisis/Article_cover.jpeg",
        date: "26/09/2024",
        author: "admin",
        link: "../cyprus/cyprus_articles/article2.html"
    },
    // Add more articles as needed
];

let currentPage = 1;
const articlesPerPage = 3; // Adjust this to control the number of articles per page

function loadPage(page) {
    if (page < 1 || page > Math.ceil(articles.length / articlesPerPage)) {
        return; // Prevent loading invalid pages
    }
    
    currentPage = page;
    const start = (currentPage - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    const articlesToShow = articles.slice(start, end);
    const articlesSection = document.getElementById('articles-section');

      // Clear previous articles but keep breadcrumb and header intact
      articlesSection.querySelectorAll('.article').forEach(article => article.remove());
    

    // Load new articles
    articlesToShow.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.className = 'article';
        articleElement.innerHTML = `
            <a href="${article.link}">
                <img class="article-image" src="${article.image}" alt="Article Image">
            </a>
            <div class="article-info">
                <p class="meta-info">
                    <span class="author">${article.author}</span> <span class="date">${article.date}</span>
                </p>
                <a class="article--title" href="${article.link}">
                    ${article.title}
                </a>
            </div>
        `;
        articlesSection.appendChild(articleElement);
    });
}

// Initial load
loadPage(currentPage);
