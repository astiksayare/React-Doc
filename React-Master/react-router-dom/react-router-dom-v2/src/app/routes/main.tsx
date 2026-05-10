import * as Router from 'react-router-dom';
import * as Layout from '@/app/layout';
import * as Pages from '@/app/pages';

export const Main = () => {
    const router = Router.createBrowserRouter([
        {
            path: '',
            element: <Layout.Main />,
            children: [
                {
                    path: '/',
                    element: <Pages.Home.Main />
                },

                {
                    path: 'about',
                    element: <Pages.About.Main />
                },
                
                {
                    path: 'contact',
                    element: <Pages.Contact.Main />
                },

                
                {
                    path: 'service',
                    element: <Pages.Service.Main />,
                    children: [
                        {
                            path: 'count',
                            element: <Pages.Counter.View.Content />
                        }
                    ]
                },
            ]
        }
    ])
    return <Router.RouterProvider router={router}/>
}