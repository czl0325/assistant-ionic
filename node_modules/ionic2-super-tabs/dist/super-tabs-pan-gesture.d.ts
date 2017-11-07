import { Platform } from 'ionic-angular';
import { SuperTabsConfig } from './components/super-tabs';
import { Renderer2 } from '@angular/core';
export declare class SuperTabsPanGesture {
    private plt;
    private el;
    private config;
    private rnd;
    onMove: (delta: number) => void;
    onEnd: (shortSwipe: boolean, shortSwipeDelta?: number) => void;
    private initialCoords;
    private initialTimestamp;
    private leftThreshold;
    private rightThreshold;
    private shouldCapture;
    private isDragging;
    private lastPosX;
    private listeners;
    constructor(plt: Platform, el: HTMLElement, config: SuperTabsConfig, rnd: Renderer2);
    destroy(): void;
    private _onStart(ev);
    private _onMove(ev);
    private _onEnd(ev);
    private checkGesture(newCoords);
}
