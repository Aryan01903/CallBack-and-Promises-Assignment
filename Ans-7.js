function fetchMultipleData(urls){
    const Promises=urls.map((url)=>
        fetch(url).then((response)=>
            response.json())
    );
    return Promise.all(Promises);
}

const urlsToFetch=[
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3"
];

fetchMultipleData(urlsToFetch).then((responses)=>{
    console.log(responses);
})