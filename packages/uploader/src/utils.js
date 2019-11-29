// @flow
import { DEFAULT_OPTIONS, DEFAULT_PARAM_NAME } from "./defaults";
import type { CreateOptions, Destination, UploadOptions } from "@rupy/shared";
import type { MandatoryCreateOptions, MandatoryDestination } from "../types";

const getMandatoryDestination = (dest: ?Destination): MandatoryDestination => {
	return {
		filesParamName: DEFAULT_PARAM_NAME,
		params: {},
		...dest,
	};
};

const getMandatoryOptions = (options: ?CreateOptions | ?UploadOptions): MandatoryCreateOptions => {
	//TODO: improve this hack for flow
	const defaultsCopy = {
		...DEFAULT_OPTIONS,
		...options,
		destination: getMandatoryDestination(options ? options.destination : null)
	};

	return defaultsCopy;
};

export {
	getMandatoryOptions,
}