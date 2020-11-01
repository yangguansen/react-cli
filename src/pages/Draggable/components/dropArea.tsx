import React from 'react';
import { useDrop } from 'react-dnd';
import SortItem from './sortItem';

const ItemTypes = {
	BOX: 'box'
};

const DropArea = ( props: any ) => {

	const [ { canDrop, isOver }, drop ] = useDrop( {
		accept: ItemTypes.BOX,
		collect: ( monitor ) => ( {
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		} )
	} );

	const isActive = canDrop && isOver;

	let backgroundColor = '#222';
	if ( isActive ) {
		backgroundColor = 'darkgreen';
	} else if ( canDrop ) {
		backgroundColor = 'darkkhaki';
	}

	let { to } = props;
	return (
		<div ref={drop} style={{ backgroundColor }}>
			{isActive ? 'Release to drop' : 'Drag a box here'}
			{
				to.map( ( v: any, i: any ) => (
					<SortItem id={v.id} key={v.id} text={v.text} index={i} moveCard={props.handleSort}></SortItem>
				) )
			}
		</div>
	);
};

export default DropArea;