DIVYA FURNITURE WORLD
Customer Website — Complete End-to-End Functional Documentation
Document Type: Functional Requirements and Feature Specification
Platform: Responsive Web Application
Frontend: Next.js, React, JavaScript, CSS
Business Model: Hybrid Furniture Marketplace
Primary Operations: Furniture Sales, Multi-Vendor Sales, Furniture Rentals
Target Audience: Customers, Furniture Buyers, Rental Customers
Document Scope: Customer-Facing Website Only

1. PROJECT OVERVIEW
1.1 Business Overview
Divya Furniture World will operate as a hybrid furniture e-commerce marketplace.
The platform will allow customers to purchase furniture directly from Divya Furniture World and from approved third-party furniture shops registered on the platform.
Customers will also be able to rent eligible furniture from Divya Furniture World and participating rental providers.
The website should provide a unified shopping experience regardless of which business or shop owns the furniture.
Customers should not need to visit separate websites to purchase furniture from different shops or find furniture available for rent in their city.
1.2 Business Channels
The platform will support three primary channels.
Channel 1: Divya Furniture World — Direct Sales
Divya Furniture World lists and sells its own furniture.
Examples:
Sofas
Beds
Wardrobes
Dining tables
TV units
Study tables
Coffee tables
Recliners
Mattresses
Bookshelves
Shoe racks
Other furniture and home furnishing products
Divya Furniture World manages its own product listings, pricing, inventory, and fulfilment according to its business policies.
Channel 2: Partner Furniture Shops — Marketplace Sales
External furniture shops can register and list their products after completing the required onboarding and approval process.
Customers can discover products from different approved shops through the same website.
Each marketplace product must be associated with its respective vendor.
Channel 3: Furniture Rental Marketplace
Customers can rent eligible furniture for a specified period.
Rental listings may belong to Divya Furniture World or approved rental providers.
Customers should be able to check rental availability, understand the rental charges, select a rental duration, and submit a booking.
The actual rental conditions must be configured according to the relevant provider's policies.
1.3 Primary Business Objectives
Sell furniture directly to customers.
Allow approved furniture shops to sell through the platform.
Allow approved providers to offer furniture for rent.
Make furniture discovery location-aware.
Support product browsing, cart management, checkout, and online payments.
Provide customers with order and rental booking visibility.
Support customer accounts, addresses, wishlists, and purchase history.
Improve organic visibility through product, category, and location pages.
Build a scalable foundation for adding more vendors and cities.
Provide a consistent customer experience across desktop, tablet, and mobile devices.

2. USER TYPES AND ACCESS
The customer website will support the following user types.
2.1 Guest Customer
A guest customer visits the website without signing in.
Permissions:
Browse the homepage.
View categories and products.
Search and filter furniture.
View product details.
View vendor information that is public.
Browse available rental furniture.
Add products to a session-based cart.
Manage a session-based wishlist, if supported.
Select a location.
Start checkout.
Register or sign in.
Restrictions:
Access to protected account information.
Viewing complete order history.
Managing saved account addresses.
Viewing account-specific order and rental details.
The platform may allow guest checkout if enabled by the business.
2.2 Registered Customer
A registered customer can use the website's account features.
Permissions:
All public browsing functionality.
Manage their profile.
Save addresses.
Manage their wishlist.
View order history.
Track purchases.
View rental bookings.
Request eligible cancellations or returns.
Access invoices or receipts where supported.
Submit reviews for eligible purchases.
Raise support requests.
2.3 Customer With Active Rental Bookings
This is a registered customer who has rented furniture.
Additional functionality:
View rental duration.
View rental start and end dates.
View rental payment details.
Review deposit information, where applicable.
View scheduled delivery and collection information.
Request eligible extensions.
Initiate eligible return or pickup requests.
Review rental terms and damage policies.
2.4 Customer Buying From Multiple Vendors
A customer may purchase products supplied by more than one vendor.
The customer should experience a unified shopping process where commercially and technically supported.
The backend must maintain vendor-specific order records and fulfilment details.
The customer-facing interface should communicate:
Which vendor supplies each product.
Whether products have different delivery dates.
Whether shipping charges differ.
Whether items may arrive in separate shipments.
Whether cancellation and return conditions differ.
A single checkout must not be treated as proof that every vendor's products can be combined into one physical shipment.

3. WEBSITE INFORMATION ARCHITECTURE
The customer-facing website should contain the following primary sections.
3.1 Global Website Layout
A. Promotional Announcement Bar
Purpose: Display important promotions and announcements.
Possible content:
Seasonal sales.
Discounts.
Delivery offers.
New product announcements.
Rental promotions.
Features:
Dynamic promotional text.
Optional promotional link.
Optional countdown for time-limited campaigns.
Responsive layout.
Dismissal support, if desired.
Configurable visibility.
Promotions must be controlled by valid campaign dates and conditions.
B. Main Header
The header should provide:
Brand logo.
Main navigation.
Product search.
Location selector.
Account access.
Wishlist access.
Cart access.
Expected behavior:
Logo redirects to the homepage.
Search opens or activates product search.
Location selector opens a location-selection interface.
Account icon opens sign-in or account navigation.
Wishlist opens the customer's wishlist.
Cart displays the current item count and opens the cart.
The design should remain consistent with the existing website.
C. Main Navigation
Potential navigation items:
Home
Shop by Category
New Arrivals
Best Sellers
Offers
Furniture Rentals
Partner Stores
Locations
Contact Us
Navigation items should be enabled only when their corresponding routes and functionality are available.
Dropdown navigation may expose furniture categories and subcategories.
D. Main Content Area
The main content area displays the relevant page, including:
Banners.
Product listings.
Category information.
Product details.
Rental listings.
Location-specific content.
Forms and customer account screens.
E. Footer
The footer should contain:
Customer Service
Contact Us.
FAQs.
Shipping and Delivery.
Returns and Refunds.
Cancellation Policy.
Rental Policy.
Company
About Us.
Our Stores.
Partner With Us.
Careers, if available.
Legal
Privacy Policy.
Terms and Conditions.
Shipping Policy.
Refund Policy.
Rental Terms and Conditions.
Shopping
Furniture Categories.
New Arrivals.
Best Sellers.
Offers.
Furniture Rentals.
Contact Information
Customer support email.
Customer support phone.
Business address, where appropriate.
Social media links.
Footer links must lead to real pages or valid external destinations.

