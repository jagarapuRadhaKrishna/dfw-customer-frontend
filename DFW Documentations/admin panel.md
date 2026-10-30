DIVYA FURNITURE WORLD
Complete Admin Panel — Functional & Technical Specification
Project: Divya Furniture World
Platform: Next.js customer website + centralized administration + vendor marketplace + furniture rental platform
Frontend: Next.js 14, React, JavaScript/JSX, CSS
Backend: To be confirmed through repository and API audit
Architecture: Modular, role-based, multi-vendor, sales-and-rental platform

1. Project Overview
Divya Furniture World will operate through a centralized administrative system that manages all business operations across four major areas.
1.1 Customer Website Management
Manage website content, products, categories, stores, customer accounts, navigation, banners, promotions, SEO, and conversion optimization.
1.2 Marketplace Management
Manage third-party sellers, vendor applications, vendor verification, product listings, inventory, commissions, marketplace orders, settlements, and disputes.
1.3 Rental Application Management
Manage rental furniture, availability, rental pricing, bookings, deposits, delivery, installation, extensions, cancellations, returns, inspections, and refunds.
1.4 Centralized Security and Administration
Manage administrator accounts, roles, permissions, access control, approval workflows, audit logs, security settings, system configuration, and operational reporting.
The admin panel must provide a single control center while maintaining clear separation between customer, vendor, rental, finance, and administrative permissions.

2. Admin Panel Architecture
2.1 Proposed Application Structure
Divya Furniture World
│
├── Customer Website
│   ├── Homepage
│   ├── Product Categories
│   ├── Product Details
│   ├── Search and Filters
│   ├── Shopping Cart
│   ├── Checkout
│   ├── Customer Account
│   ├── Wishlist
│   ├── Store Locations
│   └── Rental Discovery
│
├── Vendor Marketplace
│   ├── Vendor Registration
│   ├── Vendor Verification
│   ├── Vendor Dashboard
│   ├── Product Management
│   ├── Inventory
│   ├── Sales Orders
│   ├── Rental Listings
│   ├── Commission Management
│   └── Vendor Settlements
│
├── Rental Platform
│   ├── Rental Catalog
│   ├── Availability
│   ├── Rental Pricing
│   ├── Booking Management
│   ├── Delivery and Installation
│   ├── Extensions
│   ├── Returns and Inspection
│   └── Deposit Settlement
│
└── Centralized Admin Panel
    ├── Dashboard
    ├── Sales and Orders
    ├── Products and Inventory
    ├── Marketplace
    ├── Rental Management
    ├── Customers
    ├── Finance
    ├── SEO and Marketing
    ├── Website CMS
    ├── RBAC and Security
    ├── Reports and Analytics
    └── System Settings

This is a logical architecture, not a requirement to create separate applications immediately. Existing routes and components should be reused where appropriate.
2.2 Admin Route Convention
Proposed route structure:
/admin
/admin/dashboard

/admin/catalog/categories
/admin/catalog/subcategories
/admin/catalog/products
/admin/catalog/attributes
/admin/catalog/collections
/admin/inventory
/admin/inventory/stock-movements

/admin/orders
/admin/orders/[id]
/admin/returns
/admin/refunds
/admin/shipments

/admin/customers
/admin/customers/[id]
/admin/customer-groups

/admin/marketplace/vendors
/admin/marketplace/vendor-applications
/admin/marketplace/vendor-products
/admin/marketplace/vendor-orders
/admin/marketplace/commissions
/admin/marketplace/settlements
/admin/marketplace/disputes

/admin/rentals/products
/admin/rentals/categories
/admin/rentals/bookings
/admin/rentals/availability
/admin/rentals/deliveries
/admin/rentals/extensions
/admin/rentals/returns
/admin/rentals/deposits

/admin/content/pages
/admin/content/navigation
/admin/content/banners
/admin/content/media

/admin/seo/overview
/admin/seo/metadata
/admin/seo/redirects
/admin/seo/sitemaps
/admin/seo/structured-data
/admin/seo/local-seo

/admin/marketing/campaigns
/admin/marketing/coupons
/admin/marketing/promotions
/admin/marketing/analytics

/admin/access/users
/admin/access/roles
/admin/access/permissions
/admin/access/audit-logs

/admin/finance/transactions
/admin/finance/payouts
/admin/finance/settlements
/admin/finance/reports

/admin/reports
/admin/settings
/admin/settings/integrations
/admin/settings/notifications
/admin/settings/security

Every route must be mapped to its corresponding permission. A route existing in this list does not mean it is already implemented.

