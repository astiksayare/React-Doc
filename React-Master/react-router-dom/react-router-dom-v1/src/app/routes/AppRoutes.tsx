import * as Router from 'react-router-dom';
import * as Pages from '../pages';

export const AppRoutes = () => {

    return (
        <Router.Routes>
            <Router.Route path='' element={<Pages.Home.Main />} />
            <Router.Route path='user/:userId' element={<Pages.User.UserList />} />
            <Router.Route path='about' element={<Pages.About.Main />}/>
            <Router.Route path='contact' element={<Pages.Contact.Main />}/>
        </Router.Routes>
    )
}