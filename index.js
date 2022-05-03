console.log('Happy Coding!!! 👨‍💻👨‍💻👨‍💻');

const API_URL = 'https://api.thecatapi.com/v1/images/search';

// fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.querySelector('img')
//         img.src = data[0].url;
//         console.log(data);
//     });

// usando async / await

const reload = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data)
    const img = document.querySelector('img');
    img.src = data[0].url;

}

reload();