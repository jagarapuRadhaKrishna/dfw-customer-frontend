DIVYA FURNITURE WORLD
COMPLETE TECHNICAL SEO, AEO, RENDERING, DIGITAL MARKETING & GROWTH DOCUMENTATION
Document Type: Technical Architecture, SEO Requirements, Marketing Strategy and Implementation Specification
Business Model: Hybrid Furniture E-commerce, Multi-Vendor Marketplace and Furniture Rental Platform
Frontend: Next.js, React, JavaScript, CSS
Primary Markets: India
Target Business: Divya Furniture World and approved furniture marketplace partners
Document Scope: Customer Website, Product Catalogue, Vendor Marketplace, Rental Platform and Local Search

1. EXECUTIVE SUMMARY
Divya Furniture World requires a comprehensive digital growth architecture that combines technical SEO, content optimization, search engine rendering, AI search visibility, local SEO, analytics, and conversion optimization.
The objective is to make the website discoverable through:
Traditional search engines such as Google and Bing.
AI-powered search experiences and answer engines.
Local searches for furniture shops and furniture delivery.
Product searches for furniture available to buy.
Rental searches for furniture available in a specific city.
Vendor discovery searches.
Paid advertising and social media campaigns.
Direct traffic, returning visitors, and customer referrals.
The platform must support three primary business activities:
Direct sales: Divya Furniture World sells its own products.
Marketplace sales: Approved partner shops sell furniture through the platform.
Furniture rentals: Divya Furniture World and approved rental providers offer furniture for rent.
Each activity has different search intent, landing pages, conversion events, and revenue attribution requirements.
1.1 Primary Objectives
Improve organic visibility.
Increase qualified website traffic.
Improve product and category page indexing.
Increase enquiries and purchases.
Generate rental bookings.
Attract partner furniture shops.
Improve local visibility in supported cities.
Make useful product information accessible to search engines and AI systems.
Reduce page-loading time and improve user experience.
Measure the contribution of each marketing channel to revenue.
1.2 Core Implementation Principle
SEO, AEO, rendering, performance, and marketing must be designed as parts of the same system.
A fast website with poor product information will not automatically rank well. Structured data alone does not guarantee rich results. Server-side rendering alone does not guarantee indexing. AI search visibility cannot be guaranteed by adding a special file or metadata tag.
The platform must combine useful content, crawlable architecture, correct rendering, trustworthy business information, accessible pages, and measurable conversions.

2. TERMINOLOGY AND SCOPE
2.1 SEO — Search Engine Optimization
SEO improves a website's ability to be discovered and understood by traditional search engines.
Includes:
Technical SEO.
On-page SEO.
Content SEO.
Product SEO.
Category SEO.
Local SEO.
Internal linking.
Indexation management.
Structured data.
Link acquisition.
SEO monitoring.
2.2 AEO — Answer Engine Optimization
AEO improves the clarity and usefulness of content for systems that answer questions directly.
Examples:
Search result answer features.
Question-and-answer interfaces.
AI-generated answers.
Conversational search.
AEO focuses on providing direct, accurate, well-structured answers to genuine user questions.
2.3 GEO — Generative Engine Optimization
GEO focuses on making a business and its content easier for generative AI search systems to discover, interpret, and cite.
It includes:
Clear factual content.
Consistent business information.
Useful product specifications.
Strong source attribution.
Relevant supporting evidence.
Crawlable pages.
Trustworthy external references.
Accurate business and product entities.
GEO does not guarantee that a specific AI system will mention or recommend the business.
2.4 Local SEO
Local SEO improves visibility for location-dependent searches, such as:
Furniture shops in Bhimavaram.
Furniture stores in Hyderabad.
Sofas available in a particular city.
Furniture rental near a customer's location.
Furniture delivery to a PIN code.
Local SEO must reflect genuine service coverage and real business locations.
2.5 Technical Rendering Strategies
Next.js supports several rendering and delivery approaches.
Strategy
Meaning
Typical use
SSR
Server-Side Rendering
Pages rendered on the server for each request or relevant request
SSG
Static Site Generation
Pages generated ahead of time
ISR
Incremental Static Regeneration
Static pages refreshed after a configured interval or invalidation event
CSR
Client-Side Rendering
Content or interactions rendered in the browser
Streaming SSR
Server-rendered content delivered progressively
Pages with useful content that can be streamed as available

These strategies can coexist within the same Next.js application.
2.6 Digital Marketing
Digital marketing includes:
Search advertising.
Shopping campaigns, where eligible.
Social media marketing.
Content marketing.
Email marketing.
SMS or WhatsApp communications, subject to consent and applicable rules.
Retargeting, where permitted.
Referral marketing.
Conversion rate optimization.

3. WEBSITE ARCHITECTURE AND SEO RESPONSIBILITIES
The website should have a clear information architecture.
3.1 Primary Website Sections
Main Storefront
Homepage.
Furniture categories.
Product detail pages.
Search results.
Offers.
New arrivals.
Best sellers.
Marketplace
Partner store discovery.
Vendor storefronts.
Vendor product listings.
Location-aware marketplace pages.
Rental Platform
Rental homepage.
Rental categories.
Rental product pages.
Rental service locations.
Rental FAQs.
Rental policy pages.
Local Discovery
Store locator.
City landing pages.
Service-area pages.
Location-specific category pages where justified.
Business Acquisition
Partner With Us.
Vendor registration information.
Business enquiry pages.
Customer Account
Profile.
Cart.
Checkout.
Orders.
Rentals.
Wishlist.
Support.
Customer account pages must be protected appropriately and should not be treated as public SEO landing pages.
3.2 Route Audit
Before implementation, inspect the existing Next.js App Router structure.
The current project has been described as containing routes for:
Homepage.
Product details.
Collections.
Stores.
Locations.
Account.
Cart.
Checkout.
Wishlist.
Rental.
Enquiry.
Authentication.
The exact current route structure must be verified from the repository.
Do not create new routes if an equivalent working route already exists.
3.3 Separation of Responsibilities
SEO metadata, structured data, canonical URL generation, and indexing rules should be implemented through reusable utilities rather than duplicated across every page.
Potential utilities:
metadata-generator.js
canonicalUrl.js
schema-generator.js
robots-config.js
sitemap-generator.js
seo-content-utils.js
Some SEO utilities already exist in the described project. Audit and extend them before creating duplicates.

