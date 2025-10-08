"use client";
import React, { useState } from "react";
import {
  FaMagic,
  FaRocket,
  FaEye,
  FaDownload,
  FaPalette,
  FaImage,
  FaUser,
  FaArrowLeft,
  FaSpinner,
  FaRockrms,
} from "react-icons/fa";
import Link from "next/link";
import { toast } from "react-toastify";
import Footer from "@/app/Components/Footer";
import { useParams, useRouter } from "next/navigation";

const SiteGenerationPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<any>({
    name: "eStore",
    type: "e-commerce",
    cover_img:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/estore-free-template.jpg",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Responsive Design",
      "Payment Ready",
    ],
    programming_language: "React/Next.js + Tailwind CSS",
  });

  const generatedCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StyleHub - Premium Fashion Store</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* Reset and Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        :root {
            --primary: #ff3e6c;
            --secondary: #ff9a3e;
            --dark: #333;
            --light: #f8f9fa;
            --gray: #6c757d;
            --success: #28a745;
            --transition: all 0.3s ease;
        }

        body {
            background-color: #f5f5f5;
            color: var(--dark);
            line-height: 1.6;
            overflow-x: hidden;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        ul {
            list-style: none;
        }

        button {
            cursor: pointer;
            border: none;
            outline: none;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .section-title {
            text-align: center;
            margin-bottom: 40px;
            position: relative;
        }

        .section-title h2 {
            font-size: 2.5rem;
            color: var(--dark);
            display: inline-block;
            position: relative;
        }

        .section-title h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            border-radius: 2px;
        }

        /* Header Styles */
        header {
            background-color: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary);
            display: flex;
            align-items: center;
        }

        .logo i {
            margin-right: 8px;
            color: var(--secondary);
        }

        .nav-links {
            display: flex;
            gap: 30px;
        }

        .nav-links a {
            font-weight: 500;
            position: relative;
            transition: var(--transition);
        }

        .nav-links a:hover {
            color: var(--primary);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--primary);
            transition: var(--transition);
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .nav-icons {
            display: flex;
            gap: 20px;
        }

        .nav-icons i {
            font-size: 1.2rem;
            cursor: pointer;
            transition: var(--transition);
        }

        .nav-icons i:hover {
            color: var(--primary);
            transform: translateY(-2px);
        }

        .cart-count {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: var(--primary);
            color: white;
            font-size: 0.7rem;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .cart-icon {
            position: relative;
        }

        /* Hero Section */
        .hero {
            height: 80vh;
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                        url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            color: white;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(255, 62, 108, 0.3), rgba(255, 154, 62, 0.3));
            z-index: 1;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
            animation: fadeInUp 1s ease;
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
            text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 30px;
            opacity: 0.9;
        }

        .btn {
            display: inline-block;
            padding: 12px 30px;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            color: white;
            border-radius: 30px;
            font-weight: 600;
            transition: var(--transition);
            box-shadow: 0 4px 15px rgba(255, 62, 108, 0.3);
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(255, 62, 108, 0.4);
        }

        /* Categories Section */
        .categories {
            padding: 80px 0;
        }

        .category-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }

        .category-card {
            position: relative;
            height: 300px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: var(--transition);
        }

        .category-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .category-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition);
        }

        .category-card:hover img {
            transform: scale(1.1);
        }

        .category-content {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 20px;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
            color: white;
        }

        .category-content h3 {
            font-size: 1.5rem;
            margin-bottom: 5px;
        }

        /* Products Section */
        .products {
            padding: 80px 0;
            background-color: var(--light);
        }

        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 30px;
        }

        .product-card {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            transition: var(--transition);
            position: relative;
        }

        .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .product-img {
            height: 250px;
            overflow: hidden;
            position: relative;
        }

        .product-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition);
        }

        .product-card:hover .product-img img {
            transform: scale(1.1);
        }

        .product-badge {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: var(--primary);
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
        }

        .product-info {
            padding: 20px;
        }

        .product-info h3 {
            font-size: 1.2rem;
            margin-bottom: 10px;
        }

        .product-price {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
        }

        .current-price {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--primary);
        }

        .original-price {
            font-size: 1rem;
            color: var(--gray);
            text-decoration: line-through;
        }

        .product-rating {
            color: #ffc107;
            margin-bottom: 15px;
        }

        .add-to-cart {
            width: 100%;
            padding: 10px;
            background-color: var(--dark);
            color: white;
            border-radius: 5px;
            font-weight: 600;
            transition: var(--transition);
        }

        .add-to-cart:hover {
            background-color: var(--primary);
        }

        /* Featured Section */
        .featured {
            padding: 80px 0;
        }

        .featured-content {
            display: flex;
            align-items: center;
            gap: 50px;
        }

        .featured-img {
            flex: 1;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .featured-img img {
            width: 100%;
            height: auto;
            display: block;
            transition: var(--transition);
        }

        .featured-img:hover img {
            transform: scale(1.05);
        }

        .featured-text {
            flex: 1;
        }

        .featured-text h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: var(--dark);
        }

        .featured-text p {
            margin-bottom: 30px;
            color: var(--gray);
            line-height: 1.8;
        }

        /* Newsletter Section */
        .newsletter {
            padding: 80px 0;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            color: white;
            text-align: center;
        }

        .newsletter h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }

        .newsletter p {
            max-width: 600px;
            margin: 0 auto 30px;
            opacity: 0.9;
        }

        .newsletter-form {
            display: flex;
            max-width: 500px;
            margin: 0 auto;
        }

        .newsletter-form input {
            flex: 1;
            padding: 15px 20px;
            border: none;
            border-radius: 30px 0 0 30px;
            outline: none;
            font-size: 1rem;
        }

        .newsletter-form button {
            padding: 0 30px;
            background-color: var(--dark);
            color: white;
            border-radius: 0 30px 30px 0;
            font-weight: 600;
            transition: var(--transition);
        }

        .newsletter-form button:hover {
            background-color: #222;
        }

        /* Footer */
        footer {
            background-color: var(--dark);
            color: white;
            padding: 80px 0 20px;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }

        .footer-column h3 {
            font-size: 1.3rem;
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 10px;
        }

        .footer-column h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 3px;
            background: linear-gradient(to right, var(--primary), var(--secondary));
        }

        .footer-links li {
            margin-bottom: 10px;
        }

        .footer-links a {
            transition: var(--transition);
            opacity: 0.8;
        }

        .footer-links a:hover {
            opacity: 1;
            color: var(--primary);
            padding-left: 5px;
        }

        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-links a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            transition: var(--transition);
        }

        .social-links a:hover {
            background-color: var(--primary);
            transform: translateY(-5px);
        }

        .footer-bottom {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            opacity: 0.7;
        }

        /* Cart Sidebar */
        .cart-sidebar {
            position: fixed;
            top: 0;
            right: -400px;
            width: 380px;
            height: 100vh;
            background-color: white;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
            z-index: 1001;
            transition: var(--transition);
            padding: 30px;
            overflow-y: auto;
        }

        .cart-sidebar.active {
            right: 0;
        }

        .cart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
        }

        .cart-header h2 {
            font-size: 1.5rem;
        }

        .close-cart {
            font-size: 1.5rem;
            cursor: pointer;
            transition: var(--transition);
        }

        .close-cart:hover {
            color: var(--primary);
        }

        .cart-items {
            margin-bottom: 30px;
        }

        .cart-item {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
        }

        .cart-item-img {
            width: 80px;
            height: 80px;
            border-radius: 5px;
            overflow: hidden;
        }

        .cart-item-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .cart-item-details {
            flex: 1;
        }

        .cart-item-details h4 {
            font-size: 1rem;
            margin-bottom: 5px;
        }

        .cart-item-price {
            color: var(--primary);
            font-weight: 600;
            margin-bottom: 10px;
        }

        .cart-item-quantity {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .quantity-btn {
            width: 25px;
            height: 25px;
            background-color: #f5f5f5;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            transition: var(--transition);
        }

        .quantity-btn:hover {
            background-color: var(--primary);
            color: white;
        }

        .remove-item {
            color: var(--gray);
            font-size: 0.9rem;
            cursor: pointer;
            transition: var(--transition);
        }

        .remove-item:hover {
            color: var(--primary);
        }

        .cart-total {
            display: flex;
            justify-content: space-between;
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 30px;
        }

        .cart-buttons {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .checkout-btn {
            background: linear-gradient(to right, var(--primary), var(--secondary));
            color: white;
            padding: 15px;
            border-radius: 5px;
            font-weight: 600;
            transition: var(--transition);
        }

        .checkout-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(255, 62, 108, 0.3);
        }

        .continue-shopping {
            background-color: #f5f5f5;
            color: var(--dark);
            padding: 15px;
            border-radius: 5px;
            font-weight: 600;
            transition: var(--transition);
            text-align: center;
        }

        .continue-shopping:hover {
            background-color: #e9e9e9;
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
        }

        .overlay.active {
            opacity: 1;
            visibility: visible;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }

        .pulse {
            animation: pulse 2s infinite;
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
            .featured-content {
                flex-direction: column;
            }
            
            .featured-img, .featured-text {
                flex: none;
                width: 100%;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
        }

        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .cart-sidebar {
                width: 100%;
                right: -100%;
            }
            
            .newsletter-form {
                flex-direction: column;
                gap: 10px;
            }
            
            .newsletter-form input, .newsletter-form button {
                border-radius: 30px;
                width: 100%;
            }
            
            .hero h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <nav class="navbar">
                <a href="#" class="logo">
                    <i class="fas fa-store"></i>
                    StyleHub
                </a>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Sale</a></li>
                </ul>
                <div class="nav-icons">
                    <i class="fas fa-search"></i>
                    <i class="fas fa-user"></i>
                    <div class="cart-icon">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="cart-count">3</span>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Summer Collection 2023</h1>
                <p>Discover the latest trends in fashion with our exclusive summer collection. Up to 50% off on selected items.</p>
                <a href="#" class="btn pulse">Shop Now</a>
            </div>
        </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
        <div class="container">
            <div class="section-title">
                <h2>Shop By Category</h2>
            </div>
            <div class="category-grid">
                <div class="category-card">
                    <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" alt="Men's Fashion">
                    <div class="category-content">
                        <h3>Men's Fashion</h3>
                        <p>Explore the latest trends</p>
                    </div>
                </div>
                <div class="category-card">
                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Women's Fashion">
                    <div class="category-content">
                        <h3>Women's Fashion</h3>
                        <p>Discover new styles</p>
                    </div>
                </div>
                <div class="category-card">
                    <img src="https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Accessories">
                    <div class="category-content">
                        <h3>Accessories</h3>
                        <p>Complete your look</p>
                    </div>
                </div>
                <div class="category-card">
                    <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80" alt="Footwear">
                    <div class="category-content">
                        <h3>Footwear</h3>
                        <p>Step in style</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section class="products">
        <div class="container">
            <div class="section-title">
                <h2>Featured Products</h2>
            </div>
            <div class="product-grid">
                <!-- Product 1 -->
                <div class="product-card">
                    <div class="product-img">
                        <span class="product-badge">Sale</span>
                        <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Men's T-Shirt">
                    </div>
                    <div class="product-info">
                        <h3>Classic Cotton T-Shirt</h3>
                        <div class="product-price">
                            <span class="current-price">$24.99</span>
                            <span class="original-price">$34.99</span>
                        </div>
                        <div class="product-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="product-card">
                    <div class="product-img">
                        <span class="product-badge">New</span>
                        <img src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Women's Dress">
                    </div>
                    <div class="product-info">
                        <h3>Floral Summer Dress</h3>
                        <div class="product-price">
                            <span class="current-price">$49.99</span>
                        </div>
                        <div class="product-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
                <!-- Product 3 -->
                <div class="product-card">
                    <div class="product-img">
                        <img src="https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80" alt="Men's Shoes">
                    </div>
                    <div class="product-info">
                        <h3>Premium Running Shoes</h3>
                        <div class="product-price">
                            <span class="current-price">$89.99</span>
                        </div>
                        <div class="product-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
                <!-- Product 4 -->
                <div class="product-card">
                    <div class="product-img">
                        <span class="product-badge">Hot</span>
                        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Women's Bag">
                    </div>
                    <div class="product-info">
                        <h3>Leather Handbag</h3>
                        <div class="product-price">
                            <span class="current-price">$79.99</span>
                            <span class="original-price">$99.99</span>
                        </div>
                        <div class="product-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Section -->
    <section class="featured">
        <div class="container">
            <div class="featured-content">
                <div class="featured-img">
                    <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="Featured Collection">
                </div>
                <div class="featured-text">
                    <h2>Premium Quality Materials</h2>
                    <p>Our products are crafted with the finest materials to ensure durability, comfort, and style. We believe in sustainable fashion that doesn't compromise on quality.</p>
                    <p>From organic cotton to ethically sourced leather, every item in our collection is designed with both style and conscience in mind.</p>
                    <a href="#" class="btn">Learn More</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter">
        <div class="container">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get the latest updates on new products and upcoming sales</p>
            <form class="newsletter-form">
                <input type="email" placeholder="Your email address" required>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>StyleHub</h3>
                    <p>Your one-stop destination for the latest fashion trends and premium quality clothing.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-pinterest"></i></a>
                    </div>
                </div>
                <div class="footer-column">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Customer Service</h3>
                    <ul class="footer-links">
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">Payment Methods</a></li>
                        <li><a href="#">Track Your Order</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Contact Info</h3>
                    <ul class="footer-links">
                        <li><i class="fas fa-map-marker-alt"></i> 123 Fashion Street, New York</li>
                        <li><i class="fas fa-phone"></i> +1 234 567 8900</li>
                        <li><i class="fas fa-envelope"></i> info@stylehub.com</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 StyleHub. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Cart Sidebar -->
    <div class="cart-sidebar">
        <div class="cart-header">
            <h2>Your Cart</h2>
            <div class="close-cart">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <div class="cart-items">
            <!-- Cart Item 1 -->
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Product">
                </div>
                <div class="cart-item-details">
                    <h4>Classic Cotton T-Shirt</h4>
                    <div class="cart-item-price">$24.99</div>
                    <div class="cart-item-quantity">
                        <span class="quantity-btn minus">-</span>
                        <span>1</span>
                        <span class="quantity-btn plus">+</span>
                    </div>
                </div>
                <div class="remove-item">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
            <!-- Cart Item 2 -->
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Product">
                </div>
                <div class="cart-item-details">
                    <h4>Leather Handbag</h4>
                    <div class="cart-item-price">$79.99</div>
                    <div class="cart-item-quantity">
                        <span class="quantity-btn minus">-</span>
                        <span>1</span>
                        <span class="quantity-btn plus">+</span>
                    </div>
                </div>
                <div class="remove-item">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
        </div>
        <div class="cart-total">
            <span>Total:</span>
            <span>$104.98</span>
        </div>
        <div class="cart-buttons">
            <button class="checkout-btn">Proceed to Checkout</button>
            <button class="continue-shopping">Continue Shopping</button>
        </div>
    </div>

    <!-- Overlay -->
    <div class="overlay"></div>

    <script>
        // DOM Elements
        const cartIcon = document.querySelector('.cart-icon');
        const cartSidebar = document.querySelector('.cart-sidebar');
        const closeCart = document.querySelector('.close-cart');
        const overlay = document.querySelector('.overlay');
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const continueShoppingBtn = document.querySelector('.continue-shopping');
        const cartCount = document.querySelector('.cart-count');
        const quantityMinus = document.querySelectorAll('.quantity-btn.minus');
        const quantityPlus = document.querySelectorAll('.quantity-btn.plus');
        const removeItemButtons = document.querySelectorAll('.remove-item');

        // Cart functionality
        let cartItems = 3; // Initial cart items count

        // Open cart sidebar
        cartIcon.addEventListener('click', () => {
            cartSidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Close cart sidebar
        function closeCartSidebar() {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        closeCart.addEventListener('click', closeCartSidebar);
        overlay.addEventListener('click', closeCartSidebar);
        continueShoppingBtn.addEventListener('click', closeCartSidebar);

        // Add to cart functionality
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                cartItems++;
                cartCount.textContent = cartItems;
                
                // Animation effect
                button.textContent = 'Added!';
                button.style.backgroundColor = 'var(--success)';
                
                setTimeout(() => {
                    button.textContent = 'Add to Cart';
                    button.style.backgroundColor = '';
                }, 1500);
            });
        });

        // Quantity buttons
        quantityMinus.forEach(button => {
            button.addEventListener('click', () => {
                const quantityElement = button.nextElementSibling;
                let quantity = parseInt(quantityElement.textContent);
                if (quantity > 1) {
                    quantity--;
                    quantityElement.textContent = quantity;
                    updateCartTotal();
                }
            });
        });

        quantityPlus.forEach(button => {
            button.addEventListener('click', () => {
                const quantityElement = button.previousElementSibling;
                let quantity = parseInt(quantityElement.textContent);
                quantity++;
                quantityElement.textContent = quantity;
                updateCartTotal();
            });
        });

        // Remove item from cart
        removeItemButtons.forEach(button => {
            button.addEventListener('click', () => {
                const cartItem = button.closest('.cart-item');
                cartItem.style.opacity = '0';
                setTimeout(() => {
                    cartItem.remove();
                    updateCartTotal();
                    cartItems--;
                    cartCount.textContent = cartItems;
                }, 300);
            });
        });

        // Update cart total
        function updateCartTotal() {
            const cartItems = document.querySelectorAll('.cart-item');
            let total = 0;
            
            cartItems.forEach(item => {
                const priceText = item.querySelector('.cart-item-price').textContent;
                const price = parseFloat(priceText.replace('$', ''));
                const quantity = parseInt(item.querySelector('.cart-item-quantity span:nth-child(2)').textContent);
                
                total += price * quantity;
            });
            
            document.querySelector('.cart-total span:last-child').textContent = '$' + total.toFixed(2);
        }

        // Newsletter form submission
        const newsletterForm = document.querySelector('.newsletter-form');
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input');
            emailInput.value = '';
            alert('Thank you for subscribing to our newsletter!');
        });

        // Animation on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.category-card, .product-card, .featured-img, .featured-text');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial state for animation
        document.querySelectorAll('.category-card, .product-card, .featured-img, .featured-text').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);
    </script>
