// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
console.log(companyName.length);
for (let i=companyName.length-1; i>=0; i-=1) {
    reversedCompanyName = reversedCompanyName + companyName[i];
}

console.log(reversedCompanyName);

