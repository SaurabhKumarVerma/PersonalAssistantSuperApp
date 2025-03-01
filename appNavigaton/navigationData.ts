import { ESCREEN_NAME } from "../types/screenName";
import Dashboard from "../apps/Dashboard/App.js";
import BudgetTracking from '../apps/BudgetTracking/App';
import ProductivityManagement from '../apps/ProductivityManagement/App';
import SmartAssistant from '../apps/SmartAssistant/App';
import Settings from '../apps/Settings/App';

export const bottomNavigation = [
    {
        id: 1,
        bottomName: ESCREEN_NAME.DASHBOARD,
        component: Dashboard,
    },
    {
        id: 2,
        bottomName: ESCREEN_NAME.BUDGET,
        component: BudgetTracking,
    },
    {
        id: 3,
        bottomName: ESCREEN_NAME.INGENUITY,
        component: ProductivityManagement,
    },
    {
        id: 4,
        bottomName: ESCREEN_NAME.ASSISTANT,
        component: SmartAssistant,
    },
    {
        id: 5,
        bottomName: ESCREEN_NAME.SETTINGS,
        component: Settings,
    },
]