4. TECHNICAL SEO ARCHITECTURE
4.1 Crawlability
Search engine crawlers must be able to discover important public pages through links and sitemaps.
Requirements:
Use valid HTML links for navigation.
Provide meaningful internal links.
Avoid requiring a user interaction before important content becomes discoverable.
Avoid blocking important public assets.
Return appropriate HTTP status codes.
Avoid accidental indexing of private or administrative pages.
Ensure canonical URLs resolve correctly.
4.2 Indexability
A page should be indexable only when it is:
Public.
Intended for search discovery.
Useful to users.
Canonical or appropriately consolidated.
Accessible without an account when intended for public search.
Pages that should generally not be indexed include:
Checkout.
Cart.
Private customer account pages.
Private vendor dashboard pages.
Admin pages.
Internal application states.
Sensitive transaction pages.
Search combinations that create large numbers of low-value duplicate URLs.
noindex is not an access-control mechanism. Private pages must still be protected by authentication and authorization.
4.3 HTTP Status Codes
Use correct status codes.
Situation
Expected behavior
Valid public page
200 OK
Permanently moved page
301 or 308 redirect, as appropriate
Temporary redirect
302 or 307, as appropriate
Missing product or page
Genuine 404 Not Found
Removed resource with no replacement
404 or 410, depending on the situation
Unauthorized private resource
Appropriate authentication or authorization response
Server failure
Appropriate 5xx response

Do not return 200 OK for pages that should genuinely be missing.
Do not redirect every deleted product to the homepage.
4.4 URL Structure
Use short, descriptive, stable URLs.
Examples:
/
/collection/sofas
/collection/beds
/product/wooden-king-size-bed
/rentals
/rentals/sofa
/vendors/example-furniture-store
/locations/bhimavaram
These are examples; preserve the actual existing route conventions where possible.
4.5 URL Rules
Use lowercase slugs.
Use hyphens between words.
Avoid unnecessary query parameters in canonical URLs.
Avoid duplicate trailing-slash variations.
Avoid exposing internal database implementation details.
Redirect changed slugs when appropriate.
Preserve useful existing URLs where possible.
4.6 Canonical URLs
Every indexable page should identify its preferred canonical URL.
Canonical rules must account for:
Product slug variations.
Query parameters.
Sorting.
Filtering.
Pagination.
Duplicate content.
Alternate URL forms.
Do not automatically canonicalize every filtered page to the category root if the filtered page represents a distinct, valuable search experience.
4.7 Robots.txt
The robots file should identify appropriate crawling rules and sitemap locations.
Example conceptual configuration:
User-agent: *
Allow: /

Sitemap: https://www.example.com/sitemap.xml

This is illustrative, not a production configuration.
The actual file must use the verified production domain.
Important:
Do not block assets needed to render public pages.
Do not rely on robots.txt to secure private information.
Review rules carefully before deployment.
4.8 XML Sitemap Architecture
Potential sitemap groups:
Main pages.
Categories.
Products.
Vendors.
Locations.
Rental listings.
Rental locations.
Editorial content.
Large sites should use sitemap indexes and multiple sitemaps where appropriate.
Include only canonical, indexable, valid URLs.
Sitemaps should be updated when products, categories, vendors, or locations are published or removed.
The lastmod value should reflect meaningful content updates rather than being changed artificially on every request.
4.9 Breadcrumbs
Public pages should provide logical breadcrumb navigation.
Example:
Home → Furniture → Beds → King Size Beds → Product
Breadcrumbs should:
Reflect the actual site hierarchy.
Use valid internal links.
Match the visible page structure.
Support appropriate breadcrumb structured data.
4.10 Internal Linking
Important pages should be reachable through relevant internal links.
Potential connections:
Homepage to major categories.
Categories to subcategories.
Categories to products.
Products to related products.
Products to their vendor storefronts.
Rental categories to rental listings.
City pages to available products and participating stores.
FAQs to relevant product, rental, and policy pages.
Avoid creating artificial internal links solely to manipulate rankings.

5. NEXT.JS RENDERING STRATEGY — SSR, SSG, ISR AND CSR
Rendering must be chosen according to how frequently content changes and whether it is personalized.
5.1 Recommended Rendering Matrix
Page Type
Recommended Strategy
Reason
Homepage
Static or ISR where appropriate
Marketing content changes periodically
Main categories
ISR or server rendering
Category content and product selection change
Product details
ISR with invalidation or server rendering
Product information changes and needs timely updates
Vendor storefronts
ISR or server rendering
Vendor information and listings change
Rental listings
Server rendering or carefully invalidated ISR
Availability depends on dates, location, and inventory
Rental availability
Dynamic server-side validation
Availability must be current
Search results
Server-rendered or dynamic as appropriate
Search parameters determine results
Customer profile
Dynamic authenticated rendering
Personalized information
Cart
Client state combined with server validation
Interactive experience, but prices must be verified
Checkout
Dynamic and securely validated
Customer, inventory, pricing, and payment state
Order details
Authenticated dynamic access
Private transactional information
Vendor dashboard
Authenticated dynamic access
Vendor-specific private data
Admin dashboard
Authenticated dynamic access
Administrative data
Policy pages
Static or ISR
Content changes infrequently
Blog or guides
Static or ISR
Content is generally published ahead of time

