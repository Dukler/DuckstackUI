export function isLowerCase(str) {
	return str === str.toLowerCase() && str !== str.toUpperCase();
}

export const initContainer = props => {
	let Container = null;
	let isHtml = false;
	const { container, instance } = props;
	if (isLowerCase(container.lazyID.charAt(0))) {
		Container = `${container.lazyID}`;
		isHtml = true;
	} else {
		Container = instance;
	}
	return [Container, isHtml];
};
