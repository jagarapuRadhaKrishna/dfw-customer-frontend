DIVYA FURNITURE WORLD
Vendor Marketplace — Complete End-to-End Functional Documentation
Document Type: Business Requirements Document (BRD) and Functional Requirements Specification (FRS)
Business Model: Hybrid Furniture Marketplace
Platform: Next.js Customer Website, Vendor Portal, Admin Portal and Backend APIs
Primary Business: Furniture Sales and Furniture Rentals
Marketplace Owner: Divya Furniture World
Target Users: Furniture Shops, Manufacturers, Dealers, Rental Providers and Marketplace Administrators
Document Status: Proposed functional specification

1. PROJECT OVERVIEW
1.1 Objective
Divya Furniture World will operate as a hybrid furniture marketplace.
The platform will sell furniture owned by Divya Furniture World while allowing approved third-party furniture shops from different cities to register, list products, receive orders, manage rentals and earn revenue through the platform.
The marketplace must support vendors that:
Sell furniture only.
Rent furniture only.
Sell and rent furniture.
Operate one physical shop.
Operate multiple physical shops or warehouses.
Serve one city or multiple supported cities.
Each vendor must have an independent account, inventory, product catalogue, operational dashboard and financial records.
The platform administrator must retain control over vendor approval, marketplace policies, customer experience, commissions, payments, disputes and account suspension.
1.2 Hybrid Business Model
The marketplace will support two main inventory ownership models.
A. Divya Furniture World Inventory
Divya Furniture World manages its own:
Products.
Pricing.
Inventory.
Sales.
Rental inventory.
Orders.
Deliveries.
Customer service.
Financial records.
B. Third-Party Vendor Inventory
Approved partner shops manage their own:
Products.
Product prices.
Rental prices.
Inventory.
Store locations.
Service areas.
Sales orders.
Rental bookings.
Delivery fulfilment, according to marketplace rules.
Divya Furniture World controls marketplace access, approval, commission policies and overall platform operations.
1.3 Business Objectives
Onboard furniture shops across multiple cities.
Expand product selection without owning every item.
Enable vendors to sell furniture online.
Enable vendors to offer furniture for rent.
Generate commission revenue from partner transactions.
Improve product availability across locations.
Provide a standardized customer experience.
Track marketplace performance centrally.
Maintain vendor accountability and transaction traceability.

2. MARKETPLACE PARTICIPANTS
The platform will contain the following participants.
Participant
Primary responsibility
Marketplace Owner
Owns and operates Divya Furniture World
Super Admin
Controls the complete marketplace
Admin
Manages day-to-day platform operations
Vendor Manager
Reviews and manages vendor accounts
Finance Manager
Manages commissions, settlements and refunds
Operations Manager
Coordinates orders, delivery and returns
Furniture Seller
Sells furniture through the marketplace
Rental Provider
Offers furniture for rent
Hybrid Vendor
Sells and rents furniture
Customer
Purchases or rents furniture
Delivery Partner
Delivers or collects furniture, where applicable

A single registered business may operate as a seller, rental provider, or both.
A vendor may have multiple authorized staff accounts, subject to the permissions configured for that vendor.

3. VENDOR REGISTRATION ENTRY POINTS
Vendors should be able to discover the marketplace through several entry points.
3.1 Partner With Us Page
Suggested route:
/partner-with-us
The page should explain:
What the marketplace offers.
Who can register.
Supported business types.
Selling opportunities.
Rental opportunities.
Vendor eligibility requirements.
Commission and fee policies, once defined.
How onboarding works.
Required documentation.
Customer support contact information.
Primary CTA:
Become a Partner
Secondary CTA:
Already Registered? Sign In
3.2 Vendor Registration Page
Suggested route:
/vendors/register
The registration page starts the vendor onboarding process.
It should ask the applicant to select a business model:
Sell Furniture.
Rent Furniture.
Sell and Rent Furniture.
The selected business model determines which later sections are required.
3.3 Existing Vendor Login
Suggested route:
/vendor-login
Existing vendors should be able to sign in and access their vendor dashboard.
The system must distinguish vendor accounts from customer accounts and administrative accounts.
3.4 Vendor Application Status
Suggested route:
/vendor-application-status
Where appropriate, applicants should be able to check the progress of their application.
Access must be secured through authentication or a verified, time-limited application lookup mechanism.
A public application ID alone should not reveal sensitive business documents.

