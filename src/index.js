
// Fonction qui genere le teableau 
export function generateTable(person) {
    // Creation <table>
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    const tblHead = document.createElement("thead");
    const row = document.createElement("tr");
    const tabHead= ["Nom","Prénom", "Âge", "Couleur des yeux", "Email"]

    //Creation <thead>
    for (let j = 0; j < tabHead.length; j++) {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(tabHead[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }     

    tblHead.appendChild(row);
    tbl.appendChild(tblHead);

    if (person !== undefined) {
            // Creation des Cellule
        for (let i = 0; i < person.length; i++) {
        
            const row = document.createElement("tr");

            for (let j = 0; j < tabHead.length; j++) {
            
                var value = "" ; 

                if (j == 0) value = person[i].name.last ;
                if (j == 1) value = person[i].name.first ;
                if (j == 2) value = person[i].age ;
                if (j == 3) value = person[i].eyeColor ;
                if (j == 4) value = person[i].email ; 

                const cell = document.createElement("td");
                const cellText = document.createTextNode(value);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }

            // Ajout de la ligne dans le tbody
            tblBody.appendChild(row);
        }

    }

    // Envoi le tbody a la table
    tbl.appendChild(tblBody);
    // Ajoute la tabke au body 
    document.body.appendChild(tbl);

    return true ; 

}

/*
Fonction filtrable par lastName , firstName  , email , eyeColor , age
*/
export function filterUrl(person)
{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

     
    // Test si lastName est en parametre
    if (urlParams.has('lastName'))
    {
        const lastName = urlParams.get('lastName');
        person = person.filter(p => p.name.last.indexOf(lastName) >= 0); 
    }

    // Test si fisrtName est en parametre
    if (urlParams.has('firstName'))
    {
        const firstName   = urlParams.get('firstName');
        console.log(firstName);

        person = person.filter(p => p.name.first.indexOf(firstName) >= 0); 
    }

    // Test si email est en parametre
    if (urlParams.has('email'))
    {
        const email = urlParams.get('email')
        person = person.filter(p => p.email.indexOf(email) >= 0); 
    }
    
    // Test si eyeColor est en parametre
    if (urlParams.has('eyeColor'))
    {
        const eyeColor = urlParams.get('eyeColor')
       
        if ((eyeColor == 'blue') || (eyeColor == 'brown') || (eyeColor == 'green')) 
        {
            person = person.filter(p => p.eyeColor == eyeColor);
        }    
    }

    // Test si age est en parametre
    // 20-25 , 26-30 , 31-35 , 36-41
    // de 20 à 25 ans, de 26 à 30 ans, de 31 à 35 ans et enfin de 36 à 41 ans
    if (urlParams.has('age'))
    {
        const age = urlParams.get('age')
        let range = {min: 0,max: 120};
        if (age == '20-25') range = {min: 20,max: 25}; 
        if (age == '26-30') range = {min: 26,max: 30}; 
        if (age == '31-35') range = {min: 31,max: 35};
        if (age == '36-41') range = {min: 36,max: 41}; 

        person =  person.filter(p => {
            return p.age >= range.min && p.age <= range.max ;
          });
    }

    return person ; 
}