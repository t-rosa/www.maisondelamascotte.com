import icon from "@/images/locate-fixed.svg";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { RFeature, RLayerVector, RMap, ROSM, RStyle } from "rlayers";
import "ol/ol.css";

export function Map() {
  const center = fromLonLat([4.796360, 43.856660]);
  const pos = new Point(center)
  return (
    <RMap width={"100%"} height={"60vh"} initial={{ center: center, zoom: 15 }}>
      <ROSM />
      <RLayerVector zIndex={10}>
        <RStyle.RStyle>
          <RStyle.RIcon src={icon.src} anchor={[0.5, 0.8]} />
        </RStyle.RStyle>
        <RFeature geometry={pos}></RFeature>
      </RLayerVector>
    </RMap>

  )
}