4. COMPLETE VENDOR ONBOARDING LIFECYCLE
The standard onboarding process is:
Vendor visits the Partner With Us page.
Vendor selects Become a Partner.
Vendor creates a registration account.
Vendor verifies the required email address or phone number.
Vendor selects a business model.
Vendor enters business information.
Vendor provides authorized representative details.
Vendor enters shop or warehouse locations.
Vendor selects service cities and PIN codes.
Vendor uploads required verification documents.
Vendor accepts marketplace terms.
Vendor submits the application.
The system validates the submitted information.
The application enters the review queue.
The administrator reviews the application.
The administrator approves, rejects or requests additional information.
The vendor receives a notification.
Approved vendors complete any remaining setup requirements.
Vendor products and rental listings are reviewed according to marketplace policy.
Eligible listings are published.
The vendor begins receiving customer orders or rental bookings.
Important: Registration does not automatically grant permission to publish listings or receive transactions. Vendor approval and any required listing approval must be completed first.

5. VENDOR ACCOUNT REGISTRATION
5.1 Registration Form
The initial registration form should collect only the information necessary to create and verify an application account.
Suggested fields:
Field
Requirement
Business email
Required, subject to account policy
Mobile number
Required
Password
Required if password authentication is used
Confirm password
Required if applicable
Business name
Required
Business model
Required
Terms acceptance
Required
Privacy acknowledgement
As required

The system may use OTP-based authentication instead of passwords if that is the selected authentication model.
5.2 Validation
The registration process must validate:
Required fields.
Email format.
Phone number format.
Duplicate accounts.
Password requirements, where applicable.
Verification status.
Terms acceptance.
Validation must occur on the backend as well as the frontend.
5.3 Account Creation
After successful registration:
Create the vendor account.
Assign a unique vendor ID.
Create an onboarding application.
Set the account status to Pending Verification or the configured initial status.
Record the registration timestamp.
Send the appropriate verification notification.
Direct the vendor to the onboarding dashboard.
The account must not become an approved marketplace seller merely because registration succeeded.

6. VENDOR BUSINESS MODEL SELECTION
The vendor must select one or both business activities.
6.1 Furniture Sales
A sales vendor must provide the information required to:
List furniture for sale.
Set selling prices.
Manage inventory.
Receive and fulfil orders.
Define supported delivery arrangements.
Manage returns according to marketplace policy.
6.2 Furniture Rentals
A rental provider must provide the information required to:
List furniture for rent.
Define rental pricing.
Configure rental periods.
Set deposit requirements, where applicable.
Manage rental availability.
Fulfil rental bookings.
Manage extensions and returns.
6.3 Hybrid Vendor
A hybrid vendor supports both sales and rentals.
The system should enable the relevant modules based on the vendor's approved permissions.
Sales and rental inventory must be managed according to the applicable inventory model.
A product listed for sale must not automatically become available for rent unless the vendor explicitly configures a rental listing and the inventory rules permit it.
6.4 Changing Business Model
If a vendor later wants to add rentals or sales:
Vendor requests the additional capability.
System identifies any additional information or verification requirements.
Vendor completes the required setup.
Administrator approves the change where necessary.
The relevant dashboard functionality becomes available.

7. BUSINESS INFORMATION
The business information section establishes the vendor's legal or operating identity.
7.1 Business Profile
Suggested fields:
Registered business name, where applicable.
Trading name.
Business type.
Business description.
Year established, if collected.
Primary business category.
Website, if available.
Business email.
Business phone number.
7.2 Business Type
Possible values:
Sole Proprietorship.
Partnership.
Limited Liability Partnership.
Private Limited Company.
Other legally supported business type.
The exact options and required documents should be configured according to applicable requirements.
7.3 Business Address
Collect:
Address line.
Locality.
City.
State.
PIN code.
Country.
The registered address and operational shop address should be stored separately when they differ.
7.4 Business Description
The vendor may describe:
Furniture categories offered.
Manufacturing capabilities.
Store presence.
Rental services.
Delivery coverage.
Custom furniture services.
Public-facing content should be reviewed according to marketplace policy.

8. AUTHORIZED REPRESENTATIVE DETAILS
The vendor should identify the person authorized to manage the account.
Suggested fields:
Full name.
Designation.
Business email.
Phone number.
Authorization status, where required.
The system should verify contact information through the configured process.
Where additional identity verification is legally or operationally necessary, the required information should be collected securely.
Sensitive identity information must not be displayed on public vendor storefronts.

