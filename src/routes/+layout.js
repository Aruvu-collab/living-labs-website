//import yaml file
import site from '$lib/misc/index.yaml?raw'
import * as YAML from 'yaml';
export const prerender = true;
export const ssr = true;
export const load = () => {
	return {
		site: YAML.parse(site)
	};
};
