class PBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labels: null,
      data: null
    };
  }

  createChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.state.labels,
        datasets: [{
          label: 'Data',
          data: this.state.data,
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }


  componentDidMount() {
    fetch('/data')
      .then(response => response.json())
      .then(({ data }) => {
        const labels = data.map(i => i[0])
        const d = data.map(i => i[1])
        this.setState({ labels, data: d })
        this.createChart();
      });
  }

  render() {
    return (
      <div>
        <canvas id="myChart" />
      </div>
    );
  }
}