3. User Roles and RBAC
Role-Based Access Control (RBAC) is the central security mechanism of the entire platform.
It determines which users can access which modules, perform which actions, view which records, and approve which transactions.
3.1 Proposed Roles
Level 1: Super Admin
Complete platform-level access.
Responsibilities:
Manage administrator accounts.
Create and configure roles.
Assign permissions.
Configure system settings.
Manage website, marketplace, and rentals.
Approve sensitive operations.
View audit logs.
Manage integrations and security policies.
The Super Admin role must be tightly controlled. Routine business operations should use lower-privilege accounts.
Level 2: Administrator
Responsibilities:
Manage products and categories.
Manage website content.
Manage customer accounts.
Handle orders and customer issues.
Manage approved promotions.
View permitted reports.
Restrictions:
Cannot modify Super Admin security settings unless explicitly authorized.
Cannot grant permissions beyond their own authorized scope.
Cannot approve transactions prohibited by their assigned policies.
Level 3: Catalog Manager
Responsibilities:
Create and edit products.
Manage categories and subcategories.
Manage product specifications.
Manage product images.
Update product SEO.
Manage product visibility and publishing.
Restrictions:
Cannot access financial records by default.
Cannot manage administrator accounts.
Cannot approve vendor payouts.
Level 4: Inventory Manager
Responsibilities:
Manage stock.
Update warehouse quantities.
Track stock movements.
Manage low-stock alerts.
Handle damaged and returned inventory.
Coordinate inventory allocation for sales and rentals.
Restrictions:
Cannot modify financial transactions.
Cannot access unrelated customer information.
Level 5: Order Manager
Responsibilities:
View and process orders.
Confirm orders.
Coordinate shipments.
Manage order cancellations.
Process authorized returns.
Coordinate customer support.
Refund approval and payment adjustments require separate permissions.
Level 6: Customer Support
Responsibilities:
View permitted customer profiles.
Review order status.
Respond to enquiries.
Record support tickets.
Communicate delivery updates.
Escalate refund and dispute requests.
Restrictions:
Cannot view complete payment credentials.
Cannot independently issue unrestricted refunds.
Cannot change user roles.
Level 7: Marketplace Manager
Responsibilities:
Review vendor applications.
Approve or reject vendor listings.
Manage marketplace categories.
Monitor vendor performance.
Review marketplace orders.
Handle vendor disputes.
Vendor payouts remain subject to finance permissions and approval rules.
Level 8: Rental Operations Manager
Responsibilities:
Manage rental bookings.
Review availability.
Coordinate delivery and collection.
Manage extensions.
Process return inspections.
Record damage assessments.
Coordinate deposit settlements.
Financial adjustments require the appropriate additional permission.
Level 9: SEO Manager
Responsibilities:
Manage metadata.
Manage canonical URLs.
Edit robots directives.
Manage redirects.
Update structured data configurations.
Manage XML sitemap settings.
Publish SEO content.
Monitor indexing and search performance.
Restrictions:
Cannot access financial records or administrator security settings by default.
Level 10: Marketing Manager
Responsibilities:
Create promotional campaigns.
Manage coupons.
Configure marketing banners.
Manage landing pages.
Review campaign performance.
Manage approved customer communications.
Restrictions:
Cannot change payment gateway configuration or RBAC settings.
Level 11: Finance Manager
Responsibilities:
View transactions.
Review refunds.
Manage vendor settlements.
Reconcile payments.
Review commissions.
Generate financial reports.
Review deposit liabilities.
High-value payouts and refunds should require additional approval where configured.
Level 12: Content Manager
Responsibilities:
Edit website pages.
Manage banners and promotional content.
Manage navigation.
Maintain store information.
Upload approved media.
Draft and publish permitted content.
Level 13: Vendor
Responsibilities:
Manage their own vendor profile.
Manage their own product listings.
Update their own inventory.
View their own sales orders.
Manage permitted rental listings.
View their own commissions and settlements.
A vendor must never access another vendor's private data.
Level 14: Delivery Partner
Responsibilities:
View assigned deliveries and collections.
Update delivery progress.
Record delivery confirmation.
Upload permitted proof-of-delivery information.
Report failed deliveries or collection issues.
Level 15: Read-Only Auditor
Responsibilities:
View authorized operational reports.
Inspect audit logs.
Review permitted transactions.
Export specifically authorized reports.
Restrictions:
Cannot modify business data.
Cannot grant permissions.
Cannot approve transactions.

4. Permission System
4.1 Permission Structure
Permissions must be stored and evaluated independently of UI visibility.
Recommended permission format:
module.resource.action

Examples:
dashboard.view

catalog.products.view
catalog.products.create
catalog.products.update
catalog.products.delete
catalog.products.publish

catalog.categories.view
catalog.categories.create
catalog.categories.update
catalog.categories.delete

orders.view
orders.create
orders.update
orders.cancel

orders.refunds.view
orders.refunds.request
orders.refunds.approve
orders.refunds.execute

marketplace.vendors.view
marketplace.vendors.review
marketplace.vendors.approve
marketplace.vendors.suspend

marketplace.commissions.view
marketplace.commissions.update

marketplace.payouts.view
marketplace.payouts.approve
marketplace.payouts.execute

