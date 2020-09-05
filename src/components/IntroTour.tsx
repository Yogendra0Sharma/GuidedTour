import { Component, ReactNode, createElement } from "react";
import Joyride, { CallBackProps, STATUS } from "react-joyride";

export interface IntroTourProps {
    steps: any;
}
interface IntroTourState {
    run: boolean;
}
export class IntroTour extends Component<IntroTourProps, IntroTourState> {
    constructor(props: IntroTourProps) {
        super(props);
        this.state = {
            run: true
        };
    }
    private handleJoyrideCallback = (data: CallBackProps): void => {
        const { status } = data;
        const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

        if (finishedStatuses.includes(status)) {
            this.setState({ run: false });
            window.localStorage.setItem("tourEnable", "false");
        }
    };
    shouldShowTour = (): boolean => {
        const valueFromStorage = window.localStorage.getItem("tourEnable");
        return valueFromStorage === undefined || valueFromStorage !== "false";
    };
    render(): ReactNode {
        const { run } = this.state;
        if (!this.shouldShowTour()) {
            return null;
        }
        return (
            <Joyride
                callback={this.handleJoyrideCallback}
                continuous
                run={run}
                scrollToFirstStep
                showProgress
                showSkipButton
                steps={this.props.steps}
                styles={{
                    options: {
                        zIndex: 10000
                    }
                }}
            />
        );
    }
}
