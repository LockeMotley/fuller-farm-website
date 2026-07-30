FULLER FARM WEBSITE
===================

FILES
-----
index.html             Main website page
styles.css             Website colors and layout
script.js              Mobile menu and order-total calculator
fuller-farm-logo.png   Farm logo

OPEN THE WEBSITE
----------------
Double-click index.html to preview the website in your browser.

IMPORTANT: SET UP THE PRIVATE ORDER FORM
----------------------------------------
The form currently uses this placeholder:

https://formspree.io/f/YOUR_FORM_ID

To receive reservations privately:

1. Create an account at Formspree.
2. Create a new form using the email address where you want reservations delivered.
3. Formspree will give you an endpoint similar to:
   https://formspree.io/f/abcdwxyz
4. Open index.html in a text editor.
5. Search for YOUR_FORM_ID.
6. Replace the entire placeholder URL with your Formspree endpoint.
7. Save the file and test the form.

Your email address and phone number are not shown on the website.

ADDING GALLERY PHOTOS
---------------------
The current gallery contains friendly placeholders.

For each photo:

1. Put the photo inside this website folder.
2. Give it a simple filename, such as:
   ducks.jpg
   chickens.jpg
   eggs.jpg
3. In index.html, find the section with class="gallery".
4. Replace a placeholder like this:

<figure class="gallery-placeholder">
  <div aria-hidden="true">🐔</div>
  <figcaption>Add a chicken photo</figcaption>
</figure>

with:

<figure class="gallery-photo">
  <img src="chickens.jpg" alt="Chickens at Fuller Farm">
  <figcaption>Our chickens at Fuller Farm</figcaption>
</figure>

Then add this CSS near the bottom of styles.css:

.gallery-photo {
  position: relative;
  overflow: hidden;
  margin: 0;
  border-radius: 24px;
}

.gallery-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-photo figcaption {
  position: absolute;
  right: 12px;
  bottom: 12px;
  left: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  color: white;
  background: rgba(0, 0, 0, 0.55);
}

PUBLISHING
----------
You can publish these files with a service such as Netlify, GitHub Pages,
or your web-hosting provider. Upload all files together so the logo,
styles, and JavaScript continue to work.

PRIVACY
-------
The exact pickup address is not published. The website only says that
Fuller Farm serves the Rome, Georgia area. You can share exact pickup
details after confirming each reservation.
