// Sample data for the news website
const sampleArticles = [
    {
        id: 'ART-2024-001',
        title: 'Major Breakthrough in Renewable Energy Technology',
        excerpt: 'Scientists have announced a revolutionary new solar panel technology that could increase efficiency by 40% while reducing costs by half. This breakthrough could accelerate the global transition to clean energy.',
        content: 'In a groundbreaking development that could revolutionize the renewable energy sector, researchers at leading universities have unveiled a new solar panel technology that promises to dramatically improve efficiency while reducing manufacturing costs. The new technology utilizes advanced perovskite materials combined with traditional silicon cells, creating a tandem structure that captures more of the solar spectrum.\n\nDr. Sarah Chen, lead researcher on the project, explained that the new panels can achieve up to 40% higher efficiency compared to current commercial panels, while the manufacturing process reduces costs by approximately 50%. This combination of improved performance and lower costs could make solar energy more accessible to households and businesses worldwide.\n\nThe technology has been tested in various climates and conditions, showing consistent performance improvements. The research team is now working with major solar panel manufacturers to bring this technology to market within the next two years.',
        category: 'Breaking News',
        author: 'Callum Smith',
        imageUrl: 'https://via.placeholder.com/800x400',
        tags: ['renewable energy', 'solar panels', 'technology', 'breakthrough'],
        publishDate: '2024-01-15',
        readTime: '5 min read',
        views: 1250,
        featured: true
    },
    {
        id: 'ART-2024-002',
        title: 'New Climate Policy Announced by Government',
        excerpt: 'The government has unveiled a comprehensive new climate policy aimed at achieving net-zero emissions by 2050.',
        content: 'The government has announced a comprehensive new climate policy that sets ambitious targets for achieving net-zero emissions by 2050. The policy includes significant investments in renewable energy infrastructure, electric vehicle charging networks, and energy-efficient building retrofits.\n\nKey measures include:\n- £2 billion investment in offshore wind farms\n- Mandatory energy efficiency standards for all new buildings\n- Subsidies for electric vehicle purchases\n- Carbon pricing for heavy industry\n\nThe policy has received mixed reactions, with environmental groups praising the ambitious targets while business leaders express concerns about implementation costs.',
        category: 'Politics',
        author: 'Sarah Johnson',
        imageUrl: 'https://via.placeholder.com/500x300',
        tags: ['climate', 'government', 'policy', 'environment'],
        publishDate: '2024-01-14',
        readTime: '4 min read',
        views: 890,
        featured: false
    },
    {
        id: 'ART-2024-003',
        title: 'AI Breakthrough in Medical Diagnosis',
        excerpt: 'New artificial intelligence system can detect diseases with 99% accuracy, potentially revolutionizing healthcare.',
        content: 'A new artificial intelligence system developed by medical researchers has achieved 99% accuracy in detecting various diseases from medical imaging scans. The AI system, trained on millions of medical images, can identify early signs of cancer, heart disease, and other conditions that might be missed by human doctors.\n\nThe system uses advanced machine learning algorithms and deep neural networks to analyze medical images with unprecedented precision. In clinical trials, it has demonstrated the ability to detect cancer in its earliest stages, potentially saving thousands of lives through early intervention.\n\nMedical professionals are cautiously optimistic about the technology, emphasizing that it should complement rather than replace human expertise in medical diagnosis.',
        category: 'Technology',
        author: 'Mike Wilson',
        imageUrl: 'https://via.placeholder.com/500x300',
        tags: ['artificial intelligence', 'medical', 'healthcare', 'diagnosis'],
        publishDate: '2024-01-13',
        readTime: '6 min read',
        views: 2100,
        featured: false
    },
    {
        id: 'ART-2024-004',
        title: 'Championship Final Ends in Dramatic Penalty Shootout',
        excerpt: 'In an unforgettable match, the championship final went to penalties after a thrilling 2-2 draw, with the winning team securing victory in the final kick.',
        content: 'The championship final delivered one of the most dramatic matches in recent memory, with both teams fighting tooth and nail for the coveted trophy. After 90 minutes of intense play, the score remained tied at 2-2, forcing the match into extra time.\n\nNeither team could break the deadlock in extra time, leading to a penalty shootout that would determine the champion. The tension was palpable as each player stepped up to take their penalty kick.\n\nIn the end, it was the underdog team that emerged victorious, winning 4-3 on penalties and securing their first championship in over a decade. The victory sparked wild celebrations among fans and players alike.',
        category: 'Sports',
        author: 'Callum Smith',
        imageUrl: 'https://via.placeholder.com/400x250',
        tags: ['football', 'championship', 'penalties', 'drama'],
        publishDate: '2024-01-12',
        readTime: '3 min read',
        views: 3200,
        featured: false
    },
    {
        id: 'ART-2024-005',
        title: 'New Study Reveals Benefits of Morning Exercise',
        excerpt: 'Research shows that exercising in the morning can boost energy levels, improve mood, and enhance productivity throughout the day.',
        content: 'A comprehensive study conducted by fitness researchers has revealed that morning exercise provides significant benefits beyond physical health. The study, which followed 1,000 participants over six months, found that those who exercised in the morning experienced:\n\n- 25% higher energy levels throughout the day\n- Improved mood and reduced stress levels\n- Better sleep quality at night\n- Increased productivity at work\n\nThe researchers suggest that morning exercise helps regulate the body\'s circadian rhythm and releases endorphins that provide a natural energy boost. Even just 20-30 minutes of moderate exercise in the morning can make a significant difference.',
        category: 'Lifestyle',
        author: 'Callum Smith',
        imageUrl: 'https://via.placeholder.com/500x300',
        tags: ['health', 'exercise', 'wellness', 'morning routine'],
        publishDate: '2024-01-11',
        readTime: '4 min read',
        views: 1800,
        featured: false
    }
];