4. CUSTOMER JOURNEY — END TO END
The primary purchase journey is:
Customer opens the website.
Customer selects a city or delivery PIN code.
Customer browses categories or searches for furniture.
Customer applies filters and sorting.
Customer opens a product detail page.
Customer reviews the price, specifications, availability, and delivery information.
Customer selects a variant, if applicable.
Customer adds the product to the cart.
Customer reviews the cart.
Customer proceeds to checkout.
Customer enters or selects a delivery address.
Customer reviews delivery charges, discounts, taxes, and the order total.
Customer selects an available payment method.
Customer completes payment or submits an order using an enabled payment-on-delivery option.
The website confirms the order based on the verified backend order status.
The customer receives an order confirmation.
The customer tracks the order.
The customer receives the furniture.
The customer may request eligible cancellation, return, refund, support, or review actions.
The rental journey follows a similar process but includes additional steps for rental duration, availability, rental pricing, deposits, delivery, collection, and returns.

5. HOMEPAGE FUNCTIONAL REQUIREMENTS
Route: /
The homepage is the primary entry point for customers.
5.1 Hero Banner
Purpose: Highlight the main furniture collections or promotions.
Features:
Main promotional image.
Heading.
Supporting description.
Call-to-action button.
Optional secondary action.
Desktop and mobile image variants.
Clickable banner navigation.
Responsive image rendering.
Possible actions:
Shop Furniture.
Explore Sofas.
Browse New Arrivals.
Explore Rentals.
Requirements:
Banner text must remain readable.
Images must not distort.
Mobile layouts must be supported.
Links must lead to valid pages.
Campaign banners must respect configured start and end dates.
5.2 Shop by Category
Display the main furniture categories.
Possible categories:
Sofas.
Beds.
Wardrobes.
Dining Tables.
TV Units.
Study Tables.
Coffee Tables.
Recliners.
Mattresses.
Bookshelves.
Shoe Racks.
Home Decor.
Features:
Category image or icon.
Category name.
Clickable navigation.
Responsive grid.
Optional subcategory navigation.
Clicking a category should open the corresponding category listing page.
5.3 Featured Products
Display selected products.
Possible sections:
New Arrivals.
Best Sellers.
Trending Furniture.
Recommended Products.
Recently Viewed Products.
Products on Offer.
Each product card should support:
Product image.
Product name.
Selling price.
Original price, when applicable.
Discount label, when applicable.
Wishlist action.
Product detail navigation.
Availability indicator, when relevant.
Add-to-cart actions should validate selected variants and availability.
5.4 Promotional Sections
The homepage may display:
Festival offers.
Clearance sales.
Bundle promotions.
Category discounts.
Financing information, if available.
Rental promotions.
The system must not display expired promotions as active.
5.5 Furniture Rental Section
Purpose: Make rental furniture discoverable without requiring customers to navigate through standard sale products.
Features:
Rental banner.
Featured rental products.
Rental categories.
Location-based rental discovery.
Starting rental price, where applicable.
Minimum rental duration, where applicable.
Rental availability information.
The displayed starting price must clearly identify its billing period, such as per day or per month.
5.6 Partner Stores Section
Purpose: Introduce the marketplace and participating shops.
Features:
Featured approved shops.
Shop name.
Public shop location.
Logo or store image.
Available product categories.
Link to the shop's public storefront.
Only approved vendors should appear in customer-facing store listings.
5.7 Location-Based Shopping
Customers should be able to discover furniture available for their location.
Features:
City selector.
PIN-code entry.
Delivery availability checks.
Rental service availability checks.
Location-specific product results.
Relevant delivery estimates.
The website should distinguish between:
Products available for purchase in the selected location.
Products available for rental in the selected location.
Products unavailable in the selected location.
5.8 Newsletter or Promotional Subscription
If implemented, the homepage may allow customers to subscribe to marketing communications.
Requirements:
Valid email or phone input.
Consent wording.
Duplicate subscription handling.
Confirmation feedback.
Unsubscribe functionality for marketing communications.
5.9 Homepage Loading and Error States
The homepage should provide:
Skeleton loading where appropriate.
Graceful empty states.
Fallback imagery.
Error handling for failed API requests.
A retry option for recoverable errors.
A failed featured-products API should not prevent the entire homepage from rendering.

6. LOCATION AND SERVICEABILITY
Location selection is particularly important because the platform will include partner shops across different cities.
6.1 Location Selector
The location selector should be accessible from the header and relevant shopping pages.
Input options:
City.
PIN code.
Supported saved address.
Browser location, only with appropriate permission and a clear user choice.
The platform should not require location permission to browse the website.
6.2 Location Selection Workflow
Customer opens the location selector.
Enters a city or PIN code.
Website validates the input.
Backend checks the supported service area.
Website displays the selected location.
Product listings and delivery information update accordingly.
6.3 Location Persistence
The selected location may be retained in:
Browser session storage.
Local storage.
Customer account preferences.
Saved delivery address.
The selected location should not silently override an explicit delivery address during checkout.
6.4 Location-Based Product Availability
Availability should be determined by relevant factors:
Vendor's service area.
Product inventory.
Delivery capabilities.
Product restrictions.
Rental service area.
Rental availability for the selected period.
6.5 Location-Based Rental Availability
Rental listings must account for:
Delivery location.
Provider's service area.
Available inventory.
Rental start date.
Rental end date.
Existing bookings.
Preparation or turnaround time, if configured.
A product being available for sale does not automatically mean it is available for rent.

7. PRODUCT CATEGORIES AND LISTING PAGES
Example routes:
/collection/sofas
/collection/beds
/collection/wardrobes
/collection/dining-tables
The actual route structure should follow the existing application.
7.1 Category Landing Page
Each category page should contain:
Category name.
Breadcrumb navigation.
Category description.
Category banner, if configured.
Subcategory links.
Product listing.
Filters.
Sorting controls.
Pagination or progressive loading.
Relevant SEO metadata.
7.2 Product Listing Cards
Each card should display:
Product image.
Product name.
Price.
Original price, when applicable.
Discount amount or percentage, when applicable.
Product rating, if genuine reviews exist.
Wishlist action.
Vendor identity or store attribution.
Availability information, where relevant.
If a product is available from multiple vendors, the interface must clearly communicate whether the displayed item represents one vendor's listing or a comparison of multiple offers.
7.3 Product Filters
Potential filters:
Price
Minimum price.
Maximum price.
Predefined price ranges.
Category
Category.
Subcategory.
Furniture Attributes
Material.
Colour.
Size.
Style.
Brand, if applicable.
Seating capacity, where relevant.
Storage type, where relevant.
Marketplace
Divya Furniture World products.
Partner shop products.
Selected vendor, where appropriate.
Availability
In stock.
Available for delivery.
Available for rent.
Filters should only appear when applicable data exists.
7.4 Sorting
Available sorting options may include:
Recommended.
Price: Low to High.
Price: High to Low.
Newest First.
Best Selling.
Highest Rated.
Sorting must use actual product data rather than arbitrary display order.
7.5 Search and Filter Synchronization
Where appropriate:
Filters should be reflected in URL query parameters.
Browser Back should restore previous search or filter states.
Refreshing the page should preserve valid query parameters.
Invalid filter values should be safely ignored or normalized.
7.6 Pagination
Requirements:
Configurable page size.
Total result count.
Previous and Next controls.
Correct product ordering.
Empty-result handling.
URL synchronization where applicable.
7.7 Empty Search Results
When no products match:
Display a clear message.
Preserve the customer's search query.
Provide a Clear Filters action.
Suggest relevant categories or alternative products.

