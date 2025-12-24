import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title = "Sony Seasonings & Spices - Premium Spice Manufacturer in India",
  description = "Sony Seasonings & Spices is one of the leading manufacturers of seasonings and spices with 17+ years of experience. Trusted by renowned food brands for authentic and organic flavours.",
  keywords = "spices manufacturer, seasonings, spice manufacturer India, bulk spices, whole spices, ground spices, seasoning blends, B2B spices, Thane spice company",
  image = "/og-image.jpg",
  url = "https://sonyspices.com",
}: SEOProps) {
  const fullTitle = title.includes("Sony Seasonings") ? title : `${title} | Sony Seasonings & Spices`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