const sampleBlogPosts = [
    {
        id: 'BLOG-2024-001',
        title: 'My Journey into Digital Journalism',
        excerpt: 'Reflecting on how the digital age has transformed journalism and the challenges and opportunities it presents for modern reporters and writers.',
        content: 'The landscape of journalism has changed dramatically over the past decade. As someone who entered this field during this transformation, I\'ve witnessed firsthand both the challenges and opportunities that digital media presents.\n\nWhen I started my career, traditional print media was still dominant. We wrote articles for newspapers and magazines, with content appearing once a day or once a week. The internet was just beginning to change how people consumed news.\n\nToday, we live in a 24/7 news cycle where stories break on social media before they reach traditional outlets. This has created incredible opportunities for journalists to reach global audiences instantly, but it has also brought new challenges around accuracy, verification, and maintaining journalistic standards.\n\nThe key, I\'ve learned, is to embrace the technology while staying true to the fundamental principles of good journalism: accuracy, fairness, and serving the public interest.',
        category: 'Personal',
        author: 'Callum Smith',
        imageUrl: 'https://via.placeholder.com/600x300',
        tags: ['journalism', 'digital media', 'personal', 'career'],
        publishDate: '2024-01-10',
        readTime: '8 min read',
        views: 450,
        likes: 23,
        featured: false
    },
    {
        id: 'BLOG-2024-002',
        title: 'The Future of News Consumption',
        excerpt: 'Exploring how emerging technologies like AI and virtual reality might reshape how we consume and interact with news content.',
        content: 'As we stand at the intersection of traditional journalism and cutting-edge technology, it\'s fascinating to consider how news consumption might evolve in the coming years.\n\nArtificial intelligence is already beginning to personalize news feeds, showing readers content that matches their interests and reading habits. But this raises important questions about echo chambers and the diversity of information people are exposed to.\n\nVirtual and augmented reality technologies promise to create immersive news experiences. Imagine being able to "walk through" a war zone or natural disaster site to better understand the impact of events. This could create deeper empathy and understanding, but also raises concerns about the emotional impact on viewers.\n\nVoice assistants and smart speakers are changing how people access news, with many now getting their daily briefing through spoken word rather than reading. This shift requires journalists to think differently about how we structure and present information.\n\nThe challenge for journalists will be to harness these technologies while maintaining the core values of journalism: truth, accuracy, and serving the public good.',
        category: 'Technology',
        author: 'Callum Smith',
        imageUrl: 'https://via.placeholder.com/600x300',
        tags: ['technology', 'future', 'journalism', 'AI'],
        publishDate: '2024-01-08',
        readTime: '6 min read',
        views: 320,
        likes: 18,
        featured: false
    },
    {
        id: 'BLOG-2024-003',
        title: 'Balancing Speed and Accuracy in News Reporting',
        excerpt: 'A personal perspective on the constant tension between being first to report and ensuring accuracy in today\'s fast-paced media environment.',
        content: 'In the age of social media and instant updates, journalists face an unprecedented challenge: how to balance the need for speed with the fundamental requirement of accuracy.\n\nThere\'s immense pressure to be first with breaking news. Social media platforms reward quick posting, and being first can mean the difference between a story going viral or being lost in the noise. But rushing to publish can lead to errors, misinformation, and damage to both the journalist\'s reputation and the public\'s trust.\n\nI\'ve learned that the key is to establish clear processes and standards. For breaking news, we focus on getting the basic facts right first - who, what, when, where. We publish these essential details quickly, then update with more information as it becomes available.\n\nWe also rely heavily on trusted sources and official channels. While social media can provide early indicators of breaking news, we always verify information through official sources before publishing.\n\nThe most important lesson I\'ve learned is that it\'s better to be second with accurate information than first with incorrect information. Our readers trust us to get it right, and that trust is more valuable than any number of clicks or shares.',
        category: 'Opinion',
        author: 'Callum Smith',
        imageUrl: 'https://via.placeholder.com/600x300',
        tags: ['journalism', 'ethics', 'accuracy', 'opinion'],
        publishDate: '2024-01-05',
        readTime: '7 min read',
        views: 280,
        likes: 15,
        featured: false
    }
];

const trendingTopics = [
    { title: 'Climate Summit Results', shares: '2.5k', rank: 1 },
    { title: 'Tech Stock Surge', shares: '1.8k', rank: 2 },
    { title: 'Sports Championship', shares: '1.2k', rank: 3 },
    { title: 'AI Breakthrough', shares: '980', rank: 4 },
    { title: 'Health Study', shares: '750', rank: 5 }
];

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');
const pageTitle = document.getElementById('pageTitle');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    populateHomePage();
    populateBreakingNews();
    populatePolitics();
    populateTechnology();
    populateSports();
    populateLifestyle();
    populateBlog();
    setupEventListeners();
    setupAllButtonHandlers();
});