8. SEARCH FUNCTIONALITY
Search should help customers find furniture by product name, category, attribute, or relevant keyword.
8.1 Search Input
Features:
Search field in the global header.
Submit on Enter.
Search icon action.
Clear search action.
Mobile-friendly search layout.
8.2 Search Suggestions
Suggestions may include:
Matching products.
Categories.
Popular searches.
Recent searches.
Relevant brands or stores.
Recent search history should be stored only as appropriate for the user experience and privacy policy.
8.3 Search Results
Search results should display:
Search query.
Matching product count.
Product grid.
Sorting.
Filters.
Pagination.
Empty-result state.
8.4 Search Relevance
The search system should prioritize relevant results.
Potential matching fields:
Product name.
SKU.
Category.
Subcategory.
Material.
Colour.
Description.
Vendor name, where relevant.
Results must respect location availability, publication status, and applicable permissions.

9. PRODUCT DETAIL PAGE
Example route:
/product/[slug]
The product detail page is one of the most important customer-facing pages.
9.1 Product Information
Display:
Product name.
Product images.
Product description.
Selling price.
Original price, when applicable.
Discount details.
Product SKU, if useful.
Category and subcategory.
Brand or manufacturer, where applicable.
Product specifications.
Dimensions.
Material.
Colour.
Weight, where relevant.
Assembly requirements, where relevant.
Warranty information, where applicable.
Care instructions.
Only verified product information should be displayed.
9.2 Product Image Gallery
Features:
Main product image.
Thumbnail gallery.
Image selection.
Zoom or enlarged preview.
Responsive images.
Alternative images showing different angles.
Image requirements:
Use correct image aspect ratios.
Avoid layout shifts.
Provide meaningful alternative text.
Handle missing images gracefully.
9.3 Product Variants
If the product supports variants, customers should be able to select relevant options.
Examples:
Colour.
Size.
Material.
Configuration.
Upholstery.
Storage variation.
Variant selection should update the relevant:
Price.
SKU.
Inventory.
Images.
Availability.
Delivery information.
A customer should not be able to add a variant that is unavailable or invalid.
9.4 Vendor Information
For marketplace products, display relevant public vendor information:
Shop name.
Store location.
Seller profile.
Delivery coverage.
Available products.
Public contact or support information, where approved.
The page should distinguish Divya Furniture World's own inventory from partner inventory.
9.5 Delivery Availability Checker
Allow customers to enter a PIN code or select a location.
Display:
Whether delivery is available.
Estimated delivery window, if supported.
Applicable delivery charge, if available.
Relevant service limitations.
Delivery estimates should be based on actual configured service rules or backend responses.
9.6 Product Availability
Display relevant statuses:
In Stock.
Low Stock, if appropriate.
Out of Stock.
Currently Unavailable in Your Location.
Temporarily Unavailable.
Only show inventory counts if the business intentionally chooses to expose them.
9.7 Add to Cart
Workflow:
Customer selects required variants.
Customer selects quantity.
Website validates the selection.
Backend verifies product and inventory availability.
Product is added to the cart.
Cart count updates.
Confirmation feedback appears.
If the operation fails, display a useful error without losing the customer's selections.
9.8 Buy Now
The Buy Now action should:
Validate the selected product.
Validate the selected variant and quantity.
Add or prepare the selected item for checkout.
Navigate to checkout.
Existing cart items should not be unexpectedly deleted.
9.9 Wishlist
Customers should be able to add or remove products from their wishlist.
For guests, the website may maintain a temporary wishlist.
After sign-in, the application may merge temporary and account wishlists according to defined rules.
9.10 Related Products
Potential sections:
Similar products.
Frequently bought together.
Complementary furniture.
Recently viewed products.
Products from the same vendor.
Recommendations should not expose unavailable products as purchasable.
9.11 Reviews and Ratings
Where implemented, the page may display:
Average rating.
Rating distribution.
Customer reviews.
Review images.
Verified-purchase indicator.
Only eligible customers should be permitted to submit reviews.
The website should support reporting inappropriate reviews and handling moderation.
9.12 Product Error States
Handle:
Invalid product slug.
Deleted product.
Unpublished product.
Product unavailable in the selected location.
API failure.
Missing images.
Inventory changes during checkout.
Invalid product URLs should display a suitable not-found experience rather than a blank page.

10. PARTNER SHOP STOREFRONTS
Example route:
/vendors/[slug]
Each approved partner shop may have a public storefront.
10.1 Store Profile
Display:
Store name.
Store logo.
Store images, if available.
Description.
City or service area.
Product categories.
Public business information.
Store policies, where applicable.
Sensitive vendor documents and internal financial information must never appear on public pages.
10.2 Store Product Listings
Features:
Products offered by the shop.
Product search within the store.
Sorting.
Category filters.
Availability information.
Product detail navigation.
Only active, approved, published listings should be displayed.
10.3 Store Rental Listings
If the vendor offers rentals, customers should be able to browse eligible rental products.
The storefront should clearly distinguish products for sale from products for rent.
10.4 Vendor Status
If a shop is suspended, deactivated, or removed from the marketplace, its listings should not remain available for new transactions.
Existing orders and bookings must remain accessible to customers and authorized support staff.

