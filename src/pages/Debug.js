import React, { useState } from "react";
import { Map, MapMarker, Roadview } from "react-kakao-maps-sdk";

/**
 * 경복궁 초기 좌표
 * lat: 37.57754031282181
 * lng: 126.9769239284286
 *
 * panoId: 1016684797
 *
 * pan: 7.740284530597428
 *
 * tilt: -8.650675836726554
 *
 * zoom: 0
 */

const Debug = () => {
  const [maps, setMaps] = useState({
    map: null,
    roadview: null,
  });
  const [position, setPosition] = useState({
    lat: 37.57754031282181,
    lng: 126.9769239284286,
    panoId: 1016684797,
    pan: null,
    zoom: null,
    tilt: null,
  });

  return (
    <div
      className="container"
      style={{
        display: "flex",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255, 0.5)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 42,
          padding: "8px",
        }}
      >
        <p style={{ marginBottom: "2px" }}>lat: {position.lat}</p>
        <p style={{ marginBottom: "2px" }}>lng: {position.lng}</p>
        <p style={{ marginBottom: "2px" }}>panoId: {position.panoId}</p>
        <p style={{ marginBottom: "2px" }}>pan: {position.pan}</p>
        <p style={{ marginBottom: "2px" }}>tilt: {position.tilt}</p>
        <p style={{ marginBottom: "2px" }}>zoom: {position.zoom}</p>
      </div>
      <Map
        center={{
          lat: position.lat,
          lng: position.lng,
        }}
        onMapCreated={(map) => {
          setMaps({ ...maps, map });
          map.addOverlayMapTypeId(window.kakao.maps.MapTypeId.ROADVIEW);
        }}
        style={{
          width: "50%",
          height: "100vh",
          margin: 0,
        }}
        onClick={(_map, mouseEvent) => {
          setPosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          });
        }}
      >
        <MapMarker
          position={{
            lat: position.lat,
            lng: position.lng,
          }}
          draggable={true}
          onDragEnd={(marker) => {
            setPosition({
              ...position,
              lat: marker.getPosition().getLat(),
              lng: marker.getPosition().getLng(),
            });
          }}
        />
      </Map>
      <Roadview
        position={{
          lat: position.lat,
          lng: position.lng,
          radius: 50,
        }}
        style={{
          width: "50%",
          height: "100vh",
          margin: 0,
        }}
        onInit={(roadview) => {
          setMaps({ ...maps, roadview });
        }}
        panoId={position.panoId}
        tilt={position.tilt}
        pan={position.pan}
        zoom={position.zoom}
        onPositionChanged={(roadview) => {
          setPosition({
            ...position,
            lat: roadview.getPosition().getLat(),
            lng: roadview.getPosition().getLng(),
            panoId: roadview.getPanoId(),
          });
        }}
        onViewpointChange={(roadview) => {
          setPosition({
            ...position,
            pan: roadview.getViewpointWithPanoId().pan,
            tilt: roadview.getViewpointWithPanoId().tilt,
            zoom: roadview.getViewpointWithPanoId().zoom,
            panoId: roadview.getPanoId(),
          });
        }}
      />
    </div>
  );
};

export default Debug;
