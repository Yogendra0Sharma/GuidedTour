import { Component, ReactNode, createElement } from "react";
import { IntroTour } from "./components/IntroTour";
import { MendixIntroTourPreviewProps } from "../typings/MendixIntroTourProps";

declare function require(name: string): string;

export class preview extends Component<MendixIntroTourPreviewProps> {
    render(): ReactNode {
        const steps = this.getSteps(this.props.listStep);
        return <IntroTour steps={steps} />;
    }
    getSteps = (stepList: any): any => {
        const newSteps = stepList.map((stepObj: any) => {
            const newStep = {
                content: stepObj.text,
                placement: stepObj.position,
                target: stepObj.className,
                title: stepObj.title
            };
            return newStep;
        });
        return newSteps;
    };
}

export function getPreviewCss(): string {
    return require("./ui/MendixIntroTour.css");
}