11. FURNITURE RENTAL MARKETPLACE
Example route:
/rentals
Rental functionality is a separate transaction type from furniture purchases.
11.1 Rental Landing Page
Display:
Rental furniture categories.
Featured rental products.
Rental offers.
Supported cities.
Rental process explanation.
Rental FAQs.
Clear call-to-action buttons.
11.2 Rental Categories
Possible categories:
Sofas.
Beds.
Mattresses.
Dining Tables.
Wardrobes.
Study Tables.
Office Furniture.
Complete Furniture Packages.
The available categories must reflect actual rental inventory.
11.3 Rental Listing Cards
Display:
Product image.
Product name.
Rental price.
Billing period.
Minimum rental duration, if applicable.
Provider name.
Availability indicator.
Location availability.
View Details action.
For example, a monthly rental price must not be presented as a one-time purchase price.
11.4 Rental Product Detail Page
Display:
Product details.
Images.
Rental provider.
Rental price.
Billing period.
Minimum rental duration.
Security deposit, if applicable.
Delivery or collection charges, if applicable.
Available rental periods.
Supported locations.
Rental terms.
Damage and maintenance policies.
Cancellation and refund rules.
11.5 Rental Duration Selection
Customers should select:
Rental start date.
Rental end date or duration.
Delivery location.
The interface should calculate the estimated rental charges based on the provider's pricing rules.
11.6 Rental Availability
Before confirming a booking, the system must check:
Inventory.
Existing bookings.
Requested dates.
Provider service area.
Delivery and collection capacity, if relevant.
Required preparation or turnaround time.
Availability must be revalidated when the customer submits the booking.
11.7 Rental Price Calculation
A rental estimate may include:
Rental subtotal
Applicable delivery charges
Applicable setup or installation charges
Applicable taxes
Applicable security deposit
− Valid discounts
= Estimated amount due
The security deposit must be displayed separately because it may be refundable subject to the rental agreement.
The final calculation must follow configured business rules.
11.8 Rental Booking Workflow
Customer selects a rental product.
Selects the rental period.
Enters or selects the delivery location.
Reviews availability.
Reviews rental pricing and terms.
Provides required customer details.
Completes the required payment step.
Receives a booking confirmation after the backend confirms the booking.
Tracks delivery and rental status.
Receives collection or return instructions.
Completes the return process.
Receives any applicable deposit settlement or refund.
11.9 Rental Extensions
If enabled, customers may request a rental extension.
The system should:
Check availability for the extended period.
Calculate additional charges.
Display the revised end date.
Require customer confirmation.
Record the extension.
Update the booking.
An extension must not be confirmed before availability and payment requirements are satisfied.
11.10 Rental Returns
Customers should be able to view:
Rental end date.
Scheduled collection details.
Return instructions.
Applicable return charges.
Deposit settlement status.
Where the provider supports customer-initiated collection requests, customers should be able to submit a request.
11.11 Rental Damage and Deposit Rules
The rental policy must explain:
What constitutes damage.
How damage assessments are handled.
Whether cleaning fees apply.
Conditions for deposit deductions.
How deposit disputes can be raised.
Expected deposit settlement timelines.
The website must not imply that a deposit is automatically refundable in every situation if the contract contains valid deductions.

12. SHOPPING CART
Route: /cart
The cart should allow customers to review selected products before checkout.
12.1 Cart Item Information
Each cart item should display:
Product image.
Product name.
Selected variant.
Vendor name.
Quantity.
Unit price.
Discount, if applicable.
Line subtotal.
Availability status.
Remove action.
Save for Later action, if supported.
12.2 Quantity Management
Customers should be able to:
Increase quantity.
Decrease quantity.
Remove an item.
The application must validate quantity limits and available inventory.
If inventory changes, the cart must display the updated availability and pricing.
12.3 Multi-Vendor Cart
The cart should identify which vendor supplies each product.
Products may be grouped by vendor for display and fulfilment planning.
The system must calculate applicable vendor-specific shipping, taxes, and delivery restrictions.
The customer-facing cart may present one combined total while still showing vendor-specific charges and delivery information.
12.4 Sale and Rental Separation
Purchase items and rental bookings have different pricing and fulfilment rules.
The recommended approach is to provide separate cart or checkout flows for:
Buying furniture.
Renting furniture.
This avoids applying one-time purchase assumptions to recurring rental charges or rental deposits.
If a unified cart is required later, the checkout must explicitly handle the differences.
12.5 Cart Price Summary
Display:
Product subtotal.
Discounts.
Delivery charges, when calculable.
Taxes, where applicable.
Coupon discount.
Final estimated total.
Rental deposits and recurring rental charges should not be mixed into an ordinary purchase subtotal without clear labels.
12.6 Cart Persistence
For signed-in customers:
Cart items may be associated with the account.
For guests:
Cart items may be stored in the browser or through a session-based mechanism.
When a customer signs in, the website should merge carts according to defined rules.
12.7 Cart Validation
The backend must revalidate:
Product publication status.
Vendor status.
Price.
Quantity.
Inventory.
Variant.
Location serviceability.
Promotions.
Delivery charges.
The browser's cart total must never be trusted as the final payment amount.

13. COUPONS AND PROMOTIONS
13.1 Supported Promotion Types
Possible promotions:
Percentage discounts.
Fixed-amount discounts.
Category discounts.
Product discounts.
Minimum-order offers.
Vendor-specific promotions.
First-order offers.
Festival campaigns.
Rental discounts.
13.2 Coupon Application
Workflow:
Customer enters a coupon code.
Website submits the code for validation.
Backend checks eligibility.
Website displays success or failure.
Eligible discount is applied to the order summary.
13.3 Coupon Restrictions
A coupon may have:
Start and end dates.
Minimum order amount.
Maximum discount.
Eligible products.
Eligible vendors.
Usage limits.
Customer eligibility conditions.
Sale or rental restrictions.
The platform must clearly explain why a coupon cannot be applied.
13.4 Multi-Vendor Promotions
The platform should distinguish:
Platform-wide discounts.
Vendor-funded discounts.
Vendor-specific promotions.
Promotions that cannot be combined.
The commission calculation must follow the agreed policy for discounts and promotional funding.

14. CHECKOUT
Route: /checkout
Checkout should provide a clear and secure process for completing purchases.
14.1 Checkout Steps
Recommended steps:
Customer identification.
Delivery address.
Delivery option.
Order review.
Coupon and discount validation.
Payment.
Order confirmation.
The actual number of steps may be reduced if the existing checkout already combines some of them.
14.2 Guest Checkout
If enabled, a customer should be able to enter the required contact and delivery details without creating an account.
The website should explain how the customer can subsequently access order information.
14.3 Address Selection
Customers should be able to:
Select a saved address.
Add a new address.
Edit an address.
Select a default address, if signed in.
Address fields may include:
Full name.
Phone number.
Address line.
City.
State.
PIN code.
Landmark, where useful.
The backend should validate required fields and supported delivery locations.
14.4 Delivery Options
Depending on the product and location, options may include:
Standard delivery.
Scheduled delivery.
Store pickup, if supported.
Vendor-specific delivery.
Delivery options should be shown only when genuinely available.
14.5 Order Summary
Display:
Product names.
Quantities.
Variants.
Vendor names.
Product subtotal.
Discounts.
Delivery charges.
Taxes.
Final amount payable.
The customer should be able to return to the cart and correct selections without losing unnecessary information.
14.6 Checkout Validation
Before payment, the backend must verify:
Products are valid and published.
Vendors are eligible to fulfil the order.
Inventory is sufficient.
Prices are current.
Discounts are valid.
Delivery is available.
Address information is valid.
Order totals are calculated correctly.
If any condition fails, the customer must receive a clear explanation and a chance to correct the issue.

