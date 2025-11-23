import Header from "@/components/Header";
import teamPhoto from "@assets/team photos_1763878226393.jpg";

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

          <div className="max-w-6xl mx-auto">
            <img 
              src={teamPhoto}
              alt="Lyte Financial Team - Tony Ly and Jarred Aranza"
              className="w-full h-auto"
              data-testid="img-team-photo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
