export default class HeatMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.getTimeStamps();
  }

  getTimeStamps(){
    var that = this;
     $.get(`/api/users/58558734c1d326328681480a/events`, (resp) => {
       if (resp) {
         var obj = {};
         for (var i = 0; i < resp.length; i++) {
           var curr = resp[i];
           obj[curr.timestamp] = 30;
         }
         new CalHeatMap().init({
           itemSelector: '.heat',
           start: new Date( 2016, 0, 1 ),
           end: new Date( 2016, 12, 31 ),
           data: obj,
           domain: 'month',
           legendColors: {
             min: "#efefef",
             max: "#8F7FFF",
             empty: "white"
           }
         });
       }
     });
   }


  render() {
    const styles = {
      padding: 10,
    };
    return (
      <div style={styles}>
            <div className='heat'>
            {console.log(this.state)}
          </div>
    </div>
    );
  }

}
