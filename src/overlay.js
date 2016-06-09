import React, { Component, PropTypes } from "react";
import MapboxGl from "mapbox-gl/dist/mapbox-gl";

let index = 0;
const generateID = () => index++;

export default class Overlay extends Component {

  static contextTypes = {
    map: PropTypes.object
  };

  static propTypes = {
    id: PropTypes.string,
    url: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.array).isRequired,
  };

  identifier = this.props.id || generateID();
  id = `overlay-${this.identifier}`;

  componentWillMount() {
    const { url, coordinates } = this.props;
    const { map } = this.context;

    const source = new MapboxGl.ImageSource({
      url,
      coordinates
    });

    map.addSource(this.id, source);
  }

  componentWillUnmount() {
    const { map } = this.context;
    map.removeSource(this.id);
  }

  render() {
    return null;
  }
}
