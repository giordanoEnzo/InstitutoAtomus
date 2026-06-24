import Link from 'next/link';
import FooterMain from '@/components/FooterMain';
import { Network, Users, ShieldCheck, Briefcase } from 'lucide-react';
import ParceirosCategorias from '@/components/ParceirosCategorias';

export const metadata = {
  title: 'Parceiros Atomus | Ecossistema de Soluções Inteligentes',
  description: 'Uma curadoria estratégica de profissionais e especialistas que complementam nossas entregas em saúde mental, gestão organizacional e desenvolvimento humano.'
};

export default function ParceirosPage() {
  return (
    <main className="parceiros-page">
      {/* Hero Section */}
      <section className="section section-dark hero-parceiros" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(16,37,26,1) 0%, rgba(26,59,42,1) 100%)', zIndex: 0 }}></div>
        <div className="container animate-fade-in-up" style={{ position: 'relative', zIndex: 1 }}>
          <div className="divider" style={{ margin: '0 0 2rem 0' }}></div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', maxWidth: '900px', lineHeight: '1.1', marginBottom: '1.5rem' }}>
            ECOSSISTEMA <span className="text-gold">ATOMUS</span>
          </h1>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--brand-gold)', marginBottom: '1.5rem', fontWeight: '500' }}>
            (Empresas e Profissionais Parceiros)
          </h2>
          <p style={{ maxWidth: '700px', fontSize: '1.25rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
            Um Ecossistema de Soluções Inteligentes para Empresas. O Instituto Atomus atua como ponte confiável entre empresas e profissionais qualificados.
          </p>
          <div className="flex-mobile" style={{ display: 'flex', gap: '1rem' }}>
             <a href="#proposito" className="btn btn-primary">Conheça o Propósito</a>
             <Link href="/contato" className="btn btn-secondary">Seja um Parceiro</Link>
          </div>
        </div>
      </section>

      {/* Propósito Section */}
      <section id="proposito" className="section section-light">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Nossa Curadoria Estratégica</h2>
            <div className="divider" style={{ margin: '1.5rem auto' }}></div>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
              O Instituto Atomus acredita que empresas saudáveis precisam de soluções integradas. Por isso, criamos a aba Parceiros Atomus: uma curadoria estratégica de profissionais e especialistas que complementam nossas entregas em saúde mental, gestão organizacional e desenvolvimento humano.
            </p>
            <p style={{ maxWidth: '800px', margin: '2rem auto 0', fontSize: '1.1rem', fontWeight: 'bold' }}>
              Aqui você encontra prestadores de serviços alinhados aos nossos valores, com qualidade técnica e compromisso ético.
            </p>
            <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--bg-brand)', borderRadius: '12px', color: 'white', display: 'inline-block' }}>
              <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--brand-gold)' }}>Nosso objetivo é simples:</h3>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.2rem', fontWeight: '500', color: 'var(--text-light)' }}>Facilitar conexões que fortaleçam empresas!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por que criamos essa aba? Section */}
      <section className="section section-dark" style={{ background: 'var(--bg-dark)' }}>
         <div className="container">
           <div className="text-center" style={{ marginBottom: '4rem' }}>
             <h2 className="text-gold">Por que criamos essa aba?</h2>
             <div className="divider" style={{ margin: '1.5rem auto' }}></div>
           </div>

           <div className="grid grid-2" style={{ gap: '2rem' }}>
             <div className="card-hover" style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '8px', borderLeft: '4px solid var(--brand-gold)' }}>
               <div style={{ marginBottom: '1.5rem' }}>
                 <ShieldCheck size={40} className="text-gold" />
               </div>
               <h3 className="text-gold" style={{ marginBottom: '1rem' }}>Soluções Complementares</h3>
               <p style={{ color: 'white', fontSize: '1rem' }}>
                 Para oferecer soluções complementares à implementação da NR-1, garantindo que sua empresa tenha todo o suporte necessário.
               </p>
             </div>

             <div className="card-hover" style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '8px', borderLeft: '4px solid var(--brand-gold)' }}>
               <div style={{ marginBottom: '1.5rem' }}>
                 <Briefcase size={40} className="text-gold" />
               </div>
               <h3 className="text-gold" style={{ marginBottom: '1rem' }}>Indicações Seguras</h3>
               <p style={{ color: 'white', fontSize: '1rem' }}>
                 Para facilitar a vida das empresas com indicações seguras e de confiança, poupando tempo e mitigando riscos.
               </p>
             </div>

             <div className="card-hover" style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '8px', borderLeft: '4px solid var(--brand-gold)' }}>
               <div style={{ marginBottom: '1.5rem' }}>
                 <Network size={40} className="text-gold" />
               </div>
               <h3 className="text-gold" style={{ marginBottom: '1rem' }}>Conexões Estratégicas</h3>
               <p style={{ color: 'white', fontSize: '1rem' }}>
                 Para gerar conexões estratégicas entre profissionais qualificados e empresas que buscam excelência.
               </p>
             </div>

             <div className="card-hover" style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '8px', borderLeft: '4px solid var(--brand-gold)' }}>
               <div style={{ marginBottom: '1.5rem' }}>
                 <Users size={40} className="text-gold" />
               </div>
               <h3 className="text-gold" style={{ marginBottom: '1rem' }}>Ampliar o Cuidado</h3>
               <p style={{ color: 'white', fontSize: '1rem' }}>
                 Para ampliar o cuidado organizacional além da saúde mental, abordando de forma integral as necessidades da empresa.
               </p>
             </div>
           </div>
         </div>
      </section>

      {/* Categorias de Parceiros Section */}
      <section className="section section-light" style={{ padding: '6rem 0', borderTop: '1px solid #e0e0e0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4.5rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--bg-dark)' }}>Nossas Categorias de Parceiros</h2>
            <div className="divider" style={{ margin: '1.5rem auto' }}></div>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
              Explore as diversas especialidades em nosso ecossistema de parceiros e veja como cada área agrega valor e segurança ao seu negócio.
            </p>
          </div>
          <ParceirosCategorias />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section section-brand" style={{ padding: '6rem 0' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2.5rem', color: 'var(--brand-gold)', marginBottom: '1.5rem' }}>
            Faça parte do Ecossistema Atomus
          </h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.25rem', color: 'white' }}>
            Seja você uma empresa buscando soluções ou um profissional querendo integrar nossa rede de parceiros, entre em contato.
          </p>
          <div className="divider" style={{ margin: '0 auto 3rem' }}></div>
          <div>
            <Link href="/contato" className="btn btn-primary" style={{ padding: '1.5rem 3rem' }}>Fale Conosco</Link>
          </div>
        </div>
      </section>

      <FooterMain backgroundColor="var(--bg-dark)" />
    </main>
  );
}
