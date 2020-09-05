import { Component, ReactNode, createElement } from "react";
import Joyride, { CallBackProps, STATUS, Step } from "react-joyride";

export interface IntroTourProps {
    steps: any;
    autoStart: boolean;
}
interface IntroTourState {
    run: boolean;
    autoStart: boolean;
    steps: Step[];
}
export class IntroTour extends Component<IntroTourProps, IntroTourState> {
    constructor(props: IntroTourProps) {
        super(props);
        this.state = {
            run: true,
            autoStart: this.props.autoStart,
            steps: this.getSteps(this.props.steps, this.props.autoStart)
        };
    }
    private handleJoyrideCallback = (data: CallBackProps): void => {
        const { status } = data;
        const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

        if (finishedStatuses.includes(status)) {
            this.setState({ run: false, autoStart: false });
            window.localStorage.setItem("tourEnable", 'false');
        }
    };
    shouldShowTour = (): boolean => {
        const valueFromStorage = window.localStorage.getItem("tourEnable");
        return valueFromStorage === undefined || valueFromStorage !== 'false';
    };
    render(): ReactNode {
        const { run, steps } = this.state;
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
                steps={steps}
                styles={{
                    options: {
                        zIndex: 10000
                    }
                }}
            />
        );
    }
    getSteps = (stepList: any, autostart: boolean): any => {
        const newSteps = stepList.map((stepObj: any) => {
            const newStep = {
                content: stepObj.text,
                placement: stepObj.position,
                target: "." + stepObj.className,
                title: stepObj.title,
                disableBeacon: autostart
            };
            return newStep;
        });
        return newSteps;
    };
}
