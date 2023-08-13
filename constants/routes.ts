export type Route = {
    name: string;
    path: string;
    icon: string;
}

export const routes = <Route[]>[
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'HomeIcon',
    },
    {
        name: 'Teams',
        path: '/teams',
        icon: 'UsersIcon',
    },
    {
        name: 'Projects',
        path: '/projects',
        icon: 'FolderIcon',
    },
    {
        name: 'Calendar',
        path: '/calendar',
        icon: 'CalendarIcon',
    },
    {
        name: 'Documents',
        path: '/documents',
        icon: 'InboxIcon',
    },
    {
        name: 'Reports',
        path: '/reports',
        icon: 'ChartBarIcon',
    },
]