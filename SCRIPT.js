// let users = [
//     {
//         "firstName": "Eli",
//         "lastName": "Rotenberg",
//         "password": "321321",
//         "nick": "eroten"
//     },
//     {
//         "firstName": "Nadav",
//         "lastName": "Bar On",
//         "password": "1qa2ws3ed",
//         "nick": "Nadavbar"
//     },
//     {
//         "firstName": "Nikolay",
//         "lastName": "Okhman",
//         "password": "aaaa",
//         "nick": "Nick"
//     }
// ];
// localStorage.setItem('usersStorage', JSON.stringify(users));
class Render {
    #users;
    constructor() {
        this.#users = JSON.parse(localStorage.getItem('usersStorage'));
    }
    renderHTML() {
        this.#users.forEach((user)=>{
            let newContainer = document.createElement('div');
            let leftSide = document.createElement('div');
            let rightSide = document.createElement('div'); //create different divs. 
    
            newContainer.setAttribute('class','newContainer');
            leftSide.setAttribute('class','leftSide');
            rightSide.setAttribute('class','rightSide'); //define classes for each div.
    
            let text1 = document.createTextNode(`First name: ${user.firstName}, Surname: ${user.lastName}`);
            let text2 = document.createTextNode(`Password: ${user.password}, Nickname: ${user.nick}`); //define the texts.

            leftSide.appendChild(text1);
            rightSide.appendChild(text2); //inserting the texts into the divs.

            newContainer.appendChild(leftSide);
            newContainer.appendChild(rightSide); //inserting the small divs into a bigger one.

            document.body.appendChild(newContainer);
        });

    }
}

let newUsers = new Render();
newUsers.renderHTML();