15. PAYMENT FUNCTIONALITY
The payment integration must be selected and configured before implementation.
15.1 Potential Payment Methods
Depending on the payment provider and business setup:
UPI.
Debit cards.
Credit cards.
Net banking.
Supported wallets.
Payment on delivery, if enabled.
The interface should display only payment methods supported for the particular transaction.
15.2 Payment Workflow
Customer confirms the checkout details.
Backend creates a pending order or payment attempt.
Backend initiates the payment with the selected provider.
Customer completes payment.
Provider reports the payment result.
Backend verifies the payment.
Backend updates the order according to the verified result.
Customer receives the appropriate status.
A browser redirect alone must not be treated as proof of successful payment.
15.3 Payment Failure
If payment fails:
Display an understandable message.
Preserve the cart where possible.
Allow the customer to retry.
Avoid creating duplicate orders.
Release temporary inventory reservations according to the reservation policy.
15.4 Duplicate Payment Prevention
The backend should support idempotent order and payment operations.
Repeated button clicks or browser retries must not accidentally create duplicate charges or duplicate confirmed orders.
15.5 Marketplace Payment Processing
For partner-vendor transactions, the business must define how funds are collected and settled.
Possible approaches include:
A marketplace payment provider that supports split settlements.
Platform collection followed by controlled vendor payouts, where legally and contractually supported.
Another approved arrangement based on provider capabilities.
Vendor onboarding, KYC, settlement eligibility, refunds, and marketplace payment compliance must be confirmed with the chosen provider.
The customer website must not claim that a vendor has been paid merely because the customer's payment succeeded.

16. ORDER CONFIRMATION
After a purchase is successfully accepted by the backend, the customer should see an order confirmation page.
16.1 Confirmation Information
Display:
Order number.
Order date.
Customer details.
Delivery address.
Ordered products.
Vendor information.
Amount paid or payment status.
Expected delivery information, if available.
Support instructions.
16.2 Confirmation Notifications
Where supported:
Confirmation email.
SMS notification.
Order status updates.
Payment receipt.
Notifications should be sent from backend events rather than relying only on the customer remaining on the confirmation page.
16.3 Confirmation Failure
If payment succeeded but the confirmation page fails to load, the system must still preserve the order state.
The customer should be able to retrieve the order from their account or a secure guest-order lookup mechanism.

17. CUSTOMER ACCOUNT
Potential routes:
/login
/register
/profile
/account/orders
/account/addresses
/account/wishlist
/account/rentals
These routes should be aligned with the existing application's routing conventions.
17.1 Registration
Registration may require:
Full name.
Email address or phone number.
Password, if password-based authentication is used.
Verification, if required.
Acceptance of applicable terms.
Requirements:
Validate required fields.
Validate email or phone format.
Prevent duplicate accounts according to account rules.
Store passwords securely on the backend.
Provide clear registration errors.
17.2 Login
Support the configured authentication methods.
Potential methods:
Email and password.
Phone and OTP.
Other supported authentication providers.
Do not display authentication options that are not implemented.
17.3 Password Recovery
If password authentication is enabled:
Request password recovery.
Verify the recovery request.
Allow secure password reset.
Expire reset tokens.
Prevent sensitive account information from being exposed.
17.4 Customer Profile
Customers should be able to manage:
Name.
Email.
Phone number.
Profile preferences.
Changes to sensitive account information may require re-verification.
17.5 Saved Addresses
Features:
Add address.
Edit address.
Delete address.
Set default address.
Validate serviceability.
Addresses must be accessible only to the authenticated customer and authorized systems.
17.6 Wishlist
Features:
Add products.
Remove products.
View saved products.
Navigate to product details.
Move an eligible product to the cart.
Unavailable products should be identified appropriately.
17.7 Account Security
The account area should:
Protect private routes.
Handle expired sessions.
Support logout.
Avoid exposing access tokens or private data.
Enforce authorization on the backend.

18. CUSTOMER ORDER HISTORY
Route: /account/orders
18.1 Order List
Display:
Order number.
Order date.
Order total.
Payment status.
Order status.
Vendor or fulfilment summary.
View Details action.
Filters may include:
All orders.
Processing.
Shipped.
Delivered.
Cancelled.
Returned.
The displayed statuses must match the backend's actual order lifecycle.
18.2 Order Details
Display:
Order information.
Product details.
Vendor details.
Delivery address.
Payment summary.
Shipment information.
Applicable invoice or receipt.
Cancellation eligibility.
Return eligibility.
Support actions.
18.3 Multi-Vendor Orders
If an order contains products from several vendors, the customer should be able to see:
The overall order.
Vendor-specific fulfilment groups.
Separate shipments, where applicable.
Item-specific delivery status.
Item-specific cancellation or return eligibility.
The overall order status must not hide meaningful differences between individual shipments.
18.4 Order Tracking
Display supported tracking information:
Order accepted.
Processing.
Dispatched.
Out for delivery.
Delivered.
These are example statuses; the actual lifecycle should be based on implemented backend operations.
Where a courier integration exists, show the available tracking details.
18.5 Order Cancellation
Customers may request cancellation when allowed by the cancellation policy.
Workflow:
Open order details.
Select an eligible item or order.
Review the cancellation policy.
Select a reason.
Submit the request.
Receive a confirmation.
Track the request outcome.
The system must handle race conditions, such as a shipment being dispatched while a cancellation request is submitted.

19. RETURNS, REFUNDS, AND COMPLAINTS
19.1 Return Eligibility
Return eligibility may depend on:
Product category.
Delivery status.
Return window.
Product condition.
Customization.
Vendor policy.
Applicable consumer protection requirements.
The applicable rules must be communicated before purchase.
19.2 Return Request Workflow
Customer opens order details.
Selects an eligible item.
Chooses a return reason.
Adds supporting images, if required.
Reviews the policy.
Submits the request.
Receives a request reference.
Tracks the return status.
19.3 Refund Status
Potential statuses:
Requested.
Under Review.
Approved.
Rejected.
Processing.
Refunded.
The actual status set must be defined by the backend.
The customer should see the amount and refund method where available.
19.4 Damaged or Incorrect Products
Customers should be able to report:
Damaged furniture.
Incorrect products.
Missing items.
Missing parts.
Delivery issues.
Other order problems.
The website should collect sufficient information to help resolve the issue without requiring customers to repeat details already recorded against their order.