rentals.bookings.view
rentals.bookings.create
rentals.bookings.update
rentals.bookings.cancel

rentals.extensions.approve
rentals.returns.inspect
rentals.deposits.adjust
rentals.deposits.refund

seo.metadata.view
seo.metadata.update
seo.redirects.manage
seo.sitemaps.manage
seo.structured_data.update

access.users.view
access.users.create
access.users.update
access.users.disable

access.roles.view
access.roles.create
access.roles.update

access.permissions.assign
audit.logs.view
settings.security.update

These are proposed permission identifiers. The final registry should be generated from the audited modules and actual backend operations.
4.2 RBAC Database Model
Users
users
- id
- name
- email
- password_hash / external_identity_id
- status
- email_verified_at
- last_login_at
- created_at
- updated_at

Roles
roles
- id
- name
- slug
- description
- is_system_role
- status
- created_at
- updated_at

Permissions
permissions
- id
- module
- resource
- action
- description
- created_at

User Roles
user_roles
- id
- user_id
- role_id
- assigned_by
- assigned_at
- expires_at

Role Permissions
role_permissions
- id
- role_id
- permission_id
- granted_by
- created_at

Audit Logs
audit_logs
- id
- actor_user_id
- action
- resource_type
- resource_id
- result
- reason
- request_id
- ip_address
- created_at

Production implementations may require additional tenant, scope, approval, and policy fields.
4.3 Permission Enforcement
Every protected operation must be authorized on the server.
Required enforcement layers:
Authentication: identify the user.
Account status: confirm that the account is active.
Role resolution: load the user's effective roles.
Permission evaluation: verify the requested action.
Resource authorization: verify access to the specific record.
Scope validation: enforce vendor, store, warehouse, or region restrictions.
Business-rule validation: check status transitions and approval requirements.
Audit logging: record security-sensitive operations.
Example:
A vendor may possess catalog.products.update, but that permission alone must not allow the vendor to update another vendor's product.
The backend must additionally verify ownership or an explicitly authorized administrative scope.
Important Security Rules
Hiding a menu item is not authorization.
Protecting a React component is not authorization.
Client-side role checks are not sufficient.
Every API operation must enforce its own permissions.
Direct URL access must be handled correctly.
Unauthorized users should receive a consistent 403 Forbidden response.
Unauthenticated requests should receive the appropriate 401 Unauthorized response.
Missing resources should return 404 Not Found where appropriate.
Permission changes must invalidate or refresh cached authorization decisions.
Sensitive changes must be recorded in audit logs.
4.4 Dynamic Admin Sidebar
The sidebar should be generated from the user's authorized navigation configuration.
Example:
Dashboard

Catalog
  Products
  Categories
  Inventory

Orders
  All Orders
  Returns
  Refund Requests

Marketplace
  Vendors
  Vendor Applications
  Commissions
  Settlements

Rentals
  Rental Products
  Bookings
  Availability
  Returns

SEO & Marketing
  SEO Overview
  Metadata
  Redirects
  Campaigns

Administration
  Users
  Roles
  Permissions
  Audit Logs

Only authorized menu items should be displayed.
However, the sidebar must never be the only security boundary. API and server-side authorization remain mandatory.

5. Admin Dashboard
The dashboard should present information according to the current user's permissions.
5.1 Overview Metrics
Potential metrics:
Total orders.
Today's orders.
Sales revenue.
Pending payments.
Orders awaiting confirmation.
Products requiring restocking.
Pending vendor applications.
Vendor listings awaiting approval.
Active rental bookings.
Upcoming rental deliveries.
Overdue rental returns.
Pending refunds.
Pending vendor settlements.
Customer support requests.
Website enquiries.
SEO indexing or technical issues.
Metrics should only appear when their underlying data is available and the user is authorized to view it.
5.2 Dashboard Widgets
Sales performance chart.
Order status distribution.
Revenue trends.
Rental booking trends.
Vendor application status.
Inventory alerts.
Upcoming deliveries and collections.
Refund and settlement queues.
Recent administrative activity.
Website and SEO health indicators.
Every widget should have loading, empty, error, and permission-denied states.

6. Product Catalog Management
6.1 Product Management
Required functions:
Create products.
Edit products.
Archive or deactivate products.
Manage product names and descriptions.
Manage SKU and barcode fields where applicable.
Assign categories and subcategories.
Manage brands and collections.
Configure product attributes.
Upload and organize product images.
Manage variants.
Configure prices and sale prices.
Configure product visibility.
Manage inventory references.
Manage shipping and delivery information.
Manage product metadata and structured data.
Preview products before publishing.
6.2 Product Statuses
Proposed statuses:
Draft
Pending Review
Approved
Published
Rejected
Archived
Out of Stock

