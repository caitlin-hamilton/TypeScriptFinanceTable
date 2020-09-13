import React from 'react';
import {ArrowUp, ArrowDown } from 'react-bootstrap-icons';

export interface ASSET_CLASS_SORT_ORDER_INTERFACE {
    [index: string]: any ;
}
export let ASSET_CLASS_SORT_ORDER = {} as ASSET_CLASS_SORT_ORDER_INTERFACE;

ASSET_CLASS_SORT_ORDER['Equities']= 0
ASSET_CLASS_SORT_ORDER['Macro']= 1
ASSET_CLASS_SORT_ORDER['Credit']= 2



export interface ASSET_CLASS_COLOURS_INTERFACE {
    [index: string]: any ;
}

export let asset_class_colours = {} as ASSET_CLASS_COLOURS_INTERFACE;
asset_class_colours['Equities'] = "p-3 mb-2 bg-info text-white"
asset_class_colours['Credit'] = "p-3 mb-2 bg-success text-white"
asset_class_colours['Macro'] = "p-3 mb-2 bg-white text-dark"


export interface ARROW_ICON_INTERFACE {
    [index: string]: any ;
}

export let arrowIcons = {} as ARROW_ICON_INTERFACE;
arrowIcons['DOWN'] =  < ArrowDown />
arrowIcons['UP'] =  < ArrowUp />