20. RENTAL CUSTOMER ACCOUNT
Route: /account/rentals
Rental bookings should be managed separately from ordinary purchases.
20.1 Rental Booking List
Display:
Rental booking number.
Product.
Rental provider.
Rental start date.
Rental end date.
Rental status.
Payment status.
View Details action.
20.2 Rental Booking Details
Display:
Rental product.
Rental duration.
Provider.
Delivery address.
Rental price.
Deposit, if applicable.
Charges paid.
Payment history, where available.
Delivery information.
Collection information.
Rental agreement or terms.
Extension and return options.
20.3 Rental Extension Requests
Customers should be able to request an extension when:
The provider supports extensions.
The product can remain with the customer.
The requested period is available.
The additional charges are calculated.
Required payment is completed.
20.4 Rental Return Requests
Customers should be able to view the scheduled end date and follow the provider's return procedure.
Where supported, they can request a pickup or collection appointment.
20.5 Deposit Settlement
Display:
Deposit paid.
Assessment status, if applicable.
Approved deductions, where applicable.
Refund amount.
Refund status.
The platform should explain any deductions according to the rental agreement and applicable policies.

21. CUSTOMER REVIEWS AND RATINGS
21.1 Review Eligibility
Only eligible customers should be allowed to review products.
Eligibility rules may require:
A completed purchase.
A delivered order.
A completed rental, if rental reviews are supported.
A review window defined by the business.
21.2 Review Submission
Allow customers to:
Select a rating.
Enter a written review.
Upload approved images, if supported.
Submit the review.
21.3 Review Management
The customer website should:
Display approved reviews.
Identify verified purchases when verified.
Allow customers to report inappropriate reviews.
Allow customers to view their own reviews.
Support moderation outcomes where appropriate.
Reviews must not be fabricated or presented as verified without evidence.

22. CUSTOMER SUPPORT AND CONTACT
22.1 Contact Us
The contact page should contain:
Contact form.
Name.
Email or phone.
Subject.
Message.
Relevant order or booking reference, if applicable.
The system should validate submissions and display a confirmation.
22.2 Order-Related Support
Where possible, customers should be able to raise an issue directly from the relevant order.
This should automatically associate the support request with the order and relevant vendor or shipment.
22.3 Rental Support
Rental-specific support topics may include:
Delivery.
Installation.
Extension.
Collection.
Damage.
Deposit settlement.
Rental cancellation.
22.4 FAQs
FAQ categories may include:
Products.
Payments.
Orders.
Delivery.
Returns.
Rentals.
Partner stores.
Account management.
22.5 Support Request Tracking
If a support-ticket system is implemented, customers should be able to:
View their tickets.
View ticket status.
Read responses.
Add requested information.
View resolution details.

23. STORES AND LOCATION PAGES
Potential routes:
/stores
/locations
/location/[slug]
The existing location and store pages should be reviewed before introducing new routes.
23.1 Store Locator
Features:
Search by city or PIN code.
Browse available stores.
View store addresses.
View opening hours, if maintained.
View available categories.
Access directions, if supported.
23.2 Location Landing Pages
A location page may display:
Location name.
Available furniture categories.
Products available in the location.
Participating partner stores.
Rental availability.
Delivery service information.
Local FAQs.
Relevant contact information.
23.3 Local SEO
Each location page should have:
Unique title.
Unique meta description.
Canonical URL.
Appropriate structured data, when accurate.
Useful location-specific content.
Internal links to categories and available products.
Do not generate large numbers of near-identical city pages that contain no useful local information.

24. ENQUIRY AND CUSTOM FURNITURE REQUESTS
The existing project includes enquiry-related functionality that should be audited and reused where suitable.
24.1 Enquiry Form
Possible fields:
Name.
Phone number.
Email.
City.
Furniture category.
Budget range.
Product or service requirements.
Message.
24.2 Enquiry Workflow
Customer fills in the form.
Website validates the fields.
Backend records the enquiry.
Customer receives a confirmation.
The appropriate team follows up.
24.3 Custom Furniture Requests
If the business offers customization, customers may submit:
Furniture type.
Dimensions.
Material preferences.
Colour.
Design references.
Budget.
Required delivery date.
Custom orders may require quotation and approval rather than immediate checkout.
Custom furniture must not be presented as instantly purchasable unless the required pricing and fulfilment rules exist.

25. CUSTOMER NOTIFICATIONS
Notifications should communicate important transaction events.
25.1 Purchase Notifications
Potential notifications:
Order confirmation.
Payment confirmation.
Shipment update.
Delivery update.
Cancellation update.
Return update.
Refund update.
25.2 Rental Notifications
Potential notifications:
Booking confirmation.
Payment confirmation.
Upcoming rental start.
Delivery update.
Upcoming rental end.
Extension confirmation.
Collection reminder.
Deposit settlement update.
25.3 Account Notifications
Potential notifications:
Registration verification.
Password reset.
Important account changes.
25.4 Notification Rules
Send transactional notifications only when the relevant event occurs.
Avoid duplicate notifications for repeated webhook events.
Do not expose sensitive information in public URLs.
Record delivery failures where appropriate.
Separate optional marketing communications from essential transaction notifications.

26. SEO AND DISCOVERABILITY
26.1 Technical SEO
Every indexable page should have:
A unique title.
A relevant meta description.
A canonical URL.
Appropriate robots directives.
Correct heading hierarchy.
Descriptive image alternative text.
Internal links.
Valid status codes.
26.2 Product SEO
Product pages should use:
Product-specific titles.
Useful descriptions.
Accurate prices.
Relevant product attributes.
Appropriate product structured data.
Correct canonical URLs.
Structured data must reflect visible, accurate information.
26.3 Category SEO
Category pages should include:
Category-specific titles.
Useful descriptions.
Clear category hierarchy.
Relevant product links.
Breadcrumbs.
26.4 Vendor SEO
Approved partner store pages may be indexable when they contain sufficient unique and useful content.
Vendor pages that are incomplete, duplicate, suspended, or not intended for public discovery should be handled appropriately.
26.5 Rental SEO
Rental pages should distinguish rental prices from purchase prices.
They should describe:
Rental conditions.
Available products.
Service areas.
Rental duration.
Relevant booking terms.
26.6 Sitemap
The sitemap should include appropriate public pages, such as:
Homepage.
Category pages.
Published product pages.
Approved vendor storefronts.
Useful location pages.
Rental landing pages.
Private account pages, checkout pages, internal search combinations, and administrative pages should generally not be included as indexable content.
26.7 Search Engine Indexing Rules
The platform should prevent indexing of private customer data and sensitive transactional pages.
Product availability and canonicalization must be handled carefully to avoid unnecessary duplicate URLs.

