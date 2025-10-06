"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [Template, setTemplate] = useState<any>([]);
  const templatesData = [
    {
      name: "eStore",
      type: "e-commerce",
      programming_language: "React/Next.js + Tailwind CSS",
      status: "free",
      code: "estore-bootstrap",
      detail:
        "A clean and minimal Bootstrap 4 e-commerce template with product grid, slider, cart functionality, responsive layout.",
      cover_image:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/estore-free-template.jpg",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/estore-home.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/estore-shop.jpg",
      ],
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Responsive",
        "Payment Ready",
      ],
      rating: 4.8,
      uses: 12500,
    },
    {
      name: "MyPortfolio",
      type: "portfolio",
      programming_language: "React + Tailwind CSS",
      status: "free",
      code: "myportfolio-react",
      detail:
        "A sleek React portfolio template for developers and designers with project showcase, contact form, and smooth animations.",
      cover_image:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/portfolio-template.jpg",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/portfolio-about.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/portfolio-work.jpg",
      ],
      features: [
        "Project Showcase",
        "Contact Form",
        "Smooth Animations",
        "SEO Ready",
      ],
      rating: 4.9,
      uses: 8900,
    },
    {
      name: "Bloggy",
      type: "blog",
      programming_language: "HTML / CSS / JavaScript",
      status: "free",
      code: "bloggy-template",
      detail:
        "Minimal and elegant blogging template with article cards, sidebar, comment section, and SEO friendly structure.",
      cover_image:
        "https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3N8ZW58MHwwfDB8fHww",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/blog-post.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/blog-home.jpg",
      ],
      features: ["Article Cards", "Comment System", "SEO Friendly", "Sidebar"],
      rating: 4.7,
      uses: 15600,
    },
    {
      name: "AnimateX",
      type: "animated",
      programming_language: "React + GSAP + Three.js",
      status: "premium",
      code: "animatex-gsap",
      detail:
        "A stunning animated template with parallax scrolling, 3D effects using Three.js, and smooth transitions built with GSAP.",
      cover_image:
        "https://images.unsplash.com/photo-1636716731103-11242116065a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWF0ZWR8ZW58MHwwfDB8fHww",
      example_images: [
        "https://cdn.dribbble.com/users/1044993/screenshots/animated-1.png",
        "https://cdn.dribbble.com/users/1044993/screenshots/animated-2.png",
      ],
      features: [
        "3D Effects",
        "Parallax Scrolling",
        "GSAP Animations",
        "Premium Support",
      ],
      rating: 4.9,
      uses: 3200,
      price: "₹149",
    },
    {
      name: "BizPro",
      type: "business",
      programming_language: "HTML / CSS / JavaScript",
      status: "free",
      code: "bizpro-bootstrap",
      detail:
        "A modern business and agency template with sections for services, testimonials, about, and contact form.",
      cover_image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1c2luZXNzfGVufDB8MHwwfHx8MA%3D%3D",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/business-home.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/business-services.jpg",
      ],
      features: [
        "Services Section",
        "Testimonials",
        "Contact Form",
        "Responsive",
      ],
      rating: 4.6,
      uses: 11200,
    },
    {
      name: "LandingX",
      type: "landing page",
      programming_language: "Next.js + Tailwind CSS",
      status: "premium",
      code: "landingx-nextjs",
      detail:
        "A high-conversion landing page template built in Next.js with responsive CTA sections, pricing tables, and A/B testing layouts.",
      cover_image:
        "https://images.unsplash.com/photo-1584824486516-0555a07fc511?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZGluZyUyMHBhZ2V8ZW58MHwwfDB8fHww",
      example_images: [
        "https://cdn.dribbble.com/users/landing1.png",
        "https://cdn.dribbble.com/users/landing2.png",
      ],
      features: ["High Conversion", "A/B Testing", "Pricing Tables", "Next.js"],
      rating: 5.0,
      uses: 2800,
      price: "₹239",
    },
    {
      name: "Artfolio",
      type: "portfolio",
      programming_language: "React + Tailwind CSS",
      status: "premium",
      code: "artfolio-template",
      detail:
        "Creative portfolio template designed for photographers, illustrators, and artists with gallery layout and animations.",
      cover_image:
        "https://images.unsplash.com/file-1715651741414-859baba4300dimage?w=416&dpr=2&auto=format&fit=crop&q=60",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/artfolio-gallery.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/artfolio-about.jpg",
      ],
      features: [
        "Gallery Layout",
        "Creative Design",
        "Smooth Animations",
        "Artist Focused",
      ],
      rating: 4.8,
      uses: 1900,
      price: "₹45",
    },
    {
      name: "Newsify",
      type: "blog / news",
      programming_language: "HTML / CSS / JavaScript",
      status: "premium",
      code: "newsify-wordpress",
      detail:
        "A professional news/blog template built with WordPress. Includes category pages, featured news slider, and AdSense areas.",
      cover_image:
        "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmV3c3xlbnwwfDB8MHx8fDA%3D",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/news-home.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/news-article.jpg",
      ],
      features: ["WordPress", "News Slider", "AdSense Ready", "Category Pages"],
      rating: 4.7,
      uses: 4200,
      price: "₹159",
    },
    {
      name: "EduLearn",
      type: "education",
      programming_language: "React + Tailwind CSS",
      status: "free",
      code: "edulearn-react",
      detail:
        "Education and course platform template with class listing, teacher profiles, and enrollment system.",
      cover_image:
        "https://plus.unsplash.com/premium_photo-1682284353484-4e16001c58eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVkdWNhdGlvbnxlbnwwfDB8MHx8fDA%3D",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/edulearn-home.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/edulearn-courses.jpg",
      ],
      features: [
        "Course Platform",
        "Teacher Profiles",
        "Enrollment System",
        "React",
      ],
      rating: 4.8,
      uses: 6800,
    },
    {
      name: "Medicare",
      type: "healthcare",
      programming_language: "HTML / CSS / JavaScript",
      status: "premium",
      code: "medicare-html",
      detail:
        "Healthcare and medical services template with doctor profiles, appointment booking form, and service details.",
      cover_image:
        "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGhlYWx0aCUyMGNhcmV8ZW58MHwwfDB8fHww",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/medicare-home.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/medicare-services.jpg",
      ],
      features: [
        "Appointment Booking",
        "Doctor Profiles",
        "Service Details",
        "Healthcare",
      ],
      rating: 4.9,
      uses: 1500,
      price: "₹355",
    },
    {
      name: "Foodies",
      type: "restaurant",
      programming_language: "React + Tailwind CSS",
      status: "free",
      code: "foodies-html",
      detail:
        "A restaurant website template with menu showcase, reservation form, and elegant parallax effects.",
      cover_image:
        "https://plus.unsplash.com/premium_photo-1681493207807-19e77818dc73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHJlc3R1cmFudHxlbnwwfDB8MHx8fDA%3D",
      example_images: [
        "https://colorlib.com/wp/wp-content/uploads/sites/2/restaurant-home.jpg",
        "https://colorlib.com/wp/wp-content/uploads/sites/2/restaurant-menu.jpg",
      ],
      features: [
        "Menu Showcase",
        "Reservation Form",
        "Parallax Effects",
        "Restaurant",
      ],
      rating: 4.7,
      uses: 9400,
    },
    {
      name: "StartupX",
      type: "startup / SaaS",
      programming_language: "React/Next JS + Tailwind CSS",
      status: "premium",
      code: "startupx-vue",
      detail:
        "A SaaS/startup landing template with pricing tables, product features, testimonial carousel, and integrations section.",
      cover_image:
        "https://images.unsplash.com/photo-1642132652859-3ef5a1048fd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Fhc3xlbnwwfDB8MHx8fDA%3D",
      example_images: [
        "https://cdn.dribbble.com/users/startup1.png",
        "https://cdn.dribbble.com/users/startup2.png",
      ],
      features: [
        "SaaS Focused",
        "Pricing Tables",
        "Testimonial Carousel",
        "Vue.js",
      ],
      rating: 4.9,
      uses: 3100,
      price: "₹349",
    },
  ];

  const Parm = useParams();
  const id = Parm.id;

  useEffect(() => {
    const template = templatesData.find((t) => t.code === id);
    if (template) {
      setTemplate([template]);
    } else {
      setTemplate([]);
    }
  }, []);

  return (
    <>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Template.map((template: any, index: number) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={template.cover_image}
                alt={template.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{template.name}</h2>
                <p className="text-gray-600 mb-4">{template.detail}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2">
                      ⭐ {template.rating}
                    </span>
                    <span className="text-gray-600">{template.uses} Uses</span>
                  </div>
                  <div className="flex items-center"></div>
                  <span className="text-gray-600 mr-2">{template.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
