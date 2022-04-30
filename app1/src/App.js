import SignupPage from './pages/signup.page'
import SigninPage from './pages/signin.page'
import ProfilePage from './pages/profile.page'
import CreateBlogPage from './pages/blog.create.page'
import BlogListPage from './pages/blog.list.page'
import BlogDetailsPage from './pages/blog.details.page'
import BlogUpdatePage from './pages/blog.update.page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="blog-list" element={<BlogListPage />} />
          <Route path="blog-details" element={<BlogDetailsPage />} />
          <Route path="blog-create" element={<CreateBlogPage />} />
          <Route path="blog-update" element={<BlogUpdatePage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
