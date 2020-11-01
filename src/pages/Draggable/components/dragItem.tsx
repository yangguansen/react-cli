import React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';

const ItemTypes = {
	BOX: 'box'
};

export default function DragItem( props: any ) {
	let { name, id } = props;
	const [ { isDragging }, drag ] = useDrag( {
		item: { type: ItemTypes.BOX, id, name: name },
		collect: ( monitor ) => ( {
			isDragging: monitor.isDragging() ? 0.5 : 1
		} ),
		end: ( item: any, monitor: DragSourceMonitor ) => {
			const dropResult = monitor.getDropResult();
			console.log( item, dropResult );
			if ( item && dropResult ) {
				let fromItem = props.from.find( ( v: any ) => v.id === item.id );
				props.handlePush( fromItem );
			}
		},
	} );
	return (
		<div ref={drag} style={{ opacity: isDragging }}>
			{name}
		</div>
	);
}