This is a starting point, not a rule that every page must use one specific rendering method.
5.2 SSR — Server-Side Rendering
SSR is suitable when the page requires current data or request-specific rendering.
Potential uses:
Location-dependent search results.
Vendor inventory summaries.
Rental availability.
Dynamic product information.
Secure account pages.
Important:
Server rendering does not automatically make a page secure.
Authentication and authorization must be enforced.
Personalized responses must not leak through shared caching.
Current inventory must be validated before transactions.
5.3 SSG — Static Site Generation
SSG is suitable for stable content.
Examples:
About page.
Privacy policy.
Terms and conditions.
General buying guides.
General furniture care guides.
Stable category landing pages.
Static pages can load quickly and reduce unnecessary server work.
5.4 ISR — Incremental Static Regeneration
ISR can be useful for:
Product pages.
Category pages.
Vendor storefronts.
Location landing pages.
Editorial content.
Example conceptual implementation:
export const revalidate = 300;

This example indicates a five-minute revalidation interval in supported Next.js App Router contexts. It must be applied only after evaluating the project's Next.js version, route behavior, and caching requirements.
For inventory, prices, and rental availability, time-based revalidation alone may be insufficient.
5.5 Cache Invalidation
When important data changes, the system should invalidate or refresh relevant cached pages.
Potential triggers:
Product published.
Product unpublished.
Product price changed.
Category updated.
Vendor suspended.
Vendor listing removed.
Location service area changed.
In supported Next.js implementations, revalidatePath or revalidateTag can be used for targeted invalidation.
The implementation must account for the actual caching semantics of the deployed Next.js version.
5.6 CSR — Client-Side Rendering
Use client-side rendering for interactions such as:
Opening dialogs.
Updating selected product variants.
Wishlist toggling.
Cart interactions.
Filter controls.
Date-picker interactions.
Tabs and accordions.
Do not unnecessarily move the entire public product page into a large client-rendered component if server-rendered content is more appropriate.
5.7 Streaming and Suspense
Where appropriate, stream page sections as data becomes available.
For example:
Render the main product information promptly.
Load recommendations separately.
Load reviews separately.
Load optional related content without blocking the primary page.
Use loading boundaries that preserve the existing design and prevent disruptive layout shifts.
5.8 Rendering Validation
For important public routes:
Inspect the server response HTML.
Confirm the product name and main content are present.
Verify metadata.
Verify canonical URLs.
Test JavaScript-disabled or limited-rendering scenarios where useful.
Test caching behavior.
Ensure private data is not cached publicly.

6. NEXT.JS METADATA AND PAGE HEADS
The application should generate metadata from the actual page data.
6.1 Metadata Requirements
Indexable pages should have:
Page title.
Meta description.
Canonical URL.
Appropriate robots directives.
Open Graph metadata.
Social sharing image where available.
6.2 Metadata Architecture
Use Next.js metadata APIs where appropriate:
Static metadata.
generateMetadata.
Root metadata configuration.
Page-specific metadata generation.
The precise implementation should match the project's current Next.js version and App Router conventions.
6.3 Homepage Metadata
The homepage should communicate:
Divya Furniture World's business identity.
Its furniture offering.
Its real service coverage.
Its sales and rental services, where applicable.
Avoid repetitive keywords or claims that the business cannot substantiate.
6.4 Category Metadata
Generate category-specific titles and descriptions from:
Category name.
Relevant product type.
Verified location information, when appropriate.
Do not use the same generic title for every category.
6.5 Product Metadata
Product metadata should use actual product data:
Product name.
Main product attribute.
Relevant product category.
Brand or seller identity, where appropriate.
Avoid generating empty or misleading titles when product data is incomplete.
6.6 Vendor Metadata
Vendor pages should use:
Public shop name.
Relevant product categories.
Real service location.
Unique business description, when available.
Private vendor information must not be included.
6.7 Rental Metadata
Rental pages should clearly communicate rental intent.
The title and description must not confuse a rental listing with an ordinary purchase listing.
6.8 Metadata Fallbacks
When optional product or vendor information is missing:
Use safe defaults.
Avoid undefined or null in titles.
Avoid duplicating irrelevant text.
Generate valid metadata.

7. STRUCTURED DATA AND SCHEMA.ORG
Structured data helps search engines interpret content. It does not guarantee rich results or higher rankings.
Implement only schema types that accurately represent visible page content.
7.1 Organization Schema
The homepage may include an Organization entity with verified information such as:
Business name.
Official URL.
Logo.
Contact details.
Social profile URLs, where applicable.
Use a suitable organization subtype only when it accurately describes the business.
7.2 LocalBusiness Schema
Use LocalBusiness or an appropriate subtype only for genuine physical business locations that qualify.
Each real location should have accurate:
Name.
Address.
Telephone.
Opening hours, where available.
Geographic information, where accurate.
Do not create fake locations to target cities.
7.3 WebSite Schema
The site may use WebSite structured data.
A search action should be represented only if the corresponding website search actually exists and satisfies the relevant requirements.
7.4 Product Schema
Eligible product pages may use Product structured data.
Potential properties:
Name.
Image.
Description.
SKU.
Brand, if accurate.
Material, where relevant.
Dimensions, where supported.
Offer information.
7.5 Offer Schema
Where appropriate, represent:
Price.
Currency.
Availability.
Product URL.
Validity dates, where applicable.
The structured price and availability must match the visible page and actual offer.
7.6 Rental Listings
Rental products require particular care.
Do not mark recurring rental prices as if they were ordinary one-time sale prices.
Use only schema properties and types that accurately represent the offering and are supported by the relevant search engine documentation.
If an appropriate rich-result representation is unavailable, prioritize clear visible rental pricing and accurate page content rather than forcing an unsuitable schema.
7.7 BreadcrumbList
Use BreadcrumbList on pages where breadcrumbs are visible and accurate.
7.8 Article Schema
Use appropriate article structured data for genuine editorial content, such as furniture buying guides or care articles.
7.9 Review and Rating Schema
Only publish review structured data when:
Reviews are genuine.
Ratings are visible.
The data refers to the correct product or entity.
The implementation meets search engine policies.
Do not fabricate ratings or use unsupported self-serving review markup.
7.10 FAQ Structured Data
Provide useful visible FAQs where appropriate.
Do not assume that adding FAQ schema will generate a rich result. Search engines restrict FAQ rich results, and eligibility may vary.
7.11 Schema Validation
Test representative pages for:
Valid JSON-LD.
Correct entity types.
Missing required properties.
Price mismatches.
Image availability.
Invalid URLs.
Duplicate entities.
Unsupported or misleading properties.

