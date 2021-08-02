let input = document.querySelector("#find_user");
let button = document.querySelector("#search_bar");
let image = document.querySelector(".main-profile-image");
let name = document.querySelector(".main-profile-name ");
let username = document.querySelector(".main-profile-username");
let bio = document.querySelector(".main-profile-bio");
let followers = document.querySelector(".main-profile-followers ");
let url = document.querySelector(".main-profile-url ");



let client_id = "Iv1.e45425e4460b1664" ;
let client_secret = "471108d8d67a5495657c6561f32a35de60a651b1 ";


let fetchUsers = async(user) => {
    let api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    let data = await api_call.json();
    return{data}
};

let showData = () => {
    fetchUsers(input.value).then((response) => {
        console.log(response)

    })
}


button.addEventListener ("click" , () => {
showData();
})








// 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 = githubtoken
// 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

// Client ID: Iv1.e45425e4460b1664
// App ID: 129819
Client ID: Iv1.e45425e4460b1664



// 5b2e832063477f13ffc82fc4879c4d55d7cd6e6d = client_secret
