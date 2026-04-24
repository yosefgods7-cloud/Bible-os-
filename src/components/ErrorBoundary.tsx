import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-sacred-bg-dark text-sacred-text-primary p-6">
          <div className="bg-sacred-surface-dark border border-red-900/50 p-6 rounded-xl shadow-2xl max-w-lg w-full">
            <h1 className="text-2xl font-bold text-red-500 mb-4">Something went wrong.</h1>
            <p className="text-sacred-text-secondary mb-4">The application encountered an unexpected error.</p>
            <pre className="bg-sacred-card-dark p-4 rounded text-xs overflow-auto text-red-400 mb-6 max-h-40">
              {this.state.error?.toString()}
            </pre>
            <button
              className="bg-sacred-gold text-sacred-bg-dark px-6 py-2 rounded font-bold uppercase text-xs tracking-widest hover:bg-sacred-gold-light transition-colors"
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              Reset App Data & Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
