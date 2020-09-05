/**
 * This file was generated from GuidedTour.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";

export type PositionEnum = "top" | "bottom" | "left" | "right";

export interface ListStepType {
    className: string;
    title: string;
    text: string;
    position: PositionEnum;
}

export interface ListStepPreviewType {
    className: string;
    title: string;
    text: string;
    position: PositionEnum;
}

export interface GuidedTourContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    autoStart: boolean;
    listStep: ListStepType[];
}

export interface GuidedTourPreviewProps {
    class: string;
    style: string;
    autoStart: boolean;
    listStep: ListStepPreviewType[];
}
