const fetchAPI = async(url) =>{
    const response = await fetch(url);
    const data = response.json();
    return data;
}

const postCards = (data)=>{
    if(data.length){
        const posts = data.map((post)=>`
            <div class="bg-gray-200 rounded-2xl p-6 flex gap-5">
                <div class="w-1/6 relative">
                    <img src="${post.image}" alt="" class="rounded-lg">
                    <div class="absolute -top-2 -right-2 w-4 h-4 rounded-full ${post.isActive?'bg-green-500':'bg-red-500'}"></div>
                </div>
                <div class="space-y-3 w-full">
                    <div class="flex gap-4">
                        <p>#${post.category}</p>
                        <p>Author: ${post.author.name}</p>
                    </div>
                    <h1 class="text-2xl font-bold">${post.title}</h1>
                    <p>${post.description}</p> 
                    <div class="divider"></div>
                    <div class="flex justify-between items-center">
                        <div class="flex gap-5">
                            <p><i class="fa-regular fa-message"></i> ${post.comment_count}</p>
                            <p><i class="fa-regular fa-eye"></i> ${post.view_count}</p>
                            <p><i class="fa-regular fa-clock"></i> ${post.posted_time} min</p>
                        </div>
                        <div onclick="addTitle('${post.description}','${post.view_count}')" class="w-7 h-7 flex justify-center items-center bg-primary text-white rounded-full p-1 cursor-pointer"><i class="fa-regular fa-envelope"></i></div>
                    </div>
                </div>
            </div>
        `).join("");
        document.getElementById('posts').innerHTML = posts;
    }
    else{
        document.getElementById('posts').innerHTML = `
            <div class="flex justify-center">
                <h1 class="text-3xl font-bold">No Data Found</h1>
            </div>
        `
    }

}

const latestPostCards = (data)=>{
    const posts = data.map((post)=>`
        <div class="p-5 rounded-xl space-y-4 shadow-xl">
            <img src="${post.cover_image}" alt="" class="rounded-xl">
            <p><i class="fa-regular fa-calendar"></i> ${post.author.posted_date || "No Publish Date"}</p>
            <h2 class="text-xl font-bold">${post.title}</h2>
            <p>${post.description}</p>
            <div class="flex items-center gap-5">
                <div class="p-1 rounded-full border border-primary w-1/6">
                    <img src="${post.profile_image}" alt="" class="rounded-full">
                </div>
                <div class="">
                    <h3 class="text-lg font-bold">${post.author.name}</h3>
                    <p>${post.author.designation || "Unknown"}</p>
                </div>
            </div>
        </div>
    `).join('');

    document.getElementById('latestPosts').innerHTML = posts;
}

const titles = [];
const addTitle = (title, views)=>{
    const div = document.createElement('div');
    div.classList.add('bg-white','flex','justify-between','p-4','rounded-xl','items-center');
    div.innerHTML = `
        <p class="text-xs w-3/4">${title}</p>
        <p class="text-xs"><i class="fa-regular fa-eye"></i> ${views}</p>
    `
    document.getElementById('titleShow').appendChild(div);
    titles.push(title);
    document.getElementById('counter').innerText = titles.length;
}