The final statuses should reflect the distinction between publication state and inventory availability.
6.3 Inventory Management
Stock by SKU and location.
Warehouse inventory.
Vendor inventory.
Reserved stock.
Available stock.
Damaged stock.
Returned stock.
Low-stock thresholds.
Stock adjustment requests.
Stock movement history.
Inventory reconciliation.
All inventory adjustments should record the actor, previous quantity, new quantity, reason, and timestamp.

7. Sales and Order Management
7.1 Order Lifecycle
Proposed lifecycle:
Pending
  ↓
Confirmed
  ↓
Processing
  ↓
Packed
  ↓
Shipped
  ↓
Delivered
  ↓
Completed

Exceptional transitions include cancellation, failed delivery, return, partial fulfillment, and refund.
Actual statuses must match the backend's existing order model.
7.2 Order Details
Each order detail page should provide:
Order ID.
Customer information, subject to permissions.
Product and variant details.
Quantity and pricing.
Discounts.
Taxes and delivery charges.
Payment status.
Shipment information.
Vendor allocation.
Fulfillment history.
Refund and return history.
Internal notes.
Audit history.
7.3 Returns and Refunds
Return request review.
Return eligibility validation.
Return approval or rejection.
Pickup coordination.
Product inspection.
Refund calculation.
Refund approval.
Refund execution through the payment provider.
Refund status tracking.
Customer notifications.
Refund execution must be idempotent and reconciled against payment provider records.

8. Customer Management
Features:
Customer directory.
Customer profile.
Contact verification status.
Order history.
Rental booking history.
Wishlist and cart information where appropriate.
Support history.
Customer tags and groups.
Account activation and suspension.
Privacy and data-access requests.
Communication preferences.
Consent history.
Account deletion workflows where legally required.
Access to personal data should be limited to the minimum required for each role.

9. Vendor Marketplace Management
9.1 Vendor Application Workflow
Application Started
       ↓
Submitted
       ↓
Under Review
       ↓
Additional Information Requested
       ↓
Approved / Rejected
       ↓
Agreement Accepted
       ↓
Account Activated

A vendor may offer sales, rentals, or both, depending on the approved business model.
9.2 Vendor Registration Fields
Business name.
Legal business name, where applicable.
Business type.
Contact person.
Email and phone.
Business address.
Warehouse or store locations.
Serviceable regions.
Product categories.
Sales, rental, or hybrid participation.
Required verification documents.
Payout account verification status.
Agreement acceptance.
Application status.
Collect only the documentation necessary for the business and applicable legal requirements.
9.3 Vendor Dashboard
Vendors should be able to:
View their own sales and rental performance.
Create and update permitted listings.
Manage their inventory.
Process their assigned orders.
Update fulfillment statuses.
Manage their own rental availability.
View commissions and settlement history.
Respond to disputes.
Update permitted business details.
Vendors must not be able to approve themselves, change their commission unilaterally, access other vendors' data, or modify platform-level security settings.
9.4 Commission Management
Commission rules may vary by:
Product category.
Vendor agreement.
Sales transaction.
Rental booking.
Promotion.
Contractual terms.
The system should calculate commissions transparently and retain a transaction-level record of the rule used.
Commission changes should have effective dates and should not silently alter historical settlements.
9.5 Vendor Settlements
Proposed workflow:
Order / Rental Revenue Recorded
          ↓
Payment Reconciled
          ↓
Commission Calculated
          ↓
Eligible Settlement Created
          ↓
Finance Review
          ↓
Approval
          ↓
Payout Initiated
          ↓
Payout Reconciled

Payout execution should require the correct finance permissions and follow any configured dual-approval policy.

10. Rental Application Management
10.1 Rental Product Management
Create rental products.
Assign rental categories.
Configure rental descriptions and images.
Configure rental price plans.
Set minimum rental duration.
Set permitted rental durations.
Configure deposits.
Configure availability by location.
Assign warehouse or vendor.
Configure delivery and installation.
Configure extension eligibility.
Configure return and cancellation rules.
Manage listing approval and visibility.
10.2 Rental Pricing
The pricing engine may support:
Rental Total =
Rental Period Charges
+ Delivery Charges
+ Installation Charges
+ Approved Add-ons
+ Applicable Taxes
+ Other Disclosed Fees
- Eligible Discounts

Deposits must be represented separately from revenue and rental-period charges.
Pricing rules should specify:
Daily, weekly, or monthly rates.
Minimum duration.
Billing intervals.
Partial-period rules.
Late-return fees.
Extension pricing.
Damage charges.
Deposit refund conditions.
Taxes and fees.
All customer-facing amounts must be disclosed before booking confirmation.
10.3 Rental Booking Lifecycle
Requested
   ↓
Availability Confirmed
   ↓
Payment / Deposit Pending
   ↓
Confirmed
   ↓
Scheduled for Delivery
   ↓
Delivered / Installed
   ↓
Active Rental
   ↓
Extension Requested (Optional)
   ↓
Return Requested
   ↓
Collection Scheduled
   ↓
