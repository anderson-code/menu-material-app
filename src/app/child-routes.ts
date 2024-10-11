import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { FormComponent } from "./pages/form/form.component";
import { TableComponent } from "./pages/table/table.component";


export interface AppRoute {
  path: string;
  component?: any;
  data: any;
  children?: AppRoute[];
}

export const childRoutes: AppRoute[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'table',
    component: TableComponent,
    data: { icon: 'table', text: 'Table' }
  },
  {
    path: 'menu',
    data: { icon: 'insert_chart', text: 'Menu' },
    children: [
      {
        path: 'form',
        component: FormComponent,
        data: { icon: 'insert_chart', text: 'Menu1' },
        children: [
          {
            path: 'form',
            component: FormComponent,
            data: { icon: 'insert_chart', text: 'Menu2' }
          },
          {
            path: 'form',
            component: FormComponent,
            data: { icon: 'format_color_fill', text: 'Menu3' },
            children: [
              {
                path: 'form',
                component: FormComponent,
                data: { icon: 'library_add', text: 'Menu4' }
              },
              {
                path: 'form',
                component: FormComponent,
                data: { icon: 'equalizer', text: 'Menu5' },
                children: [
                  {
                    path: 'form',
                    component: FormComponent,
                    data: { icon: 'import_contacts', text: 'Menu6' }
                  },
                  {
                    path: 'form',
                    component: FormComponent,
                    data: { icon: 'list_alt', text: 'Menu7' }
                  },
                  {
                    path: 'form',
                    component: FormComponent,
                    data: { icon: 'business', text: 'Menu8' }
                  },
                  {
                    path: 'form',
                    component: FormComponent,
                    data: { icon: 'tab', text: 'Menu9' }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        path: 'form',
        component: FormComponent,
        data: { icon: 'wallpaper', text: 'Menu10' }
      }
    ]
  },
  {
    path: 'form',
    component: FormComponent,
    data: { icon: 'bar_chart', text: 'Form' }
  },
];
