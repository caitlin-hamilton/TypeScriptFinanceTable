import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import {arrowIcons} from './config';
import {ArrowUp, ArrowDown } from 'react-bootstrap-icons';


interface Props {
    attributeName: string;
    sortIcon: string;
    sortAttribute(attributeName: string): any;

}

const HeaderSpecialColumn: React.FunctionComponent<Props> = (props) => {
    console.log('hello')
        return (
            <OverlayTrigger 
                placement="bottom" 
                delay={{show: 50, hide: 100}}
                overlay={<Tooltip id={"1"}>Click to sort {props.attributeName} {props.sortIcon === 'DOWN' ? <ArrowUp /> : <ArrowDown />}</Tooltip>}>
                 <th onClick={() => {props.sortAttribute(props.attributeName)}}>{props.attributeName} {arrowIcons[props.sortIcon]}</th>
            </OverlayTrigger>
        );
    }
export default HeaderSpecialColumn