// Navigation functionality
function initializeNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked nav item
            this.parentElement.classList.add('active');
            
            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the corresponding content section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Update page title
                const linkText = this.querySelector('span').textContent;
                pageTitle.textContent = linkText;
            }
        });
    });
}

// Mobile menu toggle
if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 1024) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// Content Management Functions
function populateHomePage() {
    const featuredArticle = sampleArticles.find(article => article.featured);
    if (featuredArticle) {
        updateFeaturedArticle(featuredArticle);
    }
    
    populateNewsGrid();
    populateTrendingTopics();
    populateBlogSidebar();
}

function updateFeaturedArticle(article) {
    const featuredImage = document.querySelector('.featured-article .article-image img');
    const featuredTitle = document.querySelector('.featured-article h2');
    const featuredExcerpt = document.querySelector('.featured-article .article-excerpt');
    const featuredMeta = document.querySelector('.featured-article .article-meta');
    
    if (featuredImage) featuredImage.src = article.imageUrl;
    if (featuredTitle) featuredTitle.textContent = article.title;
    if (featuredExcerpt) featuredExcerpt.textContent = article.excerpt;
    if (featuredMeta) {
        featuredMeta.innerHTML = `
            <span class="author">By ${article.author}</span>
            <span class="date">${formatTimeAgo(article.publishDate)}</span>
            <span class="read-time">${article.readTime}</span>
        `;
    }
}

function populateNewsGrid() {
    const newsGrid = document.querySelector('.news-grid');
    if (!newsGrid) return;
    
    const recentArticles = sampleArticles.filter(article => !article.featured).slice(0, 4);
    
    newsGrid.innerHTML = '';
    recentArticles.forEach(article => {
        const newsCard = createNewsCard(article);
        newsGrid.appendChild(newsCard);
    });
}

function createNewsCard(article) {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `
        <div class="news-image">
            <img src="${article.imageUrl}" alt="${article.title}" />
            <div class="news-category">${article.category}</div>
        </div>
        <div class="news-content">
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <div class="news-meta">
                <span class="author">By ${article.author}</span>
                <span class="date">${formatTimeAgo(article.publishDate)}</span>
            </div>
        </div>
    `;
    return card;
}

function populateTrendingTopics() {
    const trendingList = document.querySelector('.trending-list');
    if (!trendingList) return;
    
    trendingList.innerHTML = '';
    trendingTopics.forEach(topic => {
        const item = document.createElement('div');
        item.className = 'trending-item';
        item.innerHTML = `
            <span class="trending-number">${topic.rank}</span>
            <div class="trending-content">
                <h4>${topic.title}</h4>
                <p>${topic.shares} shares</p>
            </div>
        `;
        trendingList.appendChild(item);
    });
}

