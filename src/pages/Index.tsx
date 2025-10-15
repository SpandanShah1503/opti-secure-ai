import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import VulnerabilityTable from "@/components/VulnerabilityTable";
import ScannerForm from "@/components/ScannerForm";
import GlobalMap from "@/components/GlobalMap";
import MLInsights from "@/components/MLInsights";
import PenetrationTestingTool from "@/components/PenetrationTestingTool";
import { Camera, Shield, AlertTriangle, Activity } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background ">
      <Header />
      
      <main className="container px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8 rounded-2xl bg-gradient-hero p-8 text-white">
          <h1 className="mb-2 text-4xl font-bold">CCTV SecureWatch Platform</h1>
          <p className="text-lg opacity-90">
            Automated Vulnerability Assessment & Penetration Testing for CCTV Cameras and DVR Systems
          </p>
        </div>

        {/* Stats Grid */}
        <div id="dashboard" className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
          <StatsCard
            title="Total Cameras Scanned"
            value="6,744"
            change="+12% from last week"
            icon={Camera}
            trend="up"
            variant="default"
            
          />
          <StatsCard
            title="Active Vulnerabilities"
            value="342"
            change="23 critical"
            icon={AlertTriangle}
            trend="down"
            variant="destructive"
          />
          <StatsCard
            title="Mitigated Threats"
            value="1,289"
            change="+8% this month"
            icon={Shield}
            trend="up"
            variant="success"
          />
          <StatsCard
            title="System Health"
            value="98.2%"
            change="All systems operational"
            icon={Activity}
            trend="neutral"
            variant="success"
          />
        </div>

        {/* Global Map */}
        <div className="mb-8">
          <GlobalMap />
        </div>

        {/* Scanner and ML Insights */}
        <div id="scanner" className="mb-8 grid gap-6 lg:grid-cols-2">
          <ScannerForm />
          <MLInsights />
        </div>

        {/* Penetration Testing Tool */}
        <div className="mb-8">
          <PenetrationTestingTool />
        </div>

        {/* Vulnerability Table */}
        <div id="vulnerabilities">
          <VulnerabilityTable />
        </div>
      </main>

      <footer className="border-t border-border bg-card py-6">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 CCTV SecureWatch - National Technical Research Organisation (NTRO)</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