Collected
   ↓
Inspection Completed
   ↓
Deposit Settled
   ↓
Closed

Additional exception states may include rejected, cancelled, payment failed, delivery failed, overdue, damaged, and disputed.
10.4 Rental Booking Details
Every booking should include:
Booking ID.
Customer.
Rental items and quantities.
Rental location.
Start and end dates.
Pricing breakdown.
Deposit amount.
Payment status.
Delivery and installation details.
Assigned operations team.
Vendor or warehouse allocation.
Extension history.
Return and inspection records.
Damage claims.
Deposit settlement.
Customer communication history.
10.5 Rental Availability
The system must prevent conflicting reservations for the same physical inventory.
Availability should account for:
Existing confirmed bookings.
Inventory quantity.
Delivery and collection buffers.
Cleaning or refurbishment.
Damaged or unavailable items.
Location-specific stock.
Vendor-specific availability.
Availability validation and reservation creation must be handled transactionally to prevent double booking.
10.6 Returns and Deposits
The rental return workflow should support:
Return request.
Collection scheduling.
Condition inspection.
Photo evidence.
Missing-item records.
Damage assessment.
Customer dispute.
Authorized deduction.
Partial or full deposit refund.
Refund reconciliation.
Booking closure.
Deposit adjustments must have a recorded reason and evidence where applicable.

11. Website CMS Management
The admin panel should allow authorized staff to manage public website content without editing source code for routine content changes.
11.1 CMS Modules
Homepage sections.
Hero banners.
Promotional bars.
Product showcases.
Category landing pages.
Collection pages.
Store and location pages.
Static content pages.
FAQs.
Blog or editorial content, if required.
Navigation menus.
Footer links.
Contact information.
Terms and conditions.
Privacy policy.
Rental policy.
Return and refund policy.
Vendor policy.
11.2 Content Publishing
Each supported content type may use:
Draft
  ↓
Review
  ↓
Approved
  ↓
Scheduled / Published
  ↓
Archived

Publishing permissions should be separate from content-editing permissions where appropriate.
The CMS must validate required fields, image dimensions, URL formats, and SEO fields before publishing.
Design preservation requirement: Existing website layout, CSS, assets, and component structure must not be replaced simply to add CMS functionality. First determine which content is already data-driven and which is currently hard-coded.

12. SEO Management Module
The admin panel must provide controlled SEO management across products, categories, collections, locations, editorial content, and rental pages.
12.1 SEO Overview
Potential indicators:
Indexed URL counts.
Sitemap status.
Search performance imported from connected services.
Missing metadata.
Duplicate title or description warnings.
Broken internal links.
Redirect errors.
Canonical URL inconsistencies.
Structured data validation issues.
Pages returning errors.
Core Web Vitals data, where available.
The panel must distinguish actual data imported from external services from estimates generated by an internal audit.
12.2 Metadata Management
Editable fields:
SEO title.
Meta description.
Canonical URL.
Robots directives.
Open Graph title.
Open Graph description.
Open Graph image.
Social sharing metadata.
Supported structured-data configuration.
Metadata should be generated from templates where appropriate, with controlled per-page overrides.
12.3 Technical SEO
Modules:
XML sitemap configuration.
Sitemap generation status.
Robots.txt management.
Canonical URL validation.
Redirect management.
HTTP status auditing.
Broken link reporting.
Duplicate metadata detection.
Pagination and filter URL rules.
Noindex configuration.
Structured data validation.
Image alt-text checks.
Internal-link reporting.
High-risk changes such as blocking major directories from crawling should require elevated permissions, previews, validation, and audit logging.
12.4 Redirect Management
Support:
Source path.
Destination path.
Redirect type.
Active status.
Creation date.
Created by.
Redirect chain detection.
Loop detection.
Collision detection.
The system must reject invalid redirect loops and unsafe redirect destinations.
12.5 Structured Data
Potential types, subject to actual page content:
Organization.
LocalBusiness.
WebSite.
Product.
Offer.
BreadcrumbList.
Article.
Review or AggregateRating when the underlying data meets applicable requirements.
FAQPage only where its use is appropriate.
Structured data must accurately reflect visible page content. The admin panel must not fabricate reviews, ratings, stock availability, prices, or business details.
12.6 Local SEO
Business locations.
Store addresses.
Opening hours.
Service areas.
Location-specific landing pages.
Location metadata.
Local structured data.
Business profile links.
Location page publishing.
Contact information consistency.
12.7 AEO and GEO
Answer Engine Optimization and Generative Engine Optimization workflows may include:
Clear product and service explanations.
Accurate FAQs.
Structured product information.
Consistent business details.
Useful comparison and buying guides.
Author and editorial information.
Clear policies.
Content freshness checks.
No admin feature can guarantee inclusion or ranking in AI-generated answers.
12.8 SEO Permissions
Examples:
seo.overview.view
seo.metadata.view
seo.metadata.update
seo.redirects.view
seo.redirects.manage
seo.sitemaps.view
seo.sitemaps.manage
seo.robots.view
seo.robots.update
seo.structured_data.view
seo.structured_data.update
seo.local_seo.manage
seo.content.publish