27. RESPONSIVE DESIGN AND ACCESSIBILITY
27.1 Responsive Requirements
The website must support:
Desktop.
Laptop.
Tablet.
Mobile.
Important components:
Header.
Navigation.
Search.
Product grids.
Filters.
Product gallery.
Cart.
Checkout.
Forms.
Rental date selection.
Account pages.
27.2 Mobile Navigation
The mobile interface should provide convenient access to:
Main categories.
Search.
Account.
Wishlist.
Cart.
Rentals.
Location selection.
27.3 Accessibility
Requirements:
Keyboard-accessible navigation.
Visible focus states.
Form labels.
Accessible validation messages.
Suitable text contrast.
Meaningful alternative text.
Dialog focus management.
Screen-reader-friendly status messages.
27.4 Design Preservation
For the existing website:
Preserve the current brand identity.
Preserve existing assets and intended image placement.
Preserve current layout and styling unless a change is explicitly required.
Avoid unnecessary replacement of working CSS.
Avoid creating duplicate global styles.
Maintain responsive behavior.
Ensure that new marketplace features fit the existing design system.

28. PERFORMANCE REQUIREMENTS
28.1 Page Rendering
Use Next.js Server Components for appropriate data-driven pages and Client Components only where interactivity requires them.
Avoid converting every component into a Client Component unnecessarily.
28.2 Image Optimization
Requirements:
Use suitable image sizes.
Avoid loading full-size images into small thumbnails.
Reserve image dimensions to reduce layout shifts.
Lazy-load below-the-fold images.
Prioritize the main above-the-fold image where appropriate.
Use an approved image-host configuration.
28.3 JavaScript Optimization
Requirements:
Remove unused code only after reference checks.
Avoid duplicate libraries and components.
Split large interactive features where appropriate.
Avoid unnecessary rerenders.
Keep client-side state scoped appropriately.
Avoid loading large libraries on pages that do not need them.
28.4 CSS Optimization
Requirements:
Identify duplicate CSS.
Remove unused CSS only after verifying all HTML, JSX, route, and dynamic references.
Avoid breaking existing styles.
Avoid unnecessary global selectors.
Reduce layout shifts caused by loading styles late.
28.5 Performance Validation
Measure:
Largest Contentful Paint.
Interaction to Next Paint.
Cumulative Layout Shift.
Initial JavaScript.
Image payload.
Route loading performance.
Performance targets should be measured in representative mobile and desktop conditions.

29. SECURITY AND PRIVACY
29.1 Authentication
Private customer pages must require appropriate authentication.
The backend must independently enforce access controls.
29.2 Authorization
Customers must only be able to access their own:
Profile.
Addresses.
Orders.
Rental bookings.
Wishlist.
Support tickets.
Private documents.
29.3 Payment Security
Never trust client-submitted payment totals.
Verify payment status with the provider.
Verify payment webhooks.
Use appropriate idempotency mechanisms.
Never store raw card details unless the business has the necessary compliant infrastructure and authorization.
29.4 Input Validation
Validate data on both frontend and backend.
Protect against:
Malformed input.
Cross-site scripting.
Injection attacks.
Unauthorized file uploads.
Invalid redirects.
Abusive form submissions.
29.5 Privacy
The website should provide:
Privacy policy.
Clear consent where required.
Appropriate access restrictions.
Secure handling of personal information.
Account deletion or data-request workflows where required by applicable law.
Retention policies for transactional records.
29.6 Vendor Data Isolation
Customers must not gain access to internal vendor records or another customer's private information.
Public vendor profiles must be separated from internal vendor onboarding and financial records.

30. ERROR HANDLING AND EMPTY STATES
Every important customer-facing workflow should handle expected failures.
30.1 General Errors
Examples:
Network failure.
API timeout.
Server error.
Invalid input.
Expired session.
Permission denied.
Page not found.
30.2 Shopping Errors
Examples:
Product no longer available.
Price changed.
Inventory insufficient.
Vendor unavailable.
Delivery unsupported.
Coupon invalid.
Payment failed.
30.3 Rental Errors
Examples:
Requested dates unavailable.
Rental period invalid.
Provider unavailable.
Location unsupported.
Rental inventory changed.
Extension unavailable.
Deposit payment failed.
30.4 Error UI Requirements
The interface should:
Explain the problem clearly.
Preserve valid user input where possible.
Provide a safe retry option.
Avoid exposing stack traces or internal API responses.
Avoid leaving users on a blank page.

31. CUSTOMER WEBSITE ROUTE INVENTORY
The following is a proposed route inventory. Existing routes must be inspected before adding or renaming any route.
Route
Purpose
Access
/
Homepage
Public
/collection/[slug]
Furniture category
Public
/product/[slug]
Product details
Public
/search
Search results
Public
/marketplace
Marketplace discovery
Public
/vendors/[slug]
Partner shop storefront
Public
/rentals
Rental homepage
Public
/rentals/[slug]
Rental product details
Public
/cart
Shopping cart
Public/session
/checkout
Purchase checkout
Guest or authenticated, according to policy
/order-confirmation/[id]
Purchase confirmation
Secure access required
/login
Sign in
Public
/register
Registration
Public
/forgot-password
Password recovery
Public
/profile
Customer profile
Authenticated
/account/orders
Order history
Authenticated
/account/orders/[id]
Order details
Authenticated/authorized
/account/addresses
Saved addresses
Authenticated
/account/wishlist
Wishlist
Public/session or authenticated
/account/rentals
Rental booking history
Authenticated
/account/rentals/[id]
Rental booking details
Authenticated/authorized
/stores
Store discovery
Public
/locations
Location discovery
Public
/location/[slug]
Local landing page
Public
/enquiry
Enquiry form
Public
/contact
Contact page
Public
/about
About the business
Public
/faq
Frequently asked questions
Public
/shipping-policy
Shipping policy
Public
/return-policy
Return policy
Public
/refund-policy
Refund policy
Public
/rental-policy
Rental terms
Public
/privacy-policy
Privacy policy
Public
/terms-and-conditions
Terms
Public
/partner-with-us
Vendor recruitment
Public
/vendors/register
Vendor registration entry point
Public
/404
Not-found experience
Public

Route implementation notes
These are proposed routes, not confirmation that all routes currently exist.
Preserve current route conventions wherever practical.
Protect customer-specific records with backend authorization.
Do not expose sensitive order data merely because an identifier is present in a URL.
Order confirmation pages should use appropriate secure access mechanisms.
The final route list must be reconciled against the current project before implementation.

