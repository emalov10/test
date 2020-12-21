import moment from 'moment';

class WeatherInfo {
  /**
   * @param {Object} props
   * @params {string} props.dt_txt
   * @params {object} props.weather
   */
  constructor(props) {
    this.date = moment(props.dt_txt).locale('ru').format('MMMM Do YYYY, h:mm:ss a');
    this.weather = props.weather[0].description;
  }
}

export default WeatherInfo;
