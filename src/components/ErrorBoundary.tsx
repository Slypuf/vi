import React from 'react';

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('🚨 JavaScript Error:', event.error);
      setHasError(true);
      setError(event.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('🚨 Unhandled Promise Rejection:', event.reason);
      setHasError(true);
      setError(new Error(event.reason));
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  if (hasError) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#0B1020',
        color: '#67E8F9',
        padding: '20px',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚨 Error Detected</h1>
        <p style={{ marginBottom: '1rem' }}>Something went wrong with the navigation:</p>
        <pre style={{ 
          background: '#0D213F', 
          padding: '1rem', 
          borderRadius: '8px',
          maxWidth: '80%',
          overflow: 'auto'
        }}>
          {error?.message || 'Unknown error'}
        </pre>
        <button 
          onClick={() => {
            setHasError(false);
            setError(null);
            window.location.reload();
          }}
          style={{
            marginTop: '1rem',
            padding: '10px 20px',
            background: '#67E8F9',
            color: '#0B1020',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Reload Page
        </button>
      </div>
    );
  }

  return <>{children}</>;
};

export default ErrorBoundary;