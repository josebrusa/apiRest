console.log('Happy Coding!!! 👨‍💻👨‍💻👨‍💻');



const API_URL = `https://api.thecatapi.com/v1/images/search?limit=2&api_key=1fd0747f-abfc-4c40-a7a3-844f8120454f`;
const API_URL_FAVOURITES = `https://api.thecatapi.com/v1/favourites?limit=200&api_key=1fd0747f-abfc-4c40-a7a3-844f8120454f`;
const API_URL_FAVDELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}?limit=20&api_key=1fd0747f-abfc-4c40-a7a3-844f8120454f`;

const errorStatus = document.getElementById('error');

// fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.querySelector('img')
//         img.src = data[0].url;
//         console.log(data);
//     });

// usando async / await


const loadRandomImg = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();

    console.log(res);
    if(res.status !== 200) {
        errorStatus.innerHTML = 'Error ' + `${res.status}`; 
    } else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
    
        img1.src = data[0].url;
        img2.src = data[1].url;

        btn1.onclick = () => saveFavouriteImg(data[0].id);
        btn2.onclick = () => saveFavouriteImg(data[1].id)
    }
}


async function loadFavouriteImg (){
    const res = await fetch(API_URL_FAVOURITES);
    const data = await res.json();
    console.log(res);
    if(res.status !== 200) {
        errorStatus.innerHTML = 'Error ' + `${res.status} :` +` ${data.message}`;
    } else {
        
        console.log(data);
        section.innerHTML = '';
        data.forEach(michi => {
            const section = document.getElementById('michisFavorite');
            const div = document.createElement('div');
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnText = document.createTextNode('DLike!')

            img.src = michi.image.url;
            btn.appendChild(btnText);
            btn.onclick = () => deleteFavouriteImg(michi.id);
            
            article.appendChild(img);
            article.appendChild(btn);
            div.appendChild(article)
            section.appendChild(div);
        });
    }
}

async function saveFavouriteImg(id){
    const res = await fetch(API_URL_FAVOURITES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_id: id,
        }),
    });

    const data = await res.json();
    
    if(res.status !== 200) {
        errorStatus.innerHTML = 'Error ' + `${res.status} ${data.message}`;
    } else {
        console.log('Gatito guardado');
        loadFavouriteImg();
    }
}

async function deleteFavouriteImg(id){
    const res = await fetch(API_URL_FAVDELETE(id),{
        method: 'DELETE',
    });
    const data = await res.json();

    if(res.status !== 200) {
        errorStatus.innerHTML = 'Error ' + `${res.status} ${data.message}`;
    } else {
        console.log('Michi eliminado');
        loadFavouriteImg();
    }
}



loadRandomImg();
loadFavouriteImg();