import { createTheme, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindTalent from './Pages/FindTalent';
import PostJobPage from './Pages/PostJobPage';
import '@mantine/tiptap/styles.css';
import JobDescPage from './Pages/JobDescPage';
import ApplyJob from './Pages/ApplyJob';
import CompanyPage from './Pages/CompanyPage';
import PostedJob from './Pages/PostedJobPage';
import PostedJobPage from './Pages/PostedJobPage';
import '@mantine/dates/styles.css';
import JobHistoryPage from './Pages/JobHistoryPage';
import SignUpPage from './Pages/SignUpPage';
import Profile from './Header/Profile';
import TalentProfile from './FindTalent/TalentProfile';
function App() {
  const theme = createTheme({
    colors: {
      'web-orange': ['#fffcea', '#fff5c5', '#ffeb85', '#ffda46', '#ffc71b', '#ffa500', '#e27c00', '#bb5502', '#984208', '#7c360b', '#481a00'],
      'mine-shaft': ['#2d2d2d', '#3d3d3d', '#454545', '#4f4f4f', '#5d5d5d', '#6d6d6d', '#888888', '#b0b0b0', '#d1d1d1', '#e7e7e7', '#f6f6f6']
    },
    primaryColor: 'web-orange',
    primaryShade: 5,
    fontFamily: 'Poppins, sans-serif'
  })
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>

      <BrowserRouter>
        <div className='relative'>
          <Header />
          <Routes>
            <Route path='/find-jobs' element={<FindJobs />} />
            <Route path='/find-talent' element={<FindTalent />} />
            <Route path='/jobs' element={<JobDescPage />} />
            <Route path='/apply-job' element={<ApplyJob />} />
            <Route path='/company' element={<CompanyPage />} />
            <Route path='/post-job' element={<PostJobPage />} />
            <Route path='/job-history' element={<JobHistoryPage />} />
            <Route path='/posted-job' element={<PostedJobPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/login' element={<SignUpPage />} />
            <Route path='/talent-profile' element={<TalentProfile />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>


    </MantineProvider>
  )
}

export default App
