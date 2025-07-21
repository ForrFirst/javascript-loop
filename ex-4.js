let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// ใช้ loop ย้อนจากตัวสุดท้ายไปตัวแรก
for (let i = companyName.length - 1; i >= 0; i--) {
  reversedCompanyName += companyName[i];
}

console.log(reversedCompanyName);