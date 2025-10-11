type JsonLdProps = {
  schema?: Record<string, unknown>;
  data?: Record<string, unknown>;
};

export default function JsonLd({ schema, data }: JsonLdProps) {
  const payload = schema || data || {};
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}