8. PRODUCT SEO
Product pages are a primary organic acquisition channel.
8.1 Product Titles
Product titles should be descriptive and distinguish similar products.
Potential format:
[Product Name] – [Key Attribute] | Divya Furniture World
Use this as a guideline rather than a mandatory template.
8.2 Product Descriptions
Descriptions should answer:
What is the product?
What material is used?
What are the dimensions?
What makes the product useful?
What colours or variants are available?
What assembly is required?
What care is required?
Is the product for sale or rent?
What warranty or delivery conditions apply?
Only include information supported by the product data.
8.3 Product Images
Requirements:
Clear main image.
Multiple relevant angles where available.
Accurate alt text.
Correct image dimensions.
Compressed and appropriately sized images.
Consistent product image presentation.
Avoid stuffing keywords into alt text.
8.4 Product Availability
Handle inventory changes accurately.
If a product is temporarily out of stock:
Show the correct status.
Preserve useful information where appropriate.
Provide restock notification only if supported.
If a product is permanently discontinued:
Consider whether a relevant replacement exists.
Redirect only when the replacement is genuinely appropriate.
Otherwise return a valid not-found or gone response.
8.5 Multi-Vendor Product SEO
Where multiple shops sell similar products, the platform must avoid creating large numbers of thin duplicate pages.
Possible strategies:
A shared product catalogue with separate vendor offers.
Separate listing pages when products are genuinely different.
Canonicalization for truly duplicate listings where appropriate.
Unique vendor storefronts with meaningful information.
The correct strategy depends on the actual catalogue and database design.

9. CATEGORY AND COLLECTION SEO
Each furniture category should have a clear purpose and useful content.
9.1 Category Page Elements
Include:
Unique heading.
Short introduction.
Product listings.
Relevant subcategories.
Filters and sorting.
Breadcrumbs.
Useful FAQs where appropriate.
Internal links.
9.2 Category Content
Content should help customers choose furniture.
Examples:
Sofa sizes and configurations.
Bed sizes and storage options.
Dining table seating capacity.
Wardrobe configurations.
Material differences.
Care considerations.
Avoid publishing generic paragraphs that add no value.
9.3 Category Indexation
Index categories that:
Have meaningful content.
Have a clear search purpose.
Offer a useful browsing experience.
Avoid indexing every combination of filter parameters automatically.
9.4 Pagination
Paged category results should have:
Crawlable pagination links.
Stable URLs where appropriate.
Appropriate canonical handling.
No accidental infinite crawl paths.
Do not canonicalize every paginated page to the first page without considering the actual content and indexing strategy.

10. LOCAL SEO STRATEGY
Local SEO is particularly important for a furniture business with physical stores, delivery coverage, and partner vendors.
10.1 Location-Based Search Intent
Examples of search intent:
Furniture shop in Bhimavaram.
Furniture stores in Hyderabad.
Sofa delivery in a particular city.
Furniture rental in a supported location.
Wardrobes available for delivery to a PIN code.
These are example query types, not claims that the business currently serves every location.
10.2 Location Page Requirements
Each useful location page should provide:
Location name.
Accurate service information.
Available product categories.
Genuine participating stores.
Relevant delivery information.
Rental availability, if applicable.
Contact details where appropriate.
Unique local content.
Relevant internal links.
10.3 Store Locator
The store locator should support:
City search.
PIN-code search.
Public store details.
Directions where appropriate.
Opening hours where maintained.
Relevant product and rental availability.
10.4 Google Business Profile
For eligible real business locations, maintain accurate business profiles.
Potential activities:
Verify the business.
Maintain accurate name, address, and phone details.
Select relevant categories.
Keep hours updated.
Add genuine business photographs.
Respond to reviews professionally.
Keep website links current.
A marketplace vendor should not be represented as a Divya Furniture World-owned physical branch unless that is accurate.
10.5 Multi-Vendor Local SEO
Partner shops may have their own business identities.
The marketplace should distinguish:
Divya Furniture World locations.
Partner vendor locations.
Vendor service areas.
Online-only service coverage.
Do not create fake business listings or claim ownership of independent vendors.
10.6 Location Page Quality
Create a location page only when it offers meaningful information.
Avoid generating hundreds of near-identical pages that simply swap the city name.

