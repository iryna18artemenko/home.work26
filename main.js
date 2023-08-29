
const tbody = document.querySelector("tbody"); 

for (let t =0; t < 10; t++) {

   const tr = document.createElement("tr");

    for (let i= 0; i < 10; i++ ) {

        let td = document.createElement("td");
        td.innerText =(t+1)*(i+1);
        tr.append(td);


    }

    tbody.append(tr);
}
