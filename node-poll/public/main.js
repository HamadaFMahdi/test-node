const form = document.getElementById('vote-form');

// form event listener
form.addEventListener('submit', (e) => {
  const choice = document.querySelector('input[name=os]:checked').value;
  const data = {os: choice};

  fetch('http://localhost:3000/poll', {
    method: 'post',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

  e.preventDefault();
});

fetch('http://localhost:3000/poll')
  .then(res => res.json())
  .then(data => {
    const votes = data.votes;
    const totalVotes = votes.length;
    //count vote dataPoints
    const voteCounts = votes.reduce((acc, vote) => ((acc[vote.os] = (acc[vote.os] || 0) + parseInt(vote.points)), acc), {});
    console.log(voteCounts+"hiiiiiiiiii");
    //canvasjs
    let dataPoints = [
      { label: 'Windows', y: voteCounts.Windows},
      { label: 'MacOS', y: voteCounts.MacOS},
      { label: 'Linux', y: voteCounts.Linux},
      { label: 'Other', y: voteCounts.Other},
    ];

    const chartContainer = document.querySelector('#chartContainer');

    if(chartContainer) {
      const chart = new CanvasJS.Chart('chartContainer', {
        animationEnabled: true,
        title: {
          text: `total votes ${totalVotes}`
        },
        data: [
          {
            type:'column',
            dataPoints: dataPoints
          }
        ]
      });
      chart.render();
      // Enable pusher logging - don't include this in production
      // Pusher.logToConsole = true;

      const pusher = new Pusher('***', {
        cluster: 'eu',
        encrypted: true
      });

      const channel = pusher.subscribe('os-poll');
      channel.bind('os-vote', function(data) {
        //add data to chartContainer
        dataPoints = dataPoints.map(os => {
          if(os.label == data.os) {
            os.y += data.points;
            return os;
          } else {
            return os;
          }
        });
        chart.render();
      });
    }

  });