11. AEO — ANSWER ENGINE OPTIMIZATION
AEO should make the website useful for customers asking specific questions.
11.1 Content Structure
Use:
Clear headings.
Direct answers.
Short explanatory paragraphs.
Relevant lists.
Accurate specifications.
Clear definitions.
Tables where they genuinely help.
11.2 Customer Questions
Furniture content should answer questions such as:
What size bed fits a particular room?
How do I measure a sofa before purchasing?
What should I consider when choosing a wardrobe?
How do I care for wooden furniture?
What is the difference between solid wood and engineered wood?
How does furniture rental work?
What charges may apply to a rental?
Can furniture be delivered to my location?
How can I extend a rental booking?
What happens when rental furniture is returned?
Answers must reflect actual product data and business policies.
11.3 Product Question Coverage
Where useful, product pages should answer:
What are the dimensions?
What material is used?
Is assembly required?
What is included?
What is the delivery coverage?
What warranty applies?
Is this product available for rent?
11.4 Rental Question Coverage
Rental pages should clearly explain:
Rental duration.
Rental pricing.
Deposit.
Delivery and collection.
Extension conditions.
Cancellation conditions.
Return process.
11.5 FAQ Architecture
Create relevant FAQs at:
Category level.
Product level, where product-specific questions exist.
Rental service level.
Delivery policy level.
Return policy level.
Vendor onboarding level.
Do not repeat the same generic FAQ across hundreds of pages merely to increase page length.
11.6 Answer Quality
Answers should:
Start with the direct answer.
Explain important conditions.
Use accurate units and dates.
Avoid unsupported promises.
Link to detailed policy pages when necessary.
11.7 AI Search Visibility
To improve the likelihood that AI systems can understand the business:
Keep business details consistent.
Publish clear product specifications.
Maintain useful category and location pages.
Provide authoritative policy pages.
Keep content accurate and updated.
Ensure important public pages are crawlable.
Obtain legitimate mentions and references from relevant sources.
No implementation can guarantee inclusion in a specific AI-generated answer.

12. GEO — GENERATIVE ENGINE OPTIMIZATION
GEO overlaps with AEO but also emphasizes whether generative systems can identify the business and understand its relevance.
12.1 Business Entity Consistency
Use consistent business information across:
Website.
Contact page.
Organization structured data.
Relevant business profiles.
Legitimate business directories.
Social profiles.
12.2 Factual Content
Prefer specific, verifiable information.
Examples:
Actual furniture categories.
Verified store locations.
Genuine delivery areas.
Real rental conditions.
Accurate product materials.
Published return policies.
12.3 External Mentions
Potential sources of legitimate brand visibility:
Local publications.
Relevant home and interior design websites.
Furniture-related publications.
Genuine business partnerships.
Local community resources.
Vendor and supplier references.
Avoid buying fake reviews or participating in manipulative link schemes.
12.4 AI Referral Measurement
Where analytics can identify referral sources, monitor:
AI search referrals.
Landing pages.
Engagement.
Enquiries.
Purchases.
Rental bookings.
Referral attribution is incomplete in many environments, so AI traffic reports should be treated as directional rather than exhaustive.

13. SSR, SSG AND ISR IMPLEMENTATION REQUIREMENTS
13.1 General Principle
Use server rendering or pre-rendering to deliver useful initial page content while preserving client-side interactivity.
Do not force every page into the same rendering mode.
13.2 Homepage
Recommended:
Static or ISR where content permits.
Dynamic data for elements that require current information.
Server-rendered primary content.
Client-side interactions for navigation and other controls.
13.3 Product Pages
Recommended:
Server-rendered product content or ISR.
Dynamic inventory and pricing validation.
Targeted cache invalidation when products change.
Client-side variant selection and cart interactions.
13.4 Category Pages
Recommended:
ISR or server rendering.
Server-side product filtering where appropriate.
Query-aware pagination.
Efficient data fetching.
13.5 Rental Availability
Rental availability must be checked against current inventory and booking records.
Do not rely solely on a cached HTML page or stale availability response when confirming a booking.
13.6 Authenticated Pages
Customer, vendor, and administrator pages must use appropriate authentication and authorization.
Do not cache personalized data in a way that allows one user to see another user's information.
13.7 Error and Loading States
Provide:
Loading skeletons where useful.
Error boundaries.
Retry controls.
Not-found pages.
Graceful handling of missing products.
Appropriate server error handling.
13.8 Rendering Tests
Validate:
Initial HTML content.
Metadata output.
Structured data output.
Cache invalidation.
Authentication.
Authorization.
Mobile rendering.
Loading and error states.

14. PERFORMANCE AND CORE WEB VITALS
14.1 Core Web Vitals
Monitor the current Core Web Vitals:
LCP — Largest Contentful Paint: Loading performance.
INP — Interaction to Next Paint: Responsiveness.
CLS — Cumulative Layout Shift: Visual stability.
A common field-data target is:
LCP: 2.5 seconds or less.
INP: 200 milliseconds or less.
CLS: 0.1 or less.
These targets should be evaluated at the 75th percentile of eligible field measurements.
14.2 Image Optimization
Furniture websites often rely heavily on product imagery.
Requirements:
Use optimized image formats where supported.
Serve appropriately sized images.
Avoid oversized image downloads.
Provide image dimensions.
Lazy-load below-the-fold images.
Prioritize the main above-the-fold image where appropriate.
Avoid lazy-loading the main image when that delays LCP.
Configure approved remote image hosts.
Use descriptive alternative text.
14.3 JavaScript Optimization
Keep server-rendered components server-side where appropriate.
Reduce unnecessary Client Components.
Split large interactive features.
Remove unused dependencies after auditing.
Avoid duplicate libraries.
Reduce unnecessary rerenders.
Avoid blocking the initial page with optional scripts.
14.4 CSS Optimization
Audit duplicate styles.
Avoid unnecessary global styles.
Remove unused CSS only after reference checks.
Avoid replacing working page styles unnecessarily.
Preserve responsive behavior.
Prevent layout shifts caused by delayed style loading.
14.5 Font Optimization
Use efficient font loading.
Avoid excessive font weights.
Prefer supported local or optimized font delivery where suitable.
Define fallback fonts.
Minimize layout shifts caused by font swapping.
14.6 Third-Party Scripts
Review:
Analytics.
Advertising pixels.
Chat widgets.
Marketing tools.
Payment SDKs.
Maps.
Load scripts only where necessary and according to their technical and consent requirements.
14.7 Performance Monitoring
Use:
Laboratory performance tests.
Real-user measurements.
Route-specific performance reports.
JavaScript error monitoring.
API latency monitoring.
A high Lighthouse score alone does not prove that real customers have a fast experience.

