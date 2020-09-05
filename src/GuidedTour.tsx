import { Component, ReactNode, createElement } from "react";
import { IntroTour } from "./components/IntroTour";
import { getSteps } from "./utils/utils";
import { GuidedTourContainerProps } from "../typings/GuidedTourProps";

import "./ui/GuidedTour.css";
interface GuidedTourContainerState {
    steps: any[];
}
export default class GuidedTour extends Component<GuidedTourContainerProps, GuidedTourContainerState> {
    constructor(props: GuidedTourContainerProps) {
        super(props);
        this.state = {
            steps: []
        };
    }
    componentDidMount(): void {
        this.setState({ steps: getSteps(this.props.listStep, this.props.autoStart) });
    }
    render(): ReactNode {
        return <IntroTour steps={this.state.steps} />;
    }
}
