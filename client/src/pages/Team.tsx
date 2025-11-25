import Header from "@/components/Header";
import teamPhoto from "@assets/team photos_1763878226393.jpg";
import mathewPhoto from "@assets/Matts pic_1764035197577.png";

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
              data-testid="text-team-title"
            >
              Meet Our Team
            </h1>
          </div>

          <div className="max-w-6xl mx-auto mb-16">
            <img 
              src={teamPhoto}
              alt="Lyte Financial Team - Tony Ly and Jarred Aranza"
              className="w-full h-auto"
              data-testid="img-team-photo"
            />
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-card rounded-lg overflow-hidden border border-border" data-testid="card-team-mathew">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={mathewPhoto}
                  alt="Mathew Hall - Advisory Chairman"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-mathew-photo"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="font-serif text-2xl font-bold text-primary mb-2">Mathew Hall</h2>
                <p className="text-muted-foreground font-medium mb-3">Advisory Chairman</p>
                <p className="text-sm text-muted-foreground">
                  Mathew holds extensive experience in the finance industry across all levels - from complex family group lending through to medium to large enterprise lending for working capital and commercial premises acquisition. Mathew advises Lyte across the finance spectrum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
