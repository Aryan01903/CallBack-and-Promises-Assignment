function fetchUserDataAndPosts(userId){
    return fetch("https://jsonplaceholder.typicode.com/users/$%7BuserId")
    .then((response)=>response.json())
    .then((userData)=>{
        return fetch(
            "https://jsonplaceholder.typicode.com/posts?userId=$%7BuserId"
        )
            .then((response)=>response.json())
            .then((posts)=>({user:userData,posts}))
        
    });
}

fetchUserDataAndPosts(1).then((result)=>{
    console.log(result);
})