9. BUSINESS VERIFICATION AND DOCUMENT UPLOADS
The required documentation should depend on business type, marketplace policy, payment-provider requirements and applicable law.
The platform should not require every document from every business indiscriminately.
9.1 Potential Documents
Depending on the vendor's circumstances, the platform may request:
Business registration evidence.
PAN or relevant tax information.
GST registration details, where applicable.
Business address proof.
Authorized representative evidence.
Bank account verification information.
Other documents required for verification or settlement.
The exact requirements must be confirmed before implementation.
9.2 Document Upload
Features:
Upload supported file formats.
Validate file size.
Validate file type.
Display upload progress.
Allow replacement before submission, where permitted.
Display document verification status.
Prevent unauthorized access to uploaded documents.
9.3 Document Status
Each document may have one of the following statuses:
Not Uploaded.
Uploaded.
Under Review.
Approved.
Rejected.
Replacement Required.
Expired, where expiry is relevant.
9.4 Document Rejection
If a document is rejected:
The administrator records the reason.
The vendor receives a notification.
The vendor opens the onboarding application.
The rejected document is identified.
The vendor uploads a replacement.
The document returns to the review queue.
9.5 Document Security
Verification documents must:
Be stored securely.
Be accessible only to authorized personnel.
Be protected from public indexing.
Use secure upload and download mechanisms.
Follow applicable retention requirements.
Documents should not be stored in publicly accessible product-image directories.

10. SHOP AND WAREHOUSE LOCATIONS
A vendor may operate multiple locations.
10.1 Location Registration
Each location may include:
Location name.
Location type.
Address.
City.
State.
PIN code.
Contact information.
Operating hours, if maintained.
Supported product categories.
Delivery capability.
Rental capability.
Location status.
10.2 Location Types
Possible types:
Retail Shop.
Warehouse.
Showroom.
Rental Storage Location.
Fulfilment Centre.
10.3 Multiple Locations
The vendor should be able to register additional locations after initial approval.
The system should track which products and inventory belong to each location where location-level inventory is supported.
10.4 Location Verification
The administrator may:
Approve a location.
Request additional details.
Reject a location.
Suspend a location.
A vendor's approval should not automatically mean that every subsequently added location is verified.

11. SERVICE AREA CONFIGURATION
11.1 Service Areas
Vendors should specify the areas they can serve.
Potential configuration:
Cities.
PIN codes.
Delivery zones.
Rental service zones.
Collection zones.
11.2 Sales Serviceability
The platform should use service-area information to determine whether a vendor can deliver a product to a customer.
11.3 Rental Serviceability
Rental providers should define:
Delivery locations.
Collection locations.
Rental availability by city.
Any location-specific restrictions.
Rental serviceability must be validated against the selected rental dates and inventory.
11.4 Service Area Changes
If a vendor adds or removes a service area:
Update the vendor configuration.
Recalculate the relevant product availability.
Apply the change to future transactions.
Preserve existing confirmed orders and bookings according to policy.

12. MARKETPLACE AGREEMENT AND APPLICATION SUBMISSION
12.1 Marketplace Agreement
Before submission, the vendor should review the applicable agreements.
Topics may include:
Marketplace participation.
Commission and fees.
Product listing standards.
Product authenticity.
Pricing responsibilities.
Inventory accuracy.
Order fulfilment.
Delivery requirements.
Rental terms, where applicable.
Return and refund responsibilities.
Customer data protection.
Prohibited products.
Dispute resolution.
Suspension and termination.
The final agreement must be approved by the business and reviewed for applicable legal requirements.
12.2 Application Review
Before submission, the vendor should see:
Completed sections.
Missing fields.
Missing documents.
Selected business model.
Registered locations.
Service areas.
Agreement acceptance.
12.3 Application Submission
After submission:
Validate the complete application.
Save the application.
Assign an application reference.
Record the submission time.
Lock submitted fields where required, while allowing controlled corrections.
Set the application to the review status.
Notify the vendor.
Add the application to the administrator review queue.

13. VENDOR APPLICATION STATUS AND WORKFLOW
13.1 Application Statuses
Recommended statuses:
Status
Meaning
Draft
Vendor has started but not submitted
Pending Verification
Required verification is incomplete
Submitted
Application is ready for review
Under Review
Administrator is reviewing the application
More Information Required
Vendor must provide additional information
Resubmitted
Vendor has corrected and resubmitted information
Approved
Vendor has passed the required approval process
Rejected
Application was not approved
Suspended
Existing vendor's marketplace access is temporarily restricted
Deactivated
Vendor account is no longer active

The application status and vendor account status should be separate fields because they represent different concepts.
13.2 Request for More Information
The administrator may request corrections.
The vendor should:
Receive a notification.
View the exact missing or rejected fields.
Update the relevant information.
Upload replacement documents.
Resubmit the application.
The system should preserve the previous review history.
13.3 Approval
After approval:
Mark the vendor as approved.
Record the administrator and timestamp.
Enable the permitted vendor dashboard modules.
Notify the vendor.
Allow the vendor to complete remaining setup.
Enable product submission.
Approval should not automatically publish every product if listing review is separately required.
13.4 Rejection
If rejected:
Record the reason.
Notify the vendor.
Explain whether reapplication is permitted.
Preserve the application history.
13.5 Suspension
If an approved vendor is suspended:
Block new transactions according to policy.
Restrict listing publication.
Restrict affected dashboard actions.
Preserve historical transactions.
Continue processing outstanding customer obligations.
Notify the vendor according to the applicable procedure.
Suspension must not silently erase existing orders, rental bookings, payment records or customer support history.

