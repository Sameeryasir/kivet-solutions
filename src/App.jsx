import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import MediaPage from "./pages/MediaPage"
import TestimonialsPage from "./pages/TestimonialsPage"
import PartnershipsPage from "./pages/PartnershipsPage"
import ContactPage from "./pages/ContactPage"
import CancellationPolicyPage from "./pages/CancellationPolicyPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="media" element={<MediaPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="partnerships" element={<PartnershipsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cancellation-policy" element={<CancellationPolicyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
