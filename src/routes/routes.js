import {Home} from '../pages/Home';
import {BuyBook} from '../pages/BuyBook';
import {Course} from '../pages/Course';
import {Document} from '../pages/Document';
import {Login} from '../pages/Login';
import {Rank} from '../pages/Rank';
import {SignIn} from '../pages/SignIn';
import {TestOnline} from '../pages/TestOnline';


//Public routes
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/BuyBook', component: BuyBook },
    { path: '/Course', component: Course },
    { path: '/Document', component: Document },
    { path: '/Login', component: Login },
    { path: '/Rank', component: Rank },
    { path: '/SignIn', component: SignIn },
    { path: '/TestOnline', component: TestOnline },
];

export const privateRoutes = [];
