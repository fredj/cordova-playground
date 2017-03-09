document.addEventListener('deviceready', () => {
  const config = {
    clientId: 'io.fredj.playground'
  };

  FingerprintAuth.encrypt(config, result => {
    navigator.notification.alert(result.token);
    const map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: 'map',
      view: new ol.View({
        center: [0, 0],
        zoom: 2
      })
    });
  });

}, false);