function populateBlogSidebar() {
    const blogList = document.querySelector('.blog-list');
    if (!blogList) return;
    
    const recentPosts = sampleBlogPosts.slice(0, 2);
    blogList.innerHTML = '';
    recentPosts.forEach(post => {
        const item = document.createElement('div');
        item.className = 'blog-item';
        item.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.excerpt}</p>
            <span class="blog-date">${formatTimeAgo(post.publishDate)}</span>
        `;
        blogList.appendChild(item);
    });
}

function populateBreakingNews() {
    const breakingGrid = document.querySelector('.breaking-news-grid');
    if (!breakingGrid) return;
    
    const breakingArticles = sampleArticles.filter(article => article.category === 'Breaking News');
    breakingGrid.innerHTML = '';
    breakingArticles.forEach(article => {
        const breakingCard = createBreakingCard(article);
        breakingGrid.appendChild(breakingCard);
    });
}

function createBreakingCard(article) {
    const card = document.createElement('div');
    card.className = 'breaking-article';
    card.innerHTML = `
        <div class="breaking-image">
            <img src="${article.imageUrl}" alt="${article.title}" />
            <div class="breaking-badge">BREAKING</div>
        </div>
        <div class="breaking-content">
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <div class="breaking-meta">
                <span class="author">By ${article.author}</span>
                <span class="time">${formatTimeAgo(article.publishDate)}</span>
                <span class="views">${article.views} views</span>
            </div>
        </div>
    `;
    return card;
}

function populatePolitics() {
    const politicsGrid = document.querySelector('.politics-grid');
    if (!politicsGrid) return;
    
    const politicsArticles = sampleArticles.filter(article => article.category === 'Politics');
    politicsGrid.innerHTML = '';
    politicsArticles.forEach(article => {
        const politicsCard = createPoliticsCard(article);
        politicsGrid.appendChild(politicsCard);
    });
}

function createPoliticsCard(article) {
    const card = document.createElement('div');
    card.className = 'politics-article';
    card.innerHTML = `
        <div class="politics-image">
            <img src="${article.imageUrl}" alt="${article.title}" />
            <div class="politics-category">${article.category}</div>
        </div>
        <div class="politics-content">
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <div class="politics-meta">
                <span class="author">By ${article.author}</span>
                <span class="date">${formatTimeAgo(article.publishDate)}</span>
                <span class="read-time">${article.readTime}</span>
            </div>
            <div class="politics-tags">
                ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    return card;
}

function populateTechnology() {
    const techGrid = document.querySelector('.tech-grid');
    if (!techGrid) return;
    
    const techArticles = sampleArticles.filter(article => article.category === 'Technology');
    techGrid.innerHTML = '';
    techArticles.forEach(article => {
        const techCard = createTechCard(article);
        techGrid.appendChild(techCard);
    });
}

function createTechCard(article) {
    const card = document.createElement('div');
    card.className = 'tech-article';
    card.innerHTML = `
        <div class="tech-image">
            <img src="${article.imageUrl}" alt="${article.title}" />
            <div class="tech-category">${article.category}</div>
        </div>
        <div class="tech-content">
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <div class="tech-meta">
                <span class="author">By ${article.author}</span>
                <span class="date">${formatTimeAgo(article.publishDate)}</span>
                <span class="read-time">${article.readTime}</span>
            </div>
            <div class="tech-tags">
                ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    return card;
}

function populateSports() {
    const sportsGrid = document.querySelector('.sports-grid');
    if (!sportsGrid) return;
    
    const sportsArticles = sampleArticles.filter(article => article.category === 'Sports');
    sportsGrid.innerHTML = '';
    sportsArticles.forEach(article => {
        const sportsCard = createSportsCard(article);
        sportsGrid.appendChild(sportsCard);
    });
}

function createSportsCard(article) {
    const card = document.createElement('div');
    card.className = 'sports-article';
    card.innerHTML = `
        <div class="sports-image">
            <img src="${article.imageUrl}" alt="${article.title}" />
            <div class="sports-category">${article.category}</div>
        </div>
        <div class="sports-content">
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <div class="sports-meta">
                <span class="author">By ${article.author}</span>
                <span class="date">${formatTimeAgo(article.publishDate)}</span>
                <span class="read-time">${article.readTime}</span>
            </div>
        </div>
    `;
    return card;
}

function populateLifestyle() {
    const lifestyleGrid = document.querySelector('.lifestyle-grid');
    if (!lifestyleGrid) return;
    
    const lifestyleArticles = sampleArticles.filter(article => article.category === 'Lifestyle');
    lifestyleGrid.innerHTML = '';
    lifestyleArticles.forEach(article => {
        const lifestyleCard = createLifestyleCard(article);
        lifestyleGrid.appendChild(lifestyleCard);
    });
}

function createLifestyleCard(article) {
    const card = document.createElement('div');
    card.className = 'lifestyle-article';
    card.innerHTML = `
        <div class="lifestyle-image">
            <img src="${article.imageUrl}" alt="${article.title}" />
            <div class="lifestyle-category">${article.category}</div>
        </div>
        <div class="lifestyle-content">
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <div class="lifestyle-meta">
                <span class="author">By ${article.author}</span>
                <span class="date">${formatTimeAgo(article.publishDate)}</span>
                <span class="read-time">${article.readTime}</span>
            </div>
            <div class="lifestyle-tags">
                ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    return card;
}

function populateBlog() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;
    
    blogGrid.innerHTML = '';
    sampleBlogPosts.forEach(post => {
        const blogCard = createBlogCard(post);
        blogGrid.appendChild(blogCard);
    });
}

function createBlogCard(post) {
    const card = document.createElement('div');
    card.className = 'blog-post';
    card.innerHTML = `
        <div class="blog-image">
            <img src="${post.imageUrl}" alt="${post.title}" />
            <div class="blog-category">${post.category}</div>
        </div>
        <div class="blog-content">
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <div class="blog-meta">
                <span class="author">By ${post.author}</span>
                <span class="date">${formatTimeAgo(post.publishDate)}</span>
                <span class="read-time">${post.readTime}</span>
            </div>
            <div class="blog-excerpt">
                <p>"${post.content.substring(0, 150)}..."</p>
            </div>
            <div class="blog-actions">
                <button class="btn-secondary" onclick="viewBlogPost('${post.id}')">Read More</button>
                <button class="btn-icon" onclick="likeBlogPost('${post.id}')"><i class="fas fa-heart"></i></button>
                <button class="btn-icon" onclick="shareBlogPost('${post.id}')"><i class="fas fa-share"></i></button>
            </div>
        </div>
    `;
    return card;
}

