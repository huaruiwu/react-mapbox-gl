import React, { Component, PropTypes } from "react";
import MapboxGl from "mapbox-gl/dist/mapbox-gl";
import BaseLayer from "./base-layer";

let index = 0;
const generateID = () => index++;

export default class Overlay extends BaseLayer {

  static defaultProps = {
    
  };

  source = new MapboxGl.ImageSource({
  });

  componentWillMount() {
    console.log("hello");
  }

  geometry = coordinates => {
    // switch (this.props.type) {
    //   case "symbol":
    //   case "circle": return {
    //     type: "Point",
    //     coordinates
    //   };

    //   case "fill": return {
    //     type: coordinates.length > 1 ? "MultiPolygon" : "Polygon",
    //     coordinates
    //   };

    //   case "line": return {
    //     type: "LineString",
    //     coordinates
    //   };

    //   default: return null;
    // }
  };

  // feature = (props, id) => ({
  //   type: "Feature",
  //   geometry: this.geometry(props.coordinates),
  //   properties: { id }
  // })

  render() {
    return null;
  }
}