13. Marketing Management
13.1 Promotions
Promotional banners.
Homepage campaigns.
Category promotions.
Product discounts.
Coupon codes.
Rental promotions.
Vendor-funded promotions.
Platform-funded promotions.
Campaign start and end dates.
Usage limits.
Eligible customer groups.
Minimum order value.
Excluded products.
Campaign approval.
13.2 Marketing Channels
Potential integrations:
Search advertising.
Shopping product feeds.
Social media campaigns.
Email marketing.
SMS and WhatsApp communications.
Referral programs.
Abandoned-cart reminders.
Customer retention campaigns.
Integrations should be implemented only after provider selection, consent requirements, and operational workflows are defined.
13.3 Marketing Analytics
Campaign traffic.
Product views.
Add-to-cart events.
Checkout initiation.
Completed purchases.
Rental booking conversions.
Vendor registration conversions.
Campaign-attributed revenue.
Coupon usage.
Customer retention.
Use consent-aware analytics and avoid collecting unnecessary personal information.

14. Finance and Payment Management
Modules:
Payment transactions.
Payment reconciliation.
Refunds.
Vendor commissions.
Vendor settlements.
Rental deposits.
Rental charges.
Delivery and installation charges.
Tax reports.
Failed transactions.
Disputes and chargebacks.
Financial exports.
14.1 Financial Controls
Never store raw card credentials.
Use the selected payment provider's supported integration.
Verify payment status on the server.
Verify webhook signatures.
Prevent duplicate processing.
Maintain immutable transaction references.
Separate rental deposits from earned revenue.
Record refunds and settlement adjustments.
Reconcile external payment records.
Restrict financial exports.
Apply dual approval to configured high-risk transactions.

15. Delivery, Warehouse and Logistics
Modules:
Warehouse management.
Stock transfers.
Delivery zones.
Delivery fee configuration.
Shipment assignment.
Delivery status tracking.
Installation scheduling.
Failed delivery management.
Return pickup.
Rental collection.
Proof of delivery.
Damage and loss reports.
Sales and rental workflows must use distinct business rules where inventory, collection, or refurbishment requirements differ.

16. Customer Support and Enquiries
Features:
Website enquiry management.
Contact form submissions.
Customer support tickets.
Order-related requests.
Rental-related requests.
Vendor-related disputes.
Assignment to support agents.
Priority and SLA fields.
Internal notes.
Customer-visible replies.
Escalation.
Resolution history.
Possible statuses:
New
Assigned
In Progress
Waiting for Customer
Escalated
Resolved
Closed

The existing enquiry API and contact form must be audited before building a replacement.

17. Reports and Analytics
Report categories:
Sales performance.
Product performance.
Inventory.
Customer acquisition.
Customer retention.
Vendor performance.
Marketplace commissions.
Vendor payouts.
Rental utilization.
Rental revenue.
Late returns.
Deposit liabilities.
Refunds.
Marketing attribution.
SEO performance.
Administrator activity.
Reports must respect the requesting user's data scope. Export permissions should be separate from ordinary view permissions.

18. Notifications and Approval Workflows
Notification channels may include:
In-admin notifications.
Email.
SMS.
WhatsApp, where appropriately integrated.
Events may include:
Vendor application submitted.
Vendor approved or rejected.
Product listing submitted for review.
Order placed.
Payment failed.
Refund requested.
Rental booking confirmed.
Rental return overdue.
Deposit adjustment requested.
Settlement awaiting approval.
Security-sensitive role changed.
Notification templates should support previewing, localization where needed, delivery status, and retries.

19. System Settings and Integrations
Potential configuration modules:
Business information.
Store locations.
Service areas.
Currency.
Time zone.
Tax configuration.
Delivery settings.
Rental policies.
Vendor policies.
Payment provider.
Shipping provider.
Email provider.
SMS provider.
Analytics.
Search Console integration.
Object storage.
API credentials and webhooks.
Credentials must be stored server-side using an appropriate secrets-management approach. They must never be exposed to browser code or ordinary application logs.
High-risk configuration changes should require elevated permissions and be recorded in the audit log.

20. Database Architecture
The final schema must be based on an audit of the existing database and ORM models.
Potential entities include:
Identity and Access
- Users
- Roles
- Permissions
- UserRoles
- RolePermissions
- Sessions
- AuditLogs

Catalog
- Products
- ProductVariants
- Categories
- Brands
- Collections
- ProductImages
- ProductAttributes
- Inventory
- InventoryMovements
- Warehouses

Sales
- Orders
- OrderItems
- Payments
- Shipments
- Returns
- Refunds

