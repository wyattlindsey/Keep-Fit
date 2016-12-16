export default class HeatMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "1452843457" : 29
    };
  }

  render() {
    return (
      <div>
      {
        new CalHeatMap().init({
          itemSelector: '.heatmap',
          start: new Date( 2016, 0, 1 ),
          end: new Date( 2016, 12, 31 ),
          data: {
            "1481906273" : 29
          },
          domain: 'month',
          legendColors: {
            min: "#efefef",
            max: "#8F7FFF",
            empty: "white"
        }
        })
      }
      </div>
    );
  }

}
