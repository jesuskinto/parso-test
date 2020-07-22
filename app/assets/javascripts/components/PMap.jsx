class PMap extends React.Component {

  componentDidMount() {
    fetch('/locations')
      .then(response => response.json())
      .then(({ points }) => {
        this.createMap(points);
      });
  }

  createMap(markers) {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 26.1226177, lng: -72.0195199 },
      zoom: 5
    });

    markers.forEach(m => {
      new google.maps.Marker({
        position: m,
        map
      });
    });
  }

  render() {
    return (
      <div style={{ width: '100%', height: 500 }} id="map" />
    );
  }
}