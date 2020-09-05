import { Component, ReactNode, createElement } from "react";
import { IntroTour } from "./components/IntroTour";
import { GuidedTourPreviewProps } from "../typings/GuidedTourProps";

declare function require(name: string): string;

interface GuidedTourContainerPreviewState {
    steps: any[];
}
export class preview extends Component<GuidedTourPreviewProps, GuidedTourContainerPreviewState> {
    constructor(props: GuidedTourPreviewProps) {
        super(props);
        this.state = {
            steps: []
        };
    }
    render(): ReactNode {
        return <IntroTour steps={this.props.listStep} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/GuidedTour.css");
}
