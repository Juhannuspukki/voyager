import React from "react";
import { Graticule, NaturalEarth } from "@visx/geo";
import * as topojson from "topojson-client";
import topology from "./../topology.json";
import { CountryData } from "../pages";
import { geoArea, geoCentroid } from "d3-geo";
import { useTooltip, useTooltipInPortal } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import { Point } from "@visx/point";
import { Group } from "@visx/group";
import { Zoom } from "@visx/zoom";

export const background = "#f9f7e8";

export type GeoMercatorProps = {
  width: number;
  height: number;
  events?: boolean;
  countries: CountryData[];
};

interface FeatureShape {
  type: "Feature";
  id: string;
  geometry: { coordinates: [number, number][][]; type: "Polygon" };
  properties: { name: string };
}

// @ts-ignore
const world = topojson.feature(topology, topology.objects.units) as {
  type: "FeatureCollection";
  features: FeatureShape[];
};

const showNameBasedOnScale = (name: string, area: number, scale: number) => {
  if (scale < 250) {
    return area > 0.015 ? name : "";
  } else if (scale < 300) {
    return area > 0.008 ? name : "";
  } else if (scale < 360) {
    return area > 0.006 ? name : "";
  } else if (scale < 420) {
    return area > 0.004 ? name : "";
  } else if (scale < 480) {
    return area > 0.003 ? name : "";
  } else if (scale < 600) {
    return area > 0.002 ? name : "";
  } else {
    return name;
  }
};

const Map = ({ width, height, countries }: GeoMercatorProps) => {
  const centerX = width / 2;
  const centerY = height / 2;
  const initialScale = (width / 630) * 100;

  // TOOLTIP CRAP
  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip,
  } = useTooltip();

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    detectBounds: true,
    scroll: true,
  });

  const handleMouseOver = (
    event: React.MouseEvent<SVGGElement, MouseEvent>,
    datum: CountryData
  ) => {
    const coords: Point | null = localPoint(
      event.currentTarget.ownerSVGElement!,
      event
    );

    if (!datum) {
      return;
    }

    const { contentSnippet, date, name, status } = datum;

    coords &&
      showTooltip({
        tooltipLeft: coords.x,
        tooltipTop: coords.y,
        tooltipData: {
          name: name,
          date: date,
          status: status,
          contentSnippet: contentSnippet,
        },
      });
  };

  // END OF TOOLTIP CRAP

  const color = (feature: FeatureShape) => {
    if (feature.id === "FIN") {
      return "#1d4877";
    }

    const countryData = countries.find(
      (country) => country.code === feature.id
    );

    if (!countryData) {
      return "#aaaaaa";
    }

    switch (countryData.status) {
      case 1:
        return "#1d4877";
      case 2:
        return "#1b8a5a";
      case 3:
        return "#fbb021";
      case 4:
        return "#f68838";
      case 5:
        return "#ee3e32";
    }
  };

  const stylesObj = {
    fill: "#000",
    fontFamily: "sans-serif",
    cursor: "default",
  };

  return width < 10 ? null : (
    <>
      <Zoom<SVGSVGElement>
        width={width}
        height={height}
        scaleXMin={100}
        scaleXMax={1000}
        scaleYMin={100}
        scaleYMax={1000}
        initialTransformMatrix={{
          scaleX: initialScale,
          scaleY: initialScale,
          translateX: centerX,
          translateY: centerY,
          skewX: 0,
          skewY: 0,
        }}
      >
        {(zoom) => (
          <div className="container" ref={containerRef}>
            <svg
              ref={zoom.containerRef}
              width={width}
              height={height}
              onTouchStart={zoom.dragStart}
              onTouchMove={zoom.dragMove}
              onTouchEnd={zoom.dragEnd}
              onMouseDown={zoom.dragStart}
              onMouseMove={zoom.dragMove}
              onMouseUp={zoom.dragEnd}
              onMouseLeave={() => {
                if (zoom.isDragging) zoom.dragEnd();
              }}
            >
              <rect
                x={0}
                y={0}
                width={width}
                height={height}
                fill={background}
                rx={14}
              />
              <NaturalEarth<FeatureShape>
                data={world.features}
                scale={zoom.transformMatrix.scaleX}
                translate={[
                  zoom.transformMatrix.translateX,
                  zoom.transformMatrix.translateY,
                ]}
              >
                {(mercator) => (
                  <g>
                    <Graticule
                      graticule={(g) => mercator.path(g) || ""}
                      stroke="rgba(33,33,33,0.05)"
                    />
                    {mercator.features.map(
                      ({ feature, path, projection }, i) => {
                        const coords: [number, number] | null = projection(
                          geoCentroid(feature)
                        );

                        const area = geoArea(feature);

                        const countryData = countries.find(
                          (country) => country.code === feature.id
                        );
                        return (
                          <Group
                            key={`map-feature-${i}`}
                            onMouseOver={(e) =>
                              countryData && handleMouseOver(e, countryData)
                            }
                            onMouseOut={hideTooltip}
                          >
                            <path
                              d={path || ""}
                              fill={color(feature)}
                              stroke={background}
                              strokeWidth={0.5}
                              onClick={() => {
                                console.log(countryData);
                              }}
                            />
                            <text
                              transform={`translate(${coords})`}
                              fontSize={Math.max(width / 125, 5)}
                              style={stylesObj}
                              textAnchor="middle"
                            >
                              {countryData &&
                                showNameBasedOnScale(
                                  countryData.code,
                                  area,
                                  zoom.transformMatrix.scaleX
                                )}
                            </text>
                          </Group>
                        );
                      }
                    )}
                  </g>
                )}
              </NaturalEarth>
              {tooltipOpen && tooltipData && (
                <TooltipInPortal
                  // set this to random so it correctly updates with parent bounds
                  key={Math.random()}
                  top={tooltipTop}
                  left={tooltipLeft}
                >
                  {
                    //@ts-ignore
                    tooltipData.name ? (
                      <div style={{ maxWidth: 200 }}>
                        <strong>
                          {
                            //@ts-ignore
                            tooltipData.name
                          }
                        </strong>
                        <br />
                        <small>
                          {
                            //@ts-ignore
                            tooltipData.contentSnippet
                          }
                        </small>
                      </div>
                    ) : (
                      "Ei tietoja."
                    )
                  }
                </TooltipInPortal>
              )}
            </svg>
            <div className="controls">
              <button
                className="btn btn-zoom"
                onClick={() => zoom.scale({ scaleX: 1.2, scaleY: 1.2 })}
              >
                +
              </button>
              <button
                className="btn btn-zoom btn-bottom"
                onClick={() => zoom.scale({ scaleX: 0.8, scaleY: 0.8 })}
              >
                -
              </button>
              <button className="btn btn-lg" onClick={zoom.reset}>
                Reset
              </button>
            </div>
          </div>
        )}
      </Zoom>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        .container {
          position: relative;
        }
        svg {
          cursor: grab;
        }
        svg.dragging {
          cursor: grabbing;
        }
        .btn {
          margin: 0;
          text-align: center;
          border: none;
          background: #dde1fe;
          color: #222;
          padding: 0 4px;
          border-top: 1px solid #8993f9;
        }
        .btn-lg {
          font-size: 12px;
          line-height: 1;
          padding: 4px;
        }
        .btn-zoom {
          width: 26px;
          font-size: 22px;
        }
        .btn-bottom {
          margin-bottom: 1rem;
        }
        .controls {
          position: absolute;
          bottom: 20px;
          right: 15px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        label {
          font-size: 12px;
        }
      `}</style>
    </>
  );
};

export default Map;