14. VENDOR ACCOUNT ACTIVATION
After approval, the vendor enters the activation stage.
14.1 Activation Checklist
Potential checklist items:
Complete business profile.
Verify contact information.
Complete required payment-provider onboarding.
Configure shop locations.
Configure service areas.
Configure delivery arrangements.
Configure rental policies, if applicable.
Add the first product.
Review marketplace policies.
14.2 Activation Conditions
The platform should define which items are mandatory before:
Publishing products.
Accepting orders.
Accepting rental bookings.
Receiving settlements.
A vendor may be approved but not yet operational.
14.3 Vendor Dashboard Access
Once access is granted, the vendor can view:
Application status.
Onboarding checklist.
Profile completion.
Product management.
Inventory.
Orders.
Rental bookings, if enabled.
Financial summaries, where permitted.
Notifications.
Support.

15. VENDOR DASHBOARD
Suggested route:
/vendor-dashboard
The dashboard should provide a summary of the vendor's marketplace activities.
15.1 Dashboard Metrics
Potential metrics:
Active listings.
Draft listings.
Pending product approvals.
Available inventory.
New orders.
Orders awaiting fulfilment.
Active rental bookings.
Upcoming deliveries.
Upcoming rental collections.
Gross sales.
Rental revenue.
Commission deductions.
Pending settlements.
Each metric must use clearly defined business calculations.
15.2 Recent Activity
Display:
Recent orders.
Recent rental bookings.
Product approval updates.
Inventory warnings.
Payment updates.
Settlement updates.
Account notifications.
15.3 Quick Actions
Potential actions:
Add Product.
Add Rental Listing.
Update Inventory.
View Orders.
View Rentals.
Manage Locations.
View Earnings.
Contact Support.
Only actions permitted for the vendor's account status should be enabled.

16. VENDOR PRODUCT MANAGEMENT
16.1 Product Creation
The vendor should be able to create a listing with:
Product name.
Category.
Subcategory.
Description.
Images.
Specifications.
Dimensions.
Material.
Colour.
SKU.
Selling price.
Original price, where applicable.
Inventory.
Location.
Delivery details.
Warranty information, where applicable.
The exact fields should depend on the product category.
16.2 Product Listing Types
A listing may be configured as:
For Sale.
For Rent.
For Sale and Rent, where the inventory model supports both.
Sale and rental pricing must be separate.
16.3 Product Variants
Where applicable, support:
Colour variants.
Size variants.
Material variants.
Configuration variants.
Inventory and pricing must be maintained correctly for each variant.
16.4 Product Images
Features:
Multiple images.
Image ordering.
Main image selection.
File validation.
Image preview.
Image removal.
Secure upload handling.
16.5 Product Draft and Submission
Recommended product statuses:
Draft.
Submitted.
Under Review.
Changes Required.
Approved.
Published.
Rejected.
Unpublished.
Suspended.
16.6 Listing Approval
The marketplace may require approval before publication.
If changes are required:
Display the review comments.
Allow the vendor to update the listing.
Resubmit it for review.
16.7 Product Editing
When a vendor edits a published product, the system should determine whether the change requires reapproval.
Examples of potentially sensitive changes:
Product identity.
Category.
Major specifications.
Price.
Rental terms.
The exact policy should be configurable.

17. VENDOR INVENTORY MANAGEMENT
17.1 Inventory Overview
Display:
Product.
SKU.
Location.
Total quantity.
Available quantity.
Reserved quantity.
Sold quantity, where tracked.
Inventory status.
17.2 Stock Updates
Vendors should be able to update quantities within their permissions.
The backend must validate inventory changes and preserve transaction integrity.
17.3 Multi-Location Inventory
Where supported, each product's stock should be associated with a shop or warehouse.
The platform should not treat inventory stored in one city as automatically available in every other city.
17.4 Inventory Alerts
Potential alerts:
Low stock.
Out of stock.
Inventory discrepancy.
Product unavailable.
Rental inventory unavailable for requested dates.
17.5 Sale and Rental Inventory
The platform must define whether:
Sale and rental inventory are separate pools, or
A shared physical inventory can be allocated to sale or rental under controlled rules.
The application must not permit the same physical unit to be sold and simultaneously committed to an overlapping rental.

