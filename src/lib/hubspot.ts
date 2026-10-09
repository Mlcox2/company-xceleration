type HsqCommand = [string, ...unknown[]];

declare global {
    interface Window {
        _hsq?: HsqCommand[];
    }
}

const queue = (): HsqCommand[] => {
    window._hsq = window._hsq || [];
    return window._hsq;
};

export const trackPageView = (path: string) => {
    const hsq = queue();
    hsq.push(['setPath', path]);
    hsq.push(['trackPageView']);
};

export const identifyContact = (props: Record<string, string>) => {
    const hsq = queue();
    hsq.push(['identify', props]);
    hsq.push(['trackPageView']);
};
