
            let name1 = document.getElementById("name1");
            let email1 = document.getElementById("em");
            let number1 = document.getElementById("number1");
            let tableinfo = document.getElementById("tableinfo");
            let contactdetails = JSON.parse(localStorage.getItem("contacts")) || [];

            // Load all contacts from localStorage when the page loads
            for (let item of contactdetails) {
                add(item);
            }

            // Function to add a contact to the table
            function add(contactObj) {
                let a = [contactObj.name1, contactObj.email1, contactObj.number1];
                let rowele = document.createElement("tr");
                rowele.id = `row-${contactObj.id}`;

                // Adding contact details to the row
                for (let i = 0; i < 3; i++) {
                    let td1 = document.createElement("td");
                    td1.textContent = a[i];
                    rowele.appendChild(td1);
                }

                // Creating a delete button in the operation column
                let operationele = document.createElement("td");
                let deleteicon = document.createElement("button");
                deleteicon.textContent = "Delete";
                operationele.appendChild(deleteicon);
                rowele.appendChild(operationele);

                // Attach the delete functionality
                deleteicon.onclick = function () {
                    deleteRow(contactObj.id);
                };

                // Append the row to the table
                tableinfo.appendChild(rowele);
            }

            // Function to set new contact details
            function setContactDetails() {
                if (!name1.value || !email1.value || !number1.value) {
                    alert("Please fill in all fields.");
                    return;
                }

                let contactObj = {
                    id: contactdetails.length + 1,
                    name1: name1.value,
                    email1: email1.value,
                    number1: number1.value
                };

                contactdetails.push(contactObj);
                add(contactObj);
                resetFields();
            }

            // Function to save all contacts to localStorage
            function saveContactDetails() {
                localStorage.setItem("contacts", JSON.stringify(contactdetails));
               
            }

            // Function to delete a contact by its id
            function deleteRow(contactId) {
                
                contactdetails = contactdetails.filter(contact => contact.id !== contactId);
                // Remove the contact row from the table
                let row = document.getElementById(`row-${contactId}`);
            
                    row.remove();
                

                // Update the localStorage
                saveContactDetails();
            }

            // Function to reset input fields
            function resetFields() {
                name1.value = '';
                email1.value = '';
                number1.value = '';
            }
        
