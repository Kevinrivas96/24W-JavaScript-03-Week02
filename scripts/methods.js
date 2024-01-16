var output = document.querySelector("p");
var myString = "Hello! How are you are?";

output.textContent = myString;

/* STEP 1: String Length */
output.textContent = myString.length;

/* STEP 2: Retrieving a Specific String Character */
output.textContent = myString[4];
output.textContent = myString[9];

/* STEP 3: Extracting Part of a String */
output.textContent = myString.indexOf("are");
output.textContent = myString.indexOf("is");

// Note - if the substring is not found within the string, indexOf() returns -1

output.textContent = myString.slice(4, 8);
output.textContent = myString.slice(4);
// Note - if you don't specify where to end the slice, the method returns the rest of the string

/* STEP 4: Changing Case */
output.textContent = myString.toUpperCase();
output.textContent = myString.toLowerCase();

/* STEP 5: Updating Parts of a String */
output.textContent = myString.replace("are", "is");
output.textContent = myString.replaceAll("are", "is");