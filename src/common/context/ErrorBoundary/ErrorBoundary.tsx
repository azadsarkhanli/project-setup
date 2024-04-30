import React, { Component, ReactNode } from 'react';

import { ErrorScreen } from '../../../screens/ErrorScreen';
import { clearDataAndRestartApp, restartApp } from '../../utils/appRestart';
import { captureException } from '../../utils/logger';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  constructor(props: Props) {
    super(props);
    this.onTryAgain = this.onTryAgain.bind(this);
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error) {
    captureException(error);
  }

  private onRestart() {
    restartApp();
  }

  private onTryAgain() {
    this.setState({ hasError: false });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorScreen
          onRestart={this.onRestart}
          onTryAgain={this.onTryAgain}
          onClearDataAndRestart={clearDataAndRestartApp}
        />
      );
    }
    return this.props.children;
  }
}
