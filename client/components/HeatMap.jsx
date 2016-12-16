import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

export default HeatMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // var data = {"1452843457":29};
  // var data = {};
  // data[Math.floor(Date.now() / 1000)] = 30;
  var data = generateRandomData();
  function getRandomInt(min, max) {
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function generateRandomData(){
    var date = new Date();
    var mind = date.valueOf();
    var maxd = date.setMonth(date.getMonth() - 11);
    var mins = 0;
    var maxs = 40;
    var obj = {};
    for(var i = 0; i < 100; i++){
      obj[Math.floor(getRandomInt(mind,maxd)/1000)] = getRandomInt(mins,maxs);
    }
    console.log(obj);
    return obj;
  }
  var cal = new CalHeatMap();
  cal.init({
    start: new Date(2016, 0), // January, 1st 2016
    range: 12,
    domain: "month",
    subDomain: "day",
    data: data,
    legendColors: {
      min: "#efefef",
      max: "#8F7FFF",
      empty: "white"
    }
  });
  setTimeout(function(){
    cal.update({"1452843457":99}, true, cal.RESET_ALL_ON_UPDATE);
  }, 5000);

  const title = (
    <h3>Streaks</h3>
  );

  render {
    return (
      <Panel header={title} bsStyle="info">
        {Insert Heatmap Visual Here}
        <div id="cal-heatmap"></div>
      </Panel>
    )
  }
}
