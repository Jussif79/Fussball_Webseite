fetch('https://api.football-data.org/v4/matches', {
    headers: {
        'X-Auth-Token': '7717ea2352a34f8caefff061365e156d'
    }
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const resultElement = document.getElementById('result');

        // Clear previous content
        resultElement.innerHTML = '';

        // Extract and display match information
        if (data.matches && data.matches.length > 0) {
            data.matches.forEach(match => {
                const matchInfo = `
                    <div class="match">
                        <p><strong>${match.competition.name}</strong></p>
                        <p>${match.homeTeam.name} vs ${match.awayTeam.name}</p>
                        <p>Score: ${match.score.fullTime.home ?? '-'} - ${match.score.fullTime.away ?? '-'}</p>
                        <p>Status: ${match.status}</p>
                    </div>
                `;
                resultElement.innerHTML += matchInfo;
            });
        } else {
            resultElement.innerHTML = '<p>No matches found.</p>';
        }
    })
    .catch(error => {
        document.getElementById('error').innerHTML = console.error('Error:', error);
        document.getElementById('result').innerHTML = `<p>Error loading matches.</p>`;
    });
