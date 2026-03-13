import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  primary?: boolean;
}

export default function ServiceCard({ title, description, href, primary = false }: ServiceCardProps) {
  return (
    <Link href={href} className={`service-card ${primary ? 'service-card-primary' : ''}`}>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-text">{description}</p>
    </Link>
  );
}
