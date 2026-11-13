import { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

export function SeoHead({ title, description, path, noIndex = false }: SeoHeadProps) {
  useEffect(() => {
    document.title = title;

    const updateMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMeta('meta[name="description"]', 'name', 'description', description);
    updateMeta('meta[property="og:title"]', 'property', 'og:title', title);
    updateMeta('meta[property="og:description"]', 'property', 'og:description', description);
    updateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    if (noIndex) {
      updateMeta('meta[name="robots"]', 'name', 'robots', 'noindex, nofollow');
    } else {
      const robotsTag = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
      if (robotsTag) {
        robotsTag.remove();
      }
    }

    const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
    const canonicalPath = path ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
    const canonicalUrl = `${currentOrigin}${canonicalPath}`;

    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    updateMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
  }, [title, description, path, noIndex]);

  return null;
}
