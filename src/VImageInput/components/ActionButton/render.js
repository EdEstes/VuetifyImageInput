export default function($createElement, {
	listeners,
	props,
}) {
	return $createElement(
		'VBtn',
		{
			class: 'ma-1',
			props: {
				disabled: props.disabled,
				text: true,
				icon: true,
			},
			on: listeners,
		},
		[$createElement(
			'VIcon',
			{
				style: props.iconStyle,
			},
			props.icon,
		)],
	);
}