15. IMAGE SEO
15.1 Image Filenames
Use meaningful filenames where practical.
Example:
wooden-king-size-bed-storage.webp
Avoid generic filenames when meaningful product identifiers are available.
15.2 Alt Text
Describe the image accurately.
Good example:
King-size wooden bed with storage drawers
Avoid repeating the same keyword phrase in every image.
Decorative images may use empty alternative text where appropriate.
15.3 Image Dimensions
Serve images appropriate for their actual display size.
Product thumbnails should not download unnecessarily large originals.
15.4 Product Image Consistency
Ensure:
Correct product association.
Correct variant association.
Accurate product representation.
No broken image URLs.
Appropriate fallback images.
15.5 Image Sitemaps
A separate image sitemap may be considered if the catalogue size and image-discovery needs justify it.
All image URLs should be accessible to the relevant crawlers.

16. CONTENT MARKETING STRATEGY
Content marketing should attract people who are researching furniture, selecting products, or considering rentals.
16.1 Content Categories
Buying Guides
How to Choose a Sofa for Your Living Room.
Bed Sizes Explained.
How to Choose a Wardrobe.
What to Consider Before Buying a Dining Table.
How to Measure Furniture for Your Room.
Material and Care Guides
Solid Wood vs Engineered Wood.
How to Care for Wooden Furniture.
Furniture Cleaning and Maintenance.
Choosing Upholstery for Everyday Use.
Rental Guides
How Furniture Rental Works.
Furniture Rental vs Buying.
What to Check Before Renting a Sofa.
Understanding Furniture Rental Deposits.
How to Prepare for Furniture Collection.
Room Planning
Furniture for Small Apartments.
Space-Saving Furniture Ideas.
Furniture for a Home Office.
Bedroom Furniture Planning.
Local Content
Furniture availability in supported cities.
Store and service information.
Local delivery details.
Rental service coverage.
16.2 Content Quality
Every article should:
Solve a real user problem.
Contain accurate information.
Use useful headings.
Include relevant product links.
Avoid unsupported claims.
Be reviewed when business policies or product information change.
16.3 Editorial Workflow
Recommended workflow:
Identify customer search intent.
Research the topic.
Prepare an outline.
Write useful content.
Verify factual claims.
Add relevant internal links.
Add metadata.
Validate images.
Publish.
Measure traffic and conversions.
Update content when necessary.
16.4 Content Avoidance
Avoid:
Mass-producing near-identical city articles.
Keyword stuffing.
Fabricated expertise.
Fake testimonials.
Unsubstantiated product claims.
Publishing thin content solely to capture search traffic.

17. DIGITAL MARKETING STRATEGY
SEO generates organic traffic over time. Paid and owned marketing channels can support demand generation and retention.
17.1 Search Advertising
Potential campaigns:
Furniture purchase intent.
Category-specific campaigns.
Location-specific campaigns.
Rental-intent campaigns.
Brand campaigns.
Vendor acquisition campaigns.
Separate campaigns by objective and landing page.
Do not send every campaign to the homepage if a more relevant landing page exists.
17.2 Product Advertising
Where eligible, maintain accurate product feeds for supported shopping advertising platforms.
Feed data may include:
Product ID.
Title.
Description.
Image.
Price.
Availability.
Product URL.
Brand or manufacturer, where accurate.
Relevant product identifiers, where available.
Feed information must match the website.
Marketplace product feeds should identify each listing correctly and must not combine vendor offers incorrectly.
17.3 Social Media Marketing
Potential channels depend on the audience and business strategy.
Content themes:
Product showcases.
Room transformations.
Product demonstrations.
New arrivals.
Furniture care.
Rental education.
Customer stories, with permission.
Partner shop introductions.
Use genuine imagery and avoid misleading promotional claims.
17.4 Email Marketing
Potential campaigns:
Welcome emails.
New collection announcements.
Cart reminders.
Order updates.
Rental reminders.
Relevant product recommendations.
Customer re-engagement.
Transactional messages should be distinguished from marketing messages.
Marketing communications must respect consent, unsubscribe preferences, and applicable requirements.
17.5 WhatsApp and SMS Marketing
Where used:
Obtain required permissions.
Use approved messaging mechanisms.
Identify the business appropriately.
Provide opt-out mechanisms where required.
Avoid excessive messaging.
Protect customer information.
17.6 Referral Marketing
Potential program:
Customer referral links.
Referral codes.
Defined eligibility.
Reward rules.
Abuse prevention.
Attribution.
Do not award rewards solely based on unverified events.
17.7 Vendor Acquisition Marketing
The platform must market to two audiences:
Furniture customers.
Furniture businesses that may join the marketplace.
Potential acquisition channels:
Partner With Us page.
Direct business outreach.
Local furniture industry networks.
Business referrals.
Vendor recruitment campaigns.
Educational material explaining marketplace participation.
Track vendor applications, approval rate, activation rate, and vendor retention separately from customer acquisition.