18. VENDOR RENTAL MANAGEMENT
Rental providers and hybrid vendors require additional controls.
18.1 Rental Listing Configuration
Fields may include:
Product.
Rental price.
Billing period.
Minimum duration.
Maximum duration, if configured.
Security deposit.
Delivery charges.
Collection charges.
Rental terms.
Service areas.
Available quantity.
Preparation time.
Maintenance requirements.
18.2 Availability Management
Vendors should be able to view:
Available inventory.
Confirmed bookings.
Upcoming bookings.
Active rentals.
Maintenance periods.
Returns awaiting inspection.
18.3 Rental Booking Management
Potential actions:
View booking.
Confirm or reject a booking where policy permits.
Prepare furniture.
Schedule delivery.
Record delivery completion.
Review extension requests.
Schedule collection.
Record return condition.
A vendor must not be able to change a customer's agreed rental price or terms without the required authorization and customer consent.
18.4 Return and Inspection
Providers should be able to:
Record collection.
Record inspection findings.
Upload appropriate evidence.
Propose permitted deductions.
Submit settlement information for review.
Where required, a separate authorized administrator or finance user should approve financial deductions.

19. VENDOR ORDER MANAGEMENT
19.1 Order List
Display:
Order number.
Order date.
Products.
Quantities.
Customer delivery area, as needed.
Order value relevant to the vendor.
Payment status.
Fulfilment status.
Customer personal information should be exposed only to the extent required to fulfil the order.
19.2 Order Detail
Display:
Relevant order items.
Product variants.
Delivery instructions.
Fulfilment requirements.
Order status.
Return or cancellation information.
Applicable financial information.
19.3 Order Workflow
Possible workflow:
Order received.
Payment verified or applicable payment terms confirmed.
Vendor accepts the order where required.
Inventory is allocated.
Product is prepared.
Delivery is scheduled.
Product is dispatched.
Product is delivered.
Order fulfilment is completed.
The exact workflow must reflect the selected payment and fulfilment model.
19.4 Order Rejection
If the vendor cannot fulfil an order:
Record the reason.
Notify the authorized operations team.
Initiate the appropriate customer communication.
Process cancellation and refunds according to policy.
Update inventory reservations.
19.5 Multi-Vendor Orders
A customer checkout may contain items from multiple vendors.
The platform must maintain vendor-specific order items or fulfilment groups so that each vendor can see and manage only its relevant items.
One vendor must not be able to cancel or alter another vendor's items.

20. DELIVERY AND COLLECTION OPERATIONS
20.1 Vendor Delivery Configuration
Vendors may configure:
Delivery areas.
Delivery fees.
Available delivery slots.
Delivery lead times.
Installation availability.
Pickup availability, if supported.
These settings must comply with marketplace rules.
20.2 Delivery Workflow
Order or rental booking is confirmed.
Delivery requirements are validated.
Delivery is scheduled.
Vendor or operations team prepares the item.
Delivery is assigned.
Item is dispatched.
Delivery outcome is recorded.
Customer receives the relevant notification.
20.3 Failed Delivery
The system should record:
Failure reason.
Responsible party, where known.
Rescheduling details.
Applicable charges, if permitted.
Customer notification.
Updated order status.
20.4 Rental Collection
For rental items, the vendor should be able to view and manage collection requests according to the configured workflow.
Collection and return statuses should remain distinct from ordinary sales delivery statuses.

21. COMMISSION MANAGEMENT
21.1 Commission Policy
The platform must define the commission model for:
Furniture sales.
Furniture rentals.
Different product categories, if needed.
Different vendor plans, if applicable.
Potential models:
Percentage of eligible transaction value.
Fixed transaction fee.
Category-specific percentage.
Agreed hybrid arrangement.
21.2 Commission Calculation
A general calculation may be:
Platform Commission = Eligible Commission Base × Configured Commission Rate
The commission base must be explicitly defined.
For example, the policy must clarify whether commission applies to:
Product price.
Discounted product price.
Delivery fees.
Taxes.
Rental charges.
Additional approved charges.
Refundable security deposits should not automatically be counted as earned revenue.
21.3 Commission Display
Vendors may view:
Gross transaction amount.
Eligible commission base.
Commission amount.
Other applicable fees.
Refund adjustments.
Net vendor earnings.
21.4 Commission Adjustments
The system should support adjustments for:
Cancellations.
Refunds.
Partial refunds.
Order corrections.
Approved financial adjustments.
Each adjustment must be traceable.

