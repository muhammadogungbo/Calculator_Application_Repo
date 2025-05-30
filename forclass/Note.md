//Creating a code that will print out Error and Adding Finally !
try {
let name = "Muhammad";
let fullName = firstName + "" + lastName;
} catch (err) {
console.log(err);
console.log("My Name Is Muhammad", err.name);
console.log("Message of the error", err.message);
} finally {
console.log("My Name Is Muhammad");
}
Dec 7th
