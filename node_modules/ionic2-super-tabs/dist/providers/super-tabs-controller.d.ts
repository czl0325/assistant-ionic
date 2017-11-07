import { SuperTabs } from '../components/super-tabs';
export declare class SuperTabsController {
    private instances;
    setBadge(tabId: string, value: number, tabsId?: string): void;
    clearBadge(tabId: string, tabsId?: string): void;
    increaseBadge(tabId: string, increaseBy?: number, tabsId?: string): void;
    decreaseBadge(tabId: string, decreaseBy?: number, tabsId?: string): void;
    /**
     * Enables/disables swiping on a specific tabs instance
     * @param enable
     * @param [tabsId]
     */
    enableTabsSwipe(enable: boolean, tabsId?: string): void;
    /**
     * Enables/disables swiping when this tab is active
     * @param tabId
     * @param enable
     * @param [tabsId]
     */
    enableTabSwipe(tabId: string, enable: boolean, tabsId?: string): void;
    showToolbar(show: boolean, tabsId?: string): void;
    slideTo(tabIndexOrId: string | number, tabsId?: string): void;
    /**
     * @private
     */
    registerInstance(instance: SuperTabs): void;
    /**
     * @private
     */
    unregisterInstance(id: string): void;
    private getInstanceIndex(id);
    private getInstance(id?);
}