// Utility Functions
function formatTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return 'Yesterday';
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)} days ago`;
    return date.toLocaleDateString('en-GB');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
}

// Content Management Functions
function addNewArticle(articleData) {
    const newArticle = {
        id: `ART-${Date.now()}`,
        title: articleData.title,
        excerpt: articleData.excerpt,
        content: articleData.content,
        category: articleData.category,
        author: articleData.author,
        imageUrl: articleData.imageUrl || 'https://via.placeholder.com/500x300',
        tags: articleData.tags ? articleData.tags.split(',').map(tag => tag.trim()) : [],
        publishDate: new Date().toISOString().split('T')[0],
        readTime: calculateReadTime(articleData.content),
        views: 0,
        featured: false
    };
    
    sampleArticles.unshift(newArticle);
    refreshAllContent();
    showNotification('Article published successfully!', 'success');
}

function addNewBlogPost(blogData) {
    const newPost = {
        id: `BLOG-${Date.now()}`,
        title: blogData.title,
        excerpt: blogData.excerpt,
        content: blogData.content,
        category: blogData.category,
        author: blogData.author,
        imageUrl: blogData.imageUrl || 'https://via.placeholder.com/600x300',
        tags: blogData.tags ? blogData.tags.split(',').map(tag => tag.trim()) : [],
        publishDate: new Date().toISOString().split('T')[0],
        readTime: calculateReadTime(blogData.content),
        views: 0,
        likes: 0,
        featured: false
    };
    
    sampleBlogPosts.unshift(newPost);
    refreshAllContent();
    showNotification('Blog post published successfully!', 'success');
}

function calculateReadTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
}

function refreshAllContent() {
    populateHomePage();
    populateBreakingNews();
    populatePolitics();
    populateTechnology();
    populateSports();
    populateLifestyle();
    populateBlog();
}

function editArticle(articleId) {
    const article = sampleArticles.find(a => a.id === articleId);
    if (!article) return;
    
    // Populate edit form
    document.getElementById('editArticleId').value = article.id;
    document.getElementById('editArticleTitle').value = article.title;
    document.getElementById('editArticleCategory').value = article.category;
    document.getElementById('editArticleAuthor').value = article.author;
    document.getElementById('editArticleExcerpt').value = article.excerpt;
    document.getElementById('editArticleContent').value = article.content;
    document.getElementById('editArticleImageUrl').value = article.imageUrl;
    document.getElementById('editArticleTags').value = article.tags.join(', ');
    
    openModal('editArticleModal');
}

function updateArticle(articleData) {
    const articleIndex = sampleArticles.findIndex(a => a.id === articleData.articleId);
    if (articleIndex === -1) return;
    
    sampleArticles[articleIndex] = {
        ...sampleArticles[articleIndex],
        title: articleData.title,
        category: articleData.category,
        author: articleData.author,
        excerpt: articleData.excerpt,
        content: articleData.content,
        imageUrl: articleData.imageUrl,
        tags: articleData.tags ? articleData.tags.split(',').map(tag => tag.trim()) : [],
        readTime: calculateReadTime(articleData.content)
    };
    
    refreshAllContent();
    showNotification('Article updated successfully!', 'success');
}

function deleteArticle(articleId) {
    if (confirm('Are you sure you want to delete this article?')) {
        const articleIndex = sampleArticles.findIndex(a => a.id === articleId);
        if (articleIndex > -1) {
            sampleArticles.splice(articleIndex, 1);
            refreshAllContent();
            showNotification('Article deleted successfully!', 'success');
        }
    }
}

function viewArticle(articleId) {
    const article = sampleArticles.find(a => a.id === articleId);
    if (!article) return;
    
    // Populate view modal
    document.getElementById('viewArticleImage').src = article.imageUrl;
    document.getElementById('viewArticleTitle').textContent = article.title;
    document.getElementById('viewArticleAuthor').textContent = `By ${article.author}`;
    document.getElementById('viewArticleDate').textContent = formatTimeAgo(article.publishDate);
    document.getElementById('viewArticleCategory').textContent = article.category;
    document.getElementById('viewArticleExcerpt').textContent = article.excerpt;
    document.getElementById('viewArticleContent').innerHTML = article.content.replace(/\n/g, '<br>');
    
    // Populate tags
    const tagsContainer = document.getElementById('viewArticleTags');
    tagsContainer.innerHTML = article.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    // Store current article ID for edit functionality
    window.currentArticleId = articleId;
    
    openModal('viewArticleModal');
}

function viewBlogPost(postId) {
    const post = sampleBlogPosts.find(p => p.id === postId);
    if (!post) return;
    
    // For now, just show a notification. In a real app, this would open a full blog post view
    showNotification(`Opening blog post: ${post.title}`, 'info');
}

function likeBlogPost(postId) {
    const post = sampleBlogPosts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        refreshAllContent();
        showNotification('Post liked!', 'success');
    }
}

function shareBlogPost(postId) {
    const post = sampleBlogPosts.find(p => p.id === postId);
    if (post) {
        // In a real app, this would open sharing options
        showNotification(`Sharing: ${post.title}`, 'info');
    }
}

function editCurrentArticle() {
    closeModal('viewArticleModal');
    if (window.currentArticleId) {
        editArticle(window.currentArticleId);
    }
}

// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Lead management functions
function viewLead(leadId) {
    const lead = sampleLeads.find(l => l.id === leadId);
    if (lead) {
        // Populate the view modal with lead data
        document.getElementById('viewLeadId').textContent = lead.id;
        document.getElementById('viewLeadName').textContent = `${lead.firstName} ${lead.lastName}`;
        document.getElementById('viewLeadEmail').textContent = lead.email;
        document.getElementById('viewLeadPhone').textContent = lead.phone;
        document.getElementById('viewLeadAddress').textContent = lead.address;
        document.getElementById('viewLeadPropertyType').textContent = lead.propertyType;
        document.getElementById('viewLeadGrantType').textContent = lead.grantType;
        document.getElementById('viewLeadStatus').innerHTML = `<span class="lead-status ${getStatusClass(lead.status)}">${lead.status}</span>`;
        document.getElementById('viewLeadAssignedTo').textContent = lead.assignedTo;
        document.getElementById('viewLeadCreatedDate').textContent = formatDate(lead.createdDate);
        
        // Store the current lead ID for edit functionality
        window.currentLeadId = leadId;
        
        // Open the view modal
        openModal('viewLeadModal');
    }
}

function editLead(leadId) {
    const lead = sampleLeads.find(l => l.id === leadId);
    if (lead) {
        // Populate the edit form with lead data
        document.getElementById('editLeadId').value = lead.id;
        document.getElementById('editFirstName').value = lead.firstName;
        document.getElementById('editLastName').value = lead.lastName;
        document.getElementById('editEmail').value = lead.email;
        document.getElementById('editPhone').value = lead.phone;
        document.getElementById('editAddress').value = lead.address;
        document.getElementById('editPropertyType').value = lead.propertyType;
        document.getElementById('editGrantType').value = lead.grantType;
        document.getElementById('editStatus').value = lead.status;
        document.getElementById('editAssignedTo').value = lead.assignedTo;
        document.getElementById('editNotes').value = lead.notes || '';
        
        // Open the edit modal
        openModal('editLeadModal');
    }
}

function editCurrentLead() {
    // Close view modal and open edit modal for current lead
    closeModal('viewLeadModal');
    if (window.currentLeadId) {
        editLead(window.currentLeadId);
    }
}

function deleteLead(leadId) {
    if (confirm('Are you sure you want to delete this lead?')) {
        const index = sampleLeads.findIndex(l => l.id === leadId);
        if (index > -1) {
            sampleLeads.splice(index, 1);
            populateLeadsTable();
            updateStats();
            showNotification('Lead deleted successfully', 'success');
        }
    }
}

// Update dashboard stats
function updateStats() {
    const totalLeads = sampleLeads.length;
    const activeSubcontractors = sampleSubcontractors.filter(s => s.status === 'Active').length;
    const activeProjects = sampleLeads.filter(l => l.status === 'Work in Progress').length;
    
    // Update stats in the dashboard
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length >= 3) {
        statNumbers[0].textContent = totalLeads;
        statNumbers[1].textContent = activeSubcontractors;
        statNumbers[2].textContent = activeProjects;
    }
}

// Search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            filterLeads(searchTerm);
        });
    }
}

function filterLeads(searchTerm) {
    const rows = leadsTableBody.querySelectorAll('tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Filter functionality
function setupFilters() {
    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            applyFilters();
        });
    });
}

function applyFilters() {
    const statusFilter = document.querySelector('select[class*="filter-select"]').value;
    const propertyTypeFilter = document.querySelectorAll('select[class*="filter-select"]')[1]?.value;
    
    const rows = leadsTableBody.querySelectorAll('tr');
    
    rows.forEach(row => {
        const status = row.querySelector('.lead-status')?.textContent;
        const propertyType = row.cells[3]?.textContent;
        
        let showRow = true;
        
        if (statusFilter && status !== statusFilter) {
            showRow = false;
        }
        
        if (propertyTypeFilter && propertyType !== propertyTypeFilter) {
            showRow = false;
        }
        
        row.style.display = showRow ? '' : 'none';
    });
}

// Form handling
function setupFormHandling() {
    const forms = document.querySelectorAll('.modal-form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this);
        });
    });
}

function handleFormSubmit(form) {
    const data = {};
    
    // Get all form inputs
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        if (input.type === 'checkbox') {
            // Handle checkboxes - collect all checked values for arrays
            if (input.name === 'specializations' || input.name === 'certifications') {
                if (!data[input.name]) {
                    data[input.name] = [];
                }
                if (input.checked) {
                    data[input.name].push(input.value);
                }
            } else {
                data[input.name || input.value] = input.checked;
            }
        } else {
            data[input.name] = input.value;
        }
    });
    
    // Close the modal
    const modal = form.closest('.modal');
    if (modal) {
        closeModal(modal.id);
    }
    
    // Handle different form types
    if (form.closest('#addArticleModal')) {
        addNewArticle(data);
    } else if (form.closest('#editArticleModal')) {
        updateArticle(data);
    } else if (form.closest('#addBlogModal')) {
        addNewBlogPost(data);
    } else {
        // Default handling for other forms
        console.log('Form submitted:', data);
        showNotification('Data saved successfully!', 'success');
    }
}

// Setup all button handlers
function setupAllButtonHandlers() {
    // Dashboard "View All" buttons
    document.addEventListener('click', function(e) {
        const button = e.target.closest('button');
        if (!button) return;
        
        const buttonText = button.textContent.trim();
        
        // Handle "View All" buttons
        if (buttonText === 'View All') {
            const section = button.closest('.dashboard-card');
            if (section) {
                const cardTitle = section.querySelector('h3').textContent;
                if (cardTitle.includes('Leads')) {
                    document.querySelector('a[href="#leads"]').click();
                } else if (cardTitle.includes('Subcontractor')) {
                    document.querySelector('a[href="#subcontractors"]').click();
                }
            }
        }
        
        // Handle "View Details" buttons
        if (buttonText === 'View Details') {
            const card = button.closest('.subcontractor-card, .project-card');
            if (card) {
                const title = card.querySelector('h3, h4')?.textContent;
                if (card.classList.contains('subcontractor-card')) {
                    viewSubcontractor(title);
                } else if (card.classList.contains('project-card')) {
                    viewProject(title);
                }
            }
        }
        
        // Handle "Assign Project" buttons
        if (buttonText === 'Assign Project') {
            const card = button.closest('.subcontractor-card');
            if (card) {
                const companyName = card.querySelector('h3')?.textContent;
                assignProjectToSubcontractor(companyName);
            }
        }
        
        // Handle "Update Progress" buttons
        if (buttonText === 'Update Progress') {
            const card = button.closest('.project-card');
            if (card) {
                const projectId = card.querySelector('h3')?.textContent;
                updateProjectProgress(projectId);
            }
        }
        
        // Handle "Create Project" button
        if (buttonText === 'Create Project') {
            createNewProject();
        }
        
        // Handle "Export Report" button
        if (buttonText === 'Export Report') {
            exportData();
        }
        
        // Handle "Add User" button
        if (buttonText === 'Add User') {
            openModal('addUserModal');
        }
        
        // Handle "Manage Permissions" button
        if (buttonText === 'Manage Permissions') {
            openModal('managePermissionsModal');
        }
    });
    
    // Handle user menu click
    const userMenu = document.querySelector('.user-menu');
    if (userMenu) {
        userMenu.addEventListener('click', function() {
            showNotification('User menu clicked - would show dropdown in real app', 'info');
        });
    }
    
    // Handle recent lead action buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.lead-actions .btn-icon')) {
            const button = e.target.closest('.btn-icon');
            const leadItem = button.closest('.lead-item');
            const leadName = leadItem.querySelector('h4')?.textContent;
            
            if (button.querySelector('.fa-eye')) {
                // Find the lead by name and view it
                const lead = sampleLeads.find(l => `${l.firstName} ${l.lastName}` === leadName);
                if (lead) {
                    viewLead(lead.id);
                }
            } else if (button.querySelector('.fa-edit')) {
                // Find the lead by name and edit it
                const lead = sampleLeads.find(l => `${l.firstName} ${l.lastName}` === leadName);
                if (lead) {
                    editLead(lead.id);
                }
            }
        }
    });
}

// Setup all event listeners
function setupEventListeners() {
    setupSearch();
    setupFilters();
    setupFormHandling();
}

// Export functionality
function exportContent() {
    const data = {
        articles: sampleArticles,
        blogPosts: sampleBlogPosts,
        trendingTopics: trendingTopics,
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `news-website-content-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Content exported successfully!', 'success');
}

