import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { CollaborationStatus } from "@/components/team/CollaborationStatus";
import topoBg from "@/assets/topo-background.jpg";

const teamData = {
  research: [
    { name: "JASIM", role: "Research Lead", contact: "jasim@rockfall.org" },
    { name: "JASIM", role: "Geological Analyst", contact: "jasim@rockfall.org" },
    { name: "TAMMANA", role: "Geological Analyst", contact: "jasim@rockfall.org" },
  ],
  backend: [
    { name: "PUSHPARAJ", role: "Lead Developer", contact: "jasim@rockfall.org" },
    { name: "TANISHR", role: "Database Engineer", contact: "jasim@rockfall.org" },
    { name: "TANISHQ", role: "UI/TX Designer", contact: "jasim@rockfall.org" },
  ],
  frontend: [
    { name: "NITYA", role: "UI/UX Designer", contact: "jasim@rockfall.org" },
    { name: "HARSH", role: "Frontend Developer", contact: "jasim@rockfall.org" },
  ],
};

export default function Team() {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${topoBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
      
      <div className="relative z-10 p-6 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          TEAM MEMBERS
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Our expert team organized by function - Research & PPT, Backend, and Frontend specialists 
          working together to ensure system reliability and continuous innovation.
        </p>
      </div>

      {/* Research & PPT Team */}
      <section>
        <div className="mb-6 p-4 rounded-lg border border-primary/20 bg-primary/5">
          <h2 className="text-xl font-bold text-primary mb-2">RESEARCH & PPT</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.research.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </section>

      {/* Backend Team */}
      <section>
        <div className="mb-6 p-4 rounded-lg border border-primary/20 bg-primary/5">
          <h2 className="text-xl font-bold text-primary mb-2">BACKEND</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.backend.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </section>

      {/* Frontend Team */}
      <section>
        <div className="mb-6 p-4 rounded-lg border border-primary/20 bg-primary/5">
          <h2 className="text-xl font-bold text-primary mb-2">FRONTEND</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {teamData.frontend.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </section>

      {/* Collaboration Status */}
      <section className="max-w-md mx-auto">
        <CollaborationStatus />
      </section>
      </div>
    </div>
  );
}