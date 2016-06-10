import MapboxGl from "mapbox-gl/dist/mapbox-gl";
import React, { Component, PropTypes, cloneElement, Children } from "react";
import _ from "lodash";
import { diff } from "./helper";
import Feature from "./feature";
import BaseLayer from "./base-layer";

export default class Layer extends BaseLayer {

  static defaultProps = {
    type: "symbol",
    layout: {},
    paint: {}
  };

  source = new MapboxGl.GeoJSONSource({
    ...this.props.sourceOptions,
    data: {
      type: "FeatureCollection",
      features: []
    }
  });

  geometry = coordinates => {
    switch (this.props.type) {
      case "symbol":
      case "circle": return {
        type: "Point",
        coordinates
      };

      case "fill": return {
        type: coordinates.length > 1 ? "MultiPolygon" : "Polygon",
        coordinates
      };

      case "line": return {
        type: "LineString",
        coordinates
      };

      default: return null;
    }
  };

  feature = (props, id) => ({
    type: "Feature",
    geometry: this.geometry(props.coordinates),
    properties: { id }
  })

  render() {
    const children = [].concat(this.props.children);

    const features = children
      .map(({ props }, id) => this.feature(props, id))
      .filter(Boolean);

    this.source.setData({
      type: "FeatureCollection",
      features
    });

    return null;
  }
}

