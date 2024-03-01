const fs = require('fs');

const csvFile = 'users-data.csv';
// Function to parse CSV lines using regex
function parseCSVLine(line) {
    const pattern = /(?:,|^)(?:"([^"]*(?:""[^"]*)*)"|([^",]*))/g;
    const fields = [];
    let match;

    while ((match = pattern.exec(line))) {
        const field = match[1] !== undefined ? match[1].replace(/""/g, '"') : match[2];
        fields.push(field);
    }

    return fields;
}

// Function to read CSV file and process each line
function processCSVFile(csvFile) {
    fs.readFile(csvFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const lines = data.trim().split('\n');
        let totalSalary = 0;
       // let minSalaryProfession = Number.MAX_SAFE_INTEGER;
       // let maxSalaryProfession = Number.MIN_SAFE_INTEGER;
        let minSalaryProfession = { salary: Number.MAX_SAFE_INTEGER, profession: '' };
        let maxSalaryProfession = { salary: Number.MIN_SAFE_INTEGER, profession: '' };
        let minAge = Number.MAX_SAFE_INTEGER;
        let maxAge = Number.MIN_SAFE_INTEGER;
        let numEntries = 0;

        for (let i = 1; i < lines.length; i++) { // Start from index 1 to skip header
            const fields = parseCSVLine(lines[i]);

            const salary = parseFloat(fields[8]);
            const age = parseInt(fields[3]);
            const profession = fields[7];

            totalSalary += salary;
 // Update minSalaryProfession if current salary is less than the current minimum
 if (salary < minSalaryProfession.salary) {
    minSalaryProfession.salary = salary;
    minSalaryProfession.profession = profession;
}

// Update maxSalaryProfession if current salary is greater than the current maximum
if (salary > maxSalaryProfession.salary) {
    maxSalaryProfession.salary = salary;
    maxSalaryProfession.profession = profession;
}
           // minSalaryProfession = Math.min(minSalaryProfession, salary);
           // maxSalaryProfession = Math.max(maxSalaryProfession, salary);
            minAge = Math.min(minAge, age);
            maxAge = Math.max(maxAge, age);
            numEntries++;
        }

        const averageSalary = totalSalary / numEntries;

        // Output results
        const results = `Total Salary: ${totalSalary.toFixed(8)}\n` +
                        `Average Salary: ${averageSalary.toFixed(8)}\n` +
                        `Minimum Salary: ${minSalaryProfession.salary.toFixed(2)} (Profession: ${minSalaryProfession.profession})\n` +
                        `Maximum Salary: ${maxSalaryProfession.salary.toFixed(2)} (Profession: ${maxSalaryProfession.profession})\n` +
                       // `Minimum Salary: ${minSalaryProfession.toFixed(7)}\n` +
                       // `Maximum Salary: ${maxSalaryProfession.toFixed(7)}\n` +
                        `Minimum Age: ${minAge}\n` +
                        `Maximum Age: ${maxAge}\n`;

        // Write results to file
        fs.writeFile('results.txt', results, (err) => {
            if (err) {
                console.error('Error writing results to file:', err);
            } else {
                console.log('Results written to results.txt');
            }
        });
    });
}

// Example usage: process CSV file
processCSVFile('users-data.csv');