18. CONVERSION RATE OPTIMIZATION
18.1 Purchase Conversion
Measure the customer journey:
Landing page view.
Product view.
Add to cart.
Checkout start.
Payment attempt.
Purchase completion.
18.2 Rental Conversion
Measure:
Rental landing page view.
Rental product view.
Availability check.
Date selection.
Rental checkout start.
Payment attempt.
Confirmed booking.
18.3 Vendor Conversion
Measure:
Partner With Us page view.
Registration started.
Registration completed.
Application submitted.
Application approved.
First listing published.
First order received.
18.4 UX Improvements
Potential improvements:
Clear prices.
Clear vendor attribution.
Clear delivery information.
Transparent rental terms.
Simplified forms.
Better mobile navigation.
Helpful validation messages.
Reliable cart persistence.
Clear checkout progress.
Trustworthy payment messaging.
18.5 Experimentation
A/B tests may compare:
CTA wording.
Product card layout.
Product image presentation.
Checkout steps.
Rental pricing display.
Vendor onboarding forms.
Experiments should use defined hypotheses and reliable measurements.
Avoid running tests that mislead customers or obscure essential terms.

19. ANALYTICS AND MEASUREMENT
Analytics should measure actual business outcomes rather than traffic alone.
19.1 Analytics Architecture
Potential components:
Web analytics.
Search performance monitoring.
Advertising conversion tracking.
Server-side transaction records.
Business reporting.
Error monitoring.
The implementation must respect applicable consent and privacy requirements.
19.2 Customer Website Events
Potential events:
view_item_list
select_item
view_item
search
add_to_cart
remove_from_cart
begin_checkout
add_shipping_info
add_payment_info
purchase
view_promotion
select_promotion
Use event definitions supported by the chosen analytics platform.
19.3 Rental Events
Recommended business events:
view_rental_item
check_rental_availability
select_rental_dates
begin_rental_checkout
rental_payment_attempt
rental_booking_confirmed
rental_extension_requested
rental_return_requested
rental_completed
These are proposed event names; map them consistently to the analytics implementation.
19.4 Vendor Events
Potential events:
vendor_registration_started
vendor_registration_completed
vendor_application_submitted
vendor_application_approved
vendor_first_listing_published
vendor_first_order_received
Avoid sending sensitive application documents, financial data, or personally identifiable information to general analytics systems.
19.5 Revenue Attribution
Track separately:
Direct sales revenue.
Marketplace sales.
Rental revenue.
Platform commission.
Delivery revenue, if applicable.
Refunds.
Advertising spend.
Vendor acquisition costs.
The analytics model must distinguish transaction value from platform-earned revenue.
For example, the total value of a partner vendor's sale is not necessarily revenue earned by Divya Furniture World.
19.6 Reporting Dashboard
Potential reports:
Organic traffic.
Search impressions and clicks.
Conversion rate.
Sales by category.
Sales by vendor.
Rental bookings by location.
Vendor application funnel.
Marketing campaign performance.
Refund and cancellation rates.
Revenue by business channel.

20. GOOGLE SEARCH CONSOLE AND BING WEBMASTER TOOLS
20.1 Search Console
Configure the verified production website property.
Monitor:
Indexed pages.
Search impressions.
Clicks.
Average position.
Search queries.
Sitemap processing.
Crawl errors.
Core Web Vitals.
Manual actions.
Security issues.
20.2 Bing Webmaster Tools
Where appropriate, configure the site to monitor:
Indexing.
Crawl issues.
Search performance.
Sitemap status.
Relevant diagnostics.
20.3 Indexing Troubleshooting
When a page is not indexed, inspect:
HTTP status.
Canonical URL.
Robots directives.
Robots.txt.
Page content.
Internal links.
Sitemap inclusion.
Duplicate content.
Rendering output.
Quality and usefulness.
Do not repeatedly request indexing without addressing the underlying issue.

21. SOCIAL SHARING AND OPEN GRAPH
Public product, category, vendor, and editorial pages should provide suitable social metadata.
21.1 Open Graph Fields
Potential fields:
Title.
Description.
URL.
Image.
Site name.
Locale, where appropriate.
21.2 Product Sharing
When customers share a product, the preview should use:
Correct product name.
Accurate product image.
Relevant description.
Canonical product URL.
21.3 Rental Sharing
Rental previews must clearly identify the item as a rental where relevant.
21.4 Image Requirements
Social images should:
Use suitable dimensions.
Remain readable on mobile.
Avoid unintended cropping.
Represent the correct product or promotion.

22. DOMAIN, HTTPS AND DEPLOYMENT
22.1 Production Domain
Use one preferred canonical domain.
The actual domain must be confirmed from the production configuration.
22.2 HTTPS
Requirements:
Valid TLS certificate.
HTTPS throughout the website.
Redirect HTTP to HTTPS.
Avoid mixed content.
Use secure cookie settings appropriate to the deployment.
22.3 Domain Canonicalization
Choose the preferred host form and redirect alternate versions.
Avoid inconsistent canonical URLs across environments.
22.4 Environment Separation
Separate:
Local development.
Staging.
Production.
Staging sites should not accidentally become publicly indexed as production alternatives.
22.5 Deployment Validation
Before release:
Validate environment variables.
Check production metadata.
Verify canonical URLs.
Verify robots.txt.
Verify sitemaps.
Check redirects.
Test structured data.
Test key customer journeys.
Review caching behavior.
Check error monitoring.

23. SECURITY AND PRIVACY FOR MARKETING SYSTEMS
23.1 Analytics Privacy
Avoid sending:
Passwords.
Authentication tokens.
Payment credentials.
Private order details.
Identity documents.
Unnecessary personal information.
23.2 Consent
Where applicable, provide clear choices for:
Analytics.
Advertising.
Marketing cookies.
Other non-essential tracking.
The exact implementation must follow the applicable legal and platform requirements.
23.3 Customer Data
Use customer data only for permitted purposes.
Do not assume that a transactional phone number automatically authorizes unlimited marketing messages.
23.4 Vendor Data
Vendor onboarding and verification information must not be exposed through public pages, search indexes, or marketing analytics.

