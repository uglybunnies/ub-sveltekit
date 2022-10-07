export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12')];

			export const server_loads = [];

			export const dictionary = {
	"": [2],
	"about": [3],
	"web-projects": [4],
	"web-projects/adge": [5],
	"web-projects/platinum": [6],
	"web-projects/platzner": [7],
	"web-projects/rejuvenation-site": [8],
	"web-projects/satsukiina": [9],
	"web-projects/serpentvenom": [10],
	"web-projects/smcta": [11],
	"web-projects/urban-forest": [12]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};