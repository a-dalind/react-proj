import { Suspense } from 'react';
import { Sidebar } from 'ui/widgets/Sidebar';
import { Navbar } from 'ui/widgets/Navbar';
import { classNames } from 'lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
