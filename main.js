
let wrapListUsers = document.createElement('div');
wrapListUsers.classList.add('wrapListUsers');
fetch('https://api.sampleapis.com/futurama/characters')
    .then(value => value.json())
    .then(users => {


        for (let user of users) {
            let blcUser = document.createElement('div');
            blcUser.classList.add('blcUser');

            blcUser.innerHTML = `id: ${user.id}; first name: ${user.name.first}; last name ${user.name.last}; - `;

            wrapListUsers.appendChild(blcUser);

            let a = document.createElement('a');
            a.classList.add('link');

            a.innerHTML = 'Info Full';
            a.href = `infoUser.html?infoU=${JSON.stringify(user)}`;


            blcUser.appendChild(a);
        }



        //console.log(users);


    })
document.body.appendChild(wrapListUsers);