// Fetch and display employee data from employees.xml
document.addEventListener('DOMContentLoaded', () => {
    fetch('employees.xml')
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, 'application/xml'))
        .then(data => {
            const rows = Array.from(data.getElementsByTagName('employee'));
            const tbody = document.querySelector('#employeeTable tbody');
            rows.forEach(emp => {
                const id = emp.getElementsByTagName('id')[0]?.textContent || '';
                const name = emp.getElementsByTagName('name')[0]?.textContent || '';
                const dept = emp.getElementsByTagName('department')[0]?.textContent || '';
                const desig = emp.getElementsByTagName('designation')[0]?.textContent || '';
                const salary = emp.getElementsByTagName('salary')[0]?.textContent || '';
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${dept}</td>
                    <td>${desig}</td>
                    <td>${salary}</td>
                `;
                tbody.appendChild(tr);
            });
        })
        .catch(err => console.error('Failed to load employee data:', err));
});