function exportData() {
    exportContent(); // Alias for backward compatibility
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    if (type === 'success') {
        notification.style.backgroundColor = '#059669';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#dc2626';
    } else {
        notification.style.backgroundColor = '#2563eb';
    }
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-bar input');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            closeModal(activeModal.id);
        }
    }
});

// Auto-save functionality (simulated)
function autoSave() {
    // In a real application, this would save data to localStorage or send to server
    console.log('Auto-saving data...');
}

// Set up auto-save every 30 seconds
setInterval(autoSave, 30000);

// Performance monitoring
function logPerformance() {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
}

// Log performance on page load
window.addEventListener('load', logPerformance);

// Subcontractor management functions
function viewSubcontractor(companyName) {
    const subcontractor = sampleSubcontractors.find(s => s.companyName === companyName);
    if (subcontractor) {
        // Populate the view modal with subcontractor data
        document.getElementById('viewSubCompanyName').textContent = subcontractor.companyName;
        document.getElementById('viewSubContactPerson').textContent = subcontractor.contactPerson;
        document.getElementById('viewSubPhone').textContent = subcontractor.phone;
        document.getElementById('viewSubEmail').textContent = subcontractor.email;
        document.getElementById('viewSubRating').textContent = `${subcontractor.rating}/5`;
        document.getElementById('viewSubActiveProjects').textContent = subcontractor.activeProjects;
        document.getElementById('viewSubCompletedProjects').textContent = subcontractor.completedProjects;
        document.getElementById('viewSubStatus').innerHTML = `<span class="status-badge ${subcontractor.status.toLowerCase()}">${subcontractor.status}</span>`;
        
        // Populate specializations
        const specializationsContainer = document.getElementById('viewSubSpecializations');
        specializationsContainer.innerHTML = '';
        subcontractor.specializations.forEach(spec => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = spec;
            specializationsContainer.appendChild(tag);
        });
        
        // Populate certifications
        const certificationsContainer = document.getElementById('viewSubCertifications');
        certificationsContainer.innerHTML = '';
        subcontractor.certifications.forEach(cert => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = cert;
            certificationsContainer.appendChild(tag);
        });
        
        // Store the current subcontractor ID for edit functionality
        window.currentSubcontractorId = subcontractor.id;
        
        // Open the view modal
        openModal('viewSubcontractorModal');
    }
}

