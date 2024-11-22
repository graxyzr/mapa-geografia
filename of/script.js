async function carregarDados() {
    const response = await fetch('dados.json');
    const data = await response.json();

    const labelsClasses = [...new Set(data.map(item => item.class))];
    const focusesByClass = labelsClasses.map(label => {
        return data.filter(item => item.class === label).reduce((sum, item) => sum + item.focuses, 0);
    });

    const labelsMonths = [...new Set(data.map(item => item.date))];
    const focusesByMonth = labelsMonths.map(month => {
        return data.filter(item => item.date === month).reduce((sum, item) => sum + item.focuses, 0);
    });

    const ctx1 = document.getElementById('chart1').getContext('2d');
    const chart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: labelsClasses,
            datasets: [{
                label: 'Focos de Incêndio por Classe',
                data: focusesByClass,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    const ctx2 = document.getElementById('chart2').getContext('2d');
    const chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: labelsMonths,
            datasets: [{
                label: 'Focos de Incêndio por Mês',
                data: focusesByMonth,
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

carregarDados();