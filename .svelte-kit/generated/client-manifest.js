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
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24')];

			export const server_loads = [];

			export const dictionary = {
	"": [2],
	"about": [3],
	"web-projects": [4],
	"web-projects/adge": [5],
	"web-projects/autodesk": [7],
	"web-projects/corelight": [8],
	"web-projects/credit-karma": [9],
	"web-projects/molekule": [10],
	"web-projects/platinum": [11],
	"web-projects/platzner": [13],
	"web-projects/rejuvenation-site": [15],
	"web-projects/satsukiina": [17],
	"web-projects/serpentvenom": [19],
	"web-projects/smcta": [21],
	"web-projects/urban-forest": [23],
	"web-projects/adge/images": [6],
	"web-projects/platinum/images": [12],
	"web-projects/platzner/images": [14],
	"web-projects/rejuvenation-site/images": [16],
	"web-projects/satsukiina/images": [18],
	"web-projects/serpentvenom/images": [20],
	"web-projects/smcta/images": [22],
	"web-projects/urban-forest/images": [24]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};