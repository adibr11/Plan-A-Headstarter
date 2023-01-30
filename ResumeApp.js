
/* 
General layout of the program. 
Don't have any experience with react or javascript so this is just an idea
*/
<!DOCTYPE html>

/* Takes in uploaded text file and reads it */
<html>
<body>
    <h1>Resume Search</h1>
    <input type="file" id="fileInput" />
    <br />
    <textarea id="fileContent" rows="10" cols="50"></textarea>
    <script>
        const input = document.getElementById("fileInput");
        input.addEventListener("change", function() {
            const file = input.files[0];
            const reader = new FileReader();
            reader.addEventListener("load", function() {
                const text = reader.result;
                console.log(text);
            });
            reader.readAsText(file);
        });
    </script>

/* Creates a search bar where user can search for specific terms in the resume */

<div>
    <input type="text" id="search-input">
    <button id="search-button">Search</button>
</div>

<script>
const input = document.querySelector('#search-input');
const button = document.querySelector('#search-button');

button.addEventListener('click', () => {
    const searchTerm = input.value;
    // Perform search using the searchTerm variable
    console.log(`Searching for: ${searchTerm}`);
});
</script>

</body>




