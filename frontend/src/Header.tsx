import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import {arrowIcons} from './config';

interface Props {
    attributeName: string;
    sortIcon: string;
    sortAttribute(attributeName: string): any;

}

const HeaderSpecialColumn: React.FunctionComponent<Props> = (props) => {
        return (
            <OverlayTrigger 
                placement="bottom" 
                delay={{show: 50, hide: 100}}
                overlay={<Tooltip id={"1"}>Click to sort {props.attributeName} {arrowIcons[props.sortIcon]}</Tooltip>}>
                 <th onClick={() => {props.sortAttribute(props.attributeName)}}>{props.attributeName} {arrowIcons[props.sortIcon]}</th>
            </OverlayTrigger>
        );
    }
export default HeaderSpecialColumn

