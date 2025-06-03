import {Children, isValidElement} from "react";
import {YMapProps} from "./index";

// Defines the expected order of specific YMap child components.
// The order is enforced only if "YMapCustomClusterer" is present.
/**
 * Faced a similar problem. The change in the order of the render of the card components helped.
 *
 * Was:
 * @example
 * ```tsx
 * <Ymap>
 *     <Ymapcluster />
 *     <Ymapdefaultschelayer />
 *     <YmapdefaultfeatureSlayer />
 * </Ymap>
 * ```
 * It became:
 * @example
 * ```tsx
 * <Ymap>
 *     <Ymapdefaultschelayer />
 *     <YmapdefaultfeatureSlayer />
 *     <Ymapcluster />
 * </Ymap>
 * ```
 * A little details about my case. The site on Next.js, a map with a cluster opening in a modal window, closing the model leads to the card alkali.
 * A click on the marker (not cluster) makes it active, changing the styles of the marker element.
 * If you do not click on the marker, then the card closes regularly, the zoom and moving the card does not lead to errors.
 * If you click on the marker, then when closing the modal window and the subsequent Anmount of the Krata component, the module Yandex Card will throw out the cannot Read Properties of Undefined (Reading 'removeFeatureById' error).
 * The problem was solved after changing the order of the render of the card components following the example from the documentation <a href="https://yandex.ru/maps-api/docs/js-api/examples/cases/markers-clusterizer.html">Markers Clusterizer</a>.
 */
const EXPECTED_ORDER =  [
	'YMapDefaultSchemeLayer',
	'YMapDefaultFeaturesLayer',
	'YMapCustomClusterer'
] as const

function extractDisplayNameFromChildType(value: unknown): string | null {
	if (
		typeof value === 'object'
		&& value !== null
		&& 'displayName' in value
		&& typeof value.displayName === 'string'
	) {
		return value.displayName
	}

	return null
}


export function validateYMapChildrenOrder(props: YMapProps) {
	const actualOrder: string[] = []

	Children.forEach(props.children, (child) => {
		if (!isValidElement(child)) {
			return
		}

		const displayName = extractDisplayNameFromChildType(child.type);

		if (displayName) {
			actualOrder.push(displayName)
		}
	})

	if (actualOrder.includes("YMapCustomClusterer")) {
		for (let i = 0; i < EXPECTED_ORDER.length; i++) {
			if (actualOrder[i] !== EXPECTED_ORDER[i]) {
				throw new Error(
					`The components are in the wrong order. Expected "${EXPECTED_ORDER[i]}", but received "${actualOrder[i]}" at position ${i}.`
				);
			}
		}
	}
}