async function load() {
    let url = 'https://milhao.net/wp-json/';
    let obj = await (await fetch(url)).json();
    console.log(obj);
}

load();