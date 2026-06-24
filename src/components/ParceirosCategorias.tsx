"use client";

import { useState } from 'react';
import { 
  Scale, 
  Languages, 
  Coins, 
  Target, 
  HeartPulse, 
  Lock, 
  Sparkles, 
  ChevronDown, 
  ChevronUp,
  LucideIcon
} from 'lucide-react';

interface CategoryData {
  title: string;
  subtitle?: string;
  description: string;
  description2?: string;
  benefits?: string[];
  specializedTitle?: string;
  specialized?: string[];
  footer?: string;
  icon: LucideIcon;
}

const categories: CategoryData[] = [
  {
    title: "Advocacia Corporativa",
    subtitle: "Segurança jurídica é proteção estratégica.",
    description: "O suporte jurídico preventivo auxilia empresas na redução de riscos, conformidade legal e tomada de decisões mais seguras.",
    benefits: [
      "Redução de passivos e riscos trabalhistas",
      "Maior segurança nas relações contratuais",
      "Apoio em questões societárias e empresariais",
      "Orientação preventiva para evitar litígios",
      "Suporte em compliance e adequações legais",
      "Fortalecimento da governança corporativa"
    ],
    specializedTitle: "Profissionais especializados em:",
    specialized: [
      "Direito trabalhista",
      "Adequações normativas",
      "Assessoria preventiva"
    ],
    footer: "A empresa cresce quando está juridicamente estruturada.",
    icon: Scale
  },
  {
    title: "Intérprete de Libras",
    subtitle: "Promovendo acessibilidade, inclusão e comunicação sem barreiras.",
    description: "O intérprete de Libras contribui para que empresas, eventos e treinamentos sejam mais acessíveis, fortalecendo a inclusão e o respeito à diversidade.",
    benefits: [
      "Ampliação da acessibilidade e inclusão",
      "Melhor comunicação com colaboradores e público surdo",
      "Fortalecimento da responsabilidade social corporativa",
      "Valorização da diversidade no ambiente organizacional",
      "Maior participação e engajamento em treinamentos e eventos"
    ],
    specializedTitle: "O intérprete de Libras garante acessibilidade em:",
    specialized: [
      "Palestras",
      "Treinamentos",
      "Eventos corporativos",
      "Comunicados internos estratégicos"
    ],
    footer: "Inclusão é responsabilidade social e compromisso organizacional. Empresas inclusivas comunicam melhor, fortalecem sua cultura e cumprem seu papel social.",
    icon: Languages
  },
  {
    title: "Consultoria Financeira Digital",
    description: "Apoio especializado para organização e gestão financeira de empresas, promovendo maior controle, planejamento e tomada de decisões estratégicas.",
    description2: "Atua na análise de indicadores financeiros, fluxo de caixa, precificação, planejamento orçamentário e utilização de ferramentas digitais que facilitam a gestão financeira e contribuem para a sustentabilidade do negócio.",
    benefits: [
      "Controle financeiro eficiente",
      "Melhor gestão do fluxo de caixa",
      "Planejamento e previsibilidade financeira",
      "Melhor e menor custo-benefício",
      "Maior segurança para o crescimento da empresa"
    ],
    icon: Coins
  },
  {
    title: "Marketing Estratégico e Branding",
    subtitle: "Fortaleça a presença da sua empresa no mercado por meio de estratégias inteligentes de posicionamento, identidade e comunicação.",
    description: "Parceiro especializado em Consultoria de Marketing Institucional, auxiliando empresas na construção e fortalecimento de suas marcas de forma ágil, estratégica e criativa.",
    specializedTitle: "Atuação voltada para:",
    specialized: [
      "Posicionamento de marca",
      "Branding e identidade institucional",
      "Planejamento estratégico de marketing",
      "Comunicação corporativa",
      "Fortalecimento da presença digital",
      "Estruturação de estratégias de crescimento"
    ],
    icon: Target
  },
  {
    title: "Medicina e Segurança do Trabalho",
    description: "Contamos com parceiros especializados em Medicina e Segurança do Trabalho, oferecendo suporte técnico para que as empresas atendam às exigências legais, promovam ambientes mais seguros e fortaleçam a saúde ocupacional de seus colaboradores.",
    specializedTitle: "Atuação em serviços como:",
    specialized: [
      "Medicina Ocupacional",
      "Programas e Laudos Técnicos",
      "Gestão de SST",
      "Exames Ocupacionais",
      "Treinamentos e Capacitações",
      "Assessoria em Normas Regulamentadoras"
    ],
    footer: "A integração entre Saúde Mental Corporativa, Medicina Ocupacional e Segurança do Trabalho permite uma visão mais completa da saúde organizacional, contribuindo para a prevenção de riscos, conformidade legal e bem-estar dos colaboradores.\n\nEmpresas seguras são construídas por meio da prevenção, do cuidado e da gestão responsável das pessoas.",
    icon: HeartPulse
  },
  {
    title: "Proteção Financeira e Blindagem Patrimonial Corporativa",
    description: "Contamos com parceiros especializados em proteção financeira, gestão de riscos e planejamento patrimonial, oferecendo soluções estratégicas para a segurança e sustentabilidade das empresas.",
    description2: "A gestão preventiva de riscos contribui para maior estabilidade, segurança nas tomadas de decisão e sustentabilidade do negócio a longo prazo.",
    specializedTitle: "Atuação voltada para:",
    specialized: [
      "Proteção financeira empresarial",
      "Gestão e mitigação de riscos corporativos",
      "Planejamento patrimonial",
      "Proteção de sócios e sucessão empresarial",
      "Estrategias de continuidade dos negócios",
      "Consultoria para segurança financeira organizacional"
    ],
    footer: "Em um cenário cada vez mais dinâmico e desafiador, proteger o patrimônio da empresa é tão importante quanto impulsionar seu crescimento.\n\nEmpresas preparadas para o futuro investem não apenas em crescimento, mas também na proteção do que construíram ao longo de sua trajetória.",
    icon: Lock
  },
  {
    title: "Quick Massage Corporativa",
    subtitle: "Bem-estar que gera resultados.",
    description: "A quick massage é uma ação prática e eficaz para promover relaxamento, reduzir tensões e proporcionar momentos de cuidado aos colaboradores.",
    benefits: [
      "Redução do estresse e da tensão muscular",
      "Promoção do bem-estar físico e emocional",
      "Melhoria do clima organizacional",
      "Aumento da disposição e concentração",
      "Valorização dos colaboradores"
    ],
    footer: "Ideal para SIPAT, eventos internos, campanhas de saúde e ações estratégicas de bem-estar.",
    icon: Sparkles
  }
];