22. VENDOR PAYOUTS AND SETTLEMENTS
22.1 Vendor Settlement Overview
Display:
Pending earnings.
Eligible balance.
Pending payout.
Completed payout.
Failed payout.
Refund adjustments.
22.2 Payout Eligibility
A transaction may become eligible for settlement after the configured conditions are satisfied.
Possible conditions:
Payment successfully collected.
Order delivered.
Applicable return or dispute period completed.
Required verification completed.
No blocking dispute.
Settlement rules satisfied.
Rental settlements may follow different rules from sales settlements.
22.3 Payout Workflow
Transaction becomes eligible.
Commission and adjustments are calculated.
Settlement amount is recorded.
Finance or an automated process authorizes the payout.
Payment provider processes the settlement.
Payout result is recorded.
Vendor is notified.
Reconciliation records are updated.
22.4 Payout Failure
If a payout fails:
Record the failure reason.
Preserve the outstanding payable balance.
Notify the authorized finance team.
Permit controlled retry.
Avoid duplicate payments.
22.5 Vendor Financial Reports
Reports may include:
Sales revenue.
Rental revenue.
Commission.
Refunds.
Fees.
Adjustments.
Payouts.
Outstanding balances.

23. RETURNS, CANCELLATIONS AND DISPUTES
23.1 Sales Returns
Vendors should receive the relevant return request details and respond according to marketplace policy.
The marketplace must define whether:
Returns are centrally approved.
Vendors approve eligible returns.
Certain categories have special rules.
23.2 Rental Returns
Vendors should manage:
Collection.
Inspection.
Condition reports.
Proposed damage deductions.
Return completion.
23.3 Dispute Management
Potential disputes:
Vendor cannot fulfil order.
Product differs from listing.
Product is damaged.
Delivery is delayed.
Customer disputes rental damage.
Deposit refund is disputed.
Vendor disputes commission or payout.
23.4 Dispute Workflow
Dispute is submitted.
Relevant transaction is linked.
Evidence is collected.
Authorized staff review the case.
Decision and any financial adjustment are recorded.
Customer and vendor receive appropriate notifications.
The case is closed or escalated.

24. VENDOR PERFORMANCE AND COMPLIANCE
24.1 Performance Metrics
Potential metrics:
Order acceptance rate.
Cancellation rate.
On-time delivery rate.
Return rate.
Customer rating.
Customer complaints.
Rental return compliance.
Inventory accuracy.
Response time.
Metrics must be calculated from reliable recorded events.
24.2 Vendor Warnings
The system may issue warnings for:
Repeated cancellations.
Misleading product listings.
Inventory inaccuracies.
Poor fulfilment performance.
Policy violations.
Unresolved complaints.
24.3 Suspension
Authorized administrators may suspend a vendor based on defined policy.
Suspension should:
Prevent new activity according to policy.
Preserve historical transactions.
Protect customers with active orders or rentals.
Maintain access for authorized resolution activities.
Record the reason and audit history.
24.4 Reactivation
Reactivation may require:
Corrective action.
Updated documentation.
Review by authorized staff.
Formal approval.

25. ADMIN VENDOR MANAGEMENT
The administrator needs a dedicated vendor management module.
25.1 Vendor Listing
Display:
Vendor ID.
Business name.
Business type.
Business model.
Primary city.
Application status.
Account status.
Verification status.
Registration date.
25.2 Search and Filters
Filter by:
Application status.
Vendor status.
City.
Business model.
Verification status.
Registration date.
Product count.
Sales or rental activity.
25.3 Vendor Details
Authorized administrators should be able to view:
Business information.
Representative details.
Verification documents.
Shop locations.
Service areas.
Products.
Rental listings.
Orders.
Rental bookings.
Commission configuration.
Payout history.
Support cases.
Audit logs.
Sensitive documents and financial details must be permission-protected.
25.4 Administrative Actions
Depending on permissions:
Approve application.
Request information.
Reject application.
Approve or suspend a location.
Approve or reject listings.
Suspend vendor.
Reactivate vendor.
Configure commission policy.
Review settlements.
Handle disputes.
Sensitive actions should require a recorded reason and appropriate authorization.

26. VENDOR NOTIFICATIONS
Notifications should cover the full vendor lifecycle.
26.1 Onboarding Notifications
Registration completed.
Contact verification required.
Application submitted.
Application under review.
Additional information requested.
Document rejected.
Application approved.
Application rejected.
26.2 Product Notifications
Product submitted.
Product approved.
Product rejected.
Changes required.
Listing unpublished.
Listing suspended.
26.3 Order Notifications
New order.
Order cancellation.
Return request.
Delivery issue.
Customer complaint.
26.4 Rental Notifications
New rental booking.
Booking cancellation.
Extension request.
Collection request.
Return inspection required.
Deposit settlement update.
26.5 Financial Notifications
Transaction eligible for settlement.
Payout initiated.
Payout completed.
Payout failed.
Commission adjustment.
Refund adjustment.
Notifications should be triggered by verified backend events and should not disclose sensitive data.