Marketplace
- Vendors
- VendorApplications
- VendorDocuments
- VendorLocations
- VendorListings
- VendorCommissions
- VendorSettlements
- VendorDisputes

Rentals
- RentalProducts
- RentalPricingPlans
- RentalInventory
- RentalAvailability
- RentalBookings
- RentalBookingItems
- RentalPayments
- RentalDeposits
- RentalExtensions
- RentalDeliveries
- RentalReturns
- RentalInspections

Customers and Support
- CustomerProfiles
- CustomerAddresses
- SupportTickets
- Enquiries
- NotificationRecords

CMS and SEO
- Pages
- Banners
- NavigationItems
- MediaAssets
- SeoMetadata
- Redirects
- SitemapSettings
- PublishingHistory

Marketing
- Campaigns
- Coupons
- Promotions
- MarketingEvents

Finance and Configuration
- FinancialTransactions
- ReconciliationRecords
- TaxRecords
- SystemSettings
- IntegrationConfigurations

These are logical entities, not a direction to create every table immediately. Some may already exist, and several may be represented by related tables or external services.

21. API Architecture
The existing backend framework and API contracts must be confirmed before introducing new endpoints.
Proposed resource groups:
/api/admin/dashboard
/api/admin/users
/api/admin/roles
/api/admin/permissions
/api/admin/audit-logs

/api/admin/products
/api/admin/categories
/api/admin/inventory
/api/admin/orders
/api/admin/customers

/api/admin/vendors
/api/admin/vendor-applications
/api/admin/vendor-listings
/api/admin/commissions
/api/admin/settlements

/api/admin/rentals/products
/api/admin/rentals/bookings
/api/admin/rentals/availability
/api/admin/rentals/returns
/api/admin/rentals/deposits

/api/admin/content/pages
/api/admin/content/banners
/api/admin/seo/metadata
/api/admin/seo/redirects
/api/admin/seo/sitemaps
/api/admin/marketing/campaigns

/api/admin/reports
/api/admin/settings

Every endpoint must define:
Authentication requirements.
Permission requirements.
Resource ownership and scope.
Request validation.
Response structure.
Error structure.
Pagination.
Audit requirements.
Transaction boundaries.
Rate limits where appropriate.
Use the existing endpoint conventions where possible instead of introducing a conflicting API structure.

22. Frontend and Admin UI Requirements
22.1 Layout
Recommended layout:
Collapsible sidebar.
Top navigation.
Breadcrumbs.
Page title and actions.
Search and filters.
Data tables.
Pagination.
Drawers or dialogs for appropriate quick actions.
Dedicated detail pages for complex records.
Toast notifications.
Loading skeletons.
Empty states.
Error boundaries.
22.2 Data Table Requirements
Server-side pagination.
Search.
Filtering.
Sorting.
Row actions controlled by permissions.
Status badges.
Bulk actions with authorization.
Export controls based on permissions.
Responsive behavior.
Loading and error states.
The frontend must use the backend's actual pagination contract. Do not assume that a page parameter exists if the backend expects another field.
22.3 Existing UI Preservation
For the customer-facing website:
Preserve existing design and page layouts.
Preserve existing images and assets.
Preserve CSS unless a change is explicitly required.
Preserve existing URLs and navigation.
Keep the existing homepage and product presentation intact.
Avoid duplicating CSS imports.
Avoid deleting files before checking their references.
The admin panel may have its own visual system, but it must not unintentionally change customer-facing styling.

23. Security, Auditability and Reliability
Mandatory safeguards:
Server-side authorization.
Secure authentication and session management.
Password hashing if passwords are locally managed.
Multi-factor authentication for privileged accounts where supported.
CSRF protections where applicable.
Input validation.
Output encoding.
Rate limiting.
Secure file uploads.
Secrets management.
Audit logging.
Database transaction integrity.
Payment idempotency.
Backup and recovery procedures.
Session revocation.
Least-privilege permissions.
Vendor data isolation.
Privacy-aware logging.
Monitoring and alerting.
Sensitive operations should include:
Role and permission changes.
Vendor approval and suspension.
Refund execution.
Payout execution.
Rental deposit adjustments.
Major SEO configuration changes.
Integration credential changes.
Account disabling.
Destructive bulk actions.
For especially sensitive financial operations, use maker-checker approval: one authorized user requests the action and a different authorized user approves it.

24. Performance and Scalability
Use server-side pagination for large datasets.
Index frequently queried database fields.
Avoid unnecessary duplicate API requests.
Cache only data that is safe to cache.
Invalidate cached data after relevant updates.
Optimize images and media.
Load large reporting datasets asynchronously.
Use background jobs for long-running exports and integrations.
Retry transient failures safely.
Prevent duplicate processing.
Monitor API latency and errors.
Add database migrations with rollback or recovery plans.
Use structured logs and request IDs.
Permission caching must be invalidated or refreshed after role changes so revoked access does not remain effective indefinitely.

