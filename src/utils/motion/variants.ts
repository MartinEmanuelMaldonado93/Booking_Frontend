type fadeInXProps = {
	translateX?: '50%',
	stiffness?: 80,
	mass?: 2,
	damping?: 10,
}
const fadeInX = (props: fadeInXProps) => ({
	hidde: { opacity: 0, translateX: props.translateX },
	show: {
		transition: {
			type: 'spring',
			stiffness: props.stiffness,
			mass: props.mass,
		},
		opacity: 1,
		translateX: 0,
	}
})