27. PROPOSED ROUTE STRUCTURE
The following routes are proposed. They must be reconciled with the existing Next.js project before implementation.
Public Vendor Routes
Route
Purpose
/partner-with-us
Marketplace information
/vendors/register
Vendor registration
/vendor-login
Vendor login
/vendor-application-status
Secure application status
/vendors/[slug]
Public vendor storefront

Vendor Portal Routes
Route
Purpose
/vendor-dashboard
Vendor overview
/vendor-dashboard/onboarding
Onboarding checklist
/vendor-dashboard/profile
Business profile
/vendor-dashboard/locations
Shop and warehouse management
/vendor-dashboard/service-areas
Delivery and rental coverage
/vendor-dashboard/products
Product management
/vendor-dashboard/products/new
Create product
/vendor-dashboard/inventory
Inventory management
/vendor-dashboard/orders
Sales order management
/vendor-dashboard/rentals
Rental booking management
/vendor-dashboard/rentals/products
Rental listing management
/vendor-dashboard/deliveries
Delivery operations
/vendor-dashboard/returns
Return management
/vendor-dashboard/earnings
Earnings overview
/vendor-dashboard/payouts
Settlement history
/vendor-dashboard/notifications
Vendor notifications
/vendor-dashboard/support
Vendor support

Admin Routes
Route
Purpose
/admin/vendors
Vendor directory
/admin/vendors/applications
Application review
/admin/vendors/[id]
Vendor details
/admin/vendors/documents
Verification management
/admin/vendors/locations
Vendor location review
/admin/vendor-products
Vendor listing moderation
/admin/vendor-orders
Marketplace order operations
/admin/rental-providers
Rental provider management
/admin/commissions
Commission configuration
/admin/vendor-payouts
Vendor settlement management
/admin/vendor-disputes
Vendor-related disputes
/admin/vendor-reports
Marketplace reports


28. PROPOSED DATA MODEL
The final database structure must be designed after auditing the existing backend and database.
28.1 Vendor
Potential fields:
id
business_name
trading_name
business_type
business_model
email
phone
description
application_status
account_status
verification_status
created_at
updated_at
28.2 Vendor User
Potential fields:
id
vendor_id
user_id
role
permissions
status
This allows a business to have multiple authorized staff members.
28.3 Vendor Application
Potential fields:
id
vendor_id
application_reference
submitted_at
review_status
reviewed_by
reviewed_at
review_notes
28.4 Vendor Document
Potential fields:
id
vendor_id
document_type
secure_storage_reference
verification_status
rejection_reason
reviewed_by
reviewed_at
Document contents must be stored securely.
28.5 Vendor Location
Potential fields:
id
vendor_id
location_name
location_type
address
city
state
pin_code
status
28.6 Vendor Service Area
Potential fields:
id
vendor_id
location_id
service_type
city
pin_code
status
28.7 Vendor Product Listing
Potential fields:
id
vendor_id
product_id, if using a shared product catalogue
sku
sale_price
listing_status
approval_status
location_id
28.8 Vendor Rental Listing
Potential fields:
id
vendor_id
product_id, if applicable
rental_price
billing_period
minimum_duration
deposit_rule
availability_reference
listing_status
28.9 Vendor Commission
Potential fields:
id
vendor_id
transaction_type
commission_type
commission_value
effective_from
effective_until
status
28.10 Vendor Settlement
Potential fields:
id
vendor_id
transaction_reference
gross_amount
commission_amount
adjustments
net_amount
settlement_status
payout_reference
28.11 Vendor Audit Log
Potential fields:
id
actor_id
vendor_id
action
entity_type
entity_id
reason
created_at

29. SECURITY AND AUTHORIZATION REQUIREMENTS
29.1 Role-Based Access Control
The system must enforce separate permissions for:
Customers.
Vendors.
Vendor staff.
Vendor managers.
Operations staff.
Finance staff.
Administrators.
Super Admin.
29.2 Vendor Data Isolation
A vendor must not be able to:
View another vendor's private products or inventory records.
View another vendor's customer information.
Modify another vendor's orders.
View another vendor's settlements.
Change another vendor's commission settings.
Approve their own onboarding application.
All these restrictions must be enforced by the backend.
29.3 Document Security
Verification documents must only be accessible to authorized users.
Public vendor storefronts must not expose identity documents, bank account details, private contact information or internal review notes.
29.4 Financial Security
Commission calculations must be server-side.
Payout amounts must not be editable by vendors.
Refunds must follow authorized workflows.
Financial adjustments must be auditable.
Duplicate settlements must be prevented.
Payment-provider responses must be verified.
29.5 Audit Logs
Record important events:
Application submission.
Document review.
Vendor approval.
Vendor suspension.
Product approval.
Commission changes.
Settlement changes.
Refund decisions.

