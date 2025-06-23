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

/**
 * Extracts the `displayName` from a React component type.
 * This validation work only for component that have forwardRef type, their type is object with `displayName` property.
 * @param value - The `type` property of a React element (e.g., `child.type`).
 * @returns The component's `displayName` if it exists and is a string; otherwise, `null`.
 */
function extractDisplayNameFromChildType(value: unknown): string | null {
	if (
		typeof value === 'object' &&
		value !== null &&
		'displayName' in value &&
		typeof value.displayName === 'string'
	) {
		return value.displayName;
	}

	return null;
}

/**
 * Validates the order of children passed to the `YMap` component.
 *
 * Certain child components like `YMapCustomClusterer` require a strict rendering order
 * relative to other children. This function checks if the actual order of children matches
 * the expected one and throws an error if a mismatch is found.
 *
 * @param props - Props passed to the `YMap` component, including its children.
 *
 * @throws Error if a required component (e.g., `YMapCustomClusterer`) is found and the
 * children are not in the expected order.
 */
export function validateYMapChildrenOrder(props: YMapProps) {
	const actualOrder: string[] = [];

	Children.forEach(props.children, (child) => {
		if (!isValidElement(child)) {
			return;
		}

		const displayName = extractDisplayNameFromChildType(child.type);

		if (displayName) {
			actualOrder.push(displayName);
		}
	});

	// Only validate order if a clusterer is present (indicating a need for strict order)
	if (actualOrder.includes("YMapCustomClusterer")) {
		for (let i = 0; i < EXPECTED_ORDER.length; i++) {
			if (actualOrder[i] !== EXPECTED_ORDER[i]) {
				throw new Error(
					`Invalid YMap children order. Expected "${EXPECTED_ORDER[i]}", but found "${actualOrder[i]}" at position ${i}.`
				);
			}
		}
	}
}
