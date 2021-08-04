

document.getElementById('search_bar').addEventListener('click',showUserData)
 function showUserData() {
    let username = document.getElementById('find_user').value 
    let url = 'https://api.github.com/users/'+username
    fetch(url)
    .then(response => response.json())
    .then(data => { 
        if (data.message) {
            console.log('User NOT Found')
        }else {
        console.log(data); 
        }

        document.getElementById('res').innerHTML = `
        <img src = "${data.avatar_url}" style=" border-radius:50%">
        <p>${data.name}(${data.login}) </p>
        <p>${data.bio} </p>
        <p>${data.email} </p>
        <p>${data.email} </p>
        <p>${data.followers} </p>
        <p>${data.public_repos} </p>
        <p>${data.company} </p>
        <p>${data.hireable} </p>
        <p>${data.location} </p>


    
        
        `
        
    }).catch(error => {
        console.log(error);

        
    })
    
}


    
    // fetch(url).then(res=>res.json()).then(data=>{
        // console.log(data)
    // }).catch(e=>{
        // console.log(e)
    // })
    
