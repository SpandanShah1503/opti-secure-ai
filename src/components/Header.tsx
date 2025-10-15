import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">CCTV SecureWatch</h1>
            <p className="text-xs text-muted-foreground">Vulnerability Assessment Platform</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 ml-auto">
          <a href="#dashboard" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Dashboard
          </a>
          <a href="#scanner" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
            Scanner
          </a>
          <a href="#vulnerabilities" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
            Vulnerabilities
          </a>
          <a href="#reports" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
            Reports
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
