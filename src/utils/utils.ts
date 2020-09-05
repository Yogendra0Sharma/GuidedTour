export const getSteps = (stepList: any, autostart: boolean): any => {
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