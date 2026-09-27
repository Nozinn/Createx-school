import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Courses from './pages/courses/Courses'
import Course from './pages/course/Course'
import Events from './pages/events/Events'
import EventsGrid from './pages/events_grid/EventsGrid'
import Event from './pages/event/Event'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import SinglePost from './pages/single_post/SinglePost'
import Contacts from './pages/contacts/Contacts'
import Layout from './components/Layout'

function App() {
	return (
		<BrowserRouter>
			
				<Routes>
					<Route element={<Layout />}>
					<Route path='/' element={<HomePage />} />
					<Route path='/courses' element={<Courses />} />
					<Route path='/courses/:id' element={<Course />} />
					<Route path='/events' element={<Events />} />
					<Route path='/events/grid' element={<EventsGrid />} />
					
					<Route path='/events/:id' element={<Event />} />
					
					<Route path='/about' element={<About />} />
					
					<Route path='/blog' element={<Blog />} />
					
					<Route path='/blog/:id' element={<SinglePost />} />
					
					<Route path='/contacts' element={<Contacts />} />
					</Route>
				</Routes>
			
		</BrowserRouter>
	)
}

export default App
