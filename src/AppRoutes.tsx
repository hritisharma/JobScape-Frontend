import { createTheme, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalent from './Pages/FindTalent';
import PostJobPage from './Pages/PostJobPage';
import '@mantine/tiptap/styles.css';
import JobDescPage from './Pages/JobDescPage';
import ApplyJob from './Pages/ApplyJob';
import CompanyPage from './Pages/CompanyPage';
import PostedJobPage from './Pages/PostedJobPage';
import '@mantine/dates/styles.css';
import JobHistoryPage from './Pages/JobHistoryPage';
import SignUpPage from './Pages/SignUpPage';
import Profile from './Header/Profile';
import '@mantine/notifications/styles.css';
import { useSelector } from "react-redux";

import TalentProfile from './FindTalent/TalentProfile';

const AppRoutes = () => {
    const user = useSelector((state: any) => state.user);
    return (
        <BrowserRouter>
            <div className='relative'>
                <Header />
                <Routes>
                    <Route path='/find-jobs' element={<FindJobs />} />
                    <Route path='/find-talent' element={<FindTalent />} />
                    <Route path='/jobs/:id' element={<JobDescPage />} />
                    <Route path='/apply-job/:id' element={<ApplyJob />} />
                    <Route path='/company/:name' element={<CompanyPage />} />
                    <Route path='/post-job/:id' element={<PostJobPage />} />
                    <Route path='/job-history' element={<JobHistoryPage />} />
                    <Route path='/posted-job/:id' element={<PostedJobPage />} />
                    <Route path='/signup' element={user ? <Navigate to={'/'} /> : <SignUpPage />} />
                    <Route path='/login' element={user ? <Navigate to={'/'} /> : <SignUpPage />} />
                    <Route path='/talent-profile/:id' element={<TalentProfile />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='*' element={<HomePage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default AppRoutes;