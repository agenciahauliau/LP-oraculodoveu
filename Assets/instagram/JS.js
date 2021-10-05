"use strict";

const token = "IGQVJVbS0taE1DRmMwbWdKQWdQbGRHTUxYb1NUZAWQzWVF0UUdnR1pYS24xU0RsOGdVdkFEajFwdDJHQlFqY3dQLXVCeHhkaGNRNVpjczl4aWRXTFpLbExhQlpsSll4My1CeTBzYXpZAdHM0a0dBUV93YQZDZD"

async function userInsta() {
    let url = `https://graph.instagram.com/me?fields=id,media_count,username,name,profile_picture&access_token=${token}`;
    let obj = await (await fetch(url)).json();
    let instagram = document.querySelector('.instagram .head')

    instagram.innerHTML += `
            <div class="avatar">
                <a href="https://www.instagram.com/${obj.username}" target="_blank" rel =“noopener noreferrer nofollow”> 
                    <img src="${obj.profile_picture}" alt="${obj.name}" title="${obj.name}"/>
                </a>
            </div>
            <div class="text">
               <h3>${obj.name}</h3>
               <p>${obj.username}</p>
            </div>`
}

async function mediaInsta() {
    let url = `https://graph.instagram.com/me/media?access_token=${token}&fields=media_url,media_type,caption,thumbnail_url,permalink,username,timestamp,children`;
    let obj = await (await fetch(url)).json();
    let instagram = document.querySelector('.instagram .medias')

    for (let post of obj.data.slice(0, 8)) {
        const tipo = post.media_type === "VIDEO" ?
            `<a href="${post.permalink}" target="_blank" rel =“noopener noreferrer nofollow”>
                <img src="${post.thumbnail_url}" alt="${post.caption}" title="${post.caption}" />
            </a>` :
            `<a href="${post.permalink}" target="_blank" rel =“noopener noreferrer nofollow”>
                <img src="${post.media_url}" alt="${post.caption}" title="${post.caption}" />
            </a>`

        instagram.innerHTML += `
              <div class="media">
                  ${tipo}
             </div>`
    }
}

userInsta()
mediaInsta()