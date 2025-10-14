import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const GlobalMap = () => {
  const locations = [
    { city: "New York", count: 1247, left: "20%", top: "35%" },
    { city: "London", count: 892, left: "48%", top: "30%" },
    { city: "Tokyo", count: 1563, left: "85%", top: "40%" },
    { city: "Berlin", count: 634, left: "50%", top: "28%" },
    { city: "Sydney", count: 421, left: "88%", top: "75%" },
    { city: "Mumbai", count: 987, left: "68%", top: "52%" },
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
          {/* Simplified world map representation */}
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 1000 500" className="h-full w-full">
              <path
                d="M 100 150 Q 200 100 300 150 T 500 150 Q 600 100 700 150 T 900 150"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
              />
              <path
                d="M 100 300 Q 200 250 300 300 T 500 300 Q 600 250 700 300 T 900 300"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Location markers */}
          {locations.map((location) => (
            <div
              key={location.city}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: location.left, top: location.top }}
            >
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-accent/20 animate-ping" />
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-accent shadow-elevated">
                  <MapPin className="h-4 w-4 text-accent-foreground" />
                </div>
                <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-card px-3 py-1.5 text-xs font-medium shadow-elevated opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="font-semibold">{location.city}</div>
                  <div className="text-muted-foreground">{location.count} devices</div>
                </div>
              </div>
            </div>
          ))}
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