function editSubcontractor(subcontractorId) {
    const subcontractor = sampleSubcontractors.find(s => s.id === subcontractorId);
    if (subcontractor) {
        // Populate the edit form with subcontractor data
        document.getElementById('editSubId').value = subcontractor.id;
        document.getElementById('editSubCompanyName').value = subcontractor.companyName;
        document.getElementById('editSubContactPerson').value = subcontractor.contactPerson;
        document.getElementById('editSubPhone').value = subcontractor.phone;
        document.getElementById('editSubEmail').value = subcontractor.email;
        document.getElementById('editSubRating').value = subcontractor.rating;
        document.getElementById('editSubStatus').value = subcontractor.status;
        
        // Set checkboxes for specializations
        const specCheckboxes = document.querySelectorAll('#editSubcontractorModal input[name="specializations"]');
        specCheckboxes.forEach(checkbox => {
            checkbox.checked = subcontractor.specializations.includes(checkbox.value);
        });
        
        // Set checkboxes for certifications
        const certCheckboxes = document.querySelectorAll('#editSubcontractorModal input[name="certifications"]');
        certCheckboxes.forEach(checkbox => {
            checkbox.checked = subcontractor.certifications.includes(checkbox.value);
        });
        
        // Open the edit modal
        openModal('editSubcontractorModal');
    }
}

