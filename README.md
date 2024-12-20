# eCommerce Store - React Application

## Deployment
The project has been deployed to Netlify. You can view the live site here:
Live site [eCom Live Site](https://ecom-react-mariusz.netlify.app/)

![image](https://github.com/user-attachments/assets/bfb50a28-6730-4a57-80cf-5cc5690dd008) 
<br>
<br>
This project is an eCommerce store built with React, following the requirements set out in the project brief. The store uses an external API (https://v2.api.noroff.dev/online-shop) to fetch product data and allows users to browse products, view individual product details, add items to the cart, and complete the checkout process.

## Table of Contents
- [Deployment](#deployment)
- [Table of Contents](#table-of-contents)
- [Goal](#goal)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Pages](#pages)
- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)

## Goal
To demonstrate knowledge of React by building an eCommerce store using the API provided by Noroff.

## Features
- Homepage displaying a list of all available products.
- Search bar with live search filtering.
- Product page for individual product details.
- Cart functionality with the ability to add, view, and remove items.
- Checkout flow including a success page with an order confirmation message.
- Contact form with validation.
- Responsive design for both desktop and mobile.
- Clean and well-structured code using modern React features like hooks and React Router.

## Technologies Used

- React: Core framework for building the front-end.
- React Router: For managing page navigation.
- Styled-components: Used for styling the components and making the design responsive.
- React Toastify: To display notifications for various actions such as successful form submissions and errors.
- Fetch API: For making requests to the external API to retrieve product data.
- Netlify: For deployment of the live site.

## Pages

1. Homepage: Lists all products fetched from the API and provides a search bar for filtering products by name. Clicking on a product redirects the user to the individual product page.
2. Product Page: Displays the details of a specific product including its title, description, image, and discounted price (if available). There is an "Add to Cart" button to add products to the cart.
3. Cart Page: Lists all products added to the cart, displays the total price, and includes a "Checkout" button.
4. Checkout Success Page: Displays a success message confirming the order and provides a link to return to the homepage. The cart is cleared upon reaching this page.
5. Contact Page: Contains a form with validation for the following fields:
 - Full name (minimum 3 characters)
 - Subject (minimum 3 characters)
 - Email (valid email address)
 - Telephone number
 - Message body (minimum 3 characters)
Once validation passes, the form data is logged to the console.


## Installation

To run this project locally, follow the steps below:

1. Clone the repository:<br>

```
git clone https://github.com/MariuszRozycki/e-com-store-react.git
```

2. Navigate to the project directory:<br>

```
cd ecom-react-store
```

3. Install dependencies:<br>

```
npm install
```

4. Start the development server:<br>
```
npm run rev
```

5. In terminal click link: http://localhost:5173 or open your browser and go to http://localhost:5173

![image](https://github.com/user-attachments/assets/47c74803-7052-4131-b58e-c1ccec57e2b9)
<br>
## Usage
- On the homepage, browse the products or use the search bar to find a specific product.
- Click on a product to view more details.
- Add products to the cart by clicking the "Add to Cart" button on the product page.
- View your cart by clicking on the Cart icon in the header.
- Proceed to checkout and place an order to see the success message.
- Use the contact form to get in touch, and check the console for form data after validation.

Additionally, the source code is available on GitHub:
https://github.com/MariuszRozycki/e-com-store-react

## Author
Mariusz Rozycki <br>
Email: marius.front@gmail.com

 
