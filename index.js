const myContacts = [{
        id: 1,
        name: 'Alpha Avalon',
        phone: '+1 111 101010',
        email: 'alpha@avalon.org',
        favorite: true,
        rating: 9,
        tags: ['popular', 'cool']
    }, {
        id: 2,
        name: 'Betty Brave',
        phone: '+62 812 242424',
        email: 'betty@braverian.com'
    }, {
        id: 3,
        name: 'Gamma Gacurio',
        phone: '+63 813 363636',
        email: 'gamma@gacurio.dev '
    }

]

const showContact = (myContacts) => {
    for (let index = 0; index < myContacts.length; index++) {
        const contact = myContacts[index];
        console.log(`${contact.id}, ${contact.name}`)
    }
}
console.log('data awal')
showContact(myContacts)

const ferdi = {
    id: 4,
    name: 'Ferdi',
    phone: '+62 813 7803',
    email: 'ferdi@gmail.com'
}

const addContact = () => {
    myContacts.push(ferdi);
    showContact(myContacts)
}

const deleteId = () => {
    myContacts.pop();
    showContact(myContacts)
}

const filter1 = myContacts.filter((myContacts) => {
    if (myContacts.id == "1")
        return true;
    return false;
})
const filter2 = myContacts.filter((myContacts) => {
    if (myContacts.id == "2")
        return true;
    return false;
})
const filter3 = myContacts.filter((myContacts) => {
    if (myContacts.id == "3")
        return true;
    return false;
})

const testFilter = (myContacts) =>{
    if(myContacts.id =="1")
    return true;
    return false;
}