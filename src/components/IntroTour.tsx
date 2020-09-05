import { Component, ReactNode, createElement } from "react";
import Joyride, { CallBackProps, STATUS, Step } from "react-joyride";

export interface IntroTourProps {
    steps: any;
}
interface IntroTourState {
    run: boolean;
    steps: Step[];
}
export class IntroTour extends Component<IntroTourProps, IntroTourState> {
    constructor(props: IntroTourProps) {
        super(props);
        this.state = {
            run: true,
            steps: this.getSteps(this.props.steps)
        };
    }
    private handleJoyrideCallback = (data: CallBackProps): void => {
        const { status, type } = data;
        const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

        if (finishedStatuses.includes(status)) {
            this.setState({ run: false });
        }

        // tslint:disable:no-console
        console.groupCollapsed(type);
        console.log(data);
        console.groupEnd();
        // tslint:enable:no-console
    };
    render(): ReactNode {
        const { run, steps } = this.state;
        return (<Joyride
            callback={this.handleJoyrideCallback}
            continuous={true}
            run={run}
            scrollToFirstStep={true}
            showProgress={true}
            showSkipButton={true}
            steps={steps}
            styles={{
                options: {
                    zIndex: 10000,
                },
            }} />
        );
    }
    getSteps = (stepList: any): any => {
        const newSteps = stepList.map((stepObj: any) => {
            const newStep = {
                content: stepObj.text,
                placement: stepObj.position,
                target: "." + stepObj.className,
                title: stepObj.title
            };
            return newStep;
        });
        return newSteps;
    };
}
