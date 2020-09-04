import { Component, ReactNode, createElement } from "react";

export interface IntroTourProps {
    sampleText?: string;
}

export class IntroTour extends Component<IntroTourProps> {
    render(): ReactNode {
        return <div className="widget-hello-world">Hello {this.props.sampleText}</div>;
    }
}
