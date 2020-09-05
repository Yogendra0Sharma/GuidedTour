import { Component, ReactNode, createElement } from "react";
import { IntroTour } from "./components/IntroTour";
import { MendixIntroTourPreviewProps } from "../typings/MendixIntroTourProps";

declare function require(name: string): string;

export class preview extends Component<MendixIntroTourPreviewProps> {
    render(): ReactNode {
        return <IntroTour steps={this.props.listStep} autoStart={this.props.autoStart} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/MendixIntroTour.css");
}