</body>
</html>`;

  const [formData, setFormData] = useState<any>({
    brandName: "",
    description: "",
    logo: null,
    primaryColor: "#10B981", // emerald
    secondaryColor: "#3B82F6", // blue
    email: "",
    slogan: "",
    tone: "professional",
  });

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [generatedSite, setGeneratedSite] = useState<any>(null);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev: any) => ({
        ...prev,
        logo: URL.createObjectURL(file),
      }));
    }
  };

  const handleGenerateWebsite = async () => {
    if (!formData.brandName || !formData.description) {
      toast.error("Please fill in brand name and description");
      return;
    }

    setIsGenerating(true);

    try {
      // Simulate API call to generate website
      setTimeout(() => {
        setIsGenerating(false);
        setIsGenerated(true);
        setGeneratedSite({
          url: "https://generated-site.cobraai.com/demo",
          downloadUrl: "/download/project.zip",
        });
        toast.success("Website generated successfully!");
      }, 3000);

      // Actual API call would be:
      // const response = await AxiosInstance.post('/creator/generate', {
      //   templateId: selectedTemplate.id,
      //   ...formData
      // });
    } catch (error) {
      setIsGenerating(false);
      toast.error("Failed to generate website. Please try again.");
    }
  };

  const toneOptions = [
    { value: "professional", label: "Professional" },
    { value: "creative", label: "Creative" },
    { value: "luxury", label: "Luxury" },
    { value: "modern", label: "Modern" },
    { value: "stylish", label: "Stylish" },
  ];

  const Router = useRouter();

  const param = useParams();
  const id = param.id;
  const BackNavigation = () => {
    Router.push(`/creator/${id}`);
  };

  const handleViewLive = () => {
    if (generatedSite && generatedSite.url) {
      window.open("/creator/preview", "_blank");
    }
  };

  return (
    <>
      <div className="min-h-screen pt-10 bg-gray-950 bg-gradient-to-br from-gray-950 via-emerald-900/30 to-green-700/50 text-white">
        {/* Navigation */}
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={BackNavigation}
            className="cursor-pointer inline-flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-colors mb-6"
          >
            <FaArrowLeft />
            <span>Back to Templates</span>
          </button>
        </div>

        {/* Header Section */}
        <section className="container mx-auto px-6 py-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full mb-6 border border-emerald-500/20">
              <FaMagic className="text-emerald-400" />
              <span className="text-sm">AI-Powered Website Builder</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-h capitalize">
              Build Your{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Brand Website
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Just describe your brand, and let{" "}
              <span className="font-bold text-emerald-400 font-h">
                Cobra AI
              </span>{" "}
              do the rest. No coding required.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
              {/* Left Column - Input Form */}
              <div className="space-y-8">
                {/* Selected Template Preview */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center space-x-3">
                    <FaRocket className="text-emerald-400 text-lg sm:text-xl" />
                    <span>Selected Template</span>
                  </h2>

                  <div className="flex flex-col sm:items-start gap-4">
                    <div className="flex justify-center sm:justify-start">
                      <img
                        src={selectedTemplate.cover_img}
                        alt={selectedTemplate.name}
                        className="w-full h-full  object-cover rounded-lg flex-shrink-0"
                      />
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold mb-2">
                        {selectedTemplate.name}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base mb-3">
                        {selectedTemplate.type} •{" "}
                        {selectedTemplate.programming_language}
                      </p>

                      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                        {selectedTemplate.features
                          .slice(0, 3)
                          .map((feature: string, index: number) => (
                            <span
                              key={index}
                              className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-xs border border-emerald-500/30"
                            >
                              {feature}
                            </span>
                          ))}
                      </div>

                      <div className="flex justify-center sm:justify-start">
                        <button className="text-emerald-400 cursor-pointer hover:text-emerald-300 text-sm flex items-center space-x-2">
                          <FaEye className="text-xs" />
                          <span>View Demo</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brand Information Form */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                    <FaUser className="text-emerald-400" />
                    <span>Brand Information</span>
                  </h2>

                  <div className="space-y-6">
                    {/* Brand Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Brand Name *
                      </label>
                      <input
                        type="text"
                        name="brandName"
                        value={formData.brandName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your brand name"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Brand Description *
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        placeholder="Describe what your brand does, your mission, or what makes you unique..."
                      />
                    </div>

                    {/* Additional Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Contact Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                          placeholder="contact@yourbrand.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Brand Tone
                        </label>
                        <select
                          name="tone"
                          value={formData.tone}
                          onChange={handleInputChange}
                          className="cusror-pointer w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        >
                          {toneOptions.map((option) => (
                            <option
                              className="bg-gray-950 text-white cursor-pointer"
                              key={option.value}
                              value={option.value}
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Slogan */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Slogan or Tagline
                      </label>
                      <div className="flex space-x-3">
                        <textarea
                          name="slogan"
                          value={formData.slogan}
                          onChange={handleInputChange}
                          rows={2}
                          className="resize-none flex-1 bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                          placeholder="Craft your perfect slogan or let AI generate one..."
                        />
                        <button
                          type="button"
                          className="cursor-pointer bg-gradient-to-r from-emerald-500/20 to-green-600/20 hover:from-emerald-500/30 hover:to-green-600/30 border border-emerald-500/30 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 whitespace-nowrap"
                          onClick={() => {
                            // AI-powered slogan generator based on brand name and description
                            const brandSlogans = [
                              `${formData.brandName} - Quality You Can Trust`,
                              `Experience Excellence with ${formData.brandName}`,
                              `${formData.brandName}: Where Innovation Meets Quality`,
                              `Your Vision, Our Passion - ${formData.brandName}`,
                              `${formData.brandName}: Building Tomorrow, Today`,
                              `The Future is ${formData.brandName}`,
                              `${formData.brandName}: Beyond Expectations`,
                              `Simply Better. ${formData.brandName}.`,
                              `${formData.brandName} - Made for You`,
                              `Discover the Difference with ${formData.brandName}`,
                            ];

                            const genericSlogans = [
                              "Quality That Speaks for Itself",
                              "Innovation at Its Finest",
                              "Where Dreams Become Reality",
                              "Excellence in Every Detail",
                              "Your Success is Our Mission",
                              "Building Better Experiences",
                              "The Art of Perfection",
                              "Simply Extraordinary",
                              "Beyond the Ordinary",
                              "Creating Tomorrow's Solutions",
                            ];

                            const slogans = formData.brandName
                              ? brandSlogans
                              : genericSlogans;
                            const randomIndex = Math.floor(
                              Math.random() * slogans.length
                            );
                            setFormData((prev: any) => ({
                              ...prev,
                              slogan: slogans[randomIndex],
                            }));
                          }}
                        >
                          <FaMagic className="text-sm" />
                          <span className="hidden sm:inline">AI Generate</span>
                        </button>
                      </div>
                      <p className="text-xs text-gray-400 mt-2 font-inter">
                        Let{" "}
                        <span className="font-semibold text-emerald-400">
                          AI craft
                        </span>{" "}
                        the perfect slogan based on your brand identity
                      </p>
                    </div>
                  </div>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerateWebsite}
                  disabled={
                    isGenerating || !formData.brandName || !formData.description
                  }
                  className="cursor-pointer w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
                >
                  {isGenerating ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      <span>Generating Your Website...</span>
                    </>
                  ) : (
                    <>
                      <FaMagic />
                      <span>Generate Website with AI</span>
                    </>
                  )}
                </button>
              </div>

              {/* Right Column - Preview */}
              <div className="space-y-6">
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                    <FaEye className="text-emerald-400" />
                    <span>Live Preview</span>
                  </h2>

                  {isGenerating ? (
                    <div className="flex flex-col items-center justify-center py-20">
                      <FaSpinner className="animate-spin text-4xl text-emerald-400 mb-4" />
                      <p className="text-gray-400 text-lg">
                        AI is building your website...
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        This may take a few moments
                      </p>
                    </div>
                  ) : isGenerated ? (
                    <div className="space-y-4">
                      <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 relative">
                        <div className="aspect-video bg-gray-950 overflow-hidden">
                          <img
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src={selectedTemplate.cover_img}
                            alt=""
                          />
                          <div
                            className="absolute top-0 left-0 w-full h-full z-30 bg-gray-950/70
                           backdrop-blur-xs flex items-center justify-center"
                          >
                            <div className="text-center">
                              <div className="text-4xl mb-4">🚀</div>
                              <h3 className="text-xl font-bold mb-2">
                                Website Ready!
                              </h3>
                              <p className="text-gray-100">
                                Your AI-generated website is complete
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-4 mt-5">
                        <button
                          onClick={handleViewLive}
                          className="cursor-pointer flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                        >
                          <FaEye />
                          <span>View Live</span>
                        </button>
                        <button className="cursor-pointer flex-1 border border-emerald-500/30 hover:border-emerald-400 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-emerald-500/10 flex items-center justify-center space-x-2">
                          <FaRockrms />
                          <span>Deploy Website</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 text-center">
                      <div className="text-6xl mb-4">✨</div>
                      <h3 className="text-xl font-bold mb-2">Preview Area</h3>
                      <p className="text-gray-400">
                        Your generated website will appear here after you click
                        "Generate Website"
                      </p>
                    </div>
                  )}
                </div>

                {/* What You'll Get */}
                <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-emerald-500/20 p-6">
                  <h3 className="text-2xl font-bold mb-4 text-emerald-400 font-h">
                    What You'll Get
                  </h3>
                  <div className="space-y-3 font-inter font-light text-lg">
                    {[
                      "Fully functional website in minutes",
                      "SEO-optimized content and structure",
                      "Mobile-responsive design",
                      "Brand-consistent styling",
                      "Clean, professional code",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SiteGenerationPage;