export default function ParceirosCategorias() {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(0);

  const toggleMobileAccordion = (index: number) => {
    setMobileOpenIndex(mobileOpenIndex === index ? null : index);
  };

  const activeCategory = categories[activeTab];

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Estilos CSS Inline Injetados para Suportar Pseudo-classes e Media Queries de Forma Dinâmica */}
      <style dangerouslySetInnerHTML={{ __html: `
        .categorias-container {
          display: flex;
          gap: 2.5rem;
          align-items: flex-start;
          margin-top: 2rem;
        }

        .categorias-sidebar {
          width: 320px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .tab-button {
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 8px;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-family: var(--font-heading);
          font-weight: 600;
          color: var(--text-secondary);
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-normal);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
        }

        .tab-button:hover {
          border-color: var(--brand-gold);
          color: var(--brand-gold-dark);
          transform: translateX(4px);
        }

        .tab-button.active {
          background-color: var(--bg-brand);
          color: var(--brand-gold);
          border-left: 5px solid var(--brand-gold);
          border-color: var(--bg-brand);
          box-shadow: 0 4px 15px rgba(16, 37, 26, 0.15);
        }

        .tab-button.active svg {
          color: var(--brand-gold) !important;
        }

        .categoria-content-wrapper {
          flex: 1;
          background: white;
          border-radius: 12px;
          padding: 3.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border-top: 4px solid var(--brand-gold);
          min-height: 520px;
          transition: all 0.3s ease;
        }

        .section-title {
          font-size: 1.25rem;
          color: var(--bg-dark) !important;
          margin-bottom: 1.25rem;
          font-weight: 700;
          font-family: var(--font-heading);
        }

        .custom-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .custom-list li {
          position: relative;
          padding-left: 1.75rem;
          color: var(--text-primary);
          line-height: 1.5;
          font-size: 0.95rem;
        }

        .custom-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--brand-gold-dark);
          font-weight: bold;
          font-size: 1.1rem;
        }

        .bullet-list li::before {
          content: '•';
          color: var(--brand-gold-dark);
          font-size: 1.3rem;
          line-height: 1;
          top: -1px;
          left: 4px;
        }

        /* Mobile Accordion */
        .accordion-container {
          display: none;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          margin-top: 1rem;
        }

        .accordion-item {
          background: white;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
          overflow: hidden;
          transition: all var(--transition-normal);
        }

        .accordion-header {
          width: 100%;
          padding: 1.25rem 1.5rem;
          background: white;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-heading);
          font-weight: 600;
          color: var(--text-secondary);
          text-align: left;
          cursor: pointer;
        }

        .accordion-item.active .accordion-header {
          background: var(--bg-brand);
          color: var(--brand-gold);
        }

        .accordion-item.active .accordion-header svg {
          color: var(--brand-gold) !important;
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .accordion-item.active .accordion-content {
          max-height: 1500px;
          border-top: 3px solid var(--brand-gold);
        }

        .accordion-inner {
          padding: 2.5rem 1.5rem;
        }

        @media (max-width: 992px) {
          .categorias-container {
            display: none;
          }
          .accordion-container {
            display: flex;
          }
        }
      `}} />

      {/* Desktop Design: Vertical Tabs */}
      <div className="categorias-container">
        <div className="categorias-sidebar">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <IconComponent size={20} className={activeTab === index ? 'text-gold' : ''} style={{ color: 'var(--text-secondary)' }} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        <div className="categoria-content-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--bg-dark)', marginBottom: '0.5rem', fontWeight: 700 }}>
                {activeCategory.title}
              </h3>
              {activeCategory.subtitle && (
                <h4 style={{ fontSize: '1.15rem', color: 'var(--brand-gold-dark)', fontStyle: 'italic', fontWeight: 500, margin: '0 0 1.5rem 0' }}>
                  {activeCategory.subtitle}
                </h4>
              )}
            </div>
            {(() => {
              const Icon = activeCategory.icon;
              return <Icon size={48} style={{ color: 'var(--brand-gold)', opacity: 0.8 }} />;
            })()}
          </div>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            {activeCategory.description}
          </p>

          {activeCategory.description2 && (
            <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              {activeCategory.description2}
            </p>
          )}

          {/* Details / Lists */}
          {(activeCategory.benefits || activeCategory.specialized) && (
            <div className={`grid ${activeCategory.benefits && activeCategory.specialized ? 'grid-2' : 'grid-1'}`} style={{ gap: '2.5rem', marginTop: '2rem' }}>
              {activeCategory.benefits && (
                <div>
                  <h5 className="section-title">Benefícios para a empresa:</h5>
                  <ul className="custom-list">
                    {activeCategory.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeCategory.specialized && (
                <div>
                  <h5 className="section-title">{activeCategory.specializedTitle || "Atuação voltada para:"}</h5>
                  <ul className={`custom-list ${activeCategory.specializedTitle?.includes('especializados') || activeCategory.specializedTitle?.includes('garante') ? 'bullet-list' : ''}`}>
                    {activeCategory.specialized.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Footer Card */}
          {activeCategory.footer && (
            <div style={{
              marginTop: '2.5rem',
              padding: '1.5rem 2rem',
              background: 'rgba(16, 37, 26, 0.03)',
              borderLeft: '4px solid var(--brand-gold)',
              borderRadius: '8px',
              fontSize: '1rem',
              color: 'var(--text-primary)',
              fontWeight: 500,
              lineHeight: '1.6',
              whiteSpace: 'pre-line'
            }}>
              {activeCategory.footer}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Design: Accordion */}
      <div className="accordion-container">
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          const isOpen = mobileOpenIndex === index;
          return (
            <div key={index} className={`accordion-item ${isOpen ? 'active' : ''}`}>
              <button 
                className="accordion-header" 
                onClick={() => toggleMobileAccordion(index)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <IconComponent size={20} style={{ color: isOpen ? 'var(--brand-gold)' : 'var(--text-secondary)' }} />
                  <span>{category.title}</span>
                </div>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              <div className="accordion-content">
                <div className="accordion-inner">
                  {category.subtitle && (
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--brand-gold-dark)', fontStyle: 'italic', fontWeight: 500, marginBottom: '1.25rem' }}>
                      {category.subtitle}
                    </h4>
                  )}

                  <p style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
                    {category.description}
                  </p>

                  {category.description2 && (
                    <p style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
                      {category.description2}
                    </p>
                  )}

                  {/* Lists */}
                  {category.benefits && (
                    <div style={{ marginBottom: '2rem' }}>
                      <h5 className="section-title" style={{ fontSize: '1.15rem' }}>Benefícios para a empresa:</h5>
                      <ul className="custom-list">
                        {category.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.specialized && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h5 className="section-title" style={{ fontSize: '1.15rem' }}>{category.specializedTitle || "Atuação voltada para:"}</h5>
                      <ul className={`custom-list ${category.specializedTitle?.includes('especializados') || category.specializedTitle?.includes('garante') ? 'bullet-list' : ''}`}>
                        {category.specialized.map((spec, i) => (
                          <li key={i}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {category.footer && (
                    <div style={{
                      marginTop: '2rem',
                      padding: '1.25rem 1.5rem',
                      background: 'rgba(16, 37, 26, 0.03)',
                      borderLeft: '4px solid var(--brand-gold)',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      color: 'var(--text-primary)',
                      fontWeight: 500,
                      lineHeight: '1.5',
                      whiteSpace: 'pre-line'
                    }}>
                      {category.footer}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