30. VENDOR MARKETPLACE ACCEPTANCE CRITERIA
Registration and Onboarding
Vendors can register.
Required contact verification works.
Business model selection works.
Required business details can be entered.
Documents can be uploaded securely.
Applications can be submitted.
Application status is visible to authorized users.
Approval
Administrators can approve or reject applications.
Additional information can be requested.
Vendors receive status notifications.
Unapproved vendors cannot publish listings.
Review history is preserved.
Vendor Dashboard
Vendors can manage their own business profiles.
Vendors can manage authorized locations.
Vendors can configure service areas.
Vendors can manage permitted products and inventory.
Vendors can view their own orders and rentals.
Vendors can view their own financial records.
Marketplace Sales
Approved products can be published.
Vendor attribution is accurate.
Inventory is validated.
Vendor-specific fulfilment is supported.
Unauthorized vendors cannot access another vendor's records.
Rentals
Approved providers can publish rental listings.
Rental pricing and availability are configured.
Booking dates are validated.
Rental returns and inspection workflows are traceable.
Deposit settlement follows approved rules.
Finance
Commission calculations follow configured policies.
Refunds and adjustments are recorded.
Settlement eligibility is defined.
Payout failures are handled safely.
Financial reports reconcile with transactions.
Security
Role permissions are enforced server-side.
Sensitive documents remain private.
Financial actions are permission-protected.
Important actions are recorded in audit logs.

31. IMPLEMENTATION ROADMAP
Phase 1 — Existing Project Audit
Review current Next.js routes.
Review authentication and role handling.
Inspect backend APIs and database models.
Identify existing product, order, and rental capabilities.
Map reusable components.
Document missing functionality.
Phase 2 — Vendor Registration and Onboarding
Partner With Us page.
Registration.
Contact verification.
Business profile.
Document upload.
Shop locations.
Service areas.
Application submission.
Application status tracking.
Phase 3 — Administrative Approval
Application review queue.
Document verification.
Request-for-information workflow.
Approval and rejection.
Vendor status management.
Notifications and audit logs.
Phase 4 — Vendor Dashboard
Business profile.
Location management.
Product management.
Inventory.
Sales orders.
Rental listings.
Rental bookings.
Phase 5 — Customer Marketplace Integration
Vendor storefronts.
Vendor product attribution.
Location-aware product availability.
Multi-vendor shopping.
Vendor-specific fulfilment.
Customer-facing rental listings.
Phase 6 — Marketplace Finance
Commission rules.
Settlement records.
Refund adjustments.
Payout integration.
Finance reporting.
Phase 7 — Operational Workflows
Delivery management.
Rental collection.
Return inspections.
Disputes.
Customer support.
Vendor performance.
Phase 8 — Production Readiness
Security testing.
Role-isolation testing.
Payment testing.
Inventory concurrency testing.
End-to-end onboarding tests.
Responsive UI testing.
Performance validation.
Monitoring and audit validation.

32. FINAL VENDOR ONBOARDING FLOW
The complete onboarding workflow is:
Partner With Us → Register → Verify Contact → Select Sales/Rental Model → Enter Business Details → Add Authorized Representative → Add Shop Locations → Configure Service Areas → Upload Required Documents → Accept Marketplace Agreement → Submit Application → Administrator Review → Request Corrections if Necessary → Approval → Complete Activation Checklist → Create Listings → Listing Review → Publish Listings → Receive Sales Orders or Rental Bookings → Fulfil Transactions → Receive Eligible Settlements
Every transition must have:
A defined status.
An authorized actor.
Required validation.
Appropriate notification.
A recorded timestamp.
An audit trail where necessary.

33. IMPORTANT IMPLEMENTATION NOTES
This document defines the proposed marketplace functionality; it does not confirm that these modules are already implemented.
The current codebase, database, authentication system, and backend APIs must be audited before development.
Existing customer-facing features should be reused wherever appropriate.
Vendor routes and permissions must not conflict with customer or administrator routes.
Vendor approval and product approval must remain separate if the business requires both.
Marketplace financial calculations must be implemented and verified on the backend.
Rental deposits must not automatically be treated as earned revenue.
All vendor records and financial information must be isolated by authorization rules.
Commission rates, required documents, settlement timelines, return rules, and rental policies must be confirmed by the business before they are finalized in code.
The current website design, assets, and working functionality must be preserved unless a change is explicitly required.
End of Vendor Marketplace Functional Documentation.

