import { DIVISIONS } from "@/data/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function DivisionDetailPage({ params }: Props) {
  const { id } = await params;   // WAJIB await di sini

  const division = DIVISIONS.find((d) => d.id === id);

  if (!division) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      {/* HEADER */}
      <section className="relative h-[60vh] flex items-center justify-center bg-himatif-dark">
  <img
    src={division.imageUrl}
    alt={division.name}
    className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
  />

  <div className="absolute inset-0 bg-gradient-to-b from-himatif-dark/70 to-himatif-dark pointer-events-none"></div>

  <div className="relative z-10 text-center px-4">
    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
      {division.name}
    </h1>
    <p className="text-slate-300 max-w-2xl mx-auto text-lg">
      {division.description}
    </p>
  </div>
</section>


      {/* CONTENT */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-himatif-dark mb-4">
            Tentang Divisi
          </h2>
          <p className="text-slate-600 leading-relaxed">
            {division.longDescription}
          </p>
        </div>

        {/* ANGGOTA DIVISI */}
        <div>
          <h2 className="text-2xl font-bold text-himatif-dark mb-8 text-center">
            Anggota Divisi
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {division.members.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-himatif-dark">
                  {member.name}
                </h3>
                <p className="text-sm text-himatif-primary font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
