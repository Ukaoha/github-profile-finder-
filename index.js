let input = document.getElementById('find_user');
let button = document.getElementById('search_bar');
let image = document.getElementById('image-profile-finder');
let name = document.getElementById('name-profile-finder');
let username = document.getElementById('username-profile-finder');
let bio = document.getElementById('bio-profile-finder');
let followers = document.getElementById('followers-profile-finder');
let url = document.getElementById('url-profile-finder');

let client_id = '' ;
let client_secret = '';


let fetchusers = async () => {
    let api_cal = await fetch('htpps://api.github.com/users/${users}?client_id=${client_id}&client_secret=${client_secret}`'); 

    let data = await api_cal.json();

    return {data: data}


};
let showData = () => {
    fetchusers(input.value).then((response) => {
        console.log(response)
    })
};
























button.addEventListener ("click" , () => {
showData();
})