32. CORE CUSTOMER DATA REQUIREMENTS
The customer website depends on backend data models.
32.1 Customer
Possible fields:
Customer ID.
Name.
Email.
Phone.
Authentication reference.
Account status.
Created date.
Updated date.
32.2 Customer Address
Possible fields:
Address ID.
Customer ID.
Recipient name.
Phone.
Address lines.
City.
State.
PIN code.
Landmark.
Default-address indicator.
32.3 Product
Possible fields:
Product ID.
Product slug.
Product name.
Description.
Category.
Images.
Attributes.
Publication status.
Product type.
Created date.
Updated date.
32.4 Product Offer or Vendor Listing
For a multi-vendor marketplace, it is important to distinguish the general product identity from an individual shop's offer.
Possible fields:
Listing ID.
Product ID, where a shared catalogue is used.
Vendor ID.
Vendor SKU.
Sale price.
Original price.
Inventory reference.
Listing status.
Service area.
Delivery terms.
A product may be offered by different vendors at different prices and availability levels.
The exact data model depends on whether the marketplace uses a shared product catalogue or independent vendor listings.
32.5 Order
Possible fields:
Order ID.
Customer ID, if registered.
Order number.
Address reference or appropriate order-address snapshot.
Currency.
Subtotal.
Discount.
Delivery charges.
Tax.
Total.
Payment status.
Order status.
Created date.
32.6 Order Items and Vendor Fulfilment
Possible fields:
Order item ID.
Order ID.
Product/listing ID.
Vendor ID.
Quantity.
Price snapshot.
Variant snapshot.
Fulfilment status.
The order must preserve the prices and product details agreed at purchase time.
32.7 Rental Listing
Possible fields:
Rental listing ID.
Vendor ID.
Product information.
Rental price.
Billing period.
Minimum rental duration.
Deposit rules.
Availability reference.
Service area.
Rental terms.
Listing status.
32.8 Rental Booking
Possible fields:
Rental booking ID.
Customer ID.
Rental listing ID.
Vendor ID.
Start date.
End date.
Rental subtotal.
Delivery charges.
Deposit amount.
Tax.
Total due.
Payment status.
Booking status.
Return status.
32.9 Wishlist
Possible fields:
Wishlist ID.
Customer ID or session reference.
Product/listing reference.
Created date.
32.10 Customer Support Ticket
Possible fields:
Ticket ID.
Customer ID or verified guest reference.
Order or rental booking reference.
Issue type.
Description.
Attachments, if supported.
Status.
Created date.
Updated date.
All data models require finalization against the existing database and backend APIs before implementation.

33. CUSTOMER WEBSITE ACCEPTANCE CRITERIA
The customer-facing marketplace should not be considered complete until the following conditions are satisfied.
33.1 Browsing
Homepage loads correctly.
Categories open the correct pages.
Product search returns relevant results.
Filters and sorting work.
Product pages display accurate data.
Unavailable products are handled correctly.
33.2 Marketplace
Approved partner products can be discovered.
Each partner listing identifies its vendor.
Vendor storefronts show only authorized public information.
Suspended or unpublished listings cannot be purchased.
Products respect location and inventory rules.
33.3 Cart and Checkout
Valid products can be added to the cart.
Quantity updates are validated.
Cart prices are revalidated by the backend.
Delivery charges are calculated correctly.
Coupons are validated server-side.
Multi-vendor fulfilment is handled according to the order design.
Failed payments do not produce falsely confirmed orders.
Duplicate payment attempts are safely handled.
33.4 Rentals
Rental products are distinguishable from products for sale.
Rental periods can be selected.
Availability is checked before booking.
Rental pricing is transparent.
Deposits are clearly identified.
Confirmed bookings have a retrievable status.
Extension and return requests follow configured policies.
33.5 Customer Account
Registration and login work.
Private routes require appropriate authorization.
Customers can view their own orders.
Customers can view their own rental bookings.
Customers can manage saved addresses.
Wishlist functionality works.
Logout and expired-session behavior work correctly.
33.6 Orders and Support
Customers can view order details.
Order tracking displays valid backend states.
Cancellation and return eligibility are enforced.
Refund statuses are visible.
Support requests can be submitted successfully.
33.7 Design and Performance
Existing design and assets remain intact unless explicitly changed.
Desktop, tablet, and mobile layouts work.
Loading and error states are implemented.
No critical console errors remain.
Images load efficiently.
Important routes return appropriate status codes.
Accessibility and performance checks are completed.

34. IMPLEMENTATION PRIORITIES
The recommended delivery sequence is as follows.
Phase 1 — Existing Customer Website Audit
Inspect all existing customer routes.
Identify reusable components and CSS.
Audit authentication and cart functionality.
Audit product and category APIs.
Identify the current database and backend capabilities.
Document existing functionality and gaps.
Phase 2 — Core Shopping Experience
Homepage.
Navigation.
Product categories.
Search.
Product details.
Location selection.
Cart.
Checkout.
Payment.
Order confirmation.
Phase 3 — Customer Accounts
Registration.
Login.
Profile.
Addresses.
Wishlist.
Order history.
Order details.
Cancellation and support.
Phase 4 — Marketplace Customer Experience
Partner store discovery.
Vendor storefronts.
Vendor-attributed product listings.
Location-aware availability.
Multi-vendor cart and order presentation.
Vendor-specific delivery information.
Phase 5 — Rental Customer Experience
Rental landing page.
Rental listings.
Rental product details.
Date and duration selection.
Availability validation.
Rental checkout.
Rental account pages.
Extensions, returns, and deposit visibility.
Phase 6 — Customer Communication
Order notifications.
Rental notifications.
Reviews.
FAQs.
Contact and enquiry workflows.
Phase 7 — Production Readiness
Security validation.
Payment testing.
Responsive testing.
SEO validation.
Performance optimization.
Error monitoring.
Accessibility checks.
End-to-end testing.

35. FINAL SCOPE AND IMPORTANT DISTINCTIONS
This document defines the intended customer-facing experience for the hybrid marketplace.
It includes:
Direct furniture sales.
Third-party shop sales.
Furniture rentals.
Location-aware discovery.
Shopping and checkout.
Customer accounts.
Orders and rentals.
Returns, refunds, and support.
Customer-facing SEO and performance.
Security and acceptance criteria.
It does not define the complete internal implementation of:
Vendor administration.
Vendor approval operations.
Admin dashboards.
Commission and settlement processing.
Vendor payouts.
Internal delivery management.
Finance reconciliation.
Marketplace fraud monitoring.
Those areas require separate documentation.
Implementation rule: Existing Divya Furniture World features must be audited before development. Reuse working functionality where appropriate, preserve the current design and CSS, and clearly distinguish existing features from newly proposed features. Do not create duplicate routes, replace working pages unnecessarily, or claim a feature is implemented until it has been verified.
End of Customer Website Functional Documentation.

