// Beispiel-Nachrichtenartikel
const articles = [
    {
        id: 1,
        title: 'UEFA Europa Conference League: Key stats from Matchday 5',
        preview: 'Latest updates from the Europa Conference League matches...',
        timestamp: '31 min ago',
        image: '',
        source: 'Sports News',
        content: '' 
    },
    {
        id: 2,
        title: 'Player of the Month: Rising Star Shines in Conference League',
        preview: 'An unexpected player takes the spotlight this month...',
        timestamp: '2 h ago',
        image: 'https://via.placeholder.com/300x200',
        source: 'Sports News',
        content: 'Vollständiger Artikelinhalt würde hier erscheinen und hier kann man ihn verändern ...'
    },
    {
        id: 3,
        title: 'Transfer News: Conference League Star Attracts Major Interest',
        preview: 'Breaking transfer news involving Conference League talents...',
        timestamp: '15 h ago',
        image: 'https://via.placeholder.com/300x200',
        source: 'Transfer News',
        content: 'Vollständiger Artikelinhalt würde hier erscheinen...'
    }
];

// DOM-Elemente
const newsPreviewContainer = document.getElementById('news-preview');
const fullArticlesContainer = document.getElementById('full-articles');
const cardTemplate = document.getElementById('news-card-template');

// News Cards erstellen
function createNewsCards() {
    articles.forEach(article => {
        const card = cardTemplate.content.cloneNode(true);
        
        // Card-Elemente befüllen
        card.querySelector('.card-image').src = article.image;
        card.querySelector('.card-image').alt = article.title;
        card.querySelector('.card-title').textContent = article.title;
        card.querySelector('.card-preview').textContent = article.preview;
        card.querySelector('.card-source').textContent = article.source;
        card.querySelector('.card-timestamp').textContent = article.timestamp;
        
        // Click-Handler hinzufügen
        const newsCard = card.querySelector('.news-card');
        newsCard.addEventListener('click', () => scrollToArticle(article.id));
        
        newsPreviewContainer.appendChild(card);
        
        // Vollständigen Artikel erstellen
        createFullArticle(article);
    });
}

// Vollständige Artikel erstellen
function createFullArticle(article) {
    const articleElement = document.createElement('article');
    articleElement.className = 'full-article';
    articleElement.id = `article-${article.id}`;
    
    articleElement.innerHTML = `
        <h1>${article.title}</h1>
        <img src="${article.image}" alt="${article.title}">
        <div class="article-content">
            ${article.content}
        </div>
    `;
    
    fullArticlesContainer.appendChild(articleElement);
}

// Zu Artikel scrollen
function scrollToArticle(id) {
    const article = document.getElementById(`article-${id}`);
    if (article) {
        article.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navigation Button Handler
const navButtons = document.querySelectorAll('.nav-button');
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Initialisierung
document.addEventListener('DOMContentLoaded', createNewsCards);