25. Testing Requirements
RBAC Tests
User without permission cannot access the page.
User without permission cannot call the API directly.
Vendor cannot read another vendor's records.
Read-only user cannot perform updates.
Revoked permissions take effect.
Suspended users cannot continue privileged actions.
Unauthorized bulk exports are rejected.
Sales Tests
Product can be created and published by authorized users.
Inventory is correctly reserved.
Payment callbacks cannot create duplicate orders.
Refunds cannot exceed the permitted refundable amount.
Order transitions follow allowed business rules.
Marketplace Tests
Vendor applications follow the configured approval process.
Unapproved vendors cannot publish restricted listings.
Commission calculations are reproducible.
Settlements match reconciled transactions.
Vendors cannot approve their own restricted payouts.
Rental Tests
Unavailable inventory cannot be double-booked.
Booking totals are calculated correctly.
Extension requests respect availability.
Return inspections are recorded.
Deposit deductions require authorized action.
Refunds are reconciled.
SEO Tests
Metadata is rendered correctly.
Canonical URLs are correct.
Redirect loops are rejected.
Sitemaps include eligible URLs.
Private account pages are not exposed as public indexed content.
Structured data matches visible content.
Regression Tests
Existing customer routes continue to work.
Homepage and product layouts remain unchanged.
CSS and assets remain available.
Login, cart, checkout, wishlist, and profile flows continue to work.
Existing APIs maintain their documented contracts.

26. Implementation Roadmap
Phase 1 — Repository and System Audit
Inspect all existing routes.
Inspect components, hooks, contexts, and utilities.
Identify existing admin pages.
Inspect API integrations.
Inspect authentication.
Inspect database schemas and migrations.
Identify existing RBAC behavior.
Map each existing feature to the proposed module list.
Identify duplicate files and unused code.
Document existing functionality versus missing functionality.
Deliverable: Current-state audit and implementation gap report.
Phase 2 — RBAC Foundation
Define permission registry.
Define roles.
Implement server-side permission evaluation.
Implement resource-level authorization.
Implement dynamic navigation.
Protect API endpoints.
Add audit logging.
Add tests for unauthorized access.
Deliverable: Secure access-control foundation.
Phase 3 — Core Commerce
Catalog.
Categories.
Inventory.
Customers.
Orders.
Payments.
Returns and refunds.
Shipping and delivery.
Deliverable: Complete core commerce operations.
Phase 4 — Marketplace
Vendor registration.
Verification.
Approval workflows.
Vendor dashboard.
Listings.
Inventory.
Vendor orders.
Commissions.
Settlements.
Disputes.
Deliverable: Controlled multi-vendor marketplace.
Phase 5 — Rental Platform
Rental catalog.
Availability.
Pricing.
Booking management.
Delivery and installation.
Extensions.
Returns.
Inspections.
Deposits and settlements.
Deliverable: End-to-end rental operations.
Phase 6 — CMS, SEO and Marketing
Website content management.
Banners and navigation.
Metadata management.
Redirects.
Sitemap controls.
Structured data.
Local SEO.
Campaigns and promotions.
Analytics integrations.
Deliverable: Centralized website growth and content management.
Phase 7 — Finance, Reports and Integrations
Reconciliation.
Commissions and payouts.
Financial reports.
Operational dashboards.
Notifications.
External integrations.
Scheduled jobs and monitoring.
Deliverable: Business reporting and operational automation.
Phase 8 — Production Readiness
Security testing.
RBAC penetration tests.
Regression tests.
Performance tests.
Backup and recovery verification.
Deployment validation.
Monitoring.
Documentation and administrator training.
Deliverable: Production-ready, tested platform.

27. Definition of Done
The platform is ready only when:
Every implemented module has documented permissions.
Every protected API enforces authorization server-side.
Every vendor-scoped operation verifies ownership or approved scope.
Critical business workflows have valid status transitions.
Financial operations are auditable and reconciled.
Rental inventory cannot be double-booked.
Customer website routes and layouts remain functional.
SEO configuration produces valid output.
Sensitive actions are logged.
Unauthorized operations are rejected.
Automated tests cover critical security and business workflows.
Existing features are not duplicated unnecessarily.
Deployment, monitoring, backup, and recovery procedures are documented.
The final implementation matches the actual database and backend contracts.

28. Final Architectural Principle
Divya Furniture World should have one centralized administration platform with modular business domains and a unified permission system.
The customer website, vendor marketplace, rental platform, SEO tools, marketing workflows, and finance operations must share consistent identity, authorization, auditing, and operational standards.
However, shared administration does not mean unrestricted access. Each role must receive only the permissions necessary for its responsibilities, and every sensitive operation must be verified by the backend.
The first implementation task is to audit the current repository and produce a feature-by-feature gap matrix. Only then should modules be implemented incrementally, preserving existing routes, APIs, CSS, assets, and working functionality.

