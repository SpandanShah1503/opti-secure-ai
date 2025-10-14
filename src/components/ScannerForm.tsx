import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Loader2 } from "lucide-react";
import { toast } from "sonner";

const ScannerForm = () => {
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    setIsScanning(true);
    
    toast.info("Initiating vulnerability scan...", {
      description: "This may take several minutes to complete.",
    });

    setTimeout(() => {
      setIsScanning(false);
      toast.success("Scan completed successfully!", {
        description: "Found 12 devices with 5 vulnerabilities.",
      });
    }, 3000);
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Vulnerability Scanner</CardTitle>
        <CardDescription>
          Configure and execute automated scans for CCTV cameras and DVR systems
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleScan} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="ip-range">IP Range</Label>
              <Input
                id="ip-range"
                placeholder="192.168.1.0/24"
                disabled={isScanning}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="scan-type">Scan Type</Label>
              <Select disabled={isScanning}>
                <SelectTrigger id="scan-type">
                  <SelectValue placeholder="Select scan type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="quick">Quick Scan</SelectItem>
                  <SelectItem value="full">Full Scan</SelectItem>
                  <SelectItem value="custom">Custom Scan</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="vendor">Vendor Filter</Label>
              <Select disabled={isScanning}>
                <SelectTrigger id="vendor">
                  <SelectValue placeholder="All vendors" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Vendors</SelectItem>
                  <SelectItem value="hikvision">Hikvision</SelectItem>
                  <SelectItem value="dahua">Dahua</SelectItem>
                  <SelectItem value="axis">Axis</SelectItem>
                  <SelectItem value="samsung">Samsung</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="ports">Port Range</Label>
              <Input
                id="ports"
                placeholder="80,443,554,8000-8999"
                disabled={isScanning}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-accent"
            disabled={isScanning}
          >
            {isScanning ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Scanning...
              </>
            ) : (
              <>
                <Search className="mr-2 h-4 w-4" />
                Start Scan
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ScannerForm;