function editCurrentSubcontractor() {
    // Close view modal and open edit modal for current subcontractor
    closeModal('viewSubcontractorModal');
    if (window.currentSubcontractorId) {
        editSubcontractor(window.currentSubcontractorId);
    }
}

// Project management functions
function createNewProject() {
    // Generate project ID
    const projectId = `ECO4-PROJ-${String(Date.now()).slice(-6)}`;
    document.getElementById('createProjectId').value = projectId;
    
    // Populate customer dropdown
    const customerSelect = document.getElementById('createProjectCustomer');
    customerSelect.innerHTML = '<option value="">Select Customer</option>';
    sampleLeads.forEach(lead => {
        const option = document.createElement('option');
        option.value = lead.id;
        option.textContent = `${lead.firstName} ${lead.lastName} - ${lead.address}`;
        customerSelect.appendChild(option);
    });
    
    // Populate subcontractor dropdown
    const subcontractorSelect = document.getElementById('createProjectSubcontractor');
    subcontractorSelect.innerHTML = '<option value="">Select Subcontractor</option>';
    sampleSubcontractors.forEach(sub => {
        const option = document.createElement('option');
        option.value = sub.id;
        option.textContent = sub.companyName;
        subcontractorSelect.appendChild(option);
    });
    
    // Set default dates
    const today = new Date().toISOString().split('T')[0];
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    const nextMonthStr = nextMonth.toISOString().split('T')[0];
    
    document.getElementById('createProjectStartDate').value = today;
    document.getElementById('createProjectEstimatedCompletion').value = nextMonthStr;
    
    openModal('createProjectModal');
}

function updateProjectProgress(projectId) {
    document.getElementById('updateProjectId').value = projectId;
    document.getElementById('updateProjectIdDisplay').value = projectId;
    document.getElementById('updateProjectUpdatedDate').value = new Date().toISOString().split('T')[0];
    openModal('updateProjectModal');
}

function assignProjectToSubcontractor(companyName) {
    document.getElementById('assignProjectSubcontractor').value = companyName;
    document.getElementById('assignProjectDate').value = new Date().toISOString().split('T')[0];
    
    // Populate project dropdown with unassigned leads
    const projectSelect = document.getElementById('assignProjectSelect');
    projectSelect.innerHTML = '<option value="">Select Project to Assign</option>';
    sampleLeads.filter(lead => lead.status === 'New' || lead.status === 'Pending Assessment').forEach(lead => {
        const option = document.createElement('option');
        option.value = lead.id;
        option.textContent = `${lead.id} - ${lead.firstName} ${lead.lastName} (${lead.grantType})`;
        projectSelect.appendChild(option);
    });
    
    openModal('assignProjectModal');
}

function viewProject(projectId) {
    showNotification(`Viewing project: ${projectId}`, 'info');
    // In a real app, this would open a project details modal
}

// User management functions
function savePermissions() {
    const selectedUser = document.getElementById('permissionsUserSelect').value;
    if (!selectedUser) {
        showNotification('Please select a user first', 'error');
        return;
    }
    
    // Collect all checked permissions
    const permissions = [];
    document.querySelectorAll('#managePermissionsModal input[type="checkbox"]:checked').forEach(checkbox => {
        permissions.push(checkbox.value);
    });
    
    console.log(`Saving permissions for ${selectedUser}:`, permissions);
    showNotification('Permissions saved successfully!', 'success');
    closeModal('managePermissionsModal');
}

// Export functions to global scope for HTML onclick handlers
window.openModal = openModal;
window.closeModal = closeModal;
window.viewArticle = viewArticle;
window.editArticle = editArticle;
window.deleteArticle = deleteArticle;
window.editCurrentArticle = editCurrentArticle;
window.viewBlogPost = viewBlogPost;
window.likeBlogPost = likeBlogPost;
window.shareBlogPost = shareBlogPost;
window.addNewArticle = addNewArticle;
window.addNewBlogPost = addNewBlogPost;
window.updateArticle = updateArticle;
window.refreshAllContent = refreshAllContent;
window.exportContent = exportContent;
window.exportData = exportData;
window.showNotification = showNotification;

