/**
 * This file was generated from MendixIntroTour.xml
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

export interface MendixIntroTourContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    autoStart: boolean;
    listStep: ListStepType[];
}

export interface MendixIntroTourPreviewProps {
    class: string;
    style: string;
    autoStart: boolean;
    listStep: ListStepPreviewType[];
}
