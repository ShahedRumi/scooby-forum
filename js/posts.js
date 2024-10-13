(async()=>{
    const posts = await fetchAPI('https://openapi.programming-hero.com/api/retro-forum/posts');
    postCards(posts.posts);
})();

const searchCategoryPosts = ()=>{
    searchPost(document.getElementById('postName').value);
}

const searchPost = async(category) =>{
    const post = await fetchAPI(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`);
    postCards(post.posts);
}

(async()=>{
    const posts = await fetchAPI('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    latestPostCards(posts);
})();