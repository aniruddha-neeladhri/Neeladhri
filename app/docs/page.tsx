'use client';

import 'swagger-ui-react/swagger-ui.css';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), {
  ssr: false,
  loading: () => <p style={{ padding: 24 }}>Loading API docs…</p>,
});

export default function ApiDocsPage() {
  useEffect(() => {
    document.title = 'API docs · Neeladhri';
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      <SwaggerUI url="/api/openapi" docExpansion="list" />
    </div>
  );
}
