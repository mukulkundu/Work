const postListContainer = document.querySelector('.posts-list-container');

function fetchUsingXHR(){
    const xhr =new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = () => {
        if(xhr.status == 200){
            displayResults(xhr.response);
        }

        else{
            console.log('Some error occured');
        }
    }
}

function displayResults(posts){
    postListContainer.innerHTML = posts.map(item => `
        <div class="post-item my-8 mx-4">
        <h3 class="text-2xl font-medium">${item.title}</h3>
        <p>${item.body}</p>
        </div>
        `).join("");
}

// fetchUsingXHR();


function fetchUsingFetchMethod(){
    const fetchRequest = fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'GET'
    });

    fetchRequest
    .then(response => response.json())
    .then(result => displayResults(result))
    .catch(e => {
        console.error(e);
    })
}

// fetchUsingFetchMethod();


async function fetchUsingAsyncAwait(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'GET'
    });

    const result = await response.json();

    displayResults(result);

    
}

fetchUsingAsyncAwait();