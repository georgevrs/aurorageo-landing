import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Download, Compass } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const dataLinks = [
    {
      title: "Point Cloud Data",
      description: "Sample geological point cloud datasets",
      url: "#pointcloud-data",
    },
    {
      title: "Joint Discontinuities",
      description: "Structural joint measurements",
      url: "#joint-data",
    },
    {
      title: "Raster Data",
      description: "Slope and aspect GeoTIFF files",
      url: "#raster-data",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(22, 34, 42, 0.9), rgba(22, 34, 42, 0.95)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Logo/Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6 animate-fade-in">
              <Compass className="w-10 h-10 text-primary" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                AuroraGEO
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-delayed max-w-3xl mx-auto">
              Advanced Geological Analysis Platform for Mining and Geotechnical Engineering
            </p>

            {/* Welcome Message for Reviewer */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/30 shadow-2xl animate-fade-in-delayed max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Welcome, Reviewer
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Thank you for evaluating AuroraGEO. This platform enables comprehensive geological analysis 
                through web-based 3D visualization, kinematic feasibility assessments, and structural domain analysis. 
                Process geospatial data including point clouds, joint discontinuities, and terrain rasters with 
                professional-grade tools designed for mining and geotechnical applications.
              </p>

              {/* Data Links Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Sample Data Files</h3>
                <div className="grid gap-3">
                  {dataLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 group border border-border/50 hover:border-primary/50"
                    >
                      <div className="text-left">
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {link.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full md:w-auto text-lg px-12 py-6 animate-glow"
                onClick={() => window.location.href = '/app'}
              >
                Launch AuroraGEO
              </Button>
            </Card>

            {/* Additional Info */}
            <p className="text-sm text-muted-foreground/70 mt-8 animate-fade-in-delayed">
              European Project Review | Version 1.0
            </p>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>

      {/* Features Grid Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded bg-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3D Visualization</h3>
              <p className="text-muted-foreground">
                Interactive 3D rendering of point clouds and terrain models using VTK.js
              </p>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded bg-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kinematic Analysis</h3>
              <p className="text-muted-foreground">
                Assess slope stability and structural feasibility with advanced algorithms
              </p>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded bg-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local-First Architecture</h3>
              <p className="text-muted-foreground">
                Process GB-scale datasets efficiently with local storage and processing
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
