console.log('Happy Coding!!! 👨‍💻👨‍💻👨‍💻');


const limit = 'limit=3';
const pages = 'page=2';
const API_URL = `https://api.thecatapi.com/v1/images/search?${limit}&${pages}`;

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
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;

}

reload();