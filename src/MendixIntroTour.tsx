import { Component, ReactNode, createElement } from "react";
import { IntroTour } from "./components/IntroTour";

import { MendixIntroTourContainerProps } from "../typings/MendixIntroTourProps";

import "./ui/MendixIntroTour.css";

export default class MendixIntroTour extends Component<MendixIntroTourContainerProps> {
    render(): ReactNode {
        return <IntroTour steps={this.props.listStep} autoStart={this.props.autoStart} />;
    }
}
