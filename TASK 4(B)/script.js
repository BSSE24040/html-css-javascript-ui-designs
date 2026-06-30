
const blogPosts = [
    {
        title: "The Future of JavaScript",
        image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&w=500",
        description: "JavaScript continues to evolve rapidly. Let's explore what's coming next in the ecosystem.",
        tag: "JavaScript"
    },
    {
        title: "Dark Mode UI Design",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500",
        description: "Dark themes are trending everywhere. Learn how to design clean and modern dark interfaces.",
        tag: "Design"
    },
    {
        title: "Mastering Flexbox",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=500",
        description: "Flexbox makes layout design easier. Understand alignment, spacing, and responsiveness.",
        tag: "CSS"
    },
    {
        title: "Web Performance Tips",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500",
        description: "Speed matters. Learn the best practices for optimizing your website's load times.",
        tag: "Performance"
    },
    {
        title: "Node.js Architecture",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500",
        description: "Deep dive into how the V8 engine handles asynchronous operations in the background.",
        tag: "Backend"
    }
];

const blogList = document.getElementById('blog-list');

function renderBlogs() {
    blogList.innerHTML = blogPosts.map(post => `
        <div class="blog-card">
            <img src="${post.image}" alt="${post.title}" class="blog-image">
            <div class="blog-content">
                <span class="tag">${post.tag}</span>
                <h2 class="blog-title">${post.title}</h2>
                <p class="blog-desc">${post.description}</p>
                <a href="#" class="read-btn">Read Article</a>
            </div>
        </div>
    `).join('');
}

renderBlogs();