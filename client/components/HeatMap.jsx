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
    var userId = window.sessionStorage.user;
     $.get(`/api/users/${userId}/events`, (resp) => {
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
           },
           cellSize: 14,
         });
       }
     });
   }


  render() {

    return (
        <div className='row'>
          <div className='col-md-10 col-md-offset-1'>
            <div className="flex-center">
              <h3>Fit Tracker</h3>
            </div>
            <hr/><br/>
              <div className="flex-center">
                <div className='heat'></div>
              </div>
            <hr/>
          </div>
        </div>
    );
  }

}
