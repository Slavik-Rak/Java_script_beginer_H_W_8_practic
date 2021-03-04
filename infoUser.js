
let url = new URL(location.href);
let infoU = url.searchParams.get('infoU');
let userS = JSON.parse(infoU);

let wrapUser = document.createElement('div');
wrapUser.classList.add('wrapListUsers')

for (let keyUs in userS) {

    let userDiv = document.createElement('div');
    userDiv.classList.add('blcUser');

    if (typeof userS[keyUs] === 'object') {

        let k = userS[keyUs];

        if (keyUs === 'images') {

            let imgUs = document.createElement('img');
            imgUs.src = userS.images.main;
            userDiv.appendChild(imgUs)

        } else if (keyUs === 'sayings') {

            userDiv.classList.add('userDivSayings')

            for (let key in k) {
                userDiv.innerHTML += k[key] + ' <br> ';
            }

        } else {

            userDiv.innerText += keyUs + ' : ';
            for (let key in k) {
                userDiv.innerHTML += key + ': ' + k[key] + ' <br> ';
            }

        }

    } else {
        userDiv.innerText += keyUs + ': ' + userS[keyUs];
    }



    wrapUser.appendChild(userDiv)
}

document.body.appendChild(wrapUser);
