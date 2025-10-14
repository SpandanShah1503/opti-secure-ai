import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Target, AlertTriangle, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AttackVector {
  id: string;
  name: string;
  cve: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  description: string;
}

interface TestResult {
  vector: string;
  status: "Vulnerable" | "Secure" | "Unknown";
  exploitSteps: string[];
  mitigation: string[];
}

const attackVectors: AttackVector[] = [
  {
    id: "1",
    name: "Default Credentials",
    cve: "CVE-2024-1234",
    severity: "Critical",
    description: "Test for default admin passwords and weak authentication",
  },
  {
    id: "2",
    name: "RTSP Stream Hijacking",
    cve: "CVE-2024-5678",
    severity: "High",
    description: "Attempt to access unprotected RTSP video streams",
  },
  {
    id: "3",
    name: "Firmware Injection",
    cve: "CVE-2023-9012",
    severity: "Critical",
    description: "Test for vulnerable firmware update mechanisms",
  },
  {
    id: "4",
    name: "Network Sniffing",
    cve: "CVE-2024-3456",
    severity: "Medium",
    description: "Check for unencrypted data transmission",
  },
];

const PenetrationTestingTool = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [selectedVectors, setSelectedVectors] = useState<string[]>([]);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const { toast } = useToast();

  const handleRunTest = async () => {
    if (selectedVectors.length === 0) {
      toast({
        title: "No Attack Vectors Selected",
        description: "Please select at least one attack vector to test",
        variant: "destructive",
      });
      return;
    }

    setIsRunning(true);
    toast({
      title: "Penetration Test Started",
      description: `Running ${selectedVectors.length} attack vector(s)`,
    });

    // Simulate penetration testing
    setTimeout(() => {
      const results: TestResult[] = selectedVectors.map((vectorId) => {
        const vector = attackVectors.find((v) => v.id === vectorId);
        const isVulnerable = Math.random() > 0.5;

        return {
          vector: vector?.name || "Unknown",
          status: isVulnerable ? "Vulnerable" : "Secure",
          exploitSteps: isVulnerable
            ? [
                "1. Identify target device IP and open ports",
                "2. Enumerate available services and versions",
                "3. Execute exploit payload with identified CVE",
                "4. Establish unauthorized access",
                "5. Extract sensitive configuration data",
              ]
            : ["No vulnerabilities detected in this attack vector"],
          mitigation: isVulnerable
            ? [
                "Update firmware to latest version",
                "Change default credentials immediately",
                "Implement network segmentation",
                "Enable SSL/TLS encryption",
                "Configure firewall rules to restrict access",
                "Enable intrusion detection system",
              ]
            : ["Continue monitoring and maintain current security posture"],
        };
      });

      setTestResults(results);
      setIsRunning(false);
      toast({
        title: "Penetration Test Complete",
        description: `Tested ${results.length} attack vector(s)`,
      });
    }, 3000);
  };

  const toggleVector = (vectorId: string) => {
    setSelectedVectors((prev) =>
      prev.includes(vectorId)
        ? prev.filter((id) => id !== vectorId)
        : [...prev, vectorId]
    );
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-semibold">
          <Shield className="h-6 w-6 text-accent" />
          Penetration Testing Tool
        </CardTitle>
        <CardDescription>
          Simulate attacks to assess CCTV and DVR security vulnerabilities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="configure" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="configure">Configure Test</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="configure" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="target-ip">Target IP Address / Range</Label>
              <Input
                id="target-ip"
                placeholder="192.168.1.100 or 192.168.1.0/24"
                disabled={isRunning}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="device-type">Device Type</Label>
              <Select disabled={isRunning}>
                <SelectTrigger id="device-type">
                  <SelectValue placeholder="Select device type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hikvision">Hikvision Camera</SelectItem>
                  <SelectItem value="dahua">Dahua DVR</SelectItem>
                  <SelectItem value="axis">Axis Camera</SelectItem>
                  <SelectItem value="all">All Devices</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Attack Vectors to Test</Label>
              <div className="grid gap-3">
                {attackVectors.map((vector) => (
                  <div
                    key={vector.id}
                    onClick={() => !isRunning && toggleVector(vector.id)}
                    className={`cursor-pointer rounded-lg border p-4 transition-all ${
                      selectedVectors.includes(vector.id)
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-accent/50"
                    } ${isRunning ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="h-4 w-4 text-accent" />
                          <h4 className="font-semibold text-sm">{vector.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {vector.cve}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {vector.description}
                        </p>
                      </div>
                      <Badge
                        variant={
                          vector.severity === "Critical"
                            ? "destructive"
                            : vector.severity === "High"
                            ? "destructive"
                            : "default"
                        }
                        className="ml-2"
                      >
                        {vector.severity}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={handleRunTest}
              disabled={isRunning || selectedVectors.length === 0}
              className="w-full"
            >
              {isRunning ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Running Penetration Test...
                </>
              ) : (
                <>
                  <Shield className="mr-2 h-4 w-4" />
                  Run Penetration Test
                </>
              )}
            </Button>
          </TabsContent>

          <TabsContent value="results" className="space-y-4">
            {testResults.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <AlertTriangle className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No test results yet. Configure and run a test first.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {testResults.map((result, index) => (
                  <Card
                    key={index}
                    className={`border-l-4 ${
                      result.status === "Vulnerable"
                        ? "border-l-destructive"
                        : "border-l-success"
                    }`}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-base">
                        {result.status === "Vulnerable" ? (
                          <AlertTriangle className="h-5 w-5 text-destructive" />
                        ) : (
                          <CheckCircle className="h-5 w-5 text-success" />
                        )}
                        {result.vector}
                        <Badge
                          variant={
                            result.status === "Vulnerable" ? "destructive" : "secondary"
                          }
                        >
                          {result.status}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-sm mb-2">
                          Exploitation Steps:
                        </h5>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                          {result.exploitSteps.map((step, idx) => (
                            <li key={idx} className="pl-4">
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                          <Shield className="h-4 w-4 text-success" />
                          Mitigation Recommendations:
                        </h5>
                        <ul className="space-y-1 text-xs text-muted-foreground">
                          {result.mitigation.map((step, idx) => (
                            <li key={idx} className="pl-4">
                              • {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PenetrationTestingTool;
