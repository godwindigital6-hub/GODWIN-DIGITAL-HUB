import { Globe, GitMerge, ShoppingBag, TrendingUp, Cpu, Film } from 'lucide-react';
import type { ServiceCategory } from '../data/services';

interface ServiceIconProps {
  name: ServiceCategory['iconName'];
  className?: string;
}

export function ServiceIcon({ name, className = 'w-5 h-5' }: ServiceIconProps) {
  switch (name) {
    case 'globe':
      return <Globe className={className} aria-hidden="true" />;
    case 'funnel':
      return <GitMerge className={className} aria-hidden="true" />;
    case 'store':
      return <ShoppingBag className={className} aria-hidden="true" />;
    case 'megaphone':
      return <TrendingUp className={className} aria-hidden="true" />;
    case 'bot':
      return <Cpu className={className} aria-hidden="true" />;
    case 'video':
      return <Film className={className} aria-hidden="true" />;
  }
}