24. TECHNICAL SEO AUDIT CHECKLIST
Crawlability
Public pages have crawlable internal links.
Important pages are discoverable through sitemaps or internal navigation.
No accidental crawl blocks exist.
Redirects work correctly.
Missing pages return correct status codes.
Indexability
Canonical URLs are correct.
Robots directives are correct.
Private pages are protected.
Duplicate pages are handled appropriately.
Sitemap URLs are valid and indexable.
Metadata
Titles are unique and meaningful.
Meta descriptions are useful.
Canonical links are correct.
Open Graph metadata is valid.
Product and rental metadata reflect actual content.
Structured Data
Organization data is accurate.
Local business data represents genuine locations.
Product data matches visible content.
Prices and availability are accurate.
Breadcrumb data is valid.
Review data is genuine.
Structured data passes validation.
Performance
Images are appropriately sized.
Layout shifts are controlled.
Client JavaScript is minimized where appropriate.
Fonts are efficiently delivered.
Third-party scripts are reviewed.
Core Web Vitals are monitored.
Content
Product descriptions are useful.
Category pages have clear intent.
Location pages contain meaningful local information.
Rental policies are accessible.
FAQs answer real customer questions.
Duplicate or thin pages are reviewed.
Analytics
Purchase events are validated.
Rental booking events are validated.
Vendor funnel events are validated.
Revenue attribution is accurate.
Consent and privacy controls are implemented.

25. IMPLEMENTATION PHASES
Phase 1 — Technical Audit
Audit current routes.
Audit metadata utilities.
Audit schema generation.
Audit canonical URL logic.
Audit existing sitemap and robots files.
Audit rendering modes.
Audit image optimization.
Audit analytics.
Establish baseline performance.
Phase 2 — Technical SEO Foundation
Standardize metadata.
Correct canonical URLs.
Configure robots.txt.
Build sitemap generation.
Fix HTTP status behavior.
Add breadcrumb support.
Validate rendering and indexability.
Phase 3 — Product and Category SEO
Improve product metadata.
Improve category metadata.
Audit product descriptions.
Validate product structured data.
Improve image delivery.
Strengthen internal linking.
Phase 4 — Rental and Marketplace SEO
Add rental-specific metadata.
Improve vendor storefronts.
Implement meaningful location landing pages.
Validate vendor attribution.
Ensure rental pricing is clearly represented.
Avoid duplicate marketplace listings.
Phase 5 — AEO and Content
Build customer question research.
Improve category FAQs.
Improve product specifications.
Publish useful buying guides.
Publish accurate rental guides.
Improve business and location information.
Phase 6 — Performance
Optimize images.
Reduce unnecessary JavaScript.
Audit CSS.
Improve rendering strategy.
Improve loading states.
Validate Core Web Vitals.
Phase 7 — Marketing and Analytics
Configure analytics.
Configure Search Console.
Configure advertising conversion tracking.
Validate purchase events.
Validate rental events.
Build marketing dashboards.
Define campaign attribution.
Phase 8 — Continuous Improvement
Monitor indexation.
Improve pages with high impressions but low click-through rates.
Improve landing pages with poor conversion.
Update outdated content.
Fix technical regressions.
Test and measure marketing experiments.

26. SUCCESS METRICS
Measure performance across several dimensions.
Organic Search
Organic clicks.
Search impressions.
Qualified organic sessions.
Indexed valuable pages.
Product-page search traffic.
Category-page search traffic.
Local search performance.
AI and Answer Visibility
Relevant referral traffic where measurable.
Brand mentions where monitoring is available.
Referral landing pages.
Conversions associated with identifiable AI referrals.
Accuracy and completeness of information presented to users.
These metrics do not provide a complete view of all AI-generated answers.
Customer Conversion
Product conversion rate.
Add-to-cart rate.
Checkout completion rate.
Average order value.
Customer acquisition cost.
Repeat purchase rate.
Rental Performance
Availability-check completion.
Rental booking conversion.
Rental cancellation rate.
Extension rate.
Return completion rate.
Deposit settlement time.
Vendor Growth
Registration completion rate.
Application approval rate.
Time to approval.
Time to first listing.
Time to first transaction.
Active vendors.
Vendor retention.
Marketing
Advertising spend.
Cost per qualified enquiry.
Cost per purchase.
Cost per rental booking.
Return on advertising spend.
Revenue by acquisition channel.
Targets should be established after a baseline is measured rather than inventing performance guarantees.

27. FINAL TECHNICAL REQUIREMENTS
The implementation must follow these principles:
Preserve the existing website design, CSS, assets, and working routes unless a change is required.
Audit existing SEO utilities before creating replacements.
Use SSR, SSG, ISR, and CSR according to each page's data and security requirements.
Do not rely on rendering strategy alone to guarantee search indexing.
Generate accurate metadata from actual product, vendor, category, and location data.
Use structured data only when it represents genuine visible information.
Maintain separate handling for sale prices and rental prices.
Validate inventory, price, payment, and booking status on the backend.
Keep customer, vendor, and administrative information private.
Avoid thin content, fake locations, fabricated reviews, keyword stuffing, and misleading claims.
Optimize images, JavaScript, CSS, fonts, and third-party scripts.
Track sales, rental bookings, commissions, and vendor acquisition separately.
Monitor real-user performance and indexing health.
Test all changes on staging before production deployment.
Treat AEO and GEO as content and discoverability strategies, not guaranteed ranking mechanisms.
End of Technical SEO, AEO, Rendering, Digital Marketing and Growth Documentation.

