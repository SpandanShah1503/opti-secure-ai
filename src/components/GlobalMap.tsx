import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const GlobalMap = () => {
  const locations = [
    { city: "New York", count: 1247, coordinates: [-74.006, 40.7128] },
    { city: "London", count: 892, coordinates: [-0.1276, 51.5074] },
    { city: "Tokyo", count: 1563, coordinates: [139.6917, 35.6895] },
    { city: "Berlin", count: 634, coordinates: [13.405, 52.52] },
    { city: "Sydney", count: 421, coordinates: [151.2093, -33.8688] },
    { city: "Mumbai", count: 987, coordinates: [72.8777, 19.076] },
  ];

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Global Camera Distribution</CardTitle>
        <CardDescription>
          Live map showing discovered CCTV cameras and DVR systems worldwide
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-[400px] overflow-hidden rounded-lg bg-gradient-to-br from-secondary to-muted">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 130,
            }}
            className="h-full w-full"
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="hsl(var(--muted-foreground) / 0.2)"
                    stroke="hsl(var(--border))"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "hsl(var(--muted-foreground) / 0.3)", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {locations.map((location) => (
              <Marker key={location.city} coordinates={location.coordinates as [number, number]}>
                <g className="group">
                  <circle
                    r={8}
                    fill="hsl(var(--accent))"
                    stroke="hsl(var(--accent-foreground))"
                    strokeWidth={2}
                    className="animate-pulse"
                  />
                  <circle
                    r={4}
                    fill="hsl(var(--accent-foreground))"
                  />
                  <text
                    textAnchor="middle"
                    y={-12}
                    className="text-xs font-semibold fill-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {location.city}: {location.count}
                  </text>
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {locations.map((location) => (
            <div key={location.city} className="rounded-lg bg-secondary p-3 text-center">
              <div className="text-lg font-bold text-foreground">{location.count}</div>
              <div className="text-xs text-muted-foreground">{location.city}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GlobalMap;
