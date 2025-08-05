let phoneBooks = [];

function addContact(name, phone, email) {
    const contact = {
        name: name,
        phone: phone,
        email: email
    };
    phoneBooks.push(contact);
}

function displayContact() {
    if (phoneBooks.length === 0) {
        console.log("Rong.");
    } else {
        console.log("Danh sách liên hệ:");
        for (let contact of phoneBooks) {
            console.log(`- Tên: ${contact.name}`);
            console.log(`  SĐT: ${contact.phone}`);
            console.log(`  Email: ${contact.email}`);
        }
    }
}

addContact("A", "0123456", "a@gmail.com");
addContact("B", "0987321", "b@example.